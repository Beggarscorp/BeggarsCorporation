
<?php
// include("BackendAssets/Components/forsession.php");

use function PHPSTORM_META\type;

include("BackendAssets/Components/header.php");
?>
<link rel="stylesheet" href="BackendAssets/css/checkout.css">
<div class="container">
    <div class="row">
        <div class="col-sm-8">
            <h3></h3>
            <div class="checkout-form">
                <form action="" method="post">
                    <label for="username">Name :</label><br>
                    <input type="text" name="username" placeholder="Enter your name" id="username"><br>

                    <label for="useremail">Email :</label><br>
                    <input type="email" name="useremail" placeholder="Enter your email" id="useremail"><br>

                    <label for="usernumber">Number :</label><br>
                    <input type="number" name="usernumber" placeholder="Enter your number" id="usernumber"><br>

                    <label for="useraddress">Address :</label><br>
                    <textarea name="useraddress" placeholder="Enter your address" id="useraddress"></textarea><br>

                
            </div>
        </div>
        <div class="col-sm-4">
            <div style="border:1px solid lightgray;margin:10px;padding:10px;border-radius:10px;">
                <!-- <h3>Product details here</h3> -->
            <div class="product-div">
            <?php
            include("BackendAssets/db.php");
            $user_name = $_SESSION["user"];
            $sql = "SELECT * FROM `productscart` as pc INNER JOIN `products` as p WHERE pc.product_id=p.id";
            $result = mysqli_query($conn, $sql);
            $sqlTwo = "SELECT `id` FROM `user` WHERE `First-name`='$user_name'";
            $resultTwo = mysqli_query($conn, $sqlTwo);
            $userRow = mysqli_fetch_array($resultTwo);
            $totalprice[]="";
            $totalval=0;
            if ($result) {
                foreach ($result as $val) {
                    if ($val['user_id'] == $userRow['id']) {
            ?>
                        <div class="addtocart-card">
                            <div class="row">
                                <div class="col-sm-4">
                                    <img src="/BackendAssets/assets/images/ProductImages/<?= $val['productimage'] ?>" alt="">
                                </div>
                                <div class="col-sm-8">
                                    <h5><?= $val['productname'] ?>
                                        <a href="/BackendAssets/mysqlcode/removecart.php?id=<?= $val['cartid'] ?>" style="color:gray !important;">
                                            <span class="remove_cart_cross_icon"><i class="fa fa-times-circle" style="font-size:20px;float:inline-end;"></i></span>
                                    </h5>
                                    </a>
                                    <p class="font-13"><?= $val['discription'] ?></p>
                                    <h5>Price : <i class="fa fa-rupee" style="padding:0 5px"></i><?= $val['price'] ?></h5>
                                </div>
                            </div>
                        </div>
            <?php
            $totalprice[]=$val['price'];
            foreach($totalprice as $tt)
            {
                $totalval+=(int)$tt;
            }
             }
            }
            } else {
                echo "Your cart empty";
            }
            ?>
            </div>
            <div class="total-price">
                <h5>Total Price :</h5>
                <h5><i class="fa fa-rupee" style="padding:0 5px"></i><?= $totalval ?></h5>
            </div>
            <?php
            if(isset($_SESSION['user']))
            {
                ?>
                <button type="submit" class="order-button">Place Order</button>
                <?php
            }
            else
            {
                ?>
                <button type="submit" class="order-button" disabled>Place Order</button>
                <?php
            }
            ?>
                </form>
            </div>
        </div>
    </div>
</div>

<?php
include("BackendAssets/Components/footer.php");
?>