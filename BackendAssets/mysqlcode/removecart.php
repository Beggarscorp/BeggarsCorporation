<?php
include("../db.php");
$cartid=$_GET['id'];
if(isset($cartid))
{
    $sql="DELETE FROM `productscart` WHERE `cartid`=$cartid";
    $result=mysqli_query($conn,$sql);
    if($result)
    {
        header("Location:/shop.php?delete=true");
        exit();
    }
    else
    {
        header("Location:/shop.php?delete=false");
        exit();

    }
}

?>