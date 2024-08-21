<?php
include('./BackendAssets/db.php');

if (isset($_POST['delete'])) {
  deleteProduct();
}
// if (isset($_POST['update'])) {
//   updateProduct();
// }

$sql = "SELECT * FROM `products`";
$Allproducts = $conn->query($sql);

$data = [];
if ($Allproducts) {
  foreach ($Allproducts as $row) {
    $data[] = $row;
  }
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
function deleteProduct()
{
  include '../db.php';
  $sql = "DELETE FROM `products` WHERE id=" . $_POST['id'];
  if ($conn->query($sql) === TRUE) {
    $delete = "Want to delete product";
    header("Location: /allproduct.php");
  }
}
// function updateProduct()
// {
//   include './BackendAssets/db.php';
//   header("Location: /allproducts.php");
// }
