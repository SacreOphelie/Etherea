

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
    <title>Menu</title>
</head>
<body>
    <div id="move"></div>
    <video autoplay muted loop id="fond-menu">
        <source src="decor/prarie.webm" type="video/mp4">
    </video>
    <div class="menu">
        <div class="logo-menu">
            <img src="logo/logoEtherea_ombre.png" alt="">
            <div class="point"> • </div>
            <h1 id="video-games">Video Games</h1>
        </div>
        <div class="content-menu">
            <a href="game.php" id="play" class="bouton-menu"><h1>Play</h1></a>
            <a id="level" class="bouton-menu"><h1>Level</h1></a>
            <a id="settings" class="bouton-menu"><h1>Settings</h1></a>
            <a id="quit" class="bouton-menu"><h1>Quit</h1></a>
        </div>
        <?php include("partials/footer.php") ?>
    </div>

    <!-- <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> -->
    <script>
        const move = document.getElementById("move");

        document.body.onpointermove = event => {
        const { clientX, clientY } = event;

        move.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
    
        }, {duration: 1000, fill: "forwards"})

        }
        // AOS.init();
    </script>
</body>
</html>