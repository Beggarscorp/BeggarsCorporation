<!-- mainmenu-area -->
<?php
include("BackendAssets/Components/header.php");
include('BackendAssets/mysqlcode/allproducts.php');
?>
    <link rel="stylesheet" href="/BackendAssets/css/shop.css">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3">
                    <h3>For filter and all</h3>
                </div>
                <div class="col-sm-9">
                    <div class="row">
                        <?php
                        foreach($data as $row) {
                        ?>
                        <div class="col-sm-4">
                            <div class="productCard text-center">
                                <img src="/BackendAssets/assets/images/ProductImages/<?=$row['productimage']?>" alt="">
                                <h4><?=$row['productname']?></h4>
                                <h5>INR <?=$row['price']?></h5>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <?php
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>


        <!--Footer Section-->
<?php
include("BackendAssets/Components/footer.php");
?>
       