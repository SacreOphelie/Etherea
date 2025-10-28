<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style_tel.css">
    <title>Etherea</title>
</head>
<body>
    <?php include("partials/header.php") ?>
    <div class="slide" id="home">
        <video autoplay muted loop playsinline class="fond" id="video_home">
            <source src="decor/home.webm" type="video/webm" >
            <source src="decor/home.mp4" type="video/mp4" >
        </video>
    </div>
    <script>
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
    </script>
</body>
</html>