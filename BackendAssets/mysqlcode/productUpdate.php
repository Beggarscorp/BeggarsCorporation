<?php
include('../db.php');

if (isset($_POST['submit'])) {
    $productId = $_POST['id'];
    $productName = $_POST['name'];
    $productDescription = $_POST['description'];
    $productPrice = $_POST['price'];
    $productCategory = $_POST['category'];
    $productStock = $_POST['stock'];
    $productImage = $_FILES['image']['name'];
    $productImageTmpName = $_FILES['image']['tmp_name'];
    $folder = '../assets/images/ProductImages/'. $productImage;

    echo $productId, $productName, $productDescription, $productPrice, $productCategory, $productStock, $productImage;

    $sql = "UPDATE `products` SET `productname`='$productName',`discription`='$productDescription',`price`='$productPrice',`category`='$productCategory',`stock`='$productStock',`productimage`='$productImage' WHERE `id`='$productId'";
    if ($conn->query($sql)) {
        move_uploaded_file($productImageTmpName,$folder);
        header("Location: /allproduct.php");
        exit();
    }
    echo $sql;
}
