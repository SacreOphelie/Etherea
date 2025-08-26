// AOS.init();

        // Curseur
        const move = document.getElementById("move");

        console.log("refresh")

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

        // CatTie bouge grâce aux flèches

        const cattie_idl = document.getElementById("cattie_idl");
        const cattie_run = document.getElementById("cattie_run");
        const cattie = document.querySelector(".cattie")
        const speed = 2.5; // sa vitesse
        let movingLeft = false; // lorsque il va bouger vers la gauche 
        let movingRight = false; // bouger vers la droite

        // Arrow
        const arrow_right = document.getElementById("right")
        const arrow_left = document.getElementById("left")

        // Slides
        const slides = document.querySelector(".slides")
        let slideIndex = 0 
        const slideWidth = window.innerWidth
        let cattieX = 0


        function showIdle() {
            cattie_idl.style.opacity = 1;
            cattie_run.style.opacity = 0;
            }
        function showRun() {
            cattie_idl.style.opacity = 0;
            cattie_run.style.opacity = 1;
            }

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
                    if (slideIndex < 3) {
                        slideIndex++
                        cattieX = 0 // réapparaît à gauche du nouveau slide
                        slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`
                    } else {
                        cattieX = slideWidth - 100 // bloque si dernier slide
                    }
                }

                // aller à gauche (slide précédente)
                if (cattieX < 0) {
                    if (slideIndex > 0) {
                        slideIndex--
                        cattieX = slideWidth - 100 // réapparaît à droite du précédent
                        slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`
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
