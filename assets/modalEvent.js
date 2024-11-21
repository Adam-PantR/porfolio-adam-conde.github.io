const projects = [
    {
        "name":"Bookie",
        "paragraph":"Bienvenue sur Bookie ! Il s'agit là de mon premier projet réalisé entièrement en HTML CSS. Dans ce projet il nous était demandé de réalisé un site en HTML CSS en respectant une maquette. La principale nécessité était d'utiliser les flex-boxes et d'agencer le site de manière responsive et sans erreur."
    },
    {
        "name":"Sophie Bluel",
        "paragraph":"Bienvenue sur le portfolio de Sohpie Bluel ! Dans ce projet m'était demandé de créer un fichier js capable de communiquer et d'intéragir avec une base de donnée. La fonction fetch était de mise et indispensable aux échanges dynamiques avec la base de donnée. Vous avez la possibilité de télécharger ce fichier à la page d'accueil. Pensez à lire le ReadMe pour plus d'information sur le projet."
    },
    {
        "name":"Kasa",
        "paragraph":"Bienvenue sur le site de logement Kasa ! React est le cœur de ce projet. En effet ce site a entièrement été réaliser à l'aide de réact. Vous trouverez en téléchargeant le fichier les différents composants, enfant et parents utilisés pour le bon fonctionnement du site. Vous avez la possibilité de télécharger ce fichier à la page d'accueil. Pensez à lire le ReadMe pour plus d'information sur le projet."
    },
    {
        "name":"Nina Carducci",
        "paragraph":"Bienvenue sur le portfolio de Nina Carducci ! Lors de ce projet, j'avais pour tâche de modifier les éléments visibles, redimensionner les images et réagencer le texte de sorte à respecter les attentes d'un site performant avec un SEO et une accessibilité élevée. Afin d'avoir un aperçu de ce travail, je vous conseille de télécharger le fichier et d'utiliser Google Analytics. Vous y trouverez des informations et graphiques concernant les caractéristiques du site."
    },
    {
        "name":"Print it",
        "paragraph":"Bienvenue sur le site Print it ! Ce projet avait pour but de m'inciter à créer des fonctions JavaScript afin de créer un carrousel infini et fonctionnel. Vous avez la possibilité de télécharger ce fichier à la page d'accueil. Pensez à lire le ReadMe pour plus d'information sur le projet."
    },
    {
        "name":"Prototype Steam",
        "paragraph":"Le projet Steam est un projet visant à reprendre les principes d'UX design et d'en faire un story telling. On y retrouve le user flow, un story board, une maquette et autre. La majeur partie a été réalisée à l'aide de Adobe XD et PowerPoint."
    },
];

const openModal1 = document.querySelector('.open-modal1');
const modalContainer = document.querySelector('.modal-creation');

window.onload = function() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.modal').style.display = 'none';

    for (let i = 0; i < projects.length; i++) {
        const modalProjet = document.createElement('div');
        modalProjet.classList.add(`modal-projet${i + 1}`);
        const h2Projet = document.createElement('h2');
        h2Projet.textContent = projects[i].name;
        const pProjet = document.createElement('p');
        pProjet.textContent = projects[i].paragraph;
        modalProjet.appendChild(h2Projet);
        modalProjet.appendChild(pProjet);
        modalContainer.appendChild(modalProjet);
        modalProjet.style.display = 'none';
    }
};

function closeModal() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.modal').style.display = 'none';
    for (let i = 0; i < projects.length; i++) {
        document.querySelector(`.modal-projet${i + 1}`).style.display = 'none';
    }
}

function openModalProjet(index) {
    document.querySelector(`.modal-projet${index}`).style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.modal').style.display = 'block';
}