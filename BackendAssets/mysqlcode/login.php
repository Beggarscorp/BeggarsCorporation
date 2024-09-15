<?php
require("../Components/forsession.php");
include("../db.php");

$email = isset($_POST['email']) ? $_POST['email'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';
$msg="";

if($email != '' && $password != ""){
    if(!isset($_SESSION['user']))
    {
        $sql="SELECT * FROM `user` WHERE `email` = '$email'";
    $result = mysqli_query($conn, $sql);
    if(mysqli_num_rows($result) == 1){
        $row=mysqli_fetch_array($result);
        if(password_verify($password,$row['password']))
        {
            $_SESSION["user"] = $row['First_name'];
            header("Location: /shop.php");
            exit();
        }
        else
        {
            $msg="Credential wrong";
            header("Location: /login.php?msg=".$msg);
            exit();
        }
    }
    else
    {
        $msg="Credential wrong";
        header("Location: /login.php?msg=".$msg);
        exit();
    }
    }
    else
    {
        $msg="User already exists";
        header("Location: /shop.php?msg=".$msg);
        exit();
    }
}
elseif($email = '' || $password = ""){
    $msg="Put credential";
    header("Location: /login.php?msg=".$msg);
    exit();
}

?>