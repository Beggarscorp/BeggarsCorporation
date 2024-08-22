<?php
include('../db.php');

if (isset($_POST['submit'])) {
    echo $productId = $_POST['id']."<br>";
    echo $productName = $_POST['name']."<br>";
    echo $productDescription = $_POST['description']."<br>";
    echo $productPrice = $_POST['price']."<br>";
    echo $productCategory = $_POST['category']."<br>";
    echo $productStock = $_POST['stock']."<br>";
    $productImage="";
    if ($_FILES['image']['name'] != "") {    
       $productImage = $_FILES['image']['name'];
       $productImageTmpName = $_FILES['image']['tmp_name'];
       $folder = '../assets/images/ProductImages/'. $productImage;
       move_uploaded_file($productImageTmpName,$folder);
    }
    else
    {
        $productImage = $_POST['defaultImgPath'];

    }

    echo $productId, $productName, $productDescription, $productPrice, $productCategory, $productStock, $productImage;

    $sql = "UPDATE `products` SET `productname`='$productName',`discription`='$productDescription',`price`='$productPrice',`category`='$productCategory',`stock`='$productStock',`productimage`='$productImage' WHERE `id`='$productId'";
    if ($conn->query($sql)) {
        header("Location: /allproduct.php");
        exit();
    }
    echo $sql;
}
