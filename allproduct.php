<?php
include('BackendAssets/mysqlcode/allproducts.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Products</title>
    <link rel="stylesheet" href="/BackendAssets/css/allproduct.css">
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-2 p-0">
                <?php include 'sidebar.php'; ?>
            </div>
            <div class="col-sm-10">
            <div class="content vh-100 overflowY-visible p-3">
                    <h3>All products</h3>
                    <table class="w-100 py-2">
                        <thead>
                            <tr class="lato-black">
                                <td>Id</td>
                                <td>Image</td>
                                <td>Name</td>
                                <td>Category</td>
                                <td>Price</td>
                                <td>Stock</td>
                                <td>Discription</td>
                                <td>Update</td>
                                <td>Delete</td>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                        
                           foreach($data as $row) {
                            ?>
                            <tr>
                                <td><?=$row['id'] ?></td>
                                <td>
                                <img src="/BackendAssets/assets/images/ProductImages/<?=$row['productimage']?>" alt="<?=$row['productimage']?>" style="height:60px;">    
                                </td>
                                <td><?=$row['productname']?></td>
                                <td><?=$row['category']?></td>
                                <td>INR <?=$row['price']?></td>
                                <td><?=$row['stock']?></td>
                                <td><?=$row['discription']?></td>
                                <td class="update" onclick="updateProduct('<?=$row['id']?>','<?=$row['productname']?>','<?=$row['category']?>','<?=$row['price']?>','<?=$row['stock']?>','<?=$row['discription']?>','<?=$row['productimage']?>')">Updata</td>
                                <td class="delete" onclick="deleteProduct(<?=$row['id'] ?>)">Delete</td>
                            </tr>
                            <?php
                           }
                           ?>
                           <form action="/BackendAssets/mysqlcode/allproducts.php" method="post" id="delete">
                               <input type="hidden" name="delete">
                               <input type="hidden" name="id" value="<?=$row['id'] ?>">
                           </form>
                        </tbody>
                    </table> 
                </div>
            </div>
        </div>
    </div>
    <script>
        const deleteProduct=(id)=>{
            alert("Want to update product"+id);
           document.getElementById("delete").submit();
        }
        const updateProduct=(id,productname,productcategory,productprice,productstock,productdiscription,productimage)=>{
            alert("Want to update product"+id);
            window.location.href="/productUpdate.php?Id="+id+'&productName='+productname+'&'+'productCategory='+productcategory+'&productPrice='+productprice+'&productStock='+productstock+'&productDiscription='+productdiscription+'&productImage='+productimage;
        }
    </script>
</body>

</html>