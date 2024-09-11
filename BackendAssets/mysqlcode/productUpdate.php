<?php
include('../db.php');

if (isset($_POST['submit'])) {
    $productId = $_POST['id'];
    $productName = $_POST['name'];
    $productDescription = $_POST['description'];
    $sizeAndfit=$_POST['sizeAndfit'];
    $materialandcare=$_POST['materialAndCare'];
    $spacification=$_POST['spacification'];
    $productPrice = $_POST['price'];
    $productCategory = $_POST['category'];
    $productStock = $_POST['stock'];
    $min_order= $_POST['min_order'];
    $productImage="";
    $productImageGallery="";
    $galleryfiles=$_FILES['productGallery']['name'];
    
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
    if($galleryfiles != [""])
    {
        $imagesName=$_FILES['productGallery']['name'];
       $productImageGallery=implode(',',$imagesName);
       $targetFolder="../assets/images/ProductGalleryImages/";
        if(!empty($productImageGallery)) {
        foreach($imagesName as $i => $imageval) {
           echo $targetPath= $targetFolder . $imageval;
            move_uploaded_file($_FILES['productGallery']['tmp_name'][$i],$targetPath);
        }
    }else
    {
        echo "failed";
    }
   }
    else
    {
        $productImageGallery=$_POST['defaultImgGalleryPath'];
    }

    $sql = "UPDATE `products` SET `productname`='$productName',`discription`='$productDescription',`price`='$productPrice',`category`='$productCategory',`stock`='$productStock',`productimage`='$productImage',`sizeandfit`='$sizeAndfit',`materialandcare`='$materialandcare',`spacification`='$spacification', `productimagegallery`='$productImageGallery' , `min_order`='$min_order' WHERE `id`='$productId'";
    if ($conn->query($sql)) {
        header("Location: /allproduct.php");
        exit();
    }
}
