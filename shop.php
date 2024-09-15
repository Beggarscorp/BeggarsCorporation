<!-- mainmenu-area -->
<?php
include("BackendAssets/Components/header.php");
include('BackendAssets/mysqlcode/allproducts.php');
include("BackendAssets/db.php");
include("BackendAssets/Components/popup.php");
// error_reporting(0);
$sql = "SELECT * FROM `category`";
$result = mysqli_query($conn, $sql);
?>
<link rel="stylesheet" href="/BackendAssets/css/shop.css">
<?php
if (isset($_GET["cart"]) && $_GET['cart'] == "updated") {
    echo "<div class='alert alert-success' role='alert'>
  Product added to the cart
</div>";
} else if (isset($_GET["cart"]) && $_GET['cart'] == "added_already") {
    echo "<div class='alert alert-warning' role='alert'>
  Product already in the cart
</div>";
}
?>
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-2">
            <h3>Filters</h3>
            <div class="category-container">
                <h4>Category</h4>
                <?php
                foreach ($result as $row) {
                ?>
                    <a href="?cate=<?= $row['category'] ?>">
                        <h5 class="cate-heading"><?= $row['category'] ?></h5>
                    </a>
                <?php
                }
                ?>
            </div>
        </div>
        <div class="col-sm-10">
            <div class="product-container">
                <div class="row">
                    <?php
                    $productCard = "";
                    if (isset($_GET['page'])) {
                        $page = $_GET['page'];
                        $productCard = $page * 10;
                        $data = array_slice($data, $productCard - 10, $productCard);
                    }
                    $data = array_slice($data, 0, 10);
                    foreach ($data as $row) {
                        if (isset($_GET['cate'])) {
                            if ($_GET['cate'] == $row['category']) {
                    ?>
                                <div class="col-sm-3">
                                    <div class="productCard text-center">
                                        <a href="/singleProduct.php?id=<?= $row['id'] ?>&cate=<?= $row['category'] ?>" target="_blank">
                                            <img src="/BackendAssets/assets/images/ProductImages/<?= $row['productimage'] ?>" alt="">
                                        </a>
                                        <h5><?= $row['productname'] ?></h5>
                                        <h5>INR <?= $row['price'] ?></h5>
                                        <a href="/BackendAssets/mysqlcode/addtocart.php?id=<?= $row['id'] ?>">
                                            <button class="add-to-cart-btn">Add to cart</button>
                                        </a>
                                    </div>
                                </div>
                            <?php
                            }
                        } else {
                            ?>
                            <div class="col-sm-3">
                                <div class="productCard text-center">
                                    <a href="/singleProduct.php?id=<?= $row['id'] ?>&cate=<?= $row['category'] ?>" target="_blank">
                                        <img src="/BackendAssets/assets/images/ProductImages/<?= $row['productimage'] ?>" alt="">
                                    </a>
                                    <h5><?= $row['productname'] ?></h5>
                                    <h5>INR <?= $row['price'] ?></h5>
                                    <a href="/BackendAssets/mysqlcode/addtocart.php?id=<?= $row['id'] ?>">
                                        <button class="add-to-cart-btn">Add to cart <span style="padding: 0 5px;"><i class="fa fa-shopping-bag" aria-hidden="true"></i></span></button>
                                    </a>
                                </div>
                            </div>
                    <?php
                        }
                    }
                    $datacountnumber = count($data);
                    $countnumber = 1;
                    if ($datacountnumber / 10) {
                        $countnumber++;
                    }
                    ?>
                </div>
                <div class="pegination-div">
                    <ul>
                        <?php
                        for ($i = 1; $i <= $countnumber; $i++) {
                        ?>
                            <li><?= $i ?></li>
                        <?php
                        }

                        ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    document.addEventListener("DOMContentLoaded", () => {

        const pegilist = document.querySelectorAll(".pegination-div ul li");
        for (const i of pegilist) {
            i.addEventListener("click", (e) => {
                window.location.href = "?page=" + e.target.innerText;
            })
        }
        //     const productcard=document.getElementsByClassName("productCard");
        //     let productele=[];
        //     for (const e of productcard) {
        //         productele.push(e);
        //     }
        //     let timePeriod=0;
        //     let st=setInterval(()=>{
        //         if(timePeriod <= productele.length)
        //     {
        //         putanimationinproductcard();
        //     }
        //     else
        //     {
        //         clearInterval(st);
        //     }
        // },300);
        //     const putanimationinproductcard=()=>{
        //         productele[timePeriod].classList.add("productCard-animation");
        //         timePeriod++;
        //         console.log("Hello world");
        //     }
    })
</script>

<!--Footer Section-->
<?php
include("BackendAssets/Components/footer.php");
?>