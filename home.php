<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Home</title>
</head>

<body>
    <div id="move"></div>
    <div class="home">
        <header>
            <div id="logo"><img src="logo/logoE_blanc.png" alt="logo"></div>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Characters</a></li>
                    <li><a href="">Worlds</a></li>
                    <li id="download"><a href="">Download</a></li>
                </ul>
                <div class="dot"></div>
            </nav>
        </header>
        <video autoplay muted loop id="decor-foret">
            <source src="decor/Decor_foret_etherea.mp4" type="video/mp4">
        </video>
        <div class="cattie">
            <video id="cattie_idl" autoplay muted loop>
                <source src="perso/CatTie_idl.webm" type="video/webm">
            </video>
            <video id="cattie_run" autoplay muted loop>
                <source src="perso/CatTie_run.webm" type="video/webm">
            </video>
        </div>
        <div class="container-arrow">
            <div class="arrow"></div>
            <div class="arrow" id="up"></div>
            <div class="arrow"></div>
            <div class="arrow" id="left"></div>
            <div class="arrow" id="down"></div>
            <div class="arrow" id="right"></div>
        </div>
    </div>

    <script>
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
        const arrow_right = document.getElementById("right")
        let x = 100;
        const speed = 2.5; // sa vitesse
        let movingLeft = false; // lorsque il va bouger vers la gauche 
        let movingRight = false; // bouger vers la droite

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
        }
        if (e.key === "ArrowRight") { 
            movingRight = true; 
            cattie.style.transform = "scaleX(1)";  
            showRun();
            arrow_right.classList.add("right-active")
        }
        });

        document.addEventListener("keyup", (e) => {
            if (e.key === "ArrowLeft")  movingLeft = false;
            if (e.key === "ArrowRight") movingRight = false, arrow_right.classList.remove("right-active");
            if (!movingLeft && !movingRight) showIdle();
        });

        function loop() {
            if (movingLeft)  x -= speed;
            if (movingRight) x += speed;
            cattie.style.left = x + "px";
            requestAnimationFrame(loop);
        }
        loop();


    </script>
</body>

</html>