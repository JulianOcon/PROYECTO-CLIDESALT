/**
 * header-service.js
 * Inyecta el <header> azul con botón "Volver" para páginas de servicios.
 * Los estilos y <head> permanecen en cada HTML — este archivo solo
 * maneja el elemento <header> dentro del <body>.
 *
 * Uso en servicios/mi-servicio.html:
 *   <div id="header-placeholder"></div>
 *   <script src="../js/header-service.js"></script>
 */
(function () {
  const html = `
    <header class="bg-gradient-to-r from-blue-900 to-cyan-800
                   text-white shadow-xl sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div class="flex items-center gap-3">
          <img
            src="../assets/trabajos/logo-c.png"
            alt="Clidesalt"
            class="h-10 w-auto object-contain rounded shadow-lg bg-white p-1"
          />
          <h1 class="text-xl font-bold">Clidesalt</h1>
        </div>

        <a
          href="../index.html"
          class="flex items-center gap-2 text-sm bg-white/10
                 hover:bg-white/20 px-4 py-2 rounded-full transition-all"
        >
          <span>←</span> Volver
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
