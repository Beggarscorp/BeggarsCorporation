<?php
include "../db.php";

if (isset($_POST['category']) && isset($_POST['cateSubmit'])) {
    echo "helllo";
    $category = $_POST['category'];
    $msg;
    $sql = "SELECT * FROM `category` WHERE `category` = '$category'";
    $result = mysqli_query($conn, $sql);
    $numrow = mysqli_num_rows($result);
    if ($numrow === 0) {
        $sql = "INSERT INTO `category`(`category`) VALUES ('$category')";
        if ($conn->query($sql)) {
            $msg = "Category added";
        }
    }
    else
    {
        $msg = "Category already exists";
    }
    $conn->close();
    header("Location:/add.php?msg=". $msg);
    exit();
}
else if(isset($_POST['subcategory_submit']))
{
    $cateid=$_POST['cateid'];
    $subcategory=$_POST['subcategory'];
    $msg;
    
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
                $check_Subcategory->close();
            }
            else
            {
                $msg="Subcategory not Inserted";
            }
        }
        header("Location: /add.php?msg=$msg");
        exit();
    }
    else
    {
        echo "Subcategory check sql gives error";
    }
}
else if(isset($_GET['function']) && $_GET['function'] === 'update_category_and_subcategory')
{
    $table=$_GET['table'];
    $id=$_GET['id'];
    $msg;

    if($table === 'category')
    {
        $fetch_category_details=$conn->prepare("SELECT * FROM `category` WHERE id=?");
        $fetch_category_details->bind_param('i',$id);
        if($fetch_category_details->execute())
        {
            $cate=$fetch_category_details->get_result()->fetch_array(MYSQLI_ASSOC);
            ?>
            <form action="./addcategory.php" method="post">
                <input type="text" name="cate_update_value" value="<?=$cate['category']?>">
                <input type="hidden" name="cate_update_id" value="<?=$id?>">
                <button type="submit" name="cate_update">Update</button>
            </form>
            <?php
        }

    }
    else
    {
        $fetch_subcategory_details=$conn->prepare("SELECT * FROM `subcategory` WHERE subcategory_id=?");
        $fetch_subcategory_details->bind_param('i',$id);
        if($fetch_subcategory_details->execute())
        {
            $subcate=$fetch_subcategory_details->get_result()->fetch_array(MYSQLI_ASSOC);
            ?>
            <form action="./addcategory.php" method="post">
                <input type="text" name="subcate_update_value" value="<?=$subcate['subcategory']?>">
                <input type="hidden" name="subcate_update_id" value="<?=$id?>">
                <button type="submit" name="subcate_update">Update</button>
            </form>
            <?php
        }
    }
}
else if(isset($_GET['function']) && $_GET['function'] === 'delete_category_and_subcategory')
{
    $table=$_GET['table'];
    $id=$_GET['id'];
    $msg;
    
    if($table === 'category')
    {
        $check_Cate=$conn->prepare("SELECT cate_id FROM `subcategory` WHERE cate_id=$id");
        if($check_Cate->execute())
        {
            if((int)$check_Cate->get_result()->num_rows === 0)
            {
                $sql=$conn->prepare("DELETE FROM `category` WHERE id=?");
                $sql->bind_param('i',$id);
                if($sql->execute())
                {
                    $msg=urlencode("Category deleted successfully");
                    $sql->close();
                }
                else
                {
                    $msg=urlencode("Category not deleted");
                }
            }
            else
            {
                $msg="Category store some subcategories";
            }
        }
        else 
        {
            $msg="Category check sql failed";
        }
    }
    else
    {
        $sql=$conn->prepare("DELETE FROM `subcategory` WHERE subcategory_id=?");
            $sql->bind_param('i',$id);
            if($sql->execute())
            {
                $msg=urlencode("Subcategory deleted successfully");
                $sql->close();
            }
            else
            {
                $msg=urlencode("Subcategory not deleted");
            }

    }
    header("Location: /add.php?msg=$msg");
    exit();
}
else if(isset($_POST['cate_update']))
{
    $cate_update_value=$_POST['cate_update_value'];
    $cate_update_id=$_POST['cate_update_id'];
    $msg;

    $cate_update=$conn->prepare("UPDATE `category` SET `category`=? WHERE id=?");
    $cate_update->bind_param('si',$cate_update_value,$cate_update_id);
    if($cate_update->execute())
    {
        $msg="Category updated successfully";
    }
    else
    {
        $msg="Category updation failed";
    }
    $cate_update->close();
    header("Location: /add.php?msg=$msg");
    exit();
}
else if(isset($_POST['subcate_update']))
{
    $subcate_update_value=$_POST['subcate_update_value'];
    $subcate_update_id=$_POST['subcate_update_id'];
    $msg;

    $subcate_update=$conn->prepare("UPDATE `subcategory` SET `subcategory`=? WHERE subcategory_id=?");
    $subcate_update->bind_param('si',$subcate_update_value,$subcate_update_id);
    if($subcate_update->execute())
    {
        $msg="Subcategory updated successfully";
    }
    else
    {
        $msg="Subcategory updation failed";
    }
    $subcate_update->close();
    header("Location: /add.php?msg=$msg");
    exit();
}
