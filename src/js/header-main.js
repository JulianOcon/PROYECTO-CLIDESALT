/**
 * Para reutilizarse solo debe incluir el siguiente código en el HTML donde se quiera mostrar el header:
 *   <div id="header-placeholder"></div>
 *   <script src="js/header-main.js"></script>
 */
(function () {
    const html = `
    <header class="glass-effect sticky top-0 z-50 shadow-lg border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div class="flex items-center gap-4">
            <img
                src="assets/trabajos/logo-c.png"
                alt="Clidesalt"
                class="h-12 w-auto object-contain"
            />
        <div class="leading-tight">
            <h1 class="text-xl font-bold gradient-text">Clidesalt</h1>
            <span class="text-xs text-gray-500">Refrigeración Comercial</span>
        </div>
        </div>

        <a
          href="#contacto"
          class="hidden md:block bg-gradient-to-r from-blue-600 to-cyan-500
                 text-white px-6 py-2 rounded-full font-semibold
                 hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Contactar
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
