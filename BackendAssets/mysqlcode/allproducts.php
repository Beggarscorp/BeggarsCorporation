<?php
include("BackendAssets/db.php");
if(isset($_POST['delete'])){
 deleteProduct();
}
if(isset($_POST['update'])){
 updateProduct();
}

      $sql="SELECT * FROM `products`";
      $Allproducts=$conn->query($sql);

      $data=[];
      if ($Allproducts) {
        foreach ($Allproducts as $row) {    
          $data[]=$row;
        }
          } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
          }
          $conn->close();
  function deleteProduct(){
    $delete="Want to delete product";
    header("Location: /Backend/allproduct");
  }
  function updateProduct(){
    $update="Want to update product";
    header("Location: /Backend/allproduct");
  }
?>