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

                    <label for="description">Description:</label><br>
                    <textarea id="description" name="description"><?=$_GET['productDiscription']?></textarea><br>

                    <label for="price">Price:</label><br>
                    <input type="number" id="price" name="price" value="<?=$_GET['productPrice']?>"><br>

                    <label for="category">Category:</label><br>
                    <input type="text" id="category" name="category" value="<?=$_GET['productCategory']?>"><br>

                    <label for="stock">Stock:</label><br>
                    <input type="number" id="stock" name="stock" value="<?=$_GET['productStock']?>"><br>

                    <label for="image">Product Image:</label><br>
                    <img src="/BackendAssets/assets/images/ProductImages/<?=$_GET['productImage']?>" imgPath="<?=$_GET['productImage']?>" class="defaultImgName" style="height:80px;border:1px solid gray;margin:0 10px;">
                    <input type="hidden" name="defaultImgPath" value="<?=$_GET['productImage']?>">
                    <input type="file" accept="image/*" class="chooseImgName" name="image" value="<?=$_GET['productImage']?>"><br>
                    <button type="submit" name="submit">Update Product</button>
                </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
