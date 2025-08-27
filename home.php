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
            <div class="content-about">
                <h1>Welcome to Etherea !</h1>
                <p>Dive into a 2D adventure where friendship, courage, and magic come together. Follow Ava, a young heroine from Terraflora, who has always been fascinated by the legend of Etherea. <strong>A mysterious world where magic truly exists.</strong></p>

                <P>On her 18th birthday, the village sage entrusts her with <strong>an ancient artifact,</strong> capable of revealing the fragments of a legendary key. With her friends by her side, Ava embarks on a perilous journey through diverse and enchanting worlds, seeking to unlock the gates of Etherea and uncover the secrets they hold.</P>

                <p>If you want to discover more, head to the left: there you’ll find <strong>the characters and the different worlds of Etherea.</strong> Already convinced? <strong>Just click the Download button !</strong></p>
            </div>
        </div>
        <div class="slide" id="character">
            <video autoplay muted loop>
                <source src="decor/Decor_foret_etherea_slide2.mp4" type="video/mp4">
            </video>
        </div>
        <div class="slide" id="worlds">
            <video autoplay muted loop>
                <source src="decor/Decor_foret_etherea_slide2.mp4" type="video/mp4">
            </video>
        </div>
        <div class="slide" id="download-slide">
            <video autoplay muted loop>
                <source src="decor/Decor_foret_etherea_slide2.mp4" type="video/mp4">
            </video>
        </div>
    </div>

    <script src="script.js"></script>
</body>

</html>