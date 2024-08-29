<?php
include "../db.php";
error_reporting(0);

if (isset($_POST['category']) && isset($_POST['cateSubmit'])) {
    $category = $_POST['category'];
    $sql = "SELECT * FROM `category` WHERE `category` = '$category'";
    $result = mysqli_query($conn, $sql);
    $numrow = mysqli_num_rows($result);
    if ($numrow === 0) {
        $sql = "INSERT INTO `category`(`category`) VALUES ('$category')";
        if ($conn->query($sql)) {
            $msg = "Category added";
            header("Location:/addproduct.php?msg=" . $msg);
            exit();
        }
        $conn->close();
    }
    else
    {
        $msg = "Category already exists";
        header("Location:/addproduct.php?msg=". $msg);
    }
}
 else 
 {
    echo "Hello world";
}
