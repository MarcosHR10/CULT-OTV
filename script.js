
/* =================================
   VARIÁVEIS
================================= */

let selectedPage = "jogos";


/* =================================
   SELEÇÃO DO MENU
================================= */

function selectOption(button, title, description, page) {

    // Remove a seleção dos outros botões

    document.querySelectorAll(".menu button")
        .forEach(item => {
            item.classList.remove("active");
        });

    // Ativa o botão clicado

    button.classList.add("active");

    // Atualiza o título

    document.getElementById("title").textContent = title;

    // Atualiza a descrição

    document.getElementById("description").textContent =
        description;

    // Guarda a área selecionada

    selectedPage = page;

}


/* =================================
   CONTEÚDO DAS ÁREAS
================================= */

const sections = {

    jogos: {

        title: "Jogos",

        description: "O arquivo das partidas do Interclasses 2026.",

        cards: [
            "Handebol Feminino",
            "Handebol Masculino",
            "Futsal Feminino",
            "Futsal Masculino",
            "Basquete Feminino",
            "Basquete Masculino",
            "Vôlei"
        ]

    },

    fotos: {

        title: "Fotos",

        description: "Os registros do Interclasses 2026.",

        cards: [
            "A Torcida",
            "As Equipes",
            "Os Jogos",
            "Bastidores"
        ]

    },

    entrevistas: {

        title: "Entrevistas",

        description: "As histórias de quem participou do Interclasses.",

        cards: [
            "Atletas",
            "Narradores",
            "Organização",
            "Professores"
        ]

    },

    vencedores: {

        title: "Vencedores",

        description: "Os campeões do Interclasses 2026.",

        cards: [
            "Campeões",
            "Destaques",
            "Premiações"
        ]

    }

};


/* =================================
   ABRIR ÁREA SELECIONADA
================================= */

function continuePage() {

    const data = sections[selectedPage];

    // Esconde o menu principal

    document.getElementById("home").style.display = "none";

    // Mostra a página interna

    document.getElementById("internal-page")
        .classList.add("active");

    // Atualiza as informações

    document.getElementById("internal-title").textContent =
        data.title;

    document.getElementById("internal-description").textContent =
        data.description;

    document.getElementById("content-heading").textContent =
        data.title + " // 2026";


    // Cria os cartões

    const cards = document.getElementById("cards");

    cards.innerHTML = "";

    data.cards.forEach(name => {

        const card = document.createElement("article");

        card.className = "card";

        const heading = document.createElement("h3");
        heading.textContent = name;

        const paragraph = document.createElement("p");
        paragraph.textContent =
            "Conteúdo desta categoria será adicionado ao acervo.";

        card.appendChild(heading);
        card.appendChild(paragraph);

        cards.appendChild(card);

    });

}


/* =================================
   VOLTAR AO MENU PRINCIPAL
================================= */

function goHome() {

    // Esconde a página interna

    document.getElementById("internal-page")
        .classList.remove("active");

    // Mostra novamente o menu

    document.getElementById("home").style.display = "flex";

}
