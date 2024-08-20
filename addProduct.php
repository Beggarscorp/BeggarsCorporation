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
                    <h3>Add Product from here</h3>
                    <form action="BackendAssets/mysqlcode/addproduct.php" method="post" enctype="multipart/form-data">
                    <label for="name">Product Name:</label><br>
                    <input type="text" id="name" placeholder="Enter product name here"  name="name" required><br>

                    <label for="description">Description:</label><br>
                    <textarea id="description" placeholder="Enter prouduct discription here"  name="description"></textarea><br>

                    <label for="price">Price:</label><br>
                    <input type="number" id="price" placeholder="Enter product price here"  name="price" step="0.01" required><br>

                    <label for="category">Category:</label><br>
                    <input type="text" id="category" placeholder="Enter product category here"  name="category"><br>

                    <label for="stock">Stock:</label><br>
                    <input type="number" id="stock" placeholder="Enter product stock here"  name="stock" value="0"><br>

                    <label for="image">Product Image:</label><br>
                    <input type="file" accept="image/*" name="image" required><br>
                    <button type="submit" name="submit">Add Product</button>
                    </form>
                    <?php
                    if(isset($_GET['uploaded'])) {
                        ?>
                        <script>
                            alert("Product uploaded");
                        </script>
                    <?php    
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</body>
</html>