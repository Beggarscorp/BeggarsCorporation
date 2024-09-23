<?php
include('BackendAssets/mysqlcode/allproducts.php');
include("BackendAssets/db.php");

$sql="SELECT * FROM `orders` AS o JOIN `products` AS p ON p.id=o.productid";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_all($result,MYSQLI_ASSOC);

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
                       foreach($row as $order)
                       {
                           
                           
                           ?>
                    <tr>
                       <td> <?= $order['id'] ?> </td>
                       <td> <?= $order['productname'] ?> </td>
                       <td> <?= $order['productquantity'] ?> </td>
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

        console.log("Hello orders page");

</script>