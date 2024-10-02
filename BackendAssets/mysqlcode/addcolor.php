
<?php
include "../db.php";

if(isset($_POST['product_color_submit']))
{
    $color=$_POST['product-color'];
    $fetch_color_sql=$conn->prepare("SELECT * FROM `product_color` WHERE color='$color'");
    if($fetch_color_sql->execute())
    {
        if((int)$fetch_color_sql->get_result()->num_rows === 0)
        {
            $sql=$conn->prepare("INSERT INTO `product_color`(`color`) VALUES (?)");
            $sql->bind_param('s',$color);
            if($sql->execute())
            {
                $msg="Color inserted in a table";
                header("Location: /addproduct.php?msg=$msg");
            }
            else
            {
                $msg="Color not inserted in a table";
                header("Location: /addproduct.php?msg=$msg");
            }

        }
        else
        {
            $msg="Color already in table";
            header("Location: /addproduct.php?msg=$msg");
        }
    }
    else
    {
        $msg="color query not work";
        header("Location: /addproduct.php?msg=$msg");
    }
}
?>