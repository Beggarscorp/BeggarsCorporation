<?php
ob_start();
include("./BackendAssets/Components/header.php");
include("./BackendAssets/db.php");
$msg = '';

if (isset($_SESSION['user'])) {

    ob_end_flush();
    $user = $_SESSION['user'];

    $userselect = "SELECT id FROM `user` WHERE `First_name` = '$user'";

    $userselectresult = mysqli_fetch_assoc(mysqli_query($conn, $userselect));

    $userid = $userselectresult['id'];

    $sql = "SELECT o.*,p.productname,p.price,p.productimage FROM `orders` AS o JOIN `products` AS p ON p.id=o.productid AND o.userid='$userid'";

    $result = mysqli_fetch_all(mysqli_query($conn, $sql));

    if(isset($_GET['order']) && $_GET['order'] === 'successful')
    {
        echo "<script>
            Swal.fire({
                title:'Order Placed Successfully',
                icon: 'success'
            })
        </script>";
    }
    else if(isset($_GET['order']) && $_GET['order'] === 'failed')
    {
        echo "<script>
            Swal.fire({
                title:'Order Failed',
                icon: 'error'
            })
        </script>";
    }
    else if(isset($_GET['delete']) && $_GET['delete'] === 'successfully')
    {
        echo "<script>
            Swal.fire({
                title:'Order Deleted',
                icon: 'success'
            })
        </script>";
    }


?>
    <link rel="stylesheet" href="BackendAssets/css/order.css">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 my-5">
                    <h2>Order Products Details</h2>
                    <?php
                    $sno = 1;
                    ?>
                        <?php
                        if($result)
                        {
                            foreach($result as $orders)
                            {
                                // print_r($orders);
                                ?>

                                    <div class="order_product_main_div">
                                        <div class="row">
                                            <div class="col-sm-2">
                                                <div class="imagetd"> <img src="BackendAssets/assets/images/productimages/<?= $orders[17] ?>" alt="" srcset=""> </div>
                                            </div>
                                            <div class="col-sm-10">
                                                <div class="product_inner_div">
                                                    <a href="BackendAssets/mysqlcode/cancelorder.php?id=<?= $orders[0] ?>&pa=<?=$_SERVER['PHP_SELF']?>">
                                                        <div class="cancel_order_icon"><i class="fa fa-close" style="font-size:24px"></i></div>
                                                    </a>
                                                    <div>
                                                        <h3>Product Name :</h3>
                                                        <p><?= $orders[15] ?></p>
                                                    </div>
                                                    <div>
                                                        <h3>Qty :</h3>
                                                        <p><?= $orders[4] ?></p>
                                                    </div>
                                                    <div>
                                                        <h3>Price :</h3>
                                                        <p><?= $orders[16] ?></p>
                                                    </div>
                                                    <div>
                                                        <h3>Total Price :</h3>
                                                        <p>INR <?= $orders[4] * $orders[16] ?></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                <?php
                            }
                        }
                        else
                        {
                            echo "<h1>No Order Available</h1>";
                        }
                        ?>
            </div>
        </div>
    </div>




<?php
    include("./BackendAssets/Components/footer.php");
} else {
    $msg = "You are not logged in";
    header("Location: /login.php?msg=" . urlencode($msg));
    exit();
}
?>