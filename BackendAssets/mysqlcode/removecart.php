<?php
include("../db.php");
$cartid=$_GET['id'];
$page=$_GET['page'];
if(isset($cartid))
{
    $sql="DELETE FROM `productscart` WHERE `cartid`=$cartid";
    $result=mysqli_query($conn,$sql);
    if($result)
    {
        if($_GET['page'] == "/checkout.php")
        {
            header("Location:$page?delete=true&id=$cartid");
            exit();
        }
        else
        {
            header("Location:$page?delete=true");
            exit();
        }
    }
    else
    {
        if($_GET['page'] == "/checkout.php")
        {
            header("Location:$page?delete=false&id=$cartid");
            exit();
        }
        else
        {
            header("Location:$page?delete=false");
            exit();
        }

    }
}

?>