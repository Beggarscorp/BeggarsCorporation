<?php
include '../db.php';


$email = isset($_POST['email']) ? $_POST['email'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';
$confirm_password = isset($_POST['confirm-password']) ? $_POST['confirm-password'] : '';
$showerror=false;
$showmsg=false;

if($email != '' && $password != "" && $password === $confirm_password){
    $showmsg=true;
    session_start();
    $_SESSION["user"] = $email;
    header("Location: /welcome.php");
    exit();
}
elseif($email = '' || $password = "" || $password != $confirm_password){
    $showerror=true;
    header("Location: /login.php");
    exit();
}

?>