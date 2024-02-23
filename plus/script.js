// Obtém todos os elementos com a classe 'card'
const cards = document.querySelectorAll('.card');

// Adiciona um ouvinte de evento de foco para cada card
cards.forEach(card => {
  card.addEventListener('focus', function() {
    // Verifica se o card atual tem um texto grande (por exemplo, mais de 100 caracteres)
    const cardContent = this.querySelector('.card-body');
    if (cardContent.textContent.length > 100) {
      // Se o texto for grande, expande o card
      this.style.maxHeight = 'none';
    }
  });
});
