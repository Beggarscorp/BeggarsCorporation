<?php
ob_start();
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
if (isset($_GET["delete"]) && $_GET['delete'] === "true") {

    echo "<script>
        Swal.fire({
            title: 'Product Deleted Successfully',
            icon: 'success'
        });
    </script>";
} else if (isset($_GET["delete"]) && $_GET['delete'] === "false") {
    echo "<script>
        Swal.fire({
            title: 'Product not Deleted',
            icon: 'error'
        });
    </script>";
}

?>
<div class="container">
    <div class="row">
        <div class="col-sm-8">
            <h3></h3>
            <div class="checkout-form">
                <form action="BackendAssets/mysqlcode/checkout.php" method="post" id="place_order_form">
                    <label for="username">Name :</label><br>
                    <input type="text" name="username" placeholder="Enter your name" id="username" value=<?php echo $row['First_name'] . "&nbsp;" . $row['Last_name']; ?> onkeypress="return false" readonly required><br>

                    <label for="useremail">Email :</label><br>
                    <input type="email" name="useremail" placeholder="Enter your email" value=<?= $row['email'] ?> id="useremail" onkeypress="return false" readonly required><br>

                    <label for="usernumber">Number :</label><br>
                    <input type="number" name="usernumber" placeholder="Enter your number" id="usernumber" required><br>

                    <div class="row">
                        <div class="col-sm-4">
                            <label for="country">Selcet country</label>
                            <select name="country" id="country" value="" onchange="fetchState(this)">
                                <option>Select country</option>
                            </select>
                        </div>

                        <div class="col-sm-4">
                            <label for="states">Select state</label><br>
                            <select name="state" id="states" onchange="fetchCity(this)" required></select>
                        </div>

                        <div class="col-sm-4">
                            <label for="city">Select city</label>
                            <select name="city" id="city" required>
                            </select>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-6">
                            <label for="pincode">Enter pin code</label>
                            <input type="number" id="pincode" name="userpincode" placeholder="Enter pin code here" required>
                        </div>
                        <div class="col-sm-6">
                            <div></div><br><br>
                            <span class="pincodeMsg"></span>
                        </div>
                    </div><br>

                    <label for="useraddress">Address :</label><br>
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
                                            } else {

                                                if (in_array((int)$val['id'], $rr)) {
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
                                                } else { ?>
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
                                <input type="hidden" name="useridforstoreindatabase" value="<?= $val['user_id'] ?>">
                    <?php
                            }
                        }
                    } else {
                        echo "Your cart empty";
                    }
                    ?>
                </div>
                <div class="total-price">
                    <h5>Total Price :</h5>
                    <div style="display:flex;">
                        <h6>INR &nbsp;</h6>
                        <h5 class="totalPrice" id="total_price_pay"></h5>
                    </div>
                </div>
                <?php
                if (isset($_SESSION['user']) && count($productCount) > 0) {
                ?>
                    <button type="submit" class="order-button" id="rzp-button1" name="place_order">Place Order</button>
                <?php
                } else {
                ?>
                    <button type="button" class="order-button" title="Button Disabled" disabled>Place Order</button>
                <?php
                }
                ?>

                <!--  send input hidden data start from here -->


                <!-- one input field bottom of if condition in foreach loop for storing userid               -->
                <input type="hidden" name="totalPrice" id="totalPrice" value="">
                <input type="hidden" name="productidandquantity" class="productidandquantity" value="">
                <input type="hidden" name="razorpay_payment_id" id="razorpay_payment_id" value="">
                <input type="hidden" name="razorpay_order_id" id="razorpay_order_id" value="">
                <input type="hidden" name="razorpay_signature" id="razorpay_signature" value="">

                <!-- // send input hidden data end here -->

                </form>
            </div>
        </div>
    </div>
</div>


<script src="https://checkout.razorpay.com/v1/checkout.js"></script>

<script>
    // this code for adding all product grand total price start from here

    const totalpriceCalculation = () => {
        let priceElement = document.querySelectorAll(".price");
        let totalPriceEle = document.getElementsByClassName("totalPrice");
        let totalPriceInputHiddinInputfield = document.getElementById("totalPrice");
        let grandtotal = 0;
        for (o = 0; o < priceElement.length; o++) {
            grandtotal += parseInt(priceElement[o].innerText);
        }
        totalPriceEle[0].innerText = grandtotal;
        totalPriceInputHiddinInputfield.value = grandtotal;
    }
    totalpriceCalculation();

    // end here


    // payment gateway js code start from here

    let username = "";
    let useremail = "";
    let usernumber = 0;
    let country = "";
    let states = "";
    let city = "";
    let pincode = "";
    let useraddress = "";
    let grand_total_price_amount = 0;

    document.getElementById('rzp-button1').onclick = function(e) {
        e.preventDefault();
        username = document.getElementById("username").value;
        useremail = document.getElementById("useremail").value;
        usernumber = "+91"+document.getElementById("usernumber").value;
        country = document.getElementById("country").value;
        states = document.getElementById("states").value;
        city = document.getElementById("city").value;
        pincode = document.getElementById("pincode").value;
        useraddress = document.getElementById("useraddress").value;
        grand_total_price_amount = Math.round(parseFloat(document.getElementById("total_price_pay").innerText) * 100);


        if (username != "" && useremail != "" && usernumber != "" && country != "" && states != "" && city != "" && pincode != "" && useraddress != "" && grand_total_price_amount != "") {
            fetch('BackendAssets/Components/get_order_id.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        amount: grand_total_price_amount
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.order_id) {
                        var options = {
                            "key": "rzp_live_OyvHUvi3gQtHGd", // Enter the Key ID generated from the Dashboard
                            "amount": grand_total_price_amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                            "currency": "INR",
                            "name": "Beggars Corporation", //your business name
                            "description": "Test Transaction",
                            "image": "https://beggarscorporation.com/images/main/header-logo3.png",
                            "order_id": data.order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                            "callback_url": "https://beggarscorporation.com/order.php",
                            "handler": function(response) {
                                if (response.razorpay_payment_id && response.razorpay_order_id && response.razorpay_signature) {
                                    document.getElementById("razorpay_payment_id").value = response.razorpay_payment_id;
                                    document.getElementById("razorpay_order_id").value = response.razorpay_order_id;
                                    document.getElementById("razorpay_signature").value = response.razorpay_signature;
                                    document.getElementById("place_order_form").submit();
                                } else {
                                    Swal.fire({
                                        title: "Not get response",
                                        icon: "warning"
                                    });
                                }
                            },
                            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                                "name": username, //your customer's name
                                "email": useremail,
                                "contact": usernumber.toString() //Provide the customer's phone number for better conversion rates 
                            },
                            "notes": {
                                "address": useraddress
                            },
                            "theme": {
                                "color": "#b7730d"
                            }
                        };

                        var rzp1 = new Razorpay(options);
                        rzp1.on('payment.failed', function(response) {
                            alert(response.error.reason);
                        });
                        rzp1.open();
                    } else {
                        console.error("Order creation failed:", data.error);
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        } else {
            Swal.fire({
                title: "All fields required",
                icon: "warning"
            })
        }
    }



    // payment gateway js code end here



    // this code for insert country and states option according to user select start from here

    const countryStateEle = document.getElementById("country");
    const stateSelectEle = document.getElementById("states");
    const citySelectEle = document.getElementById("city");


    const fetchCity = (e) => {

        let country = countryStateEle.value;
        let state = e.value;

        fetch('https://countriesnow.space/api/v0.1/countries/state/cities/q?country=' + country + '&state=' + state)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json(); // or response.text() for non-JSON data
            })
            .then(data => {

                let cityTagoptions = document.querySelectorAll("#city option");
                if (cityTagoptions.length > 0) {
                    for (r = 0; r < cityTagoptions.length; r++) {
                        cityTagoptions[r].remove();
                    }
                }

                if (data.data.length > 0) {
                    for (s = 0; s < data.data.length; s++) {
                        stateSelectEle.removeAttribute("style");
                        let option = document.createElement("option");
                        option.text = data.data[s];
                        option.value = data.data[s];
                        option.setAttribute("value", data.data[s]);
                        citySelectEle.append(option);
                    }
                } else {
                    let option = document.createElement("option");
                    option.text = "No city available";
                    citySelectEle.setAttribute("style", "color:red !important;");
                    citySelectEle.append(option);
                }

            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }


    const fetchState = (e) => {
        fetch('https://countriesnow.space/api/v0.1/countries/states/q?country=' + e.value)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json(); // or response.text() for non-JSON data
            })
            .then(data => {
                // console.log(data.data.states);
                let stateTagoptions = document.querySelectorAll("#states option");
                if (stateTagoptions.length > 0) {
                    for (r = 0; r < stateTagoptions.length; r++) {
                        stateTagoptions[r].remove();
                    }
                }

                if (data.data.states.length > 0) {
                    for (s = 0; s < data.data.states.length; s++) {
                        stateSelectEle.removeAttribute("style");
                        let option = document.createElement("option");
                        option.text = data.data.states[s].name;
                        option.value = data.data.states[s].name;
                        option.setAttribute("value", data.data.states[s].name);
                        stateSelectEle.append(option);
                    }
                } else {
                    let option = document.createElement("option");
                    option.text = "No state available";
                    stateSelectEle.setAttribute("style", "color:red !important;");
                    stateSelectEle.append(option);
                }

            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }


    fetch('https://countriesnow.space/api/v0.1/countries/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // or response.text() for non-JSON data
        })
        .then(data => {
            // console.log(data.data)
            for (c = 0; c < data.data.length; c++) {
                let option = document.createElement("option");
                option.text = data.data[c].country;
                option.setAttribute("value", data.data[c].country);
                countryStateEle.append(option);
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });




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


    // count product quantity and product id start from here


    const order_placec_order_id_and_product_quntity = () => {
        const product_quantity_ele = document.getElementsByClassName("inputquantityCount");
        const product_fix_quantity_ele = document.getElementsByClassName('quantityCount');
        const productidandquantity = document.getElementsByClassName("productidandquantity");

        let productidandQuntity = {
            productid: "",
            productquantity: ""
        };


        for (e = 0; e < product_fix_quantity_ele.length; e++) {
            let Element = product_fix_quantity_ele[e];
            if (Element) {
                productidandQuntity.productid += product_fix_quantity_ele[e].getAttribute("product_id") + ",",
                    productidandQuntity.productquantity += product_fix_quantity_ele[e].getAttribute("quantity") + ","
            } else {
                console.log("Element nahi hai");
            }

        }
        for (i = 0; i < product_quantity_ele.length; i++) {
            productidandQuntity.productid += product_quantity_ele[i].getAttribute("productid") + ",",
                productidandQuntity.productquantity += product_quantity_ele[i].value + ","
        }
        productidandquantity[0].value = JSON.stringify(productidandQuntity);
    }
    order_placec_order_id_and_product_quntity();


    // count product quantity and product id end here
</script>
<?php
include("BackendAssets/Components/footer.php");
?>