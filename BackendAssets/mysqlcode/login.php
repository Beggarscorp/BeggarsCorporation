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

    $userdata=mysqli_fetch_assoc($result);
    
    if(mysqli_num_rows($result) === 1){

        if((int)$userdata['user_verified'] === 1)
        {

    
            if(password_verify($password,$userdata['password']))
    
            {
                $_SESSION["user"] = $userdata['First_name'];
    
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
            $msg="Your email not verified";

            header("Location: /login.php?msg=".$msg);

            exit();
        }
    }       
    else
    {
        $msg="Email or password wrong";

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