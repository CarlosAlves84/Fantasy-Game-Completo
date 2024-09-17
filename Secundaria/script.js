// Prompt de boas-vindas e solicitação do nome
const nome = prompt("Bem-vindo, Cartoleiro! Qual é o seu nome?");

// Verificação se o nome foi inserido
if (nome) {
    alert("Olá, " + nome + "! Que bom ter você aqui.");

    // Pergunta se gostou do site
    const gostouDoSite = prompt("Você espera gostar do site? Responda com 'sim' ou 'não'.");

    // Verificação da resposta sobre o site
    if (gostouDoSite.toLowerCase() === "sim") {
        alert("Espero que goste, Cartoleiro!");
    } else if (gostouDoSite.toLowerCase() === "não") {
        alert("Que pena! Agradecemos o seu feedback.");
    } else {
        alert("Resposta inválida, Cartoleiro. Por favor, responda apenas com 'sim' ou 'não'.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const carouselItems = document.querySelector('.carousel-items');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carouselItemCount = document.querySelectorAll('.carousel-item').length;
    const itemWidth = document.querySelector('.carousel-item').clientWidth; // Largura de um item
    let currentIndex = 0; // Índice do item atualmente visível

    // Função para atualizar a posição do carrossel
    function updateCarouselPosition() {
        const offset = -currentIndex * itemWidth;
        carouselItems.style.transform = `translateX(${offset}px)`;
    }

    // Função para ir ao próximo item
    function goToNext() {
        if (currentIndex < carouselItemCount - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Voltar ao início
        }
        updateCarouselPosition();
    }

    // Função para ir ao item anterior
    function goToPrev() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = carouselItemCount - 1; // Voltar ao último item
        }
        updateCarouselPosition();
    }

    // Configuração dos botões
    nextButton.addEventListener('click', goToNext);
    prevButton.addEventListener('click', goToPrev);

    // Atualizar a posição inicial do carrossel
    updateCarouselPosition();
});