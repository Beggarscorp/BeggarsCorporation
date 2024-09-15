<?php
include('BackendAssets/mysqlcode/allproducts.php');
include("BackendAssets/db.php");

$sql="SELECT p.*,c.product_qty,o.* FROM `products` AS p JOIN `checkout`as c on p.id=c.product_id JOIN `orders` as o ON o.userid=c.userid";
$result=mysqli_query($conn,$sql);

?>
<link rel="stylesheet" href="/BackendAssets/css/orders.css">
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-2 p-0">
        <?php include 'sidebar.php'; ?>
        </div>
        <div class="col-sm-10">
            <div class="content p-3 table-responsiveness">
                <h3 class="py-2 fw-bolder">Orders</h3>
                <table class="w-100 py-2">
                    <thead>
                        <tr>
                            <td>Product code</td>
                            <td>Product name</td>
                            <td>Product quantity</td>
                            <td>Date & Time</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Number</td>
                            <td>View more</td>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                       foreach($result as $order)
                       {
                           
                           
                           ?>
                    <tr>
                       <td> <?= $order['id'] ?> </td>
                       <td> <?= $order['productname'] ?> </td>
                       <td> <?= $order['product_qty'] ?> </td>
                       <td> <?= $order['date'] ?> </td>
                       <td> <?= $order['username'] ?> </td>
                       <td> <?= $order['useremail'] ?> </td>
                       <td> <?= $order['usernumber'] ?> </td>
                       <td><button>view more</button></td>
                    </tr>
                       
                       <?php
                       }
                       ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<script>
    document.addEventListener("DOMContentLoaded",()=>{
        console.log("Hello orders page");
    });
</script>