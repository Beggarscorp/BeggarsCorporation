<?php
include '../db.php';  

if ($_SERVER['REQUEST_METHOD'] === 'POST')
{
      $fname=$_POST['fname'];
      $lname=$_POST['lname'];
      $email=$_POST['email'];
      $password=$_POST['password'];
      $msg="";

      session_start();
      if(!isset($_SESSION['user']))
      {
        $sql="SELECT * FROM `user` WHERE `email` = '$email'";
      $result=mysqli_query($conn, $sql);
      if(mysqli_num_rows($result) == 0)
      {
        $hash=password_hash($password, PASSWORD_DEFAULT );
        $sql = "INSERT INTO user (`First-name`, `Last-name`,`email`,`password`) VALUES ('$fname', '$lname','$email','$hash')";
        if ($conn->query($sql) === TRUE) {
          header("Location: /login.php");
          exit();
        }
         else 
         {
          $msg="User already exists";
          header("Location: /signup.php?msg=".$msg);
          exit();
        }
      }
      else
      {
        $msg="User already exists";
        header("Location: /signup.php?msg". $msg);
        exit();
      }

      }
      else
      {
        $msg="User already exists";
        header("Location:/welcome.php?msg=".$msg);
        exit();
      }
}
?>