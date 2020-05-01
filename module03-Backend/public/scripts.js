// Selecionando a div com a classe modal-overlay
const modalOverlay = document.querySelector('.modal-overlay');

// Selecionando todas as div com classe .card e colocando dentro de uma lista chamada cards.
const cards = document.querySelectorAll('.card');

// Um for para ativar o modal quando clicar no card, verificar o ID do card que é o mesmo
// ID do vídeo do Youtube e colocá-lo no link, por isso tem um loop, pois cada card tem sem
// prório ID.
for (let card of cards) {
    card.addEventListener("click", function() {
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`;
    })
};

// Fechar o modal
document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("iframe").src = "";
});

