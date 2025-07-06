<?php
session_start();

if (isset($_SESSION['user_id'])) {
    header('Location: dashboard.php');
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Nocturnal</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to Nocturnal</h1>
        <p>Please <a href="login.php">login</a> or <a href="register.php">register</a> to start uploading and viewing your files.</p>

        <h2>Why Use Nocturnal?</h2>
        <ul>
            <li><strong>Seamless Uploads:</strong> Easily upload Word, Excel, and PDF documents with just a few clicks.</li>
            <li><strong>Access Anytime, Anywhere:</strong> Access your files from any device, ensuring flexibility and convenience.</li>
            <li><strong>User-Friendly Interface:</strong> Enjoy a simple and intuitive interface that makes file management effortless.</li>
            <li><strong>Collaboration Features:</strong> Share your documents with others for easy collaboration and feedback.</li>
            <li><strong>Regular Backups:</strong> Your files are backed up regularly, preventing loss and ensuring reliability.</li>
            <li><strong>24/7 Support:</strong> Our dedicated support team is available around the clock to assist you with any issues.</li>
        </ul>
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, please reach out to us at <a href="mailto:support@nocturnal.htb">support@nocturnal.htb</a>.</p>
    </div>
</body>
</html>