<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style_index.css">
    <title>FAQ</title>
</head>
<body>
<header>
    <a href="index.php" class="echap"><img src="illu/echap/echap.png" alt=""></a>
</header>
    <div id="move"></div>
    <video autoplay muted loop playsinline id="fond-menu">
        <source src="decor/home.webm" type="video/webm">
        <!-- pour IOS -->
        <source src="decor/home.mp4" type="video/mp4">
    </video>
    <div class="container-faq">
        <div class="content-faq">
            <h1>FAQ</h1>
            <div class="faq-item">
                <div class="faq-question"><h2>What is the goal of the game ?</h2>
                    <div class="faq-arrow"></div>
                </div>   
                <div class="faq-answer">
                    <p>The goal of the game is to reach Etherea. But there will be obstacles along the way, shadows following your step. You must prove yourself worthy of reaching the city of ancient magic.</p>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question"><h2>On which platform is the game available ?</h2>
                    <div class="faq-arrow"></div>
                </div>   
                <div class="faq-answer">
                    <p>For now, the game is only available on Windows and mainly on Steam.</p>
                </div>
            </div>
        </div>
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
    const items = document.querySelectorAll('.faq-item');

    items.forEach(item => {
      item.querySelector('.faq-question').addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
</script>
</body>
</html>