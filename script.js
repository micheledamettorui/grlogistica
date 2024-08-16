const btnWhats = document.getElementsByClassName("whatsappButton");

for (let i = 0; i < btnWhats.length; i++) {
  btnWhats[i].addEventListener("click", function () {
    window.open(
      "https://api.whatsapp.com/send/?phone=5551999605883&text=Ol%C3%A1%2C+GR+Log%C3%ADstica%21+Fiquei+interessado+e+gostaria+de+realizar+um+or%C3%A7amento...&type=phone_number&app_absent=0",
      "_blank"
    );
  });
}

// script.js
const carouselInner = document.querySelector(".carousel-inner");
const carouselItems = document.querySelectorAll(".carousel-item");
const totalItems = carouselItems.length;
let index = 0;
let isTransitioning = false;

// Clone do primeiro e do último item
const firstClone = carouselItems[0].cloneNode(true);
const lastClone = carouselItems[totalItems - 1].cloneNode(true);

// Adiciona os clones na posição correta
carouselInner.appendChild(firstClone);
carouselInner.insertBefore(lastClone, carouselItems[0]);

function updateCarousel() {
  const offset = -index * 100;
  carouselInner.style.transition = isTransitioning
    ? "transform 0.5s ease"
    : "none";
  carouselInner.style.transform = `translateX(${offset}%)`;
}

function startCarousel() {
  if (isTransitioning) return; // Evita múltiplas animações ao mesmo tempo
  isTransitioning = true;

  index++;
  updateCarousel();

  if (index === totalItems) {
    setTimeout(() => {
      isTransitioning = false;
      index = 0;
      updateCarousel();
    }, 500);
  } else if (index === -1) {
    setTimeout(() => {
      isTransitioning = false;
      index = totalItems - 1;
      updateCarousel();
    }, 500);
  } else {
    isTransitioning = false;
  }
}

// Iniciar o carrossel
setInterval(startCarousel, 1000); // Troca de imagem a cada 3 segundos

// Transição suave ao trocar para o clone
carouselInner.addEventListener("transitionend", () => {
  if (carouselItems[index]) {
    isTransitioning = false;
  }
});
