// Array de productos del catalogo

const productos = [
    {
        nombre: "Aparador Uspallata",
        descripcion: "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos",
        imagen: "../img/aparador_uspallata.png",
        medidas: "180 × 45 × 75 cm",
        materiales: "Nogal macizo FSC®, herrajes de latón",
        acabado: "Aceite natural ecológico",
        peso: "68 kg",
        capacidad: "6 compartimentos interiores"
    },

    {
        nombre: "Biblioteca Recoleta",
        descripcion: "Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo con elegancia funcional.",
        imagen: "../img/biblioteca_recoleta.png",
        medidas: "100 × 35 × 200 cm",
        materiales: "Estructura de acero, estantes de roble",
        acabado: "Laca mate ecológica",
        capacidad: "45 kg por estante",
        modulares: "5 estantes ajustables"
    },
    {
        nombre: "Butaca Mendoza",
        descripcion: "Butaca tapizada en bouclé Dusty Rose con base de madera de guatambú. El respaldo curvo abraza el cuerpo y ofrece máximo confort, con diseño orgánico que aporta calidez y sofisticación.",
        imagen: "../img/butaca_mendoza.png",
        medidas: "80 × 75 × 85 cm",
        materiales: "Guatambú macizo, tela bouclé",
        acabado: "Cera vegetal, tapizado premium",
        tapizado: "Repelente al agua y manchas",
        confort: "Espuma alta densidad"
    },
    {
        nombre: "Sillón Copacabana",
        descripcion: "Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspirado en la estética brasilera moderna de los 60, combina comodidad excepcional con diseño icónico.",
        imagen: "../img/sillon_copacabana.png",
        medidas: "90 × 85 × 95 cm",
        materiales: "Cuero curtido vegetal, acero pintado",
        acabado: "Cuero anilina premium",
        rotacion: "360° silenciosa y suave",
        garantia: "10 años en estructura"
    },
    {
        nombre: "Mesa de Centro Araucaria",
        descripcion: "Mesa de centro con sobre circular de mármol Patagonia y base de tres patas en nogal. Combina la frialdad del mármol con la calidez de la madera para un diseño minimalista.",
        imagen: "../img/mesa_de_centro_araucaria.png",
        medidas: "90 × 90 × 45 cm",
        materiales: "Mármol Patagonia, patas de nogal",
        acabado: "Mármol pulido, aceite natural en madera",
        peso: "42 kg",
        capacidad: "25 kg distribuidos"
    },
    {
        nombre: "Mesa de Noche Aconcagua",
        descripcion: "Mesa de noche con cajón oculto y repisa inferior en roble certificado FSC®. Ofrece almacenamiento discreto y elegante para objetos personales.",
        imagen: "../img/mesa_de_noche_aconcagua.png",
        medidas: "45 × 35 × 60 cm",
        materiales: "Roble macizo FSC®, herrajes soft-close",
        acabado: "Barniz mate de poliuretano",
        almacenamiento: "1 cajón + repisa inferior",
        caracteristicas: "Cajón con cierre suave"
    },
    {
        nombre: "Cama Neuquén",
        descripcion: "Cama plataforma con cabecero flotante tapizado en lino natural. Su diseño minimalista y sofisticado crea un ambiente de serenidad y elegancia.",
        imagen: "../img/logo.svg.png",
        medidas: "160 × 200 × 90 cm",
        materiales: "Roble macizo FSC®, tapizado lino",
        acabado: "Aceite natural, tapizado premium",
        colchon: "Compatible con colchón 160×200",
        caracteristicas: "Cabecero flotante acolchado"
    },
    {
        nombre: "Sofá Patagonia",
        descripcion: "Sofá de tres cuerpos tapizado en lino Warm Alabaster. Cojines con espuma de alta resiliencia y plumón reciclado para comodidad sostenible.",
        imagen: "../img/sofa_patagonia.png",
        medidas: "220 × 90 × 80 cm",
        estructura: "Madera de eucalipto certificada FSC®",
        tapizado: "Lino 100% natural premium",
        relleno: "Espuma HR + plumón reciclado",
        sostenibilidad: "Materiales 100% reciclables"
    },
    {
        nombre: "Mesa Comedor Pampa",
        descripcion: "Mesa extensible de roble macizo con tablero biselado y sistema de apertura suave. Ideal para reuniones íntimas o grandes celebraciones.",
        imagen: "../img/mesa_comedor_pampa.png",
        materiales: "Roble macizo FSC®, mecanismo alemán",
        acabado: "Aceite-cera natural",
        capacidad: "6-10 comensales",
        extension: "Sistema de mariposa central"
    },
    {
        nombre: "Sillas Córdoba",
        descripcion: "Set de cuatro sillas apilables en contrachapado de nogal con estructura tubular verde Sage. Diseño ergonómico y durabilidad para uso diario.",
        imagen: "../img/sillas_cordoba.png",
        medidas: "45 × 52 × 80 cm (cada una)",
        materiales: "Contrachapado nogal, tubo de acero",
        acabado: "Laca mate, pintura epoxi",
        apilables: "Hasta 6 sillas",
        incluye: "Set de 4 sillas"
    },
    {
        nombre: "Escritorio Costa",
        descripcion: "Escritorio compacto con cajón organizado y tapa pasacables integrada en bambú laminado. Funcionalidad moderna con estética sostenible.",
        imagen: "../img/escritorio_costa.png",
        medidas: "120 × 60 × 75 cm",
        materiales: "Bambú laminado, herrajes ocultos",
        acabado: "Laca mate resistente",
        almacenamiento: "1 cajón con organizador",
        cables: "Pasacables integrado"
    },
    {
        nombre: "Silla de Trabajo Belgrano",
        descripcion: "Silla ergonómica con respaldo de malla y asiento tapizado reciclado. Ideal para largas jornadas de trabajo en oficina o en casa.",
        imagen: "../img/silla_de_trabajo_belgrano.png",
        medidas: "60 × 60 × 90-100 cm",
        materiales: "Malla técnica, tejido reciclado",
        acabado: "Base cromada, tapizado premium",
        regulacion: "Altura + inclinación respaldo",
        certificacion: "Ergonomía europea EN 1335"
    }
];
