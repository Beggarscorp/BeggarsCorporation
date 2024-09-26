
<?php
require('../Components/forsession.php');
include("../db.php");

$userid=$_SESSION['id'];

if(isset($_FILES['upload_user_image']) && $_SERVER['REQUEST_METHOD'] === 'POST')
{
    $filename=basename($_FILES['upload_user_image']['name']);
    $filetmpname=$_FILES['upload_user_image']['tmp_name'];

    $insertuserimgsql=$conn->prepare("UPDATE `user` SET user_image = ? WHERE `user`.`id` = $userid");
    $insertuserimgsql->bind_param('s',$filename);

    if($insertuserimgsql->execute())
    {
        $targetPath = '../assets/images/userimages/'. $filename;

        if(move_uploaded_file($filetmpname,$targetPath))
        {
            echo "file uploaded";
        }
        else
        {
            echo "file upload failed";
        }
    }
    
}

if(isset($_POST['update_default_address']))
{
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phonenumber=$_POST['phonenumber'];
    $country=$_POST['country'];
    $state=$_POST['state'];
    $city=$_POST['city'];
    $pincode=$_POST['pincode'];
    $address=$_POST['address'];
    $address_id=$_POST['address_id'];

    $default_address_update=$conn->prepare("UPDATE `user_default_address_table` SET `user_id`=?,`Name`=?,`email`=?,`phone_number`=?,`country`=?,`state`=?,`city`=?,`pincode`=?,`address`=? WHERE address_id=?");
    $default_address_update->bind_param('ississsisi',$userid,$name,$email,$phonenumber,$country,$state,$city,$pincode,$address,$address_id);

    if($default_address_update->execute())
    {
        $msg="Address updated successfully";
        header("Location: /dashboard.php?msg=$msg");
        exit();
    }
    else
    {
        $msg="Address updation failed";
        header("Location: /dashboard.php?msg=$msg");
        exit();
    }
    
}

if(isset($_POST['update_second_address']))
{
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phonenumber=$_POST['phonenumber'];
    $country=$_POST['country'];
    $state=$_POST['state'];
    $city=$_POST['city'];
    $pincode=$_POST['pincode'];
    $address=$_POST['address'];
    $table_name="user_second_address_table";
    $msg="Office address added";
    
    Address_insert_function($name,$email,$phonenumber,$country,$state,$city,$pincode,$address,$table_name,$msg);
}
if(isset($_POST['update_third_address']))
{
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phonenumber=$_POST['phonenumber'];
    $country=$_POST['country'];
    $state=$_POST['state'];
    $city=$_POST['city'];
    $pincode=$_POST['pincode'];
    $address=$_POST['address'];
    $table_name='user_third_address_table';
    $msg="Gift address added";

    Address_insert_function($name,$email,$phonenumber,$country,$state,$city,$pincode,$address,$table_name,$msg);
}

function Address_insert_function($name,$email,$phonenumber,$country,$state,$city,$pincode,$address,$table_name,$msg) {
    
    include("../db.php");
    $userid=$_SESSION['id'];

    $address_insert=$conn->prepare("INSERT INTO $table_name
    (`user_id`, `name`, `email`, `phonenumber`, `country`, `state`, `city`, `pincode`, `address`) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) 
    ON DUPLICATE KEY UPDATE 
    `Name` = VALUES(`name`), 
    `email` = VALUES(`email`), 
    `phonenumber` = VALUES(`phonenumber`), 
    `country` = VALUES(`country`), 
    `state` = VALUES(`state`), 
    `city` = VALUES(`city`), 
    `pincode` = VALUES(`pincode`), 
    `address` = VALUES(`address`)");
    
    $address_insert->bind_param('ississsis',$userid,$name,$email,$phonenumber,$country,$state,$city,$pincode,$address);
    if($address_insert->execute())
    {
        header("Location: /dashboard.php?msg=$msg");
        exit();
    }
    else
    {
        echo $address_insert->error;
        header("Location: /dashboard.php?msg=$msg");
        exit();
    }
}

// function Address_update_function($userid,$name,$email,$phonenumber,$country,$state,$city,$pincode){

//     include("../db.php");

// }


?>