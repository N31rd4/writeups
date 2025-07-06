<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit();
}

$db = new SQLite3('../nocturnal_database/nocturnal_database.db');
$user_id = $_SESSION['user_id'];
$username = $_SESSION['username'];

// Handle file upload
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $target_dir = "uploads/";
    $file_name = basename($_FILES["fileToUpload"]["name"]);
    $target_file = $target_dir . $file_name;
    $file_type = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

    $allowed_types = array("pdf", "doc", "docx", "xls", "xlsx", "odt");

    if (in_array($file_type, $allowed_types)) {
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
            $stmt = $db->prepare("INSERT INTO uploads (user_id, file_name) VALUES (:user_id, :file_name)");
            $stmt->bindValue(':user_id', $user_id, SQLITE3_INTEGER);
            $stmt->bindValue(':file_name', $file_name, SQLITE3_TEXT);
            $stmt->execute();
        } else {
            echo "Error uploading file.";
        }
    } else {
        echo "Invalid file type. pdf, doc, docx, xls, xlsx, odt are allowed.";
    }
}

// Get user's uploaded files
$stmt = $db->prepare("SELECT * FROM uploads WHERE user_id = :user_id");
$stmt->bindValue(':user_id', $user_id, SQLITE3_INTEGER);
$files = $stmt->execute();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <?php if ($username === 'admin' || $username === 'amanda'): ?>
            <p><a href="/admin.php">Go to Admin Panel</a></p>
        <?php endif; ?>
         <h1>Welcome, <?php echo htmlspecialchars($username); ?></h1>

        <h2>Upload File</h2>
        <form action="" method="post" enctype="multipart/form-data">
            <input type="file" name="fileToUpload" required>
            <button type="submit">Upload File</button>
        </form>

        <h2>Your Files</h2>
        <ul>
            <?php while ($row = $files->fetchArray()): ?>
                <li>
                    <a href="view.php?username=<?php echo urlencode($username); ?>&file=<?php echo urlencode($row['file_name']); ?>">
                        <?php echo htmlspecialchars($row['file_name']); ?>
                    </a>
                    <span>(Uploaded on <?php echo $row['upload_time']; ?>)</span>
                </li>
            <?php endwhile; ?>
        </ul>

        <a href="logout.php" class="logout">Logout</a>
    </div>
</body>
</html>