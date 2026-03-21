const phoneNumber = "528711207136";

const message =
  "Hola, encontré su página web y necesito servicio para un enfriador.";

const encodedMessage = encodeURIComponent(message);

function getWhatsAppLink() {
  const isMobile =
    /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  } else {
    return `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  }
}

const buttonHTML = `
<style>
#waContainer {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 50;
}

#waButton {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #22c55e;
  border-radius: 9999px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}

#waButton:hover {
  background-color: #16a34a;
  transform: scale(1.1);
}

#waText {
  position: absolute;
  right: 70px;
  top: 50%;
  transform: translateY(-50%);
  background: #22c55e;
  color: white;
  padding: 8px 12px;
  border-radius: 9999px;
  white-space: nowrap;
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
}

#waContainer:hover #waText {
  opacity: 1;
  right: 75px;
}
</style>

<div id="waContainer">
  <a
    href="${getWhatsAppLink()}"
    target="_blank"
    id="waButton"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-white" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.571a.5.5 0 0 0 .612.612l5.717-1.471A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.371l-.36-.214-3.733.96.991-3.625-.235-.373A9.818 9.818 0 1 1 12 21.818z"/>
    </svg>
  </a>

  <span id="waText">
    ¿Necesitas servicio?
  </span>
</div>
`;

document.body.insertAdjacentHTML("beforeend", buttonHTML);

// ===== ANIMACIÓN INICIAL =====
const button = document.getElementById("whatsappButton");
const text = document.getElementById("waText");

setTimeout(() => {
  text.classList.add("visible");

  setTimeout(() => {
    text.classList.remove("visible");
  }, 3000);
}, 2000);

// ===== HOVER (FUNCIONA SIEMPRE) =====
button.addEventListener("mouseenter", () => {
  text.classList.add("visible");
});

button.addEventListener("mouseleave", () => {
  text.classList.remove("visible");
});