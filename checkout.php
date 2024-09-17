<?php

include("BackendAssets/Components/header.php");
include("./BackendAssets/db.php");
if (isset($_SESSION['user'])) {
    $username = $_SESSION['user'];
    $sql = "SELECT * FROM `user` WHERE `First_name` = '$username'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
}
$sql2 = "SELECT * FROM `checkout`";
$result2 = $conn->query($sql2);
$cartdata = mysqli_fetch_all($result2);
$rr = [];
for ($o = 0; $o < count($cartdata); $o++) {
    array_push($rr, $cartdata[$o][2]);
}

?>
<link rel="stylesheet" href="BackendAssets/css/checkout.css">
<?php
if (isset($_GET["delete"]) && $_GET['delete'] === "true")
{
    echo "<div class='alert alert-success' role='alert'>
    <button type='button' class='close' data-dismiss='alert'>x</button>
  Product removed from the cart
</div>";
}

?>
<div class="container">
    <div class="row">
        <div class="col-sm-8">
            <h3></h3>
            <div class="checkout-form">
                <form action="BackendAssets/mysqlcode/checkout.php" method="post">
                    <label for="username">Name :</label><br>
                    <input type="text" name="username" placeholder="Enter your name" id="username" value=<?php echo $row['First_name'] . "&nbsp;" . $row['Last_name']; ?> required><br>

                    <label for="useremail">Email :</label><br>
                    <input type="email" name="useremail" placeholder="Enter your email" value=<?= $row['email'] ?> id="useremail" required><br>

                    <label for="usernumber">Number :</label><br>
                    <input type="number" name="usernumber" placeholder="Enter your number" oninput="numbervalidataion(this)" id="usernumber" required><br>
                    <span class="numberWarning"></span>

                    <div class="row">
                        <div class="col-sm-4">
                            <label for="country">Selcet country</label>
                            <select name="country" id="country"></select>
                        </div>
                        
                        <div class="col-sm-4">
                            <label for="states">Select state</label><br>
                            <select name="state" id="states" name="userstate" required></select>
                        </div>

                        <div class="col-sm-4">
                            <label for="city">Select District</label>
                            <select name="city" id="city" name="usercity" required>
                            </select>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-4">
                            <label for="pincode">Enter pin code</label>
                            <input type="number" id="pincode" name="userpincode" placeholder="Enter pin code here" required>
                        </div>
                    </div>

                    <label for="useraddress">Home Address :</label><br>
                    <textarea name="useraddress" placeholder="Flat/House no./Floor/Building" id="useraddress" required></textarea><br>

                    <label for="useraddress">Office Address :</label><br>
                    <textarea name="useraddress" placeholder="Flat/House no./Floor/Building" id="useraddress" required></textarea><br>

                    <label for="useraddress">Gift Address :</label><br>
                    <textarea name="useraddress" placeholder="Flat/House no./Floor/Building" id="useraddress" required></textarea><br>


            </div>
        </div>
        <div class="col-sm-4">
            <div style="border:1px solid lightgray;margin:10px;padding:10px;border-radius:10px;">
                <!-- <h3>Product details here</h3> -->
                <div class="product-div">
                    <?php
                    include("BackendAssets/db.php");
                    $user_name = $_SESSION["user"];
                    $sql = "SELECT * FROM `productscart` as pc INNER JOIN `products` as p WHERE pc.product_id=p.id";
                    $result = mysqli_query($conn, $sql);
                    $sqlTwo = "SELECT `id` FROM `user` WHERE `First_name`='$user_name'";
                    $resultTwo = mysqli_query($conn, $sqlTwo);
                    $productCount = [];

                    if ($result) {
                        foreach ($result as $val) {
                            if ($val['user_id'] === $userRow['id']) {

                                array_push($productCount, count($val));
                    ?>
                                <div class="addtocart-card">
                                    <div class="row">
                                        <div class="col-sm-4" style="padding:4px">
                                            <img src="/BackendAssets/assets/images/ProductImages/<?= $val['productimage'] ?>" alt="">
                                        </div>
                                        <div class="col-sm-8">
                                            <h5><?= $val['productname'] ?>
                                                <a href="/BackendAssets/mysqlcode/removecart.php?id=<?= $val['cartid'] ?>&page=<?= $_SERVER['PHP_SELF'] ?>" style="color:gray !important;">
                                                    <span class="remove_cart_cross_icon"><i class="fa fa-times-circle" style="font-size:20px;float:inline-end;"></i></span>
                                            </h5>
                                            </a>

                                            <h5>Prduct price : <i class="fa fa-rupee" style="padding:0 5px"></i><?= $val['price'] ?></h5>
                                            <?php
                                            if ($val['min_order'] > 0) {
                                            ?>
                                                <h6>QTY :
                                                    <span class="quantityCount" quantity="<?= $val['min_order'] ?>" product_id="<?= $val['id'] ?>"><?= $val['min_order'] ?>&nbsp;&nbsp;<span style="color:red;">(Min order <?= $val['min_order'] ?> pices)</span></span>
                                                    <h5>Price : <i class="fa fa-rupee" style="padding:0 5px"></i><span class="price"><?= $val['price'] * $val['min_order'] ?></span></h5>
                                                </h6>
                                                <?php
                                            } 
                                            else 
                                            {
                                                
                                                if (in_array((int)$val['id'], $rr)) 
                                                { 
                                                    foreach ($cartdata as $value) {

                                                        if ($val['id'] === $value[2]) {
    
                                                    ?>
                                                            <h6 class="d-flex">QTY : <input type="number" name="quantityprice" productid="<?= $val['id'] ?>" productprice="<?= $val['price'] ?>" userid="<?= $val['user_id'] ?>" id="quantityprice" step="1" value="<?= $value[3] ?>" min="1" onchange="quantityTotal(this)" onkeypress="return false;" class="inputquantityCount">
                                                            </h6>
                                                            <h5>Price :
                                                                <i class="fa fa-rupee" style="padding:0 5px"></i>
                                                                <span class="price"><?= $value[5] ?></span>
    
                                                            </h5>
                                                    <?php
                                                        }
                                                    }
                                                } 
                                                else 
                                                { ?>
                                                    <h6 class="d-flex">QTY : <input type="number" name="quantityprice" productid="<?= $val['id'] ?>" productprice="<?= $val['price'] ?>" userid="<?= $val['user_id'] ?>" id="quantityprice" step="1" value="1" min="1" onchange="quantityTotal(this)" onkeypress="return false;" class="inputquantityCount">
                                                            </h6>
                                                    <h5>Price :
                                                        <i class="fa fa-rupee" style="padding:0 5px"></i>
                                                        <span class="price"><?= $val['price'] ?></span>
    
                                                    </h5>
                                               <?php }
                                            }
                                            ?>
                                        </div>
                                    </div>
                                </div>
                                <input type="hidden" name="useridforstoreindatabase" value="<?=$val['user_id']?>">
                    <?php
                            } 
                        }
                    } 
                    else 
                    {
                        echo "Your cart empty";
                    }
                    ?>
                </div>
                <div class="total-price">
                    <h5>Total Price :</h5>
                    <h5 class="totalPrice"></h5>
                </div>
                <?php
                if (isset($_SESSION['user']) && count($productCount) > 0) {
                ?>
                    <button type="submit" class="order-button" name="place_order">Place Order</button>
                <?php
                } else {
                ?>
                    <button type="submit" class="order-button" title="Button Disabled" disabled>Place Order</button>
                <?php
                }
                ?>

                <!--  send input hidden data start from here -->


                 <!-- one input field bottom of if condition in foreach loop for storing userid               -->
                <input type="hidden" name="totalPrice" id="totalPrice" value="">
                <input type="hidden" name="productidandquantity" class="productidandquantity" value="">

                <!-- // send input hidden data end here -->

                </form>
            </div>
        </div>
    </div>
</div>
<script>


    // this code for insert country and states option according to user select start from here

     const countryStateEle=document.getElementById("country");
     const stateSelectEle = document.getElementById("states");
     const citySelectEle = document.getElementById("city");
    


    

    // end here


    // this code for storing quantity of the product and price accorint to quantity start from here 

    const quantityTotal = (e) => {

        data = {
            "userid": e.getAttribute("userid"),
            "procductid": e.getAttribute("productid"),
            "productprice": e.getAttribute("productprice"),
            "productQty": e.value
        }
        fetch("BackendAssets/mysqlcode/checkoutcart.php", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            })
    }


    // end here


    // this code for adding all product grand total price start from here

    const totalpriceCalculation=()=>{
        let priceElement=document.querySelectorAll(".price");
        let totalPriceEle=document.getElementsByClassName("totalPrice");
        let totalPriceInputHiddinInputfield=document.getElementById("totalPrice");
        let grandtotal=0;
        for(o=0;o<priceElement.length;o++)
    {
        grandtotal+=parseInt(priceElement[o].innerText);
    }
    totalPriceEle[0].innerText=grandtotal;
    totalPriceInputHiddinInputfield.value=grandtotal;
    }
    totalpriceCalculation();

    // end here


    // this code for validation of number user can only insert 10 numbers start from here

    const numbervalidataion = (val) => {
        let numberWarningEle = document.getElementsByClassName("numberWarning");
        if (val.value.length > 10) {
            val.value = "";
            numberWarningEle[0].style.color = "red";
            numberWarningEle[0].innerHTML = "You enter only 10 numbers of digits";
        }
    }

    // end here

    // count product quantity and product id start from here


    const order_placec_order_id_and_product_quntity=()=>{
        const product_quantity_ele=document.getElementsByClassName("inputquantityCount");
        const product_fix_quantity_ele=document.getElementsByClassName('quantityCount');
        const productidandquantity=document.getElementsByClassName("productidandquantity");
        
        let productidandQuntity={productid:"",productquantity:""};


        for(e=0;e<product_fix_quantity_ele.length;e++)
        {
            let Element=product_fix_quantity_ele[e];
            if(Element)
            {
                productidandQuntity.productid+=product_fix_quantity_ele[e].getAttribute("product_id")+",",
                productidandQuntity.productquantity+=product_fix_quantity_ele[e].getAttribute("quantity")+","
            }
            else
            {
                console.log("Element nahi hai");
            }
            
        }
        for(i=0;i<product_quantity_ele.length;i++)
        {
            productidandQuntity.productid+=product_quantity_ele[i].getAttribute("productid")+",",
            productidandQuntity.productquantity+=product_quantity_ele[i].value+","
        }
        productidandquantity[0].value=JSON.stringify(productidandQuntity);
    }
    order_placec_order_id_and_product_quntity();


    // count product quantity and product id end here


</script>
<?php
include("BackendAssets/Components/footer.php");
?>