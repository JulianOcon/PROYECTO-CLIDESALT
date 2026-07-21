(function () {
  const LOGO_SRC = "assets/trabajos/logo-c.svg";
  const CONTACT_HREF = "#contacto";

  const HEADER_BG = "glass-effect shadow-lg border-b border-gray-200";
  const LOGO_SIZE = "h-12";

  const EMPRESA = "Clidesalt";
  const SUBTITULO = "Refrigeración Comercial";
  const SUBTITULO_COLOR = "text-gray-500";

  const NAV_ITEMS = [
    {
      label: "Servicios",
      dropdown: [
        { label: "Ver todos", href: "#servicios" },
        {
          label: "Cambio de Compresor",
          href: "servicios/cambio-compresor.html",
        },
        { label: "Carga de Gas", href: "servicios/carga-gas.html" },
        {
          label: "Mantenimiento Preventivo",
          href: "servicios/mantenimiento.html",
        },
        {
          label: "Instalación de Equipos",
          href: "servicios/instalacion-hielo.html",
        },
      ],
    },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Mision, Vision y Valores", href: "servicios/mision-vision.html" },
  ];

  const CTA_LABEL = "Contactar";
  const CTA_STYLES = `hidden md:block bg-gradient-to-r from-blue-600 to-cyan-500
                      text-white px-6 py-2 rounded-full font-semibold
                      hover:shadow-xl transition-all duration-300 hover:scale-105`;

  function renderNavItem(item) {
    if (item.dropdown) {
      const [first, ...rest] = item.dropdown;
      const restItems = rest
        .map(
          (opt) => `
        <a href="${opt.href}"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
          ${opt.label}
        </a>`,
        )
        .join("");

      return `
        <div class="relative group">
          <!-- Botón que abre el dropdown -->
          <button class="flex items-center gap-1 text-sm font-semibold text-gray-700
            hover:text-blue-600 transition-colors py-2">
            ${item.label}
            <svg class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
 
          <!-- Panel desplegable — aparece al hacer hover -->
          <div class="absolute left-0 top-full mt-1 w-52 bg-white rounded-xl shadow-xl
                      border border-gray-100 overflow-hidden
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-all duration-200 z-50">
 
            <!-- "Ver todos" — destacado en azul -->
            <a href="${first.href}"
               class="block px-4 py-3 text-sm font-bold text-blue-700
                      bg-blue-50 hover:bg-blue-100 transition-colors border-b border-blue-100">
              ${first.label} →
            </a>
 
            <!-- Resto de opciones -->
            ${restItems}
          </div>
        </div>`;
    }

    return `
      <a href="${item.href}"
         class="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors py-2">
        ${item.label}
      </a>`;
  }

  const navHTML = NAV_ITEMS.map(renderNavItem).join("");

  const html = `
  <header class="${HEADER_BG} sticky top-0 z-50">
    <div class="w-full px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <img
          src="${LOGO_SRC}"
          alt="${EMPRESA}"
          class="${LOGO_SIZE} w-auto object-contain"
        />
        <div class="leading-none flex flex-col justify-center">
          <h1 class="text-xl font-bold gradient-text"
              style="padding-bottom:0; line-height:1.25;">${EMPRESA}</h1>
          <span class="text-xs ${SUBTITULO_COLOR}">${SUBTITULO}</span>
        </div>
      </div>

      <nav class="hidden md:flex items-center gap-6">
          ${navHTML}
        </nav>


      <a href="${CONTACT_HREF}" class="${CTA_STYLES}">
        ${CTA_LABEL}
      </a>
    </div>
  </header>
`;

  const placeholder = document.getElementById("header-placeholder");
  if (placeholder) {
    placeholder.outerHTML = html;
  } else {
    document.body.insertAdjacentHTML("afterbegin", html);
  }
})();
