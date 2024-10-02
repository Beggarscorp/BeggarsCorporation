<?php
include("BackendAssets/db.php");
include("BackendAssets/Components/popup.php");
error_reporting(0);
$sql="SELECT * FROM `category`";
$result=mysqli_query($conn,$sql);

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Products</title>
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
                    <div class="msg">
                    <?php
                    if (isset($_GET['msg'])) {
                        echo "<div class='alert alert-success' role='alert'>
                      " . $_GET['msg'] . "
                    </div>";
                    }
                    ?>
                    </div>
                    <h3>Add Product from here</h3>
                    <form action="BackendAssets/mysqlcode/addproduct.php" method="post" enctype="multipart/form-data">
                        <label for="name">Product Name:</label><br>
                        <input type="text" id="name" placeholder="Enter product name here" name="name" required><br>

                        <label for="description">Short Description:</label><br>
                        <textarea id="description" rows="10" oninput="convertText(this)" placeholder="Enter prouduct short discription here" name="description" required></textarea><br>
                        
                        <label for="sizeAndfit">Size & fit:</label><br>
                        <textarea id="sizeAndfit" rows="10" oninput="convertText(this)" placeholder="Enter prouduct size & fit here" name="sizeAndfit" required></textarea><br>
                        
                        <label for="materialAndCare">Material & Care:</label><br>
                        <textarea id="materialAndCare" rows="10" oninput="convertText(this)" placeholder="Enter prouduct material & care here" name="materialAndCare" required></textarea><br>
                        
                        <label for="spacification">Spacification:</label><br>
                        <textarea id="spacification" rows="10" oninput="convertText(this)" placeholder="Enter prouduct spacification here" name="spacification" required></textarea><br>

                        <label for="product_color">Product color</label><br>
                        <select name="product_color" id="product_color">
                            <option value="Default">Select Product Color</option>
                            <?php
                            $product_color_sql="SELECT * FROM `product_color`";
                            $product_color_result=mysqli_fetch_all(mysqli_query($conn,$product_color_sql),MYSQLI_ASSOC);
                            foreach($product_color_result as $color_data)
                            {
                            ?>
                                <option value="<?=$color_data['color']?>"><?=$color_data['color']?></option>
                            <?php
                            }
                            ?>
                        </select><br>
                        <button class="add_color" data-bs-toggle="modal" data-bs-target="#product-color">Add color</button>
                        <br>

                        <label for="price">Price:</label><br>
                        <input type="number" id="price" placeholder="Enter product price here" name="price" step="0.01" required><br>

                        <label for="category">Category:</label><br>
                        <select name="category" id="category" class="addcate-select" required>
                            <option value="default" disabled selected>Select product category</option>
                            <?php
                            foreach ($result as $row) {
                            ?>
                                <option value="<?=$row['category']?>"><?=$row['category']?></option> 
                            <?php
                            }
                            ?>
                        </select>
                        <br>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addCategoryModal">Add category</button><br>

                        <label for="stock">Stock:</label><br>
                        <input type="number" id="stock" placeholder="Enter product stock here" name="stock" value="0"><br>

                        <label for="min_order">Min order quantity</label><br>
                        <input type="number" id="min_order" placeholder="Enter min order pices of the product" name="min_order"><br>

                        <label for="image">Product Image:</label><br>
                        <input type="file" id="image" accept="image/*" name="image" required><br>

                        <label for="productGallery">Upload Product Images for Gallery:</label><br>
                        <span id="error" style="color:red;" class="error"></span><br>
                        <input type="file" id="productGallery" name="productGallery[]" accept="image/*" multiple required><br>

                        <button type="submit" name="submit">Add Product</button>
                    </form>

                    <!-- category add form start from here -->

                    <div class="modal fade" id="addCategoryModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Add Category</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="/BackendAssets/mysqlcode/addcategory.php" method="POST">
                                        <label for="category">Category:</label><br>
                                        <input type="text" name="category" placeholder="Enter your category here" class="w-100">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary px-2" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" name="cateSubmit" class="btn btn-primary">Submit</button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <!-- category add form end here -->

                    <!-- product color add form start from here -->

                    <div class="modal fade" id="product-color" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Add Category</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="/BackendAssets/mysqlcode/addcolor.php" method="POST">
                                        <label for="product-color">Product Color:</label><br>
                                        <input type="text" name="product-color" placeholder="Enter product color here" class="w-100">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary px-2" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" name="product_color_submit" class="btn btn-primary">Submit</button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <!-- end here -->

                    <?php
                    if (isset($_GET['uploaded'])) 
                    {
                        popupshow("Product uploaded");
                    }
                    ?>
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
