
<?php
include('../db.php');

$json = file_get_contents('php://input');

$data = json_decode($json, true);

$productid=(int)$data['procductid'];
$productQty=(int)$data['productQty'];
$productprice=(int)$data['productprice'];
$user=(int)$data['userid'];
$totalPrice=(int)$productprice*$productQty;


if($productid != "" && $productQty != "" && $productprice != "" && $user != "")
{
    $sql="INSERT INTO `checkout`(`userid`, `product_id`, `product_qty`, `productprice`, `totalprice`) VALUES ('$user','$productid','$productQty','$productprice','$totalPrice') ON DUPLICATE KEY UPDATE
    `product_qty` = VALUES(`product_qty`),
    `productprice` = VALUES(`productprice`),
    `totalprice` = VALUES(`totalprice`)";
    $result=$conn->query($sql);
    if($result)
    {
        echo json_encode(["msg"=>"Data inserted"]);
    }
    else
    {
        echo json_encode($conn->error);
    }
}


?>