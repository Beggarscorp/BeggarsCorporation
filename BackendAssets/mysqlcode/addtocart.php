
<?php
include("../db.php");

$productId=$_GET['id'];
$cate=$_GET['cate'];

session_start();
if(isset($_SESSION['user']) && $productId != "")
{
    $user = $_SESSION['user'];
    $sql="SELECT * FROM `user` WHERE `First-name` = '$user'";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_assoc($result);
    $user_id= $row["id"];
    $sqlThree="SELECT * FROM `productscart` WHERE `user_id`=$user_id";
    $resultThree = mysqli_query($conn,$sqlThree);
    $idCheck=[];
    foreach($resultThree as $key => $value)
    {
        $idCheck[]=$value["product_id"];
    }
    if($resultThree && in_array($productId,$idCheck) === false)
    {
        $sqlTwo= "INSERT INTO `productscart` (`user_id`, `product_id`) VALUES ('$user_id', '$productId')";
        $resultTwo = mysqli_query($conn,$sqlTwo);
        if($resultTwo)
        {
            if(isset($_GET['page']))
            {
                header("Location: /singleProduct.php?cart=updated&id=$productId&cate=$cate");
                exit();
            }
            else
            {
                header("Location: /shop.php?cart=updated");
                exit();
            }
        }
        else
        {
            header("Location: /shop.php?cart=not_updated");
            exit();
        }   
    }
    else
    {
        if(isset($_GET['page']))
        {
            header("Location:/singleProduct.php?cart=added_already&id=$productId&cate=$cate");
            exit();
        }
        else
        {
            header("Location:/shop.php?cart=added_already");
            exit();
        }
    }

}
else
{
    header("Location: /login.php");
    exit();
}
?>
