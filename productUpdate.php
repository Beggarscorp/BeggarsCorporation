<?php
include('./BackendAssets/db.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Product</title>
    <link rel="stylesheet" href="/BackendAssets/css/addproduct.css">
    <link rel="shortcut icon" type="image/x-icon" href="images/main/favicon.png">
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-2 p-0">
                <?php include 'sidebar.php'; ?>
            </div>
            <div class="col-sm-10">
            <div class="content vh-100 overflowY-visible p-3">
                    <h3>Update Product from here</h3>
                    <form action="/BackendAssets/mysqlcode/productUpdate.php" method="post" enctype="multipart/form-data">
                    <input type="hidden" name="id" value="<?=$_GET['Id']?>">
                    <label for="name">Product Name:</label><br>
                    <input type="text" id="name" name="name" value="<?=$_GET['productName']?>"><br>

                    <label for="description">Short Description:</label><br>
                    <textarea id="description" rows="10" oninput="convertText(this)" name="description"><?=$_GET['productDiscription']?></textarea><br>

                    <label for="sizeAndfit">Size & fit:</label><br>
                    <textarea id="sizeAndfit" rows="10" oninput="convertText(this)" name="sizeAndfit"><?=$_GET['sizeandfit']?></textarea><br>
                        
                    <label for="materialAndCare">Material & Care:</label><br>
                    <textarea id="materialAndCare" rows="10" oninput="convertText(this)" name="materialAndCare"><?=$_GET['materialandcare']?></textarea><br>
                        
                    <label for="spacification">Spacification:</label><br>
                    <textarea id="spacification" rows="10" oninput="convertText(this)" name="spacification"><?=$_GET['spacification']?></textarea><br>

                    <label for="price">Price:</label><br>
                    <input type="number" id="price" name="price" value="<?=$_GET['productPrice']?>"><br>

                    <label for="category">Category:</label><br>
                    <input type="text" id="category" name="category" value="<?=$_GET['productCategory']?>"><br>

                    <label for="stock">Stock:</label><br>
                    <input type="number" id="stock" name="stock" value="<?=$_GET['productStock']?>"><br>

                    <label for="min_order">Min order pices</label><br>
                    <input type="number" id="min_order" value="<?=$_GET['min_order_quantity']?>" name="min_order"><br>

                    <label for="image">Product Image:</label><br>
                    <img src="/BackendAssets/assets/images/ProductImages/<?=$_GET['productImage']?>" imgPath="<?=$_GET['productImage']?>" class="defaultImgName" style="height:80px;border:1px solid gray;margin:0 10px;">
                    <input type="hidden" name="defaultImgPath" value="<?=$_GET['productImage']?>">
                    <input type="file" accept="image/*" class="chooseImgName" name="image" value="<?=$_GET['productImage']?>"><br><br>

                    <label for="productGallery">Product Image Gallery:</label><br>
                    <span id="error" style="color:red;" class="error"></span><br>
                    <input type="file" id="productGallery" name="productGallery[]" accept="image/*" multiple><br>
                    <input type="hidden" name="defaultImgGalleryPath" value="<?=$_GET['productImageGallery']?>">

                    <?php
                    $images=explode(',',$_GET['productImageGallery']);
                    foreach ($images as $image) {
                        ?>
                            <img src="/BackendAssets/assets/images/ProductGalleryImages/<?=$image?>" imgPath="<?=$_GET['productImage']?>" class="defaultImgName" style="height:80px;border:1px solid gray;margin:0 10px;">
                        <?php
                    }
                    ?>
                    <br>

                    <button type="submit" name="submit">Update Product</button>
                </form>
                </div>
            </div>
        </div>
    </div>
    <script>
        const chooseImageElement=document.getElementById("productGallery");
        chooseImageElement.addEventListener("change",(e)=>{
            const errorSpan = document.getElementById('error');
            if(e.target.files.length > 3)
        {
            errorSpan.textContent = 'You can only select up to 3 images.';
            e.target.value='';
        }else
        {
            errorSpan.textContent="";
        }
        })

        const convertText=(e)=>{
            let text=e.value;
            let html=text.replace(/(\r\n|\n|\r)/g, '<br>');
            e.value=html;
        }

    </script>
</body>
</html>