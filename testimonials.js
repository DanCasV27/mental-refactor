const carousel = document.getElementById('testi-carousel');
const cards = carousel.children;
const visible = 3; // Cuántas tarjetas se ven al mismo tiempo
let index = 0;

function moveCarousel() {
  index++;
  if (index > cards.length - visible) {
    index = 0;
  }
  carousel.style.transform = `translateX(${-index * (cards[0].offsetWidth + 36)}px)`;
}

// Ajustar el ancho responsivo si la ventana cambia
window.addEventListener('resize', () => {
  carousel.style.transform = `translateX(${-index * (cards[0].offsetWidth + 36)}px)`;
});

setInterval(moveCarousel, 3200); // Cambia cada 3.2 segundos