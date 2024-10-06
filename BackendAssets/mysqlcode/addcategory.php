<?php
include "../db.php";
error_reporting(0);

if (isset($_POST['category']) && isset($_POST['cateSubmit'])) {
    $category = $_POST['category'];
    $sql = "SELECT * FROM `category` WHERE `category` = '$category'";
    $result = mysqli_query($conn, $sql);
    $numrow = mysqli_num_rows($result);
    if ($numrow === 0) {
        $sql = "INSERT INTO `category`(`category`) VALUES ('$category')";
        if ($conn->query($sql)) {
            $msg = "Category added";
            header("Location:/addProduct.php?msg=" . $msg);
            exit();
        }
        $conn->close();
    }
    else
    {
        $msg = "Category already exists";
        header("Location:/addProduct.php?msg=". $msg);
    }
}
else if(isset($_POST['subcategory_submit']))
{
    $cateid=$_POST['cateid'];
    $subcategory=$_POST['subcategory'];

    $check_Subcategory=$conn->prepare("SELECT * FROM `subcategory` WHERE `subcategory`='$subcategory'");
    if($check_Subcategory->execute())
    {
        $check_Subcategory_result=$check_Subcategory->get_result();
        if((int)$check_Subcategory_result->num_rows === 0)
        {
            $insert_Sebcategory=$conn->prepare("INSERT INTO `subcategory`(`cate_id`, `subcategory`) VALUES (?,?)");
            $insert_Sebcategory->bind_param('is',$cateid,$subcategory);
            if($insert_Sebcategory->execute())
            {
                $msg="Subcategory Inserted Successfully";
                header("Location: /add.php?msg=$msg");
                exit();
            }
            else
            {
                $msg="Subcategory not Inserted";
                header("Location: /add.php?msg=$msg");
                exit();
            }
        }
    }
    else
    {
        echo "Subcategory check sql gives error";
    }
}
