(function () {
  const ICONO_RAPIDO = "../assets/iconos/rapido.svg";
  const ICONO_GARANTIA = "../assets/iconos/garantia.svg";
  const ICONO_EXPERIENCIA = "../assets/iconos/experiencia.svg";

  const CTA_LABEL = "Solicitar Servicio";
  const CTA_HREF = "../index.html#contacto";

  /* -------------------------------------------------- */

  const BENEFICIOS = [
    {
      icono: ICONO_RAPIDO,
      titulo: "Servicio Rápido",
      descripcion: "Diagnóstico y reemplazo en corto tiempo",
    },
    {
      icono: ICONO_GARANTIA,
      titulo: "Garantía",
      descripcion: "Respaldo en todos nuestros trabajos",
    },
    {
      icono: ICONO_EXPERIENCIA,
      titulo: "Experiencia",
      descripcion: "Técnicos especializados",
    },
  ];

  const tarjetas = BENEFICIOS.map(
    (b) => `
    <div class="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
      <img src="${b.icono}" alt="${b.titulo}" class="w-10 h-10 mx-auto mb-3" />
      <h3 class="font-bold text-lg mb-2 text-blue-700">${b.titulo}</h3>
      <p class="text-gray-600 text-sm">${b.descripcion}</p>
    </div>`,
  ).join("");

  const html = `
    <!-- BENEFICIOS -->
    <div class="grid md:grid-cols-3 gap-6 mb-16">
      ${tarjetas}
    </div>

    <!-- CTA -->
    <div class="text-center">
      <a href="${CTA_HREF}"
        class="inline-block bg-gradient-to-r from-blue-600 to-cyan-500
                text-white px-10 py-4 rounded-full font-bold text-lg
                hover:shadow-2xl transition-all duration-300 hover:scale-105">
        ${CTA_LABEL}
      </a>
    </div>
  `;

  const placeholder = document.getElementById("service-info-placeholder");
  if (placeholder) {
    placeholder.outerHTML = html;
  } else {
    console.warn("service-info.js: no se encontró #service-info-placeholder");
  }
})();
