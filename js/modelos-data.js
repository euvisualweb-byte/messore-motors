/*
 * ============================================================
 *  DATOS DE LOS MODELOS
 * ============================================================
 *  Para completar la información de un modelo, rellená los campos.
 *  Las secciones que queden vacías no se muestran en la página.
 *
 *  - eslogan:         frase corta bajo el nombre (opcional)
 *  - precio:          texto libre, ej. 'Desde USD 65.000'
 *  - precioNota:      aclaración chica bajo el precio (opcional)
 *  - ventajas:        "¿Por qué elegir este modelo?" (opcional)
 *                     ej. { titulo: 'Diseño', texto: '...' }
 *  - ventajasTitulo:  título de esa sección (opcional, por defecto
 *                     '¿Por qué elegir este modelo?')
 *  - descripcion:     lista de párrafos
 *  - destacados:      cifras grandes (máx. 4 recomendado)
 *                     ej. { valor: '265', unidad: 'CV', etiqueta: 'Potencia' }
 *  - especificaciones: pares nombre/valor
 *                     ej. { nombre: 'Motor', valor: '2.0 TFSI' }
 *  - galeria:         rutas de imágenes extra, ej. 'img/modelos/q5-interior.jpg'
 * ============================================================
 */
const MODELOS = {
    'q5': {
        nombre: 'Audi SQ5 Sportback',
        tipo: 'SUV Sportback',
        imagen: 'img/modelos/audi-q5.jpg',
        eslogan: 'Deportividad pura con el confort de un SUV de alta gama',
        precio: 'Desde USD 118.600',
        precioNota: 'Precio de lista oficial 0 km en Argentina, sin gastos de flete ni patentamiento.',
        descripcion: [
            'Si buscás un vehículo que combine presencia, lujo y reacciones de un verdadero deportivo, el Audi SQ5 es la máxima expresión de la gama Q5 disponible hoy en el mercado.',
            'Bajo el capó esconde un motor V6 3.0 TFSI de 367 CV y 550 Nm de torque, acoplado a una caja automática S tronic de 7 marchas y la legendaria tracción integral quattro. ¿El resultado? Acelera de 0 a 100 km/h en apenas 4,5 segundos, entregando una respuesta inmediata y un sonido inconfundible en cada aceleración.',
        ],
        destacados: [
            { valor: '367', unidad: 'CV', etiqueta: 'Potencia' },
            { valor: '550', unidad: 'Nm', etiqueta: 'Torque' },
            { valor: '4,5', unidad: 's', etiqueta: '0 a 100 km/h' },
            { valor: 'quattro', etiqueta: 'Tracción integral' },
        ],
        ventajas: [
            { titulo: 'Versatilidad total', texto: 'Confort absoluto para el uso diario o viajes en ruta, pero con suspensión deportiva S y modos de conducción que transforman su carácter con solo tocar un botón.' },
            { titulo: 'Diseño exclusivo', texto: 'Silueta Sportback coupé, faros Matrix LED y traseros OLED, llantas de diseño exclusivo S y un interior con butacas deportivas en cuero.' },
            { titulo: 'Tecnología de punta', texto: 'Pantalla panorámica curvada, tablero digital Audi Virtual Cockpit y asistencias a la conducción de última generación.' },
        ],
        especificaciones: [
            { nombre: 'Motor', valor: 'V6 3.0 TFSI' },
            { nombre: 'Potencia', valor: '367 CV' },
            { nombre: 'Torque', valor: '550 Nm' },
            { nombre: 'Transmisión', valor: 'S tronic automática de 7 marchas' },
            { nombre: 'Tracción', valor: 'quattro integral' },
            { nombre: 'Aceleración 0–100 km/h', valor: '4,5 s' },
            { nombre: 'Suspensión', valor: 'Deportiva S' },
            { nombre: 'Iluminación', valor: 'Matrix LED / traseros OLED' },
        ],
        galeria: [],
    },

    'a3': {
        nombre: 'Audi A3 Sedán',
        tipo: 'Sedán compacto',
        imagen: 'img/modelos/audi-a3.jpg',
        eslogan: 'El sedán compacto más radical y explosivo de su categoría',
        precio: 'Desde USD 110.800',
        precioNota: '',
        descripcion: [
            'Si buscás un auto que combine la elegancia y el uso diario de un sedán cuatro puertas con las prestaciones de un superdeportivo puro, el Audi A3 Sedán es una pieza única en el mercado.',
            'En su corazón late el multipremiado motor 2.5 TFSI de 5 cilindros en línea, capaz de entregar 400 CV y 500 Nm de torque, acompañado por una caja automática S tronic de 7 velocidades y tracción integral quattro con RS Torque Splitter. Con Launch Control activado, se catapulta de 0 a 100 km/h en apenas 3,8 segundos, regalando uno de los sonidos de escape más adictivos de la industria automotriz.',
        ],
        destacados: [
            { valor: '400', unidad: 'CV', etiqueta: 'Potencia' },
            { valor: '500', unidad: 'Nm', etiqueta: 'Torque' },
            { valor: '3,8', unidad: 's', etiqueta: '0 a 100 km/h' },
            { valor: '5', unidad: 'cil.', etiqueta: 'Motor 2.5 TFSI' },
        ],
        ventajasTitulo: '¿Por qué es un auto único?',
        ventajas: [
            { titulo: 'Agilidad quirúrgica', texto: 'El sistema RS Torque Splitter distribuye la potencia de forma activa entre las ruedas traseras, permitiendo una precisión total en curva e incluso un modo específico (RS Torque Rear) para derrapes controlados en pista.' },
            { titulo: 'Estética agresiva y exclusiva', texto: 'Guardabarros ensanchados, parrilla Singleframe en negro brillante, salidas de escape ovaladas RS, llantas de 19 pulgadas y faros Matrix LED con firma lumínica personalizable.' },
            { titulo: 'Interior de competición', texto: 'Butacas deportivas RS tapizadas en cuero Nappa fina, volante deportivo achatado con botones de acceso directo a los modos RS y tablero digital Audi Virtual Cockpit Plus de 12,3" con indicadores de fuerzas G y tiempos de vuelta.' },
        ],
        especificaciones: [
            { nombre: 'Motor', valor: '2.5 TFSI, 5 cilindros en línea' },
            { nombre: 'Potencia', valor: '400 CV' },
            { nombre: 'Torque', valor: '500 Nm' },
            { nombre: 'Transmisión', valor: 'S tronic automática de 7 velocidades' },
            { nombre: 'Tracción', valor: 'quattro con RS Torque Splitter' },
            { nombre: 'Aceleración 0–100 km/h', valor: '3,8 s (con Launch Control)' },
            { nombre: 'Llantas', valor: '19"' },
            { nombre: 'Iluminación', valor: 'Matrix LED con firma personalizable' },
            { nombre: 'Tablero', valor: 'Audi Virtual Cockpit Plus 12,3"' },
            { nombre: 'Butacas', valor: 'Deportivas RS en cuero Nappa' },
        ],
        galeria: [],
    },

    'q3': {
        nombre: 'Audi Q3 Sportback',
        tipo: 'SUV compacto Sportback',
        imagen: 'img/modelos/audi-q3.jfif',
        eslogan: 'El SUV compacto con alma de superdeportivo y 400 CV',
        precio: 'Desde USD 160.500',
        precioNota: '',
        descripcion: [
            'Si buscás un SUV compacto que combine diseño atlético, practicidad diaria y el rendimiento de un verdadero auto de pista, este Audi Q3 es una propuesta inigualable en su categoría.',
            'Bajo el capó incorpora el legendario motor 2.5 TFSI de 5 cilindros en línea, capaz de desarrollar 400 CV y 480 Nm de torque, asociado a una caja automática S tronic de 7 marchas y tracción integral permanente quattro. Gracias a este conjunto mecánico, acelera de 0 a 100 km/h en apenas 4,5 segundos y alcanza una velocidad máxima limitada de 250 km/h, entregando un sonido de escape único en su segmento.',
        ],
        destacados: [
            { valor: '400', unidad: 'CV', etiqueta: 'Potencia' },
            { valor: '480', unidad: 'Nm', etiqueta: 'Torque' },
            { valor: '4,5', unidad: 's', etiqueta: '0 a 100 km/h' },
            { valor: '530', unidad: 'L', etiqueta: 'Baúl (hasta 1.525 L)' },
        ],
        ventajasTitulo: '¿Por qué se destaca en cada detalle?',
        ventajas: [
            { titulo: 'Comportamiento dinámico superior', texto: 'Cuenta con suspensión deportiva adaptativa, dirección progresiva y sistema de frenos de alto rendimiento con pinzas pintadas en rojo (con opción de discos carbocerámicos).' },
            { titulo: 'Presencia imponente', texto: 'Silueta coupé Sportback, parrilla Singleframe en negro brillante, salidas de escape ovaladas dobles, llantas de 21 pulgadas y faros Matrix LED con intermitentes dinámicos.' },
            { titulo: 'Interior tecnológico y funcional', texto: 'Butacas deportivas en cuero Nappa con costuras en contraste, tablero digital Audi Virtual Cockpit Plus, techo panorámico corredizo y un baúl versátil de 530 litros (ampliable hasta 1.525 litros).' },
        ],
        especificaciones: [
            { nombre: 'Motor', valor: '2.5 TFSI, 5 cilindros en línea' },
            { nombre: 'Potencia', valor: '400 CV' },
            { nombre: 'Torque', valor: '480 Nm' },
            { nombre: 'Transmisión', valor: 'S tronic automática de 7 marchas' },
            { nombre: 'Tracción', valor: 'quattro integral permanente' },
            { nombre: 'Aceleración 0–100 km/h', valor: '4,5 s' },
            { nombre: 'Velocidad máxima', valor: '250 km/h (limitada)' },
            { nombre: 'Suspensión', valor: 'Deportiva adaptativa' },
            { nombre: 'Frenos', valor: 'Alto rendimiento, pinzas rojas (opción carbocerámicos)' },
            { nombre: 'Llantas', valor: '21"' },
            { nombre: 'Iluminación', valor: 'Matrix LED con intermitentes dinámicos' },
            { nombre: 'Baúl', valor: '530 L (hasta 1.525 L)' },
        ],
        galeria: [],
    },

    'a5': {
        nombre: 'Audi A5 Sedán',
        tipo: 'Sedán híbrido enchufable',
        imagen: 'img/modelos/audi-a5.jfif',
        eslogan: 'Potencia extrema de 639 CV y tecnología híbrida enchufable',
        precio: 'Desde USD 162.000',
        precioNota: '',
        descripcion: [
            'Si buscás un sedán ejecutivo que combine elegancia absoluta, confort diario y las prestaciones de un superdeportivo de pista, este Audi A5 lleva la ingeniería alemana a otro nivel.',
            'Equipado con un sistema híbrido enchufable (PHEV) de última generación, combina un motor V6 2.9 biturbo naftero con un impulsor eléctrico para desarrollar unos impresionantes 639 CV y 825 Nm de torque. Asociado a una caja automática Tiptronic de 8 velocidades y tracción integral permanente quattro, logra acelerar de 0 a 100 km/h en apenas 3,6 segundos y alcanza una velocidad máxima limitada de 285 km/h.',
        ],
        destacados: [
            { valor: '639', unidad: 'CV', etiqueta: 'Potencia combinada' },
            { valor: '825', unidad: 'Nm', etiqueta: 'Torque' },
            { valor: '3,6', unidad: 's', etiqueta: '0 a 100 km/h' },
            { valor: '84', unidad: 'km', etiqueta: 'Autonomía 100% eléctrica' },
        ],
        ventajasTitulo: '¿Por qué es un vehículo único en su segmento?',
        ventajas: [
            { titulo: 'Doble personalidad', texto: 'Permite circular en modo 100% eléctrico hasta 84 km en ciudad con silencio y eficiencia total, o liberar toda su potencia combinada en ruta con respuesta instantánea.' },
            { titulo: 'Dinámica quirúrgica', texto: 'Incorpora tracción quattro con control dinámico de torque en el eje trasero (Dynamic Torque Control), suspensión deportiva con amortiguación regulable y frenos de alto rendimiento con pinzas rojas.' },
            { titulo: 'Equipamiento de primera clase', texto: 'Llantas de 21 pulgadas, faros Matrix LED, triple pantalla interior con Audi Virtual Cockpit Plus y Head-Up Display, techo panorámico de transparencia regulable, audio Bang & Olufsen 3D y butacas deportivas calefaccionadas, ventiladas y con masaje.' },
        ],
        especificaciones: [
            { nombre: 'Sistema', valor: 'Híbrido enchufable (PHEV)' },
            { nombre: 'Motor', valor: 'V6 2.9 biturbo naftero + eléctrico' },
            { nombre: 'Potencia combinada', valor: '639 CV' },
            { nombre: 'Torque', valor: '825 Nm' },
            { nombre: 'Transmisión', valor: 'Tiptronic automática de 8 velocidades' },
            { nombre: 'Tracción', valor: 'quattro permanente con Dynamic Torque Control' },
            { nombre: 'Aceleración 0–100 km/h', valor: '3,6 s' },
            { nombre: 'Velocidad máxima', valor: '285 km/h (limitada)' },
            { nombre: 'Autonomía eléctrica', valor: 'Hasta 84 km en ciudad' },
            { nombre: 'Suspensión', valor: 'Deportiva con amortiguación regulable' },
            { nombre: 'Llantas', valor: '21"' },
            { nombre: 'Audio', valor: 'Bang & Olufsen 3D' },
        ],
        galeria: [],
    },

    'rs-etron-gt': {
        nombre: 'Audi RS e-tron GT',
        tipo: 'Gran Turismo 100% eléctrico',
        imagen: 'img/modelos/audi-rs-etron-gt.jfif',
        eslogan: 'El Gran Turismo 100% eléctrico más potente de la historia de Audi',
        precio: 'Desde USD 376.000',
        precioNota: '',
        descripcion: [
            'Si buscás un auto que combine la silueta de un coupé cuatro puertas de lujo, tecnología futurista y una aceleración capaz de dejar atrás a los superdeportivos más exclusivos del mundo, el Audi RS e-tron GT está en otra liga.',
            'Impulsado por dos motores eléctricos (uno en cada eje) con tracción integral quattro y caja de dos velocidades, entrega hasta 925 CV (680 kW) en modo Launch Control y más de 1.000 Nm de torque instantáneo (857 CV en su versión RS estándar). El resultado es brutal: acelera de 0 a 100 km/h en apenas 2,5 segundos (3,3 s en la generación previa) y alcanza una velocidad máxima limitada de 250 km/h, acompañado por el exclusivo sonido deportivo digital e-tron Sport Sound.',
        ],
        destacados: [
            { valor: '925', unidad: 'CV', etiqueta: 'Potencia con Launch Control' },
            { valor: '2,5', unidad: 's', etiqueta: '0 a 100 km/h' },
            { valor: '592', unidad: 'km', etiqueta: 'Autonomía (WLTP)' },
            { valor: '18', unidad: 'min', etiqueta: 'Carga del 10% al 80%' },
        ],
        ventajasTitulo: '¿Por qué es un auto fuera de serie?',
        ventajas: [
            { titulo: 'Autonomía y carga ultrarrápida', texto: 'Equipa una batería de iones de litio de 105 kWh (97 kWh netos) con arquitectura de 800 voltios, ofreciendo una autonomía de hasta 592 km (WLTP) y recarga rápida de hasta 320 kW (del 10% al 80% en solo 18 minutos).' },
            { titulo: 'Dinámica de pista', texto: 'Incorpora suspensión neumática activa, dirección en las cuatro ruedas, diferencial trasero bloqueable y opción de frenos carbocerámicos para un paso por curva impecable.' },
            { titulo: 'Diseño y cabina de vanguardia', texto: 'Carrocería esculpida en el túnel de viento con detalles en fibra de carbono, techo panorámico de cristal inteligente, faros Matrix LED con luz láser Audi y butacas deportivas RS en cuero Nappa / Dinamica.' },
        ],
        especificaciones: [
            { nombre: 'Motorización', valor: '2 motores eléctricos (uno por eje)' },
            { nombre: 'Potencia máxima', valor: '925 CV / 680 kW (Launch Control)' },
            { nombre: 'Potencia versión RS estándar', valor: '857 CV' },
            { nombre: 'Torque', valor: 'Más de 1.000 Nm' },
            { nombre: 'Transmisión', valor: '2 velocidades' },
            { nombre: 'Tracción', valor: 'quattro integral' },
            { nombre: 'Aceleración 0–100 km/h', valor: '2,5 s' },
            { nombre: 'Velocidad máxima', valor: '250 km/h (limitada)' },
            { nombre: 'Batería', valor: '105 kWh (97 kWh netos), 800 V' },
            { nombre: 'Autonomía', valor: 'Hasta 592 km (WLTP)' },
            { nombre: 'Carga rápida', valor: 'Hasta 320 kW (10–80% en 18 min)' },
            { nombre: 'Suspensión', valor: 'Neumática activa' },
            { nombre: 'Dirección', valor: 'En las cuatro ruedas' },
            { nombre: 'Iluminación', valor: 'Matrix LED con luz láser' },
        ],
        galeria: [],
    },
};
