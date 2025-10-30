<?php
    if($_SERVER["REQUEST_METHOD"] === "POST") {
        $nom = htmlspecialchars($_POST["nom"]);
        $email = htmlspecialchars($_POST["email"]);
        $message = htmlspecialchars($_POST["message"]);
        $sujet = htmlspecialchars($_POST["sujet"]);

        $to = "etherea.game@hotmail.com";
        $subject = $sujet;
        $body = "Nom : $nom\nEmail : $email\n\nMessage :\n$message";
        $headers = "From: $email\r\nReply-To: $email\r\n";

        if(mail($to, $subject, $body, $headers)) {
            header("Location: contact.php?success=1");
            exit;
        } else {
            header("Location: contact.php?error=1");
            exit;
        }
    } else {
        header("Location: contact.php");
        exit;
    }
?>