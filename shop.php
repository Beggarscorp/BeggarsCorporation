<!-- mainmenu-area -->
<?php
include("BackendAssets/Components/header.php");
?>

        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3">
                    <h3>For filter and all</h3>
                </div>
                <div class="col-sm-9">
                    <h3>For showing products</h3>
                    <div class="row">
                        <?php
                        for ($i = 0; $i < 8; $i++) {
                        ?>
                        <div class="col-sm-4">
                            <div class="productCard text-center">
                                <img src="images/newproducts/2.png" alt="">
                                <h4>Ekat Stole</h4>
                                <h5>INR 45</h5>
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
       