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

// CatTie bouge grâce aux flèches
const cattie_idl = document.getElementById("cattie_idl");
const cattie_run = document.getElementById("cattie_run");
const cattie = document.querySelector(".cattie");

let movingLeft = false; 
let movingRight = false; 

// Arrow
const arrow_right = document.getElementById("right");
const arrow_left = document.getElementById("left");

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
    cattie_idl.style.opacity = 0;
    cattie_run.style.opacity = 0;
    lys_idl.style.opacity = 0;
    lys_run.style.opacity = 0;
    lavende_idl.style.opacity = 0;
    lavende_run.style.opacity = 0;

    // active le nouveau
    idle.style.opacity = 1;
    run.style.opacity = 0;

    // met à jour le perso courant
    currentIdle = idle;
    currentRun = run;
}

function showIdle() {
    currentIdle.style.opacity = 1;
    currentRun.style.opacity = 0;
}

function showRun() {
    currentIdle.style.opacity = 0;
    currentRun.style.opacity = 1;
}

// clic sur les cartes
card_lys.addEventListener("click", () => {
    showCharacter(lys_idl, lys_run);
    console.log("Lys cliqué !");
});

card_lavende.addEventListener("click", () => {
    showCharacter(lavende_idl, lavende_run);
});

card_cattie.addEventListener("click", () => {
    showCharacter(cattie_idl, cattie_run);
});

// perso par défaut
showCharacter(cattie_idl, cattie_run);

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
        arrow_left.classList.add("left-active");
    }
    if (e.key === "ArrowRight") { 
        movingRight = true; 
        cattie.style.transform = "scaleX(1)";  
        showRun();
        arrow_right.classList.add("right-active");
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

document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowLeft")  { 
        movingLeft = false; 
        arrow_left.classList.remove("left-active");
    }
    if (e.key === "ArrowRight") { 
        movingRight = false; 
        arrow_right.classList.remove("right-active");
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
