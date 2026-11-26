// ===== PÁGINA DE DETALLE DE MODELO =====
// El hero es un carrusel manual con todos los modelos de js/modelos-data.js.
// Al cambiar de modelo se actualiza el contenido de la página y la URL (?id=...).
(() => {
    const $ = (id) => document.getElementById(id);
    const ids = Object.keys(MODELOS);
    const total = ids.length;
    let current = ids.indexOf(new URLSearchParams(location.search).get('id'));

    if (current === -1) {
        $('modelPage').hidden = true;
        $('notFound').hidden = false;
        document.title = 'Modelo no encontrado | MESSORE MOTORS';
        return;
    }

    const el = (tag, className, text) => {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text !== undefined) node.textContent = text;
        return node;
    };

    // ---------- Construcción del carrusel ----------
    const slides = ids.map((id, i) => {
        const m = MODELOS[id];
        const slide = el('div', 'model-hero__slide');
        slide.setAttribute('role', 'group');
        slide.setAttribute('aria-roledescription', 'slide');
        slide.setAttribute('aria-label', `${i + 1} de ${total}: ${m.nombre}`);

        const img = el('img', 'model-hero__img');
        img.src = m.imagen;
        img.alt = m.nombre;
        if (i !== current) img.loading = 'lazy';

        const content = el('div', 'model-hero__content');
        content.append(
            el('span', 'model-hero__tag', m.tipo),
            el('p', 'model-hero__title', m.nombre),
        );
        if (m.eslogan) content.append(el('p', 'model-hero__slogan', m.eslogan));
        if (m.precio) content.append(el('p', 'model-hero__price', m.precio));
        if (m.precioNota) content.append(el('p', 'model-hero__note', m.precioNota));

        const actions = el('div', 'hero__actions');
        const consult = el('a', 'btn btn--light', 'Consultar');
        consult.href = '#consultar';
        const buy = el('a', 'btn btn--outline', 'Comprar');
        buy.href = 'index.html#comprar';
        actions.append(consult, buy);
        content.append(actions);

        slide.append(img, content);
        $('mSlides').append(slide);
        return slide;
    });

    const tabs = ids.map((id, i) => {
        const tab = el('button', 'model-hero__tab', MODELOS[id].nombre);
        tab.type = 'button';
        tab.addEventListener('click', () => goTo(i));
        $('mTabs').append(tab);
        return tab;
    });

    // ---------- Navegación ----------
    function goTo(index, { initial = false } = {}) {
        current = (index + total) % total;
        const id = ids[current];
        const m = MODELOS[id];

        slides.forEach((s, i) => {
            const active = i === current;
            s.classList.toggle('is-active', active);
            s.inert = !active;
        });
        tabs.forEach((t, i) => {
            if (i === current) t.setAttribute('aria-current', 'true');
            else t.removeAttribute('aria-current');
        });

        // Mantener visible la pestaña activa (mobile)
        const tabsWrap = $('mTabs');
        const tab = tabs[current];
        tabsWrap.scrollTo({
            left: tab.offsetLeft - (tabsWrap.clientWidth - tab.offsetWidth) / 2,
            behavior: initial ? 'auto' : 'smooth',
        });

        $('mPageTitle').textContent = m.nombre;
        document.title = `${m.nombre} | MESSORE MOTORS`;
        if (!initial) {
            try { history.replaceState(null, '', `?id=${id}`); } catch { /* file:// en algunos navegadores */ }
        }

        renderDetails(m, initial);
    }

    $('mPrev').addEventListener('click', () => goTo(current - 1));
    $('mNext').addEventListener('click', () => goTo(current + 1));

    document.addEventListener('keydown', (e) => {
        if ($('navMenu').classList.contains('is-open') || !dealerModal.hidden) return;
        if (e.target.closest('input, textarea, select')) return;
        if (e.key === 'ArrowLeft') goTo(current - 1);
        if (e.key === 'ArrowRight') goTo(current + 1);
    });

    // Swipe en mobile
    let touchX = null;
    $('mHero').addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
    $('mHero').addEventListener('touchend', (e) => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 50) goTo(current + (dx < 0 ? 1 : -1));
        touchX = null;
    });

    // ---------- Contenido debajo del hero ----------
    function renderDetails(m, initial) {
        const reset = (sectionId, listId) => {
            $(sectionId).hidden = true;
            if (listId) $(listId).replaceChildren();
        };
        reset('mStats', 'mStats');
        reset('mIntro', 'mDescription');
        reset('mFeatures', 'mFeaturesList');
        reset('mSpecs', 'mSpecsList');
        reset('mGallery', 'mGalleryGrid');
        reset('mSoon');

        $('mCtaTitle').textContent = `¿Te interesa el ${m.nombre}?`;
        let hasInfo = false;

        // Cifras destacadas
        if (m.destacados?.length) {
            m.destacados.forEach((d) => {
                const item = el('div', 'model-stats__item');
                const value = el('p', 'model-stats__value', d.valor);
                if (d.unidad) value.append(el('span', 'model-stats__unit', ` ${d.unidad}`));
                item.append(value, el('p', 'model-stats__label', d.etiqueta));
                $('mStats').append(item);
            });
            $('mStats').hidden = false;
            hasInfo = true;
        }

        // Descripción
        if (m.descripcion?.length) {
            $('mIntroTitle').textContent = `Sobre el ${m.nombre}`;
            m.descripcion.forEach((p) => $('mDescription').append(el('p', '', p)));
            $('mIntro').hidden = false;
            hasInfo = true;
        }

        // Ventajas
        if (m.ventajas?.length) {
            $('mFeaturesTitle').textContent = m.ventajasTitulo || '¿Por qué elegir este modelo?';
            m.ventajas.forEach((v, i) => {
                const card = el('div', 'model-features__item');
                card.append(
                    el('span', 'model-features__num', String(i + 1).padStart(2, '0')),
                    el('h3', 'model-features__title', v.titulo),
                    el('p', 'model-features__text', v.texto),
                );
                $('mFeaturesList').append(card);
            });
            $('mFeatures').hidden = false;
            hasInfo = true;
        }

        // Ficha técnica
        if (m.especificaciones?.length) {
            m.especificaciones.forEach((s) => {
                const row = el('div', 'model-specs__row');
                row.append(el('dt', '', s.nombre), el('dd', '', s.valor));
                $('mSpecsList').append(row);
            });
            $('mSpecs').hidden = false;
            hasInfo = true;
        }

        // Galería
        if (m.galeria?.length) {
            m.galeria.forEach((src, i) => {
                const img = el('img');
                img.src = src;
                img.alt = `${m.nombre} - imagen ${i + 1}`;
                img.loading = 'lazy';
                $('mGalleryGrid').append(img);
            });
            $('mGallery').hidden = false;
            hasInfo = true;
        }

        if (!hasInfo) $('mSoon').hidden = false;

        // Fundido suave al cambiar de modelo
        if (!initial) {
            const details = $('mDetails');
            details.classList.remove('is-changing');
            void details.offsetWidth;
            details.classList.add('is-changing');
        }
    }

    goTo(current, { initial: true });
})();
