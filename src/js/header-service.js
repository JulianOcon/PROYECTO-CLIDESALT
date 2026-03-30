(function () {
  const LOGO_SRC  = "../assets/trabajos/logo-c.svg";
  const BACK_HREF = "../index.html";

  const HEADER_BG = "bg-gradient-to-r from-blue-900 to-cyan-800 shadow-xl";

  const LOGO_SIZE = "h-12";

  const EMPRESA         = "Clidesalt";
  const SUBTITULO       = "Refrigeración Comercial";
  const SUBTITULO_COLOR = "text-white/60";

  const BACK_LABEL  = "Volver";
  const BACK_STYLES = `flex items-center gap-2 text-sm bg-white/10
    hover:bg-white/20 px-4 py-2 rounded-full transition-all`;

  /* -------------------------------------------------- */

  const html = `
    <header class="${HEADER_BG} text-white sticky top-0 z-50">
      <div class="w-full px-6 py-4 flex items-center justify-between">

        <!-- Logo + nombre de empresa -->
        <div class="flex items-center gap-4">
          <img
            src="${LOGO_SRC}"
            alt="${EMPRESA}"
            class="${LOGO_SIZE} "
          />
          <div class="leading-none flex flex-col justify-center">
            <!--
              line-height:2 mantiene consistencia con header-main.js,
              donde se necesita anular el padding-bottom del .gradient-text.
              Aquí no hay gradient-text pero se mantiene igual para que
              el nombre ocupe exactamente la misma altura visual.
            -->
            <h1 class="text-xl font-bold text-white"
                style="line-height:1.25;">${EMPRESA}</h1>
            <span class="text-xs ${SUBTITULO_COLOR}">${SUBTITULO}</span>
          </div>
        </div>

        <!-- Botón Volver -->
        <a href="${BACK_HREF}" class="${BACK_STYLES}">
          <span>←</span> ${BACK_LABEL}
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