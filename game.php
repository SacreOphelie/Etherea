<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <?php
        include("partials/favicon.php");
    ?>
    <title>Etherea</title>
</head>

<body>
    <div id="move"></div>
    <?php include("partials/header.php") ?>
    <div class="cattie">
        <video id="cattie_idl" autoplay muted loop>
            <source src="perso/CatTie_idl.webm" type="video/webm">
        </video>
        <video id="cattie_run" autoplay muted loop>
            <source src="perso/CatTie_run.webm" type="video/webm">
        </video>
        <video id="lys_idl" autoplay muted loop>
            <source src="perso/Lys_idl.webm" type="video/webm">
        </video>
        <video id="lys_run" autoplay muted loop>
            <source src="perso/Lys_run.webm" type="video/webm">
        </video>
        <video id="lavende_idl" autoplay muted loop>
            <source src="perso/Lavende_idl.webm" type="video/webm">
        </video>
        <video id="lavende_run" autoplay muted loop>
            <source src="perso/Lavende_run.webm" type="video/webm">
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
    <div class="direction_right direction">
        <div class="direction_texte_right"></div>
        <img src="illu/arrow/direction_right.png" alt="">
    </div>
    <div class="direction_left direction">
        <img src="illu/arrow/direction_left.png" alt="">
        <div class="direction_texte_left"></div>
    </div>
    <div class="slides">
        <?php include("pages/home.php") ?>
        <?php include("pages/about.php") ?>   
        <?php include("pages/character.php") ?>   
        <?php include("pages/worlds.php") ?>   
        <?php include("pages/download.php") ?>         
    </div>

    <script src="script.js"></script>
</body>

</html>