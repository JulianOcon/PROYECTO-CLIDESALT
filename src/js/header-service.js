/**
 * header-service.js — Header para páginas de servicios
 *
 * Uso en servicios/mi-servicio.html:
 *   <div id="header-placeholder"></div>
 *   <script src="../js/header-service.js"></script>
 *
 * Diseño idéntico a header-main.js — solo cambia:
 *   - HEADER_BG: azul degradado en lugar de glass/blanco
 *   - LOGO_RING: anillo blanco alrededor del logo
 *   - SUBTITULO_COLOR: blanco semitransparente (fondo oscuro)
 *   - Botón derecho: "Volver" en lugar de "Contactar"
 */
(function () {

  /* ====================================================
   * RUTAS — las páginas de servicios están en /servicios/,
   * un nivel abajo de la raíz, de ahí el "../"
   * ==================================================== */
  const LOGO_SRC  = "../assets/trabajos/logo-c.svg";
  const BACK_HREF = "../index.html";

  /* ====================================================
   * FONDO DEL HEADER
   * Solo esta línea diferencia visualmente este header
   * del header-main. Cambia los colores aquí si quieres
   * otra paleta para las páginas de servicio.
   * ==================================================== */
  const HEADER_BG = "bg-gradient-to-r from-blue-900 to-cyan-800 shadow-xl";

  /* ====================================================
   * LOGO — mismo tamaño que header-main.js
   * Si cambias este valor, cámbialo también allá.
   * ==================================================== */
  const LOGO_SIZE = "h-12";

  /* ====================================================
   * CONTORNO DEL LOGO
   * Anillo blanco en lugar del cuadro blanco del header-main.
   * Ajusta grosor: "ring-1", "ring-2", "ring-4", etc.
   * ==================================================== */
  const LOGO_RING = "ring-2 ring-white ring-offset-1 ring-offset-transparent rounded-lg";

  /* ====================================================
   * TEXTO DE MARCA
   * SUBTITULO_COLOR: blanco semitransparente sobre fondo oscuro.
   * En header-main es text-gray-500 porque el fondo es claro.
   * ==================================================== */
  const EMPRESA         = "Clidesalt";
  const SUBTITULO       = "Refrigeración Comercial";
  const SUBTITULO_COLOR = "text-white/60";

  /* ====================================================
   * BOTÓN VOLVER (esquina derecha)
   * ==================================================== */
  const BACK_LABEL  = "Volver";
  const BACK_STYLES = `flex items-center gap-2 text-sm bg-white/10
                       hover:bg-white/20 px-4 py-2 rounded-full transition-all`;

  /* -------------------------------------------------- */

  const html = `
    <header class="${HEADER_BG} text-white sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

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
                style="line-height:2;">${EMPRESA}</h1>
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