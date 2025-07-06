<?php ob_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View File</title>
    <style>
        body {
            font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
            background-color: #1c1f26;
            margin: 0;
            padding: 0;
            color: #e0e0e0;
            line-height: 1.7;
            font-size: 18px;
            transition: background-color 0.5s ease;
        }

        .container {
            max-width: 800px;
            margin: 60px auto;
            padding: 40px;
            background-color: #2a2d38;
            border-radius: 12px;
            box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);
            transition: transform 0.3s ease;
        }

        .container:hover {
            transform: translateY(-10px);
        }

        h1, h2 {
            color: #f1c40f;
            text-align: center;
            font-weight: 600;
            letter-spacing: 1px;
            margin-bottom: 25px;
            transition: color 0.3s ease;
        }

        h1 {
            font-size: 3em;
        }

        h2 {
            font-size: 2.2em;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            background-color: #2e333d;
            padding: 20px;
            margin-bottom: 15px;
            border: 1px solid #444;
            border-radius: 8px;
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }

        li:hover {
            background-color: #3b404b;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        a {
            color: #f39c12;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        a:hover {
            color: #e67e22;
            text-decoration: underline;
        }

        .error {
            color: #e74c3c;
            font-weight: bold;
            border: 1px solid #e74c3c;
            background-color: #3b2023;
            padding: 12px;
            border-radius: 6px;
        }

        .success {
            color: #2ecc71;
            font-weight: bold;
            border: 1px solid #2ecc71;
            background-color: #203b30;
            padding: 12px;
            border-radius: 6px;
        }

        .logout {
            margin-top: 40px;
            text-align: center;
            font-weight: bold;
            color: #95a5a6;
        }

        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(32,40,51,1) 0%, rgba(28,31,40,1) 100%);
            z-index: -1;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>File Viewer</h1>

    <?php
    session_start();

    if (!isset($_SESSION['user_id'])) {
        header('Location: login.php');
        exit();
    }

    $db = new SQLite3('../nocturnal_database/nocturnal_database.db');

    $username = $_GET['username'];
    $file = basename($_GET['file']);

    $allowed_extensions = ["pdf", "doc", "docx", "xls", "xlsx", "odt"];
    $file_extension = pathinfo($file, PATHINFO_EXTENSION);

    if (!in_array($file_extension, $allowed_extensions)) {
        echo "<div class='error'>Invalid file extension.</div>";
        exit();
    }

    $stmt = $db->prepare('SELECT id FROM users WHERE username = :username');
    $stmt->bindValue(':username', $username, SQLITE3_TEXT);
    $result = $stmt->execute();

    if ($row = $result->fetchArray()) {
        $user_id = $row['id'];

        $stmt = $db->prepare('SELECT * FROM uploads WHERE user_id = :user_id AND file_name = :file');
        $stmt->bindValue(':user_id', $user_id, SQLITE3_INTEGER);
        $stmt->bindValue(':file', $file, SQLITE3_TEXT);
        $result = $stmt->execute();

        if ($row = $result->fetchArray()) {
            $file_path = 'uploads/' . $file;

            if (file_exists($file_path)) {
                ob_clean();
                header('Content-Type: application/octet-stream');
                header('Content-Disposition: attachment; filename="' . basename($file_path) . '"');
                readfile($file_path);
                exit();
            } else {
                echo "<div class='error'>File not found on the server.</div>";
                showAvailableFiles($user_id, $db);
            }
        } else {
            echo "<div class='error'>File does not exist.</div>";
            showAvailableFiles($user_id, $db);
        }
    } else {
        echo "<div class='error'>User not found.</div>";
    }

    function showAvailableFiles($user_id, $db) {
        $stmt = $db->prepare('SELECT file_name FROM uploads WHERE user_id = :user_id');
        $stmt->bindValue(':user_id', $user_id, SQLITE3_INTEGER);
        $result = $stmt->execute();

        echo "<h2>Available files for download:</h2>";
        echo "<ul>";

        while ($row = $result->fetchArray()) {
            $file_name = $row['file_name'];
            echo '<li><a href="view.php?username=' . urlencode($_GET['username']) . '&file=' . urlencode($file_name) . '">' . htmlspecialchars($file_name) . '</a></li>';
        }

        echo "</ul>";
    }
    ?>

</div>

</body>
</html>