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
    <?php include("header.php") ?>
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
    <div class="direction"></div>
    <div class="slides">
        <div class="slide" id="home">
            <video autoplay muted loop>
                <source src="decor/Decor_foret_etherea_slide1.mp4" type="video/mp4">
            </video>
        </div>
        <div class="slide" id="about">
            <video autoplay muted loop>
                <source src="decor/Decor_foret_etherea_slide2.mp4" type="video/mp4">
            </video>
        </div>
        <div class="slide" id="character">
            <video autoplay muted loop>
                <source src="decor/Decor_foret_etherea_slide2.mp4" type="video/mp4">
            </video>
        </div>
        <div class="slide" id="level">
            <video autoplay muted loop>
                <source src="decor/Decor_foret_etherea_slide2.mp4" type="video/mp4">
            </video>
        </div>
    </div>

    <script src="script.js"></script>
</body>

</html>