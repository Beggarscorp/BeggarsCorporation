
<?php
include('../db.php');

if(isset($_POST["place_order"]))
{
    $name=$_POST["username"];
    $email=$_POST["useremail"];
    $number=$_POST["usernumber"];
    $userid=$_POST['useridforstoreindatabase'];
    $userstate=$_POST["state"];
    $usercity=$_POST["city"];
    $userpincode=$_POST["userpincode"];
    $useraddress=$_POST["useraddress"];
    $totalPrice=$_POST["totalPrice"];
    $productidandquantity=$_POST['productidandquantity'];
    
    if($name != "" && $email != "" && $number != "" && $userstate != "" && $usercity != "" && $userpincode != "" && $useraddress != ""  && $userid != "" && $userid != "" && $totalPrice != "" && $productidandquantity != "")
    {
        echo $productidandquantity;

        $sql="INSERT INTO `orders`(`userid`, `productidandquantity` ,`username`, `useremail`, `usernumber`, `userstate`, `usercity`, `userpincode`, `useraddress`, `totalprice`) VALUES ('$userid', '$productidandquantity', '$name','$email','$number','$userstate','$usercity','$userpincode','$useraddress','$totalPrice')";

        $result = $conn->query($sql);

        if($result)
        {
            header("Location: /checkout.php?order=succesfull");
            exit(0);
        }
        else
        {
            header("Location: /checkout.php?order=failed");
            exit(0);
        }
    }
}
?>