

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"> -->
    <link rel="stylesheet" href="style_index.css">
    <?php
        include("partials/favicon.php");
    ?>
    <title>Etherea</title>
</head>
<body>
    <div id="move"></div>
    <video autoplay muted loop playsinline id="fond-menu">
        <source src="decor/prarie.webm" type="video/webm">
        <!-- pour IOS -->
        <source src="decor/prarie.mp4" type="video/mp4">
    </video>
    <div class="menu">
        <div class="logo-menu">
            <img src="logo/logoEtherea_ombre.png" alt="">
            <div class="point"> • </div>
            <h1 id="video-games">Video Games</h1>
        </div>
        <div class="content-menu">
            <a href="game.php" id="discover" class="bouton-menu"><h1>Discover</h1></a>
            <a href="faq.php" id="faq" class="bouton-menu"><h1>FAQ</h1></a>
            <a href="contact.php" id="contact" class="bouton-menu"><h1>Contact</h1></a>
            <a id="quit" class="bouton-menu"><h1>Quit</h1></a>
        </div>
        <?php include("partials/footer.php") ?>
    </div>
    <script>
        const move = document.getElementById("move");

        document.body.onpointermove = event => {
            const { clientX, clientY } = event;

            move.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
        
            }, {duration: 1000, fill: "forwards"})
        }
        // modifier le lien quand on passe en dessous de 1500px vers le lien de la version mobile
        const lien_tel = document.getElementById("discover");
        if (window.innerWidth <= 1500) {
            lien_tel.href = "tel.php";
        }
    </script>
</body>
</html>