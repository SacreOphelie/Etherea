// Curseur
const move = document.getElementById("move");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;
    move.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {
        duration: 1000,
        fill: "forwards"
    });
}

// la touche echap ramène à index.php 
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        window.location.href = "index.php";
    }
});

// le menu burger
const burger = document.querySelector('.burger');
const menu_burger = document.getElementById('burger');
const links = document.querySelectorAll('.content_menu a');

burger.addEventListener('click', () => {
burger.classList.toggle('active');
menu_burger.classList.toggle('active_burger');
});

// Fermer le menu quand on clique sur un lien
links.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    menu_burger.classList.remove('active_burger');
  });
});

// problème lié à la gestion des slides résolution : 
function goToSlide(index) {
    slideIndex = index;       
    // Place Cattie au centre de la slide pour éviter qu'elle déclenche le passage
    cattieX = slideWidth / 2;  
    cattie.style.left = cattieX + "px";
    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    updateArrows();
}
document.querySelector('a[href="#home"]').addEventListener('click', (e) => {
  e.preventDefault();   // Annule la navigation par défaut du lien
  goToSlide(0);         // Passe manuellement à la diapositive "About"
});
document.querySelector('a[href="#about"]').addEventListener('click', (e) => {
  e.preventDefault();   // Annule la navigation par défaut du lien
  goToSlide(1);         // Passe manuellement à la diapositive "About"
});
document.querySelector('a[href="#character"]').addEventListener('click', (e) => {
  e.preventDefault();   // Annule la navigation par défaut du lien
  goToSlide(2);         // Passe manuellement à la diapositive "About"
});
document.querySelector('a[href="#worlds"]').addEventListener('click', (e) => {
  e.preventDefault();   // Annule la navigation par défaut du lien
  goToSlide(3);         // Passe manuellement à la diapositive "About"
});
document.querySelector('a[href="#download"]').addEventListener('click', (e) => {
  e.preventDefault();   // Annule la navigation par défaut du lien
  goToSlide(4);         // Passe manuellement à la diapositive "About"
});


// CatTie bouge grâce aux flèches
const cattie_idl = document.getElementById("cattie_idl");
const cattie_run = document.getElementById("cattie_run");
const cattie = document.querySelector(".cattie");

let movingLeft = false; 
let movingRight = false; 

// Arrow

const arrows = document.querySelector(".container-arrow");


// gestion des flèches de direction
const direction_left = document.querySelector(".direction_left");
const direction_right = document.querySelector(".direction_right");
const totalSlides = 5; 

// Slides

const slides = document.querySelector(".slides");
let slideIndex = 0;
const slideWidth = window.innerWidth;
let cattieX = 0;
const speed = 5; 

// gestion des différents personnages
const card_lys = document.querySelector("#card-lys");
const card_lavende = document.querySelector("#card-lavende");
const card_cattie = document.querySelector("#card-cattie");

const lys_idl = document.querySelector("#lys_idl");
const lys_run = document.querySelector("#lys_run");
const lavende_idl = document.querySelector("#lavende_idl");
const lavende_run = document.querySelector("#lavende_run");

// ---- Gestion des personnages ----
let currentIdle = cattie_idl;
let currentRun = cattie_run;

// fonction pour afficher un perso
function showCharacter(idle, run) {
    // reset tous les persos
    cattie_idl.style.display = "none";
    cattie_run.style.display = "none";
    lys_idl.style.display = "none";
    lys_run.style.display = "none";
    lavende_idl.style.display = "none";
    lavende_run.style.display = "none";

    // active le nouveau
    idle.style.display = "block";
    run.style.display = "none";

    // met à jour le perso courant
    currentIdle = idle;
    currentRun = run;
}

function showIdle() {
    currentIdle.style.display = "block";
    currentRun.style.display = "none";
}

function showRun() {
    currentIdle.style.display= "none";
    currentRun.style.display = "block";
}

 // Effet machine à écrire avec texte HTML
const text_typing = document.querySelector(".texte_typing");
const originalText = text_typing.textContent; // récupère le texte déjà présent
text_typing.textContent = ""; // vide avant de commencer
let i = 0;
let speed_text = 50;

function typeWriter() {
    if (i < originalText.length) {
        text_typing.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, speed_text);
    }
}

// voir le texte du perso
const texte_cattie = document.getElementById("texte-cattie");
const texte_lys = document.getElementById("texte-lys");
const texte_lavende = document.getElementById("texte-lavende");

// clic sur les personnages
card_lys.addEventListener("click", () => {
    showCharacter(lys_idl, lys_run);
    console.log("Lys cliqué !");
    localStorage.setItem("character", "lys");

    // animation du cadre du perso sélectionné
    card_lys.classList.toggle("active-card-lys");
    card_cattie.classList.toggle("remove-card-cattie");
    card_lavende.classList.toggle("remove-card-lavende");
    texte_lys.classList.toggle("character-texte-active");
    typeWriter();
    updateMemoryLink();
});

card_lavende.addEventListener("click", () => {
    showCharacter(lavende_idl, lavende_run);
    console.log("Lavende cliqué !");
    localStorage.setItem("character", "lavende");

    // animation du cadre du perso sélectionné
    card_lavende.classList.toggle("active-card-lavende");
    card_cattie.classList.toggle("remove-card-cattie");
    card_lys.classList.toggle("remove-card-lys");
    texte_lavende.classList.toggle("character-texte-active");
    typeWriter();
    updateMemoryLink();
});

card_cattie.addEventListener("click", () => {
    showCharacter(cattie_idl, cattie_run);
    console.log("Cattie cliqué !");
    localStorage.setItem("character", "cattie");

    // animation du cadre du perso sélectionné
    card_lavende.classList.toggle("remove-card-lavende");
    card_lys.classList.toggle("remove-card-lys");
    texte_cattie.classList.toggle("character-texte-active");
    typeWriter();
    updateMemoryLink();
});

// perso par défaut
showCharacter(cattie_idl, cattie_run);

// sauvegarder le choix du perso
const savedCharacter = localStorage.getItem("character");
if(savedCharacter === "lys")
{
    showCharacter(lys_idl, lys_run);

}else if(savedCharacter === "lavende") 
{
    showCharacter(lavende_idl, lavende_run);

}else if(savedCharacter === "cattie")
{
    showCharacter(cattie_idl, cattie_run);
}

// ---- Gestion des directions slides ----
const slidesNames = ["Home", "About", "Character", "Worlds", "Download"];
const direction_texte_left = document.querySelector(".direction_texte_left");
const direction_texte_right = document.querySelector(".direction_texte_right");

const leftText = document.createElement("p");
leftText.classList.add("direction_text");
direction_texte_left.appendChild(leftText);

const rightText = document.createElement("p");
rightText.classList.add("direction_text");
direction_texte_right.appendChild(rightText);

function updateArrows() {
    if (slideIndex === 0) {
        direction_left.style.display = "none";
    } else {
        direction_left.style.display = "flex";
    }

    if (slideIndex === totalSlides - 1) {
        direction_right.style.display = "none";
    } else {
        direction_right.style.display = "flex";
    }

    leftText.textContent = slideIndex > 0 ? slidesNames[slideIndex - 1] : "";
    rightText.textContent = slideIndex < totalSlides - 1 ? slidesNames[slideIndex + 1] : "";
}
updateArrows();

// ---- Déplacements ----
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft")  { 
        movingLeft = true;  
        cattie.style.transform = "scaleX(-1)"; 
        showRun();
    }
    if (e.key === "ArrowRight") { 
        movingRight = true; 
        cattie.style.transform = "scaleX(1)";  
        showRun();
    }

    // aller à droite
    if (cattieX > slideWidth - 100) { 
        if (slideIndex < 4) {
            slideIndex++;
            cattieX = 0;
            slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
            updateArrows();
        } else {
            cattieX = slideWidth - 100;
        }
    }

    // aller à gauche
    if (cattieX < 0) {
        if (slideIndex > 0) {
            slideIndex--;
            cattieX = slideWidth - 100;
            slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
            updateArrows();
        } else {
            cattieX = 0;
        }
    }
});

// flèche qui reste appuyée
document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowLeft")  { 
        movingLeft = false; 
    }
    if (e.key === "ArrowRight") { 
        movingRight = false; 
    }
    if (!movingLeft && !movingRight) showIdle();
});

function loop() {
    if (movingLeft)  cattieX -= speed;
    if (movingRight) cattieX += speed;
    cattie.style.left = cattieX + "px";
    requestAnimationFrame(loop);
}
loop();

// changement des décors
const video_home = document.getElementById("video_home");
const video_about = document.getElementById("video_about");
const video_character = document.getElementById("video_character");
const video_worlds = document.getElementById("video_worlds");
const video_download = document.getElementById("video_download");
const foret = document.getElementById("foret");
const prairie = document.getElementById("prairie");
const desert = document.getElementById("desert");
const jungle = document.getElementById("jungle");

// changement de la couleur du titre character : worlds
const titre_character = document.getElementById("titre_character");
const titre_worlds = document.getElementById("titre_worlds");

// le texte des mondes
const texte_foret = document.getElementById("texte_foret");
const texte_prairie = document.getElementById("texte_prairie");
const texte_desert = document.getElementById("texte_desert");
const texte_jungle = document.getElementById("texte_jungle");


foret.addEventListener("click", () => {
    video_home.src = "decor/home.webm";
    video_about.src = "decor/about.webm";
    video_character.src = "decor/character.webm";
    video_worlds.src = "decor/worlds.webm";
    video_download.src = "decor/download.webm";
    console.log("Forêt cliqué !");
    // sauvegarde du choix
    localStorage.setItem("world", "foret");
    // changement couleur titres + sauvegarde
    titre_character.style.color = "#ffffffff";
    titre_character.style.textShadow = "#753975ff 0px 0px 8px";
    localStorage.setItem("titre_character_color", titre_character.style.color);
    localStorage.setItem("titre_character_shadow", titre_character.style.textShadow);
    titre_worlds.style.color = "#ffffffff";
    titre_worlds.style.textShadow = "#753975ff  0px 0px 8px";
    localStorage.setItem("titre_worlds_color", titre_worlds.style.color);
    localStorage.setItem("titre_worlds_shadow", titre_worlds.style.textShadow);
    // animation du cadre du monde sélectionné
    texte_foret.classList.toggle("texte-world-active-left");
    prairie.classList.toggle("worlds_behind");
    // mise à jour du lien de la memory
    updateMemoryLink();
}); 
prairie.addEventListener("click", () => {
    video_home.src = "decor/prairie/prairie_home.webm";
    video_about.src = "decor/prairie/prairie_about.webm";
    video_character.src = "decor/prairie/prairie_character.webm";
    video_worlds.src = "decor/prairie/prairie_worlds.webm";
    video_download.src = "decor/prairie/prairie_download.webm";
    console.log("Prairie cliqué !");
    // sauvegarde du choix
    localStorage.setItem("world", "prairie");
    // changement couleur titres + sauvegarde
    titre_character.style.color = "#64428f";
    titre_character.style.textShadow = "#ffc3f5ff 0px 0px 5px";
    localStorage.setItem("titre_character_color", titre_character.style.color);
    localStorage.setItem("titre_character_shadow", titre_character.style.textShadow);
    titre_worlds.style.color = "#64428f";
    titre_worlds.style.textShadow = "#ffc3f5ff 0px 0px 5px";
    localStorage.setItem("titre_worlds_color", titre_worlds.style.color);
    localStorage.setItem("titre_worlds_shadow", titre_worlds.style.textShadow);
    // animation du cadre du monde sélectionné
    texte_prairie.classList.toggle("texte-world-active-right");
    foret.classList.toggle("worlds_behind");
    // mise à jour du lien de la memory
    updateMemoryLink();
});
desert.addEventListener("click", () => {
    video_home.src = "decor/desert/desert_home.webm";
    video_about.src = "decor/desert/desert_about.webm";
    video_character.src = "decor/desert/desert_character.webm";
    video_worlds.src = "decor/desert/desert_world.webm";
    video_download.src = "decor/desert/desert_download.webm";
    console.log("Desert cliqué !");
    localStorage.setItem("world", "desert");
    titre_character.style.color = "#62438f";
    titre_character.style.textShadow = "rgb(255, 185, 152) 0px 0px 5px";
    localStorage.setItem("titre_character_color", titre_character.style.color);
    localStorage.setItem("titre_character_shadow", titre_character.style.textShadow);
    titre_worlds.style.color = "#62438f";
    titre_worlds.style.textShadow = "rgb(255, 185, 152) 0px 0px 5px";
    localStorage.setItem("titre_worlds_color", titre_worlds.style.color);
    localStorage.setItem("titre_worlds_shadow", titre_worlds.style.textShadow);
    // animation du cadre du monde sélectionné
    texte_desert.classList.toggle("texte-world-active-left");
    jungle.classList.toggle("worlds_behind");
    // mise à jour du lien de la memory)
    updateMemoryLink();
});
jungle.addEventListener("click", () => {
    video_home.src = "decor/jungle/jungle_home.webm";
    video_about.src = "decor/jungle/jungle_about.webm";
    video_character.src = "decor/jungle/jungle_character.webm";
    video_worlds.src = "decor/jungle/jungle_worlds.webm";
    video_download.src = "decor/jungle/jungle_download.webm";
    console.log("Jungle cliqué !");
    localStorage.setItem("world", "jungle");
    titre_character.style.color = "#ffffffff";
    titre_character.style.textShadow = "#2c642cff 0px 0px 5px";
    localStorage.setItem("titre_character_color", titre_character.style.color);
    localStorage.setItem("titre_character_shadow", titre_character.style.textShadow);
    titre_worlds.style.color = "#ffffffff";
    titre_worlds.style.textShadow = "#2c642cff 0px 0px 5px";
    localStorage.setItem("titre_worlds_color", titre_worlds.style.color);
    localStorage.setItem("titre_worlds_shadow", titre_worlds.style.textShadow);
    // animation du cadre du monde sélectionné
    texte_jungle.classList.toggle("texte-world-active-right");
    desert.classList.toggle("worlds_behind")
    updateMemoryLink();
});

// sauvegarde du choix des mondes 
const savedWorld = localStorage.getItem("world");

if (savedWorld === "prairie") {
    video_home.src = "decor/prairie/prairie_home.webm";
    video_about.src = "decor/prairie/prairie_about.webm";
    video_character.src = "decor/prairie/prairie_character.webm";
    video_worlds.src = "decor/prairie/prairie_worlds.webm";
    video_download.src = "decor/prairie/prairie_download.webm";
} else if (savedWorld === "foret") {
    video_home.src = "decor/home.webm";
    video_about.src = "decor/about.webm";
    video_character.src = "decor/character.webm";
    video_worlds.src = "decor/worlds.webm";
    video_download.src = "decor/download.webm";
} else if (savedWorld === "desert") {
    video_home.src = "decor/desert/desert_home.webm";
    video_about.src = "decor/desert/desert_about.webm";
    video_character.src = "decor/desert/desert_character.webm";
    video_worlds.src = "decor/desert/desert_world.webm";
    video_download.src = "decor/desert/desert_download.webm";
} else if (savedWorld === "jungle") {
    video_home.src = "decor/jungle/jungle_home.webm";
    video_about.src = "decor/jungle/jungle_about.webm";
    video_character.src = "decor/jungle/jungle_character.webm";
    video_worlds.src = "decor/jungle/jungle_worlds.webm";
    video_download.src = "decor/jungle/jungle_download.webm";
}

// Garde en mémoire la couleur des titres
window.addEventListener("load", () => {
  const colorCharacter = localStorage.getItem("titre_character_color");
  const shadowCharacter = localStorage.getItem("titre_character_shadow");
  const colorWorlds = localStorage.getItem("titre_worlds_color");
  const shadowWorlds = localStorage.getItem("titre_worlds_shadow");

  if (colorCharacter) titre_character.style.color = colorCharacter;
  if (shadowCharacter) titre_character.style.textShadow = shadowCharacter;
  if (colorWorlds) titre_worlds.style.color = colorWorlds;
  if (shadowWorlds) titre_worlds.style.textShadow = shadowWorlds;
});

// Memory photo
const memoryLink = document.getElementById("memory");

// Fonction pour modifier le lien à chaque choix
function updateMemoryLink() {
    const world = localStorage.getItem("world");
    const character = localStorage.getItem("character");
    memoryLink.href = `illu/memory/${world}_${character}.png`;
}
updateMemoryLink();

