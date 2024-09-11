
<?php
include 'BackendAssets/Components/header.php';
include('./BackendAssets/db.php');
$id=$_GET['id'];
$sql = "SELECT * FROM `products` WHERE id=$id";
$Allproducts = $conn->query($sql);
$row=mysqli_fetch_array($Allproducts);
?>
<link rel="stylesheet" href="BackendAssets/css/singleProduct.css">
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
<div class="container">
    <div class="smain">
    <div class="row">
        <div class="col-sm-7">
            <div class="row">
                <div class="col-sm-3">
                    <div class="multipleImg">
                        <?php
                        $galleryImages=explode(",",$row["productimagegallery"]);
                        foreach($galleryImages as $galleryImage) {
                        ?>
                        <img src="BackendAssets/assets/images/ProductGalleryImages/<?=$galleryImage?>" alt="<?=$galleryImage?>">
                        <?php
                        }
                        ?>
                    </div>
                </div>
                <div class="col-sm-9">
                    <div class="productImg" style="
                    --display:'none';
                    --zoom-x:0%;
                    --zoom-y:0%;
                    --imageurl:url('/BackendAssets/assets/images/ProductImages/<?=$row['productimage']?>');
;                    ">
                        <img src="BackendAssets/assets/images/ProductImages/<?=$row['productimage']?>" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-5">
            <div style="border-bottom:1px solid lightgray;">
            <h2><?=$row['productname']?></h2>
            <p class="font-16"><?=$row['discription']?></p>
            </div>
            <h4 class="productPrice">Price: ₹ <?=$row['price']?></h4>
            <div class="buttons">
                <a href="BackendAssets/mysqlcode/addtocart.php?id=<?= $row['id']?>&page=<?=$_SERVER['PHP_SELF']?>&cate=<?=$row['category']?>">
                    <button class="add-to-cart-btn">Add to Cart <span style="padding: 0 5px;"><i class="fa fa-shopping-bag" aria-hidden="true"></i>
                </a>
                </span>
                </button>
            </div>
            <?php
            if($row['sizeandfit'] != "")
            {
            ?>
            <div class="size_fit">
                <h4>Size & Fit</h4>
                <p class="font-16">
                    <?=$row['sizeandfit']?>
                </p>
            </div>
            <?php
            }
            ?>
            <?php
            if($row['materialandcare'] != "")
            {
            ?>
            <div class="material_care">
                <h4>Material & Care</h4>
                <div class="font-16">
                    <?=$row['materialandcare']?>
                </div>
            </div>
            <?php
            }
            ?>
            <?php
            if($row['spacification'] != "")
            {

            ?>
                <div class="spacifications">
                    <h4>Spacification</h4>
                    <p class="font-16">
                        <?=$row['spacification']?>
                    </p>
                </div>
            <?php
            }
            ?>

        </div>
    </div>
    <div class="row">
        <div class="container">
            <h3>Related Products</h3>
            <?php
                $relatedProductSql = "SELECT * FROM `products`";
                $RelatedAllProducts = $conn->query($relatedProductSql);
                foreach($RelatedAllProducts as $row2){
                    if($row2['category'] == $_GET['cate'])
                    {
                        ?>
            <div class="col-sm-3">
                <div class="relatedProductCard">
                    <a href="/singleProduct.php?id=<?=$row2['id']?>&cate=<?=$row2['category']?>" target="_blank">
                        <img src="BackendAssets/assets/images/ProductImages/<?=$row2['productimage']?>" alt="">
                    </a>
                    <h5><?=$row2['productname']?></h5>
                    <h5><?=$row2['category']?></h5>
                    <h5>Rs . <?=$row2['price']?></h5>
                </div>
            </div>
            <?php
                    }
            }
            ?>
        </div>
    </div>
    </div>
</div>
<script>
    document.addEventListener("DOMContentLoaded",()=>{
        const imagediv=document.getElementsByClassName("productImg");
    imagediv[0].addEventListener("mousemove",(e)=>{
        imagediv[0].style.setProperty('--display', 'block');
        imagediv[0].style.cursor="zoom-in";
        let pointer={
            x:(e.offsetX * 100) / imagediv[0].offsetWidth,
            y:(e.offsetY * 100) / imagediv[0].offsetHeight 
        }
        imagediv[0].style.setProperty('--zoom-x', pointer.x + '%');
        imagediv[0].style.setProperty('--zoom-y', pointer.y + '%');
    })
    imagediv[0].addEventListener("mouseout",()=>{
        imagediv[0].style.setProperty('--display', 'none');
    })
    })
    
</script>

<?php
include 'BackendAssets/Components/footer.php';

?>