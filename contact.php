<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style_index.css">
    <title>Contact</title>
</head>
<body>
<header>
    <a href="index.php" class="echap"><img src="illu/echap/echap.png" alt=""></a>
</header>
    <div id="move"></div>
    <video autoplay muted loop playsinline id="fond-menu">
        <source src="decor/download.webm" type="video/webm">
        <!-- pour IOS -->
        <source src="decor/download.mp4" type="video/mp4">
    </video>
    <div class="container-contact">
        <div class="content-contact">
            <h1>Contact</h1>
            <?php 
                if(isset($_GET['success'])) {
                    echo "<p class='success'>Message sent successfully !</p>";
                }
                if(isset($_GET['error'])) {
                    echo "<p class='error'>An error occurred, please try again.</p>";
                }
            ?>
            <form action="send_mail.php" method="POST" class="contact-form">
                <input type="text" name="sujet" required placeholder="Subject">
                <input type="text" name="nom" placeholder="Name">
                <input type="email" name="email" required placeholder="Mail">
                <textarea name="message" rows="5" required placeholder="Message"></textarea>
                <button type="submit">Send</button>
            </form>

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
    // la touche echap ramène à index.php 
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            window.location.href = "index.php";
        }
    });
    if (window.innerWidth <= 500) {
        move.style.display = "none";
    }
</script>
</body>
</html>