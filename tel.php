<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style_tel.css">
    <script>
        function verifierTaille() {
        if (window.innerWidth > 1500) {
            window.location.href = "game.php";
        }
        }

        verifierTaille();
        window.addEventListener("resize", verifierTaille);
    </script>
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
    <div class="slide" id="about">
        <img src="illu/tel/tablette_about_haut.png" alt="" id="image_haut_about">
        <div class="content-about">
            <div class="texte-about">     
                <p>Dive into a 2D adventure where friendship, courage, and magic come together. The companions world is slowly <strong>falling into darkness</strong>, the forests lose their glow, the rivers their light. To save their home, they must travel to Etherea, the legendary world where magic was born.</p>
        
                <P>Their journey will lead them through <strong>mysterious lands filled with danger and wonder</strong>, where they’ll have to learn to master the ancient art of magic to restore balance and bring light back to their world.</P>
        
                <p>If you want to discover more, <strong>head to the bottom</strong> : there you’ll find the characters and the different worlds of Etherea. Already convinced? <strong>Open the menu and go on Download !</strong> </p>
            </div>
        </div>
        <img src="illu/tel/tablette_about_bas.png" alt="" id="image_bas_about">
    </div>
    <div class="slide" id="character">
        <h1 id="titre_character">Choose your character !</h1>
        <div class="content-character">            
            <a href="character_cattie.php" class="card-character" id="card-cattie">
                <div class="character-img">
                    <video src="perso/CatTie_idl.webm" autoplay muted loop ></video>
                </div>
            </a>
            <a href="character_lys.php" class="card-character" id="card-lys">
                <div class="character-img">
                    <video src="perso/Lys_idl.webm" autoplay muted loop></video>
                </div>
            </a>
            <a href="character_lavende.php" class="card-character" id="card-lavende">
                <div class="character-img">
                    <video src="perso/Lavende_idl.webm" autoplay muted loop></video>
                </div>
            </a>
        </div>
        <img src="illu/tel/tablette_character_bas.png" alt="" id="image_bas_character">
    </div>

    <div class="slide" id="worlds">
        <h1 id="titre_worlds">Choose your world !</h1>
        <div class="container_worlds">
            <a href="foret.php" id="foret" class="worlds_choice"></a>
            <a href="prairie.php" id="prairie" class="worlds_choice"></a>
            <a href="desert.php" id="desert" class="worlds_choice"></a>
            <a href="jungle.php" id="jungle" class="worlds_choice"></a>
        </div>
        <img src="illu/tel/tablette_world_bas.png" alt="" id="image_bas_world">
    </div>
    <div class="slide" id="download">
        <div class="content-download">
            <div class="text-download">
                <h3>Did you like this website ?</h3>
                <p>I hope you enjoyed discovering this little piece of my universe! <strong>The full game will be released very soon.</strong> If you’re curious to see more, you can already <strong>pre-order</strong> it here to be among the first to explore the world, meet its characters, and uncover the story behind it.</p>
            </div>
            <div class="available"><img src="illu/icone/pc.png" alt=""><p>only available on PC</p></div>
            <div class="content-preorder">
                <a href="https://store.steampowered.com" id="preorder">Pre-Order</a>
            </div>
        </div>
        <img src="illu/tel/tablette_download.png" alt="" id="image_bas_download">
        
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