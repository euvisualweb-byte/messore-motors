// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

const onScroll = () => navbar.classList.toggle('is-scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const setMenu = (open) => {
    navMenu.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', open);
    navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    document.body.style.overflow = open ? 'hidden' : '';
};

navToggle.addEventListener('click', () => setMenu(!navMenu.classList.contains('is-open')));
navMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
window.addEventListener('resize', () => { if (window.innerWidth > 768) setMenu(false); });

// ===== BUSCADOR DE CONCESIONARIOS =====
// Qué se busca en el mapa. Cambialo si querés otra marca o tu propio concesionario.
const DEALER_QUERY = 'concesionario Audi';

const dealerModal = document.createElement('div');
dealerModal.className = 'dealer-modal';
dealerModal.hidden = true;
dealerModal.setAttribute('role', 'dialog');
dealerModal.setAttribute('aria-modal', 'true');
dealerModal.setAttribute('aria-labelledby', 'dealerTitle');
dealerModal.innerHTML = `
    <div class="dealer-modal__backdrop" data-close></div>
    <div class="dealer-modal__panel">
        <div class="dealer-modal__head">
            <h2 class="dealer-modal__title" id="dealerTitle">Buscar concesionario más cercano</h2>
            <button class="dealer-modal__close" type="button" aria-label="Cerrar" data-close>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>
            </button>
        </div>
        <form class="dealer-modal__form" id="dealerModalForm" role="search">
            <label for="dealerModalQuery" class="visually-hidden">Ciudad, barrio o dirección</label>
            <input id="dealerModalQuery" type="search" placeholder="Ingresá tu ciudad, barrio o dirección" autocomplete="off">
            <button class="btn btn--light" type="submit">Buscar</button>
            <button class="btn btn--outline dealer-modal__locate" id="dealerLocate" type="button">
                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><circle cx="12" cy="12" r="7"/></svg>
                Usar mi ubicación
            </button>
        </form>
        <p class="dealer-modal__status" id="dealerStatus" aria-live="polite"></p>
        <div class="dealer-modal__map">
            <iframe id="dealerMap" title="Mapa de concesionarios" loading="lazy" referrerpolicy="no-referrer-when-downgrade" hidden></iframe>
            <p class="dealer-modal__empty" id="dealerEmpty">Ingresá una ubicación o usá tu ubicación actual para ver los concesionarios cercanos.</p>
        </div>
        <a class="dealer-modal__external" id="dealerExternal" target="_blank" rel="noopener" hidden>Abrir en Google Maps ↗</a>
    </div>`;
document.body.append(dealerModal);

const dealerMap = document.getElementById('dealerMap');
const dealerEmpty = document.getElementById('dealerEmpty');
const dealerExternal = document.getElementById('dealerExternal');
const dealerStatus = document.getElementById('dealerStatus');
const dealerModalQuery = document.getElementById('dealerModalQuery');
let dealerLastFocus = null;

function showDealers(where) {
    const q = `${DEALER_QUERY} near ${where}`;
    dealerMap.src = `https://www.google.com/maps?q=${encodeURIComponent(q)}&hl=es&output=embed`;
    dealerMap.hidden = false;
    dealerEmpty.hidden = true;
    dealerExternal.href = `https://www.google.com/maps/search/${encodeURIComponent(q)}`;
    dealerExternal.hidden = false;
}

function openDealerModal(query = '') {
    dealerLastFocus = document.activeElement;
    setMenu(false);
    dealerModal.hidden = false;
    document.body.style.overflow = 'hidden';
    dealerModalQuery.value = query;
    dealerStatus.textContent = '';
    if (query) showDealers(query);
    dealerModalQuery.focus();
}

function closeDealerModal() {
    if (dealerModal.hidden) return;
    dealerModal.hidden = true;
    document.body.style.overflow = '';
    dealerLastFocus?.focus();
}

document.getElementById('dealerSearch').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('dealerQuery');
    openDealerModal(input.value.trim());
    input.value = '';
});
document.getElementById('dealerSearchBtn').addEventListener('click', () => openDealerModal());

document.getElementById('dealerModalForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const value = dealerModalQuery.value.trim();
    if (!value) { dealerModalQuery.focus(); return; }
    dealerStatus.textContent = '';
    showDealers(value);
});

document.getElementById('dealerLocate').addEventListener('click', () => {
    if (!navigator.geolocation) {
        dealerStatus.textContent = 'Tu navegador no permite obtener la ubicación. Ingresala manualmente.';
        return;
    }
    dealerStatus.textContent = 'Obteniendo tu ubicación…';
    navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
            dealerStatus.textContent = '';
            dealerModalQuery.value = 'Mi ubicación';
            showDealers(`${coords.latitude.toFixed(5)},${coords.longitude.toFixed(5)}`);
        },
        () => {
            dealerStatus.textContent = 'No pudimos obtener tu ubicación. Revisá los permisos o ingresala manualmente.';
        },
        { enableHighAccuracy: false, timeout: 10000 },
    );
});

dealerModal.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeDealerModal(); });
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDealerModal();
    // Mantener el foco dentro del panel
    if (e.key === 'Tab' && !dealerModal.hidden) {
        const focusables = [...dealerModal.querySelectorAll('button, input, a[href]:not([hidden]), iframe:not([hidden])')];
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
});

// ===== CARRUSEL (solo en la home) =====
const hero = document.getElementById('hero');
if (hero) initCarousel();

function initCarousel() {
const slides = [...hero.querySelectorAll('.hero__slide')];
const indicatorsWrap = document.getElementById('indicators');
const DURATION = 6000;
let current = 0;
let timer = null;
let remaining = DURATION;
let startedAt = 0;

hero.style.setProperty('--duration', `${DURATION}ms`);

const indicators = slides.map((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'hero__indicator';
    btn.setAttribute('aria-label', `Ir a la imagen ${i + 1}`);
    btn.innerHTML = '<span></span>';
    btn.addEventListener('click', () => goTo(i));
    indicatorsWrap.appendChild(btn);
    return btn;
});

function schedule(ms) {
    clearTimeout(timer);
    startedAt = Date.now();
    remaining = ms;
    timer = setTimeout(() => goTo(current + 1), ms);
}

function goTo(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('is-active', i === current));
    indicators.forEach((ind, i) => {
        ind.classList.remove('is-active');
        ind.classList.toggle('is-done', i < current);
        ind.removeAttribute('aria-current');
    });
    // reflow para reiniciar la animación de progreso
    void indicators[current].offsetWidth;
    indicators[current].classList.add('is-active');
    indicators[current].setAttribute('aria-current', 'true');
    hero.classList.remove('is-paused');
    schedule(DURATION);
}

function pause() {
    if (hero.classList.contains('is-paused')) return;
    clearTimeout(timer);
    remaining -= Date.now() - startedAt;
    hero.classList.add('is-paused');
}

function resume() {
    if (!hero.classList.contains('is-paused')) return;
    hero.classList.remove('is-paused');
    schedule(Math.max(remaining, 0));
}

document.getElementById('prevSlide').addEventListener('click', () => goTo(current - 1));
document.getElementById('nextSlide').addEventListener('click', () => goTo(current + 1));

// Pausa al pasar el mouse (desktop) o si la pestaña no está visible
hero.addEventListener('mouseenter', pause);
hero.addEventListener('mouseleave', resume);
document.addEventListener('visibilitychange', () => (document.hidden ? pause() : resume()));

// Teclado
document.addEventListener('keydown', (e) => {
    if (navMenu.classList.contains('is-open') || !dealerModal.hidden) return;
    if (e.target.closest('input, textarea, select')) return;
    if (e.key === 'ArrowLeft') goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
});

// Swipe en mobile
let touchX = null;
hero.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
hero.addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) goTo(current + (dx < 0 ? 1 : -1));
    touchX = null;
});

goTo(0);
}

// ===== MODELOS =====
// Si falta la foto de un modelo, se oculta y queda el fondo de reemplazo
document.querySelectorAll('.model-card__img').forEach((img) => {
    const markMissing = () => img.classList.add('is-missing');
    if (img.complete && img.naturalWidth === 0) markMissing();
    else img.addEventListener('error', markMissing);
});
