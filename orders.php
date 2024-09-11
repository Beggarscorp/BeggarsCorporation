<?php
include('BackendAssets/mysqlcode/allproducts.php');
include("BackendAssets/db.php");

$sql="SELECT * FROM `orders`";
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
                            <td>S No.</td>
                            <td>Date</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Number</td>
                            <td>State</td>
                            <td>City</td>
                            <td>Pin code</td>
                            <td>Address</td>
                            <td>Order Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $sno=1;
                        foreach($result as $row)
                        {
                            $date=new DateTime($row['date']);
                            ?>
                            <tr>
                                <td><?=$sno++?></td>
                                <td><?=$date->format('d-m-y')?></td>
                                <td><?=$row['username']?></td>
                                <td><?=$row['useremail']?></td>
                                <td><?=$row['usernumber']?></td>
                                <td><?=$row['userstate']?></td>
                                <td><?=$row['usercity']?></td>
                                <td><?=$row['userpincode']?></td>
                                <td><?=$row['useraddress']?></td>
                                <td class="order-status">
                                            <?php
                                            if((int)$row['order_status'] === 0)
                                            {
                                            ?>
                                                <span class="canceled">Order canceled</span>
                                                <button class="conform" conform_order_id="<?=$row['orderid']?>">Conform order </button>
                                            <?php
                                            }
                                            else if((int)$row['order_status'] === 1)
                                            {
                                            ?>
                                                <span class="conformed">Order Conformed <i class="bi bi-check-circle-fill"></i></span>
                                                <button class="cancel" cancel_Order_id="<?=$row['orderid']?>">Cancel order</button>
                                            <?php
                                            }
                                            else
                                            {
                                                ?>
                                                <span class="pending">Pending</span>
                                                <button class="conform" conform_order_id="<?=$row['orderid']?>">Conform order </button>
                                                <button class="cancel" cancel_Order_id="<?=$row['orderid']?>">Cancel order</button>
                                                <?php
                                            }
                                             ?>
                                        </td>
                                <thead>
                                    <tr>
                                        <td colspan="10" class="text-start bg-dark text-light">Order Products Details</td>
                                    </tr>
                                </thead>
                                <div class="product-order-details">
                                <thead>
                                    <tr>
                                        <td>Product Code</td>
                                        <td>Product Image</td>
                                        <td>Produt Name</td>
                                        <td>Product Quantity</td>
                                    </tr>
                                </thead>
                                <tbody class="order-product-details">
                                    <?php
                                    $orproductqty=explode(",",$row['productqty']);
                                    $orproductqtyindex=0;
                                    foreach(explode(",",$row['productids']) as $orproducts)
                                    {
                                        $orderproductsql="SELECT * FROM `products` WHERE `id`=$orproducts";
                                        $orderproductsresult=mysqli_query($conn,$orderproductsql);
                                        $orrow=mysqli_fetch_assoc($orderproductsresult);
                                    ?>
                                    <tr>
                                        <td><?=$orrow['id']?></td>
                                        <td>
                                            <img src="/BackendAssets/assets/images/ProductImages/<?=$orrow['productimage']?>" alt="<?=$orrow['productimage']?>" style="height:60px;">
                                        </td>
                                        <td><?=$orrow['productname']?></td>
                                        <td><?=$orproductqty[$orproductqtyindex++]?> Qty</td>
                                    </tr>
                                    <?php
                                    }
                                    ?>
                                </tbody>
                                <thead>
                                    <tr><td colspan="9" style="border:none !important;">&nbsp;</td></tr>
                                    <tr><td colspan="9" style="border:none !important;">&nbsp;</td></tr>
                                </thead>
                                </div>
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
    const conformBtn=document.querySelectorAll(".conform");
    const cancelBtn=document.querySelectorAll(".cancel");

    const orderconform=(index,id)=>{
        window.location.href="BackendAssets/mysqlcode/order_status.php?orderid="+id+"&conform=true";
        cancelBtn[index].style.display="none";
        conformBtn[index].style.display="none";
    }
    
    const ordercancel=(index ,id)=>{
        window.location.href="BackendAssets/mysqlcode/order_status.php?orderid="+id+"&cancel=true";
        cancelBtn[index].style.display="none";
        conformBtn[index].style.display="none";
    }
    
    for(bt=0;bt<conformBtn.length;bt++)
    {
        conformBtn[bt].setAttribute("index",bt);
        cancelBtn[bt].setAttribute("index",bt);
        conformBtn[bt].addEventListener("click",(ocon)=>{
            orderconform(ocon.target.getAttribute("index"),ocon.target.getAttribute("conform_order_id"));
        })
        cancelBtn[bt].addEventListener("click",(ocan)=>{
            ordercancel(ocan.target.getAttribute("index"),ocan.target.getAttribute("cancel_Order_id"));
        })
    }

</script>