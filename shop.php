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
<button type="hidden" id="pop_up_btn" style="float: right;opacity:0;" class="btn btn-primary" data-toggle="modal" data-target="#shop_page_video_popup">
  Launch demo modal
</button>
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-2">
            <div class="filter-main-head">
                <h3>Filters</h3>
                <div class="filter-icon-div">
                    <a href="<?=$_SERVER['PHP_SELF']?>">
                        <button class="clear_all_category_btn">Clear all</button>
                    </a>
                    <i class="fa fa-filter"></i>
                </div>
            </div>
            <div class="filter-container">
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
                                <div class="col-sm-6 col-md-3">
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
                    else
                    {
                        $countnumber = 0;
                    }
                    ?>
                </div>
                <div class="pegination-div">
                    <ul>
                        <?php
                        if($countnumber > 0)
                        {
                        for ($i = 1; $i <= $countnumber; $i++) {
                        ?>
                            <li><?= $i ?></li>
                        <?php
                        }
                        }
                        else
                        {

                        }
                        ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

 <!-- video popup model code start from here -->

 <!-- Button trigger modal -->
<!-- <button type="hidden" id="pop_up_btn" class="btn btn-primary" data-toggle="modal" data-target="#shop_page_video_popup">
  Launch demo modal
</button> -->

<!-- Modal -->

<div class="modal fade" id="shop_page_video_popup" tabindex="-1" role="dialog" aria-labelledby="shop_page_video_popup" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <!-- <h5 class="modal-title" id="shop_page_video_popup">Modal title</h5> -->
        <button type="button"  data-dismiss="modal" aria-label="Close" 
        style="float: right;border-radius: 50%;border: none;background-color: #b3700b;color: #fff;"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-sm-12">
                <a target="_blank" href="https://www.linkedin.com/posts/employonomics_beggarscorporation-activity-7246887980571729921-Pfwa?utm_source=share&utm_medium=member_android">
                    <video controls autoplay loop muted width="100%" height="400">
                        <source src="social_media_videos/the_sari_of_impact_video.mp4">
                    </video>
                </a>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>


 <!-- end here -->


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


    // filter show hide for mobile device start from here

    const filter_main_head=document.getElementsByClassName("filter-main-head");
    const filter_container=document.getElementsByClassName("filter-container");
    filter_main_head[0].addEventListener("click",()=>{
        filter_container[0].classList.toggle("filter-container-show");
        window.scrollTo(0,0);
    })

    // end here

    // video pop up open code start from here

    window.addEventListener("load",()=>{
        document.getElementById("pop_up_btn").click();
        window.scrollTo(0,0);
    })


    // end here

</script>

<!--Footer Section-->
<?php
include("BackendAssets/Components/footer.php");
?>