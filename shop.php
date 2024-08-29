<!-- mainmenu-area -->
<?php
include("BackendAssets/Components/header.php");
include('BackendAssets/mysqlcode/allproducts.php');
include("BackendAssets/db.php");
error_reporting(0);
$sql = "SELECT * FROM `category`";
$result = mysqli_query($conn, $sql);

?>
<link rel="stylesheet" href="/BackendAssets/css/shop.css">
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
                $productCard="";
                if(isset($_GET['page']))
                {
                    $page = $_GET['page'];
                    $productCard=$page*10;
                    $data=array_slice($data,$productCard-10,$productCard);
                }
                $data=array_slice($data,0,10);
                foreach ($data as $row) {
                    if (isset($_GET['cate'])) {
                        if ($_GET['cate'] == $row['category']) {
                ?>
                            <div class="col-sm-3">
                                <div class="productCard text-center">
                                    <a href="/singleProduct.php?id=<?=$row['id']?>&cate=<?=$row['category']?>" target="_blank">
                                        <img src="/BackendAssets/assets/images/ProductImages/<?= $row['productimage'] ?>" alt="">
                                    </a>
                                    <h4><?= $row['productname'] ?></h4>
                                    <h5>INR <?= $row['price'] ?></h5>
                                    <a href="/BackendAssets/mysqlcode/addtocart.php?id=<?=$row['id']?>">
                                        <button class="add-to-cart-btn">Add to cart</button>
                                    </a>
                                </div>
                            </div>
                        <?php
                        }
                    } 
                    else 
                    {
                        ?>
                        <div class="col-sm-3">
                            <div class="productCard text-center">
                                <a href="/singleProduct.php?id=<?=$row['id']?>&cate=<?=$row['category']?>" target="_blank">
                                        <img src="/BackendAssets/assets/images/ProductImages/<?= $row['productimage'] ?>" alt="">
                                    </a>
                                <h4><?= $row['productname'] ?></h4>
                                <h5>INR <?= $row['price'] ?></h5>
                                <a href="/BackendAssets/mysqlcode/addtocart.php?id=<?=$row['id']?>">
                                    <button class="add-to-cart-btn">Add to cart <span style="padding: 0 5px;"><i class="fa fa-shopping-bag" aria-hidden="true"></i></span></button>
                                </a>
                            </div>
                        </div>
                <?php
                    }
                }
                $datacountnumber=count($data);
                $countnumber=1;
                if($datacountnumber/10)
                {
                    $countnumber++;
                }
                ?>
                </div>
                <div class="pegination-div">
                    <ul>
                        <!-- <button class="peginationLeftBtn"><i class="fa fa-angle-left"></i></button> -->
                <?php
                for($i=1;$i<=$countnumber;$i++)
                {
                    ?>
                    <li><?=$i?></li>
                    <?php
                }
                
                ?>
                        <!-- <button class="peginationRightBtn"><i class="fa fa-angle-right"></i></button> -->
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    const pegilist=document.querySelectorAll(".pegination-div ul li");
    for (const i of pegilist) {
        i.addEventListener("click",(e)=>{
            window.location.href="/shop.php?page="+e.target.innerText;
        })
        
    }
    // const peginationLeftBtn=document.getElementsByClassName("peginationLeftBtn");
    // const peginationRightBtn=document.getElementsByClassName("peginationRightBtn");
    // peginationLeftBtn[0].addEventListener("click",()=>{
    //     if(pegilist.length)
    // {
    //     window.location.href="/shop.php?page="+pegilist
    // }
    // })
</script>

<!--Footer Section-->
<?php
include("BackendAssets/Components/footer.php");
?>