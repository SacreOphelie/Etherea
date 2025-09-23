// Curseur
        const move = document.getElementById("move");

        document.body.onpointermove = event => {
            const {
                clientX,
                clientY
            } = event;

            move.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, {
                duration: 1000,
                fill: "forwards"
            })
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
        const cattie = document.querySelector(".cattie")
        let movingLeft = false; // lorsque il va bouger vers la gauche 
        let movingRight = false; // bouger vers la droite
        
// Arrow
        const arrow_right = document.getElementById("right")
        const arrow_left = document.getElementById("left")
// gestion des flèches de direction
        const direction_left = document.querySelector(".direction_left");
        const direction_right = document.querySelector(".direction_right");
        const totalSlides = 5; // nombre total de slides
        
// Slides
        const slides = document.querySelector(".slides")
        let slideIndex = 0 
        const slideWidth = window.innerWidth
        let cattieX = 0
        const speed = 5; // sa vitesse

        function showIdle() {
            cattie_idl.style.opacity = 1;
            cattie_run.style.opacity = 0;
        }
        function showRun() {
            cattie_idl.style.opacity = 0;
            cattie_run.style.opacity = 1;
        }

// gestion des directions slides

        const slidesNames = ["Home", "About", "Character", "Worlds", "Download"];

        const direction_texte_left = document.querySelector(".direction_texte_left");
        const direction_texte_right = document.querySelector(".direction_texte_right");

        // On ajoute un élément texte dans les flèches
        const leftText = document.createElement("p");
        leftText.classList.add("direction_text");
        direction_texte_left.appendChild(leftText);

        const rightText = document.createElement("p");
        rightText.classList.add("direction_text");
        direction_texte_right.appendChild(rightText);

        function updateArrows() {
            // Gérer la visibilité
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

            // Mettre le texte en fonction de la slide actuelle
            leftText.textContent = slideIndex > 0 ? slidesNames[slideIndex - 1] : "";
            rightText.textContent = slideIndex < totalSlides - 1 ? slidesNames[slideIndex + 1] : "";
        }
        updateArrows(); // pour masquer la flèche gauche dès le début

        document.addEventListener("keydown", (e) => {
            if (e.key === "ArrowLeft")  { 
                movingLeft = true;  
                cattie.style.transform = "scaleX(-1)"; 
                showRun();
                arrow_left.classList.add("left-active")
            }
            if (e.key === "ArrowRight") { 
                movingRight = true; 
                cattie.style.transform = "scaleX(1)";  
                showRun();
                arrow_right.classList.add("right-active")
            }

// aller à droite (slide suivante)
            if (cattieX > slideWidth - 100) { // 100 = largeur du joueur
                if (slideIndex < 4) {
                    slideIndex++
                    cattieX = 0 // réapparaît à gauche du nouveau slide
                    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`
                    updateArrows();
                } else {
                    cattieX = slideWidth - 100 // bloque si dernier slide
                }
            }

// aller à gauche (slide précédente)
            if (cattieX < 0) {
                if (slideIndex > 0) {
                    slideIndex--
                    cattieX = slideWidth - 100 // réapparaît à droite du précédent
                    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
                    updateArrows();
                   
                } else {
                    cattieX = 0 // bloque si premier slide
                }
            }
        });
           

        document.addEventListener("keyup", (e) => {
            if (e.key === "ArrowLeft")  movingLeft = false, arrow_left.classList.remove("left-active");
            if (e.key === "ArrowRight") movingRight = false, arrow_right.classList.remove("right-active");
            if (!movingLeft && !movingRight) showIdle();
        });

        function loop() {
            if (movingLeft)  cattieX -= speed;
            if (movingRight) cattieX += speed;
            cattie.style.left = cattieX + "px";
            requestAnimationFrame(loop);
        }
        loop();
