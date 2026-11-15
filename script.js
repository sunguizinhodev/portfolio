// Pega todas as barras de habilidades
const barras = document.querySelectorAll('.progress-bar');

// Observa quando a barra aparece na tela
const observador = new IntersectionObserver(function (itens) {
  itens.forEach(function (item) {
    if (item.isIntersecting) {
      // coloca a largura que está no data-valor (ex: 85%)
      item.target.style.width = item.target.dataset.valor + '%';
      observador.unobserve(item.target);
    }
  });
}, { threshold: 0.5 });

barras.forEach(function (barra) {
  observador.observe(barra);
});
