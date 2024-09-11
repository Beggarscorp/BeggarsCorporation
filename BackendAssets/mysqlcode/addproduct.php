<?php
include '../db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['submit'])) {


  $proname = $_POST['name'];
  $prodis = $_POST['description'];
  $proprice = $_POST['price'];
  $procategory = $_POST['category'];
  $prostock = $_POST['stock'];
  $sizeAndfit = $_POST['sizeAndfit'];
  $materialAndCare = $_POST['materialAndCare'];
  $spacification = $_POST['spacification'];
  $min_order = $_POST['min_order'];

  // Check if file was uploaded without errors
  if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK && isset($_FILES["productGallery"])) {
    $imageName = $_FILES['image']['name'];
    $tmpName = $_FILES['image']['tmp_name'];
    $folder = '../assets/images/ProductImages/' . $imageName;

    $imagesName=$_FILES['productGallery']['name'];
    $imagesNames=implode(',',$imagesName);
    $targetFolder="../assets/images/ProductGalleryImages/";
    if(!empty($imagesNames)) {
        foreach($imagesName as $i => $imageval) {
            $targetPath= $targetFolder . $imageval;
            move_uploaded_file($_FILES['productGallery']['tmp_name'][$i],$targetPath);
        }
    }

    // Insert data into the database
    $sql = "INSERT INTO products (`productname`, `discription`, `price`, `category`, `stock`, `productimage`, `sizeandfit`, `materialandcare`, `spacification`, `productimagegallery`, `min_order`) 
                VALUES ('$proname', '$prodis', '$proprice', '$procategory', '$prostock', '$imageName', '$sizeAndfit', '$materialAndCare', '$spacification', '$imagesNames', '$min_order')";

    $responseMsg = "";

    if ($conn->query($sql) === TRUE) {
      // Move the uploaded file
      if (move_uploaded_file($tmpName, $folder)) {
        $responseMsg = "File uploaded and moved successfully.";
      } else {
        $responseMsg = "Failed to move uploaded file.";
      }
    } else {
      $responseMsg = "Error inserting data into database: " . $conn->error;
    }

    echo $responseMsg; // Display response message for debugging
    header("Location: /addproduct.php?uploaded=true");
    exit();
  } else {
    echo "No file uploaded or file upload error.";
  }
}
