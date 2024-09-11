<?php
include("BackendAssets/Components/wholecountries.php");
include("BackendAssets/Components/header.php");
include("./BackendAssets/db.php");
if (isset($_SESSION['user'])) {
    $username = $_SESSION['user'];
    $sql = "SELECT * FROM `user` WHERE `First-name` = '$username'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
}
?>
<link rel="stylesheet" href="BackendAssets/css/checkout.css">
<?php
if(isset($_GET["delete"]) && $_GET['delete'] == true)
echo "<div class='alert alert-success' role='alert'>
  Product removed from the cart
</div>";
?>
<div class="container">
    <div class="row">
        <div class="col-sm-8">
            <h3></h3>
            <div class="checkout-form">
                <form action="BackendAssets/mysqlcode/checkout.php" method="post">
                    <label for="username">Name :</label><br>
                    <input type="text" name="username" placeholder="Enter your name" id="username" value=<?php echo $row['First-name'] . "&nbsp;" . $row['Last-name']; ?> required><br>

                    <label for="useremail">Email :</label><br>
                    <input type="email" name="useremail" placeholder="Enter your email" value=<?= $row['email'] ?> id="useremail" required><br>

                    <label for="usernumber">Number :</label><br>
                    <input type="number" name="usernumber" placeholder="Enter your number" oninput="numbervalidataion(this)"  id="usernumber" required><br>
                    <span class="numberWarning"></span>

                    <div class="row">
                        <div class="col-sm-4">
                            <label for="states">Select state</label><br>
                            <select name="state" id="states" name="userstate" required></select>
                        </div>

                        <div class="col-sm-4">
                            <label for="city">Select city</label>
                            <select name="city" id="city" name="usercity" required>
                            </select>
                        </div>

                        <div class="col-sm-4">
                            <label for="pincode">Enter pin code</label>
                            <input type="number" id="pincode" name="userpincode" placeholder="Enter pin code here" required>
                        </div>
                    </div>

                    <label for="useraddress">Address :</label><br>
                    <textarea name="useraddress" placeholder="Enter your address" id="useraddress" required></textarea><br>


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
                    $sqlTwo = "SELECT `id` FROM `user` WHERE `First-name`='$user_name'";
                    $resultTwo = mysqli_query($conn, $sqlTwo);
                    $echoTimes=false;
                    $productCount=[];
                    
                    if ($result) {
                        foreach ($result as $val) {
                            if ($val['user_id'] == $userRow['id']) {
                                array_push($productCount, count($val));
                    ?>
                                <div class="addtocart-card">
                                    <div class="row">
                                        <div class="col-sm-4" style="padding:4px">
                                            <img src="/BackendAssets/assets/images/ProductImages/<?= $val['productimage'] ?>" alt="">
                                        </div>
                                        <div class="col-sm-8">
                                            <h5><?= $val['productname'] ?>
                                                <a href="/BackendAssets/mysqlcode/removecart.php?id=<?= $val['cartid']?>&page=<?=$_SERVER['REQUEST_URI']?>" style="color:gray !important;">
                                                    <span class="remove_cart_cross_icon"><i class="fa fa-times-circle" style="font-size:20px;float:inline-end;"></i></span>
                                            </h5>
                                            </a>

                                            <h5>Prduct price : <i class="fa fa-rupee" style="padding:0 5px"></i><?= $val['price'] ?></h5>
                                            <?php
                                            if ($val['min_order'] > 0) {
                                            ?>
                                                <h6>QTY :
                                                    <span class="quantityCount"><?= $val['min_order'] ?>&nbsp;&nbsp;<span style="color:red;">(Min order <?= $val['min_order'] ?> pices)</span></span>
                                                    <h5>Price : <i class="fa fa-rupee" style="padding:0 5px"></i><?= $val['price'] * $val['min_order'] ?></h5>
                                                    <input type="hidden" class="fixQtyProductQtyAndId" productid="<?= $val['id'] ?>" productquantity="<?= $val['min_order'] ?>" pricewithQty="<?= $val['price'] * $val['min_order'] ?>">
                                                </h6>
                                            <?php
                                            } else {
                                            ?>
                                                <h6 class="d-flex">QTY : <input type="number" name="quantityprice" productid="<?= $val['id'] ?>" id="quantityprice" step="1" value="1" min="1" onchange="quantityTotal()" onkeypress="return false;" class="inputquantityCount">
                                                    <input type="hidden" class="inputprice" value="<?= $val['price'] ?>">
                                                </h6>
                                                <h5>Price :
                                                    <i class="fa fa-rupee" style="padding:0 5px"></i>
                                                    <span class="price"></span>
                                                </h5>
                                            <?php
                                            }
                                            ?>
                                        </div>
                                    </div>
                                </div>
                    <?php
                            }
                            else
                            {
                                if(!$echoTimes)
                                {
                                    $echoTimes = true;
                                    echo "<h4 style='padding:0 10px'>Cart empty now</h4>";
                                }
                            }
                        }
                    } else {
                        echo "Your cart empty";
                    }
                    ?>
                    <input type="hidden" name="productidsAndQuantites" id="productidsAndQuantites" value="">
                    <input type="hidden" name="useridforstoreindatabase" value="<?= $userRow['id'] ?>">
                </div>
                <div class="total-price">
                    <h5>Total Price :</h5>
                    <h5 class="totalPrice"></h5>
                    <input type="hidden" name="totalPrice" id="totalPriceHiddenInputField" value="">
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
                </form>
            </div>
        </div>
    </div>
</div>
<script>
    const countryAndstates = <?php echo json_encode($stateAndcity); ?>;
    const stateSelectEle = document.getElementById("states");
    const citySelectEle = document.getElementById("city");
    let stateSelectValue = "Andhra Pradesh (AP)";
    for (const key in countryAndstates) {
        let option = document.createElement("option");
        option.value = key;
        option.textContent = key;
        stateSelectEle.append(option);
    }
    const optionSelct = document.querySelectorAll("#states");
    optionSelct[0].addEventListener("change", (e) => {
        stateSelectValue = e.target.value;
        for (const i of countryAndstates[stateSelectValue]) {
            let cityoption = document.createElement("option");
            cityoption.textContent = i;
            cityoption.value = i;
            citySelectEle.append(cityoption);
        }
    })
    for (const i of countryAndstates[stateSelectValue]) {
        let cityoption = document.createElement("option");
        cityoption.textContent = i;
        cityoption.value = i;
        citySelectEle.append(cityoption);
    }

    const quantityElement = document.getElementsByClassName("inputquantityCount");
    const priceElement = document.getElementsByClassName("price");
    const inputpricefield = document.getElementsByClassName("inputprice");
    const totalPriceElement = document.getElementsByClassName("totalPrice");
    const totalPriceHiddenInputField = document.getElementById("totalPriceHiddenInputField");
    const productidsAndQuantites = document.getElementById("productidsAndQuantites");
    const fixQtyProductQtyAndId = document.getElementsByClassName("fixQtyProductQtyAndId");
    let td = 0;
    let proidforsend = 0;
    let useridforsend = 0;
    let fixQtyProductTotalAmount = [];

    let productIdandQuantity = 0;




    const quantityTotal = () => {
        td = 0;
        for (i = 0; i < quantityElement.length; i++) {
            priceElement[i].innerText = (quantityElement[i].value) * (inputpricefield[i].value);
            td += (quantityElement[i].value) * (inputpricefield[i].value);


            // proidforsend+=quantityElement[i].getAttribute('productid')+",";
            // useridforsend+=quantityElement[i].value+",";

            productIdandQuantity['productID'] += quantityElement[i].getAttribute('productid') + ",";
            productIdandQuantity['quantity'] += quantityElement[i].value + ",";


        }

        if (fixQtyProductQtyAndId.length > 0) {
            for ($i = 0; $i < fixQtyProductQtyAndId.length; $i++) {
                productIdandQuantity['productID'] += fixQtyProductQtyAndId[$i].getAttribute("productid") + ",";
                productIdandQuantity['quantity'] += fixQtyProductQtyAndId[$i].getAttribute("productquantity") + ",";
                fixQtyProductTotalAmount.push(parseInt(fixQtyProductQtyAndId[$i].getAttribute("pricewithQty")));
            }
        }
        let uniqueArray = [...new Set(fixQtyProductTotalAmount)];
        let totalsumval = uniqueArray.reduce((acc, current) => acc + current, 0);

        productidsAndQuantites.value = JSON.stringify(productIdandQuantity);
        let withaddfixquantityproductprice=td + totalsumval;
        let totalPriceHTML = `<i class='fa fa-rupee' style='padding:0 5px'></i>` + withaddfixquantityproductprice;
        totalPriceElement[0].innerHTML = totalPriceHTML;
        totalPriceHiddenInputField.value = td;
    }
    quantityTotal();


    const numbervalidataion=(val)=>{
        let numberWarningEle=document.getElementsByClassName("numberWarning");
        if(val.value.length > 10)
    {
        val.value="";
        numberWarningEle[0].style.color="red";
        numberWarningEle[0].innerHTML="You enter only 10 numbers of digits";
    }
    }



</script>
<?php
include("BackendAssets/Components/footer.php");
?>