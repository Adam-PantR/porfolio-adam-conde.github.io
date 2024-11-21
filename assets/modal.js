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
        "name":"Nina Carducci",
        "paragraph":"Bienvenue sur le portfolio de Nina Carducci ! Lors de ce projet, j'avais pour tâche de modifier les éléments visibles, redimensionner les images et réagencer le texte de sorte à respecter les attentes d'un site performant avec un SEO et une accessibilité élevée. Afin d'avoir un aperçu de ce travail, je vous conseille de télécharger le fichier et d'utiliser Google Analytics. Vous y trouverez des informations et graphiques concernant les caractéristiques du site."
    },
    {
        "name":"Print it",
        "paragraph":"Bienvenue sur le site Print it ! Ce projet avait pour but de m'inciter à créer des fonctions JavaScript afin de créer un carrousel infini et fonctionnel. Vous avez la possibilité de télécharger ce fichier à la page d'accueil. Pensez à lire le ReadMe pour plus d'information sur le projet."
    },
    {
        "name":"Kasa",
        "paragraph":"Bienvenue sur le site de logement Kasa ! React est le cœur de ce projet. En effet ce site a entièrement été réaliser à l'aide de réact. Vous trouverez en téléchargeant le fichier les différents composants, enfant et parents utilisés pour le bon fonctionnement du site. Vous avez la possibilité de télécharger ce fichier à la page d'accueil. Pensez à lire le ReadMe pour plus d'information sur le projet."
    },
    {
        "name":"Prototype Steam",
        "paragraph":"Test"
    },
]
const modalProjet1 = document.querySelector('.modal-projet1');
const modalProjet2 = document.querySelector('.modal-projet2');
const modalProjet3 = document.querySelector('.modal-projet3');
const modalProjet4 = document.querySelector('.modal-projet4');
const modalProjet5 = document.querySelector('.modal-projet5');
const modalProjet6 = document.querySelector('.modal-projet6');
const modalContainer = document.querySelector('.modalConstructor');
const overlay = ducoment.querySelector('.overlay');
const modalDiv = document.querySelector('.modal')


window.onload = function() {
    overlay.style.display = 'none';
    modalDiv.style.display = 'none';
}

function createProjectRender(i) {
    
    overlayDisplay = document.createElement('div'); 
    overlayDisplay.classList.add('overlay'[i]);
    modalDisplay = document.createElement('div');
    modalDisplay.classList.add = ('modal'[i]); 

    modalContainer.appendChild(overlayDisplay);
    modalContainer.appendChild(modalDisplay);

    const h2Projet = document.createElement('h2');
    h2Projet.classList.add('h2Modal');
    h2Projet.textContent = projects[i].name;
    modalDisplay.appendChild(h2Projet);

    const pProjet = document.createElement('p');
    pProjet.classList.add('pModal'[i]);
    pProjet.textContent = projects[i].paragraph;
    modalDisplay.appendChild(pProjet);
}


for (let i = 0; i < projects.length; i++) {
    createProjectRender(i);
    function openModalOnClick(i) {
    overlay.style.display = 'none';
    modalDiv.style.display = 'none';
    }
}

// window.onload = function() {
//     overlay.style.display = 'block';
//     modalDiv.style.display = 'block';


//     console.log(modalProjet1)
//     if (modalProjet1 != null){
//         const h2Projet1 = document.createElement('h2')
//         modalProjet1.appendChild(h2Projet1);
//         h2Projet1.textContent = projects[0].name;
//         const pProjet1 = document.createElement("p");
//         modalProjet1.appendChild(pProjet1);
//         pProjet1.textContent = projects[0].paragraph;
//     }
//     if (modalProjet2 != null){
//         console.log(modalProjet2)
//         const h2Projet2 = document.createElement('h2')
//         modalProjet2.appendChild(h2Projet2);
//         h2Projet2.textContent = projects[1].name;
//         const pProjet2 = document.createElement("p");
//         modalProjet2.appendChild(pProjet2);
//         pProjet2.textContent = projects[1].paragraph;
//     }
//     if (modalProjet3 != null){
//         const h2Projet3 = document.createElement('h2')
//         modalProjet3.appendChild(h2Projet3);
//         h2Projet3.textContent = projects[2].name;
//         const pProjet3 = document.createElement("p");
//         modalProjet3.appendChild(pProjet3);
//         pProjet3.textContent = projects[2].paragraph;
//     }
//     if (modalProjet4 != null){
//         const h2Projet4 = document.createElement('h2')
//         modalProjet4.appendChild(h2Projet4);
//         h2Projet4.textContent = projects[3].name;
//         const pProjet4 = document.createElement("p");
//         modalProjet4.appendChild(pProjet4);
//         pProjet4.textContent = projects[3].paragraph;
//     }
//     if (modalProjet5 != null){
//         const h2Projet5 = document.createElement('h2')
//         modalProjet5.appendChild(h2Projet5);
//         h2Projet5.textContent = projects[4].name;
//         const pProjet5 = document.createElement("p");
//         modalProjet5.appendChild(pProjet5);
//         pProjet5.textContent = projects[4].paragraph;
//     }
//     if (modalProjet6 != null){
//         const h2Projet6 = document.createElement('h2')
//         modalProjet6.appendChild(h2Projet6);
//         h2Projet6.textContent = projects[5].name;
//         const pProjet6 = document.createElement("p");
//         modalProjet6.appendChild(pProjet6);
//         pProjet6.textContent = projects[5].paragraph;
//     }
    
function closeModal() {
    overlay.style.display = 'none';
    modalDiv.style.display = 'none'
}
