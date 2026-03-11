/**
 * footer.js
 * Footer compartido para todas las páginas.
 *
 * Uso desde el index:    <script src="js/footer.js"></script>
 * Uso desde servicios/:  <script src="../js/footer.js"></script>
 *
 * Detecta automáticamente si está en la raíz o en una subcarpeta
 * para construir las rutas correctas.
 */
(function () {
  const enServicio = window.location.pathname.includes("/servicios/");
  const logoSrc = enServicio
    ? "../assets/trabajos/logo-c.svg"
    : "assets/trabajos/logo-c.svg";
  const raiz = enServicio ? "../" : "";

  const year = new Date().getFullYear();

  const html = `
    <footer class="bg-gray-900 text-gray-400 py-12">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col items-center gap-6">

          <!-- Logo -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 flex items-center justify-center">
              <img
                src="${logoSrc}"
                alt="Clidesalt"
                class="h-12 w-auto object-contain"
              />
            </div>
            <div class="leading-tight">
              <div class="text-white font-bold">Clidesalt</div>
              <div class="text-xs text-gray-500">Refrigeración Comercial</div>
            </div>
          </div>

          <!-- Descripción -->
          <p class="text-sm text-center max-w-md text-gray-500">
            Servicio técnico especializado en refrigeración comercial para
            tiendas de conveniencia y expendios de cerveza en Saltillo,
            Coahuila y Monterrey, Nuevo León.
          </p>

          <div class="h-px w-32 bg-gray-700"></div>

          <!-- Copyright -->
          <p class="text-sm">© ${year} Clidesalt · Todos los derechos reservados</p>

          <!-- Legal -->
          <div class="flex gap-6 text-xs text-gray-600">
            <a href="${raiz}aviso-privacidad.html"
              class="hover:text-gray-400 transition-colors">
              Aviso de Privacidad
            </a>
            <span>·</span>
            <a href="${raiz}terminos.html"
              class="hover:text-gray-400 transition-colors">
              Términos y Condiciones
            </a>
            <span>·</span>
            <a href="${raiz}terminos.html"
              class="hover:text-gray-400 transition-colors">
              Mision, Visión y Valores
            </a>
          </div>

        </div>
      </div>
    </footer>
  `;

  const placeholder = document.getElementById("footer-placeholder");
  if (placeholder) {
    placeholder.outerHTML = html;
  } else {
    document.body.insertAdjacentHTML("beforeend", html);
  }
})();
