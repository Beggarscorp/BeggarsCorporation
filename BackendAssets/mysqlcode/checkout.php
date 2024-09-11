
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
    $productidsAndQuantites=$_POST["productidsAndQuantites"];
    $useridforstoreindatabase=$_POST["useridforstoreindatabase"];
    $totalPrice=$_POST["totalPrice"];
    
    if($name != "" && $email != "" && $number != "" && $userstate != "" && $usercity != "" && $userpincode != "" && $useraddress != "" && $productidsAndQuantites != "" && $useridforstoreindatabase != "" && $userid != "" && $totalPrice != "")
    {
        $productidQuantityData=json_decode($productidsAndQuantites,true);
        function takeFreshproudctides($productIdData)
        {
            global $orderproductIDs;
            $removeundifined=str_replace("undefined","",$productIdData);
            $orderproductIDs=rtrim($removeundifined,",");
        }
        function takeFreshproductQuantites($productQty)
        {
            global $orderproductQty;
            $removeundifined=str_replace("undefined","",$productQty);
            $orderproductQty=rtrim($removeundifined,",");
        }
        takeFreshproductQuantites($productidQuantityData['quantity']);
        takeFreshproudctides($productidQuantityData['productID']);

        $sql="INSERT INTO `orders`(`userid` ,`username`, `useremail`, `usernumber`, `userstate`, `usercity`, `userpincode`, `useraddress`, `productids`, `productqty`, `totalprice`) VALUES ('$userid','$name','$email','$number','$userstate','$usercity','$userpincode','$useraddress','$orderproductIDs','$orderproductQty','$totalPrice')";

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