document.addEventListener("DOMContentLoaded", () => {
    // Referências dos elementos do player principal na tela
    const iframeDestaque = document.getElementById("video-destaque");
    const tituloDestaque = document.getElementById("titulo-destaque");
    const descricaoDestaque = document.getElementById("descricao-destaque");
    
    // Captura de todos os botões de troca de câmera
    const botoesAssistir = document.querySelectorAll(".btn-assistir");

    botoesAssistir.forEach(botao => {
        botao.addEventListener("click", (e) => {
            // Coleta os metadados customizados configurados no botão
            const novaUrl = botao.getAttribute("data-url");
            const novoTitulo = botao.getAttribute("data-titulo");
            const novaDescricao = botao.getAttribute("data-descricao");

            // Atualiza os atributos visuais do player em destaque
            if (novaUrl) iframeDestaque.src = novaUrl;
            if (novoTitulo) tituloDestaque.textContent = novoTitulo;
            if (novaDescricao) descricaoDestaque.textContent = novaDescricao;

            // Remove a classe de realce "ativo" de todos os cards antes de aplicar no atual
            document.querySelectorAll(".card-video").forEach(card => {
                card.classList.remove("ativo");
            });

            // Adiciona o realce visual no card pai do botão clicado
            const cardPai = botao.closest(".card-video");
            if (cardPai) cardPai.classList.add("ativo");

            // No celular, move o scroll suavemente para o topo do player principal
            if (window.innerWidth <= 1024) {
                iframeDestaque.scrollIntoView({ behavior: "smooth", block: "end" });
            }
        });
    });
});