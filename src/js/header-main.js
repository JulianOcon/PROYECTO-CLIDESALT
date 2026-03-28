/**
 * header-main.js — Header para la página principal (index)
 *
 * Uso en index.html:
 *   <div id="header-placeholder"></div>
 *   <script src="js/header-main.js"></script>
 *
 * Requiere en el <head> del HTML:
 *   .glass-effect  → fondo blanco semitransparente con blur
 *   .gradient-text → texto con degradado azul
 */
(function () {

  /* ====================================================
   * RUTAS — ajustar si cambia la ubicación de los assets
   * ==================================================== */
  const LOGO_SRC     = "assets/trabajos/logo-c.svg";
  const CONTACT_HREF = "#contacto";

  /* ====================================================
   * FONDO DEL HEADER
   * Actualmente: blanco semitransparente con blur (glass).
   * Para color sólido, cambia por ej: "bg-white" o "bg-blue-900 text-white"
   * ==================================================== */
  const HEADER_BG = "glass-effect shadow-lg border-b border-gray-200";

  /* ====================================================
   * LOGO — tamaño compartido con header-service.js
   * Si cambias este valor, cámbialo también allá.
   * ==================================================== */
  const LOGO_SIZE = "h-12";

  /* ====================================================
   * TEXTO DE MARCA
   * SUBTITULO_COLOR: usa text-gray-500 sobre fondo blanco.
   * En header-service es text-white/60 porque el fondo es oscuro.
   * ==================================================== */
  const EMPRESA        = "Clidesalt";
  const SUBTITULO      = "Refrigeración Comercial";
  const SUBTITULO_COLOR = "text-gray-500";

  /* ====================================================
   * BOTÓN CTA (esquina derecha)
   * ==================================================== */
  const CTA_LABEL  = "Contactar";
  const CTA_STYLES = `hidden md:block bg-gradient-to-r from-blue-600 to-cyan-500
                      text-white px-6 py-2 rounded-full font-semibold
                      hover:shadow-xl transition-all duration-300 hover:scale-105`;

  /* -------------------------------------------------- */

  const html = `
    <header class="${HEADER_BG} sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <img
            src="${LOGO_SRC}"
            alt="${EMPRESA}"
            class="${LOGO_SIZE} w-auto object-contain"
          />
          <div class="leading-none flex flex-col justify-center">
            <h1 class="text-xl font-bold gradient-text"
                style="padding-bottom:0; line-height:2;">${EMPRESA}</h1>
            <span class="text-xs ${SUBTITULO_COLOR}">${SUBTITULO}</span>
          </div>
        </div>
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