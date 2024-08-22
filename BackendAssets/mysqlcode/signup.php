<?php
include '../db.php';   

if ($_SERVER['REQUEST_METHOD'] === 'POST')
{
      $fname=$_POST['fname'];
      $lname=$_POST['lname'];
      $email=$_POST['email'];
      $password=$_POST['password'];
      $sql = "INSERT INTO user (`First-name`, `Last-name`,`email`,`password`) VALUES ('$fname', '$lname','$email','$password')";
  
  if ($conn->query($sql) === TRUE) {
    header("Location: /login.php");
    exit();
  }
   else 
   {
    header("Location: /signup.php");
    exit();
    }
  
}
?>