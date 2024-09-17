
<?php
include("./BackendAssets/Components/forsession.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <!-- responsive meta -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Beggars Corporation</title>
    <link rel="shortcut icon" type="image/x-icon" href="images/main/favicon.png">

    <!-----------------SEO Part-------------------->
    <meta property="og:title" content="Beggars Corporation">
    <meta property="og:description" name="description"
        content="Our donations made them beggars. The Beggars Corporation converts your donations into Social Impact Investments to make beggars work & earn with dignity and create a Begging Free Society. Charity breeds poverty and fails to create responsibility. Thousands of welfare schemes/ projects/ programs by the central/state governments and non-government organizations (NGO) have failed to solve this problem.">
    <meta name="keywords"
        content="Beggers Corporation, begging free society, school of life, poonya, rudraksh, jalabhishek, Don't Donate Invest">
    <meta name="author" content="Chandra Mishra">
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
    <meta property="og:image" content="https://beggarscorporation.com/images/main/bc-is-proud.jpg">
    <meta property="og:url" content="https://beggarscorporation.com/" />
    <meta property="og:type" content="website">
    <meta property="og:title" content="BEGGARS CORPORATION">
    <meta property="og:url" content="index.html">
    <meta property="og:site_name" content="www.beggarscorporation.com">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:domain" content="www.beggarscorporation.com" />
    <meta name="twitter:title" content="beggarscorporation" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Google Tag Manager -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-5PDV5P9');
    </script>
    <!-- End Google Tag Manager -->
    <!-----------------end Seo------------->




    <!-- master stylesheet -->
    <!-- Custom Margin Padding stylesheet -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- Custom Margin Padding stylesheet -->
    <link rel="stylesheet" href="css/bootstrap-margin-padding.css">
    <!-- responsive stylesheet -->
    <!--<link rel="stylesheet" href="css/style.css">-->
    <link rel="stylesheet" href="css/style (2).css">
    <!--<link rel="stylesheet" href="css/new/stylenew.css">-->
    <!--<link rel="stylesheet" href="css/responsive.css">-->
    <link rel="stylesheet" href="css/responsive6.css">
    <link rel="stylesheet" href="css/owl.carousel.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">

    <!-- /************popup*******************/ -->
    <!--<style>
#overlay{
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 500;
display: block;
}
.cnt223 a{
text-decoration: none;
}
.popup{
 background-color: rgb(26 92 167 / 40%);
width: 80%;
margin: 0 auto;
display: none;
position: fixed;
z-index: 9999;
top: -80px;
}

.cnt223{

min-width: 39%;
width: 39%;
min-height: 150px;
margin: 90px auto;
background: #f3f3f3;
position: relative;
z-index: 8000;
padding: 25px 25px 0px 25px;
border-radius: 2px;
box-shadow: 0 2px 5px #000;
height: 590px;
max-height:850px;
}
.cnt223 p{
clear: both;
    color: #555555;
    /* text-align: justify; */
    font-size: 20px;
    font-family: sans-serif;
}
.cnt223 p a{
color: #ffffff;
    background: #d07b1b;
    font-weight: bold;
    z-index: 999;
    padding: 6px 11px;
    border-radius: 50%;
    position: relative;
    top: -155px;
    left: 33px;
}
.cnt223 .x{
float: right;
height: 35px;
left: 22px;
position: relative;
top: -25px;
width: 34px;
}
.cnt223 .x:hover{
cursor: pointer;
}
.close{
    background: #d48b05;
    padding: 8px 12px;
    border-radius: 50%;
    opacity: 0.9;
    position: relative;
    left: 15px;
    bottom: 15px;
}

.modal-content{
	min-width: 140%;
    position: absolute;
    left: -120px;
    top: 50px;
    padding: 20px 10px 40px 10px;
}
@media (max-width: 600px)
{
.cnt223 {
    min-width: 99%;
    width: 99%;
    margin: 84px auto;
	height: 400px;
}
img.img-responsive.double-poonya {
    height: 300px;
}

}

iframe{
max-height: 467px!important;
overflow-y: scroll;
}

#begging-form form.ðŸ˜‰.cog-cognito.cog-form.cog-1.is-default.cog-cognito--styled.cog-form--light-background{
max-height: 467px!important;
overflow-y: scroll!important;
width: 98%;
 }
 
<-- /************end popup***************/ -->
    <!--</style>-->
    <!--Add the following script at the bottom of the web page (before </body></html>)
<script type="text/javascript">function add_chatinline(){var hccid=57730298;var nt=document.createElement("script");nt.async=true;nt.src="https://www.mylivechat.com/chatinline.aspx?hccid="+hccid;var ct=document.getElementsByTagName("script")[0];ct.parentNode.insertBefore(nt,ct);}
add_chatinline();</script>-->

    <!-- whatsapp Button -->
    <script type="text/javascript">
        (function() {
            var options = {
                whatsapp: "+91 85956 17274", // WhatsApp number
                call_to_action: "Drop a Message", // Call to action
                button_color: "#FF6550", // Color of button
                position: "right", // Position may be 'right' or 'left'
                pre_filled_message: "Hello", // WhatsApp pre-filled message
            };
            var proto = 'https:',
                host = "getbutton.io",
                url = proto + '//static.' + host;
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = url + '/widget-send-button/js/init.js';
            s.onload = function() {
                WhWidgetSendButton.init(host, proto, options);
            };
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
        })();
    </script>
    <!--------------end button------------>
</head>

<body id="begging-form">

    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5PDV5P9" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->


    <header class="header">
        <div class="container">
            <div class="logo pull-left">
                <div class="donate-btn clearfix">
                    <style>
                        @media only screen and (max-width: 667px) {
                            .fa fa-bars {
                                right: -260px;
                                z-index: 99997;
                                position: relative;
                                display: block !important;
                                top: 12px;
                                margin-left: 80px;
                            }
                        }


                        /*@media (max-width:500px) {*/
                        /*	.onloadPopup .img*/
                        /*	{*/
                        /*		width:350px !important;*/
                        /*		height:350px !important;*/
                        /*	}*/
                        /*}*/
                        /*.onloadPopup .img*/
                        /*{*/
                        /*	width:500px;*/
                        /*	height:500px;*/
                        /*	position: fixed;*/
                        /*	z-index: 99999;*/
                        /*	transform: translateY(-550px);*/
                        /*	transition: 2s;*/
                        /*	box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);*/
                        /*}*/
                        /*.onloadPopup .img img*/
                        /*{*/
                        /*	width:100%;*/
                        /*	height: 100%;*/
                        /*	border: 3px solid white;*/
                        /*}*/
                        /*.onloadPopup .img i*/
                        /*{*/
                        /*	position: absolute;*/
                        /*	right :0;*/
                        /*	color:white;*/
                        /*	font-size: 25px;*/
                        /*	padding: 5px;*/
                        /*	cursor:pointer;*/
                        /*}*/
                        /*.onloadPopup*/
                        /*{*/
                        /*	display:flex;*/
                        /*	justify-content: space-around;*/
                        /*}*/
                    </style>
                    <div class="nav-footer pull-right">
                        <button><i class="fa fa-bars"></i></button>
                    </div>
                    <div class="modal fade" id="modal-donate-now" tabindex="-1" role="dialog"
                        aria-labelledby="myModalLabel">
                        <div class="modal-dialog style-one" role="document">
                            <div class="modal-content">
                                <div class="modal-body">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-right-info pull-right clearfix">
            </div>
        </div>

        <!-- <div id="nav">
        <a id="headu" href=""
        style="color: white;">Want to create begging free society? Join </a>
        <a id="headu" href="" style="color: black ;"> Citizens for Begging Free India</a>
    </div>
    <img id="logo" src="images/newh/logo.jpg" alt="Beggarscorporation">
    <img  id="logo1"  src="images/newh/logo2.png"  alt="be">
    <img id="logo1" src="images/newh/logo3.png" alt="ty">
    <div id="nav1">
        
            <a id="headd" href=""style="color:black;">One Beggar, One Mentor </a>
            <a id="headd" href="" style="color: black ;"> Become Member Customer</a>
            <a id="headd" href="" style="color: black ;"> Impact</a>
            <a id="headd" href="" style="color: black ;"> Begging Free Banaras</a>
            <a id="headd" href="" style="color: black ;"> Join the Mission</a>
        
   </div>-->

        <nav class="mainmenu-area stricky" style="position:relative;">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-xs-12 col-sm-12">
                        <div class="pt-10">
                            <a href="index.html">
                                <img style="height: 500%;margin-top: 21px;" src="images/main/header-logo3.png"
                                    class="logo" alt="Beggars Corporation" />
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">

                        <div class="navigation" id="nav">
                            <div class="nav-header">
                                <!-------------------Menu------------------->
                                <ul>
                                    <!--------------->
                                    <!--	<li>
                                   <a href="onebeg.html">One Beggar One Mentor</a>
                                   
                                </li>-->
                                    <li>
                                        <a href="index.html">Home</a>

                                    </li>
                                    <!--------------->
                                    <li><a href="aboutus.html">About Us</a></li>
                                    <!--------------->
                                    <li><a href="onebeg.html">One Beggar, One Mentor</a></li>
                                    <li>
                                        <a href="gallery.html"> Member Customer</a>
                                    </li>
                                    <!--<li>
                                  <a href="poonya.html"> Poonya</a>
                                </li>-->
                                    <!--------------->

                                    <!--------------->

                                    <!--<a href="theysay.html">They Say</a>
                                </li>-->
                                    <!------------>
                                    <li>
                                        <a href="cbfi.html"> Citizens for Begging Free India</a>
                                    </li>
                                    <!-- <li>
                                        <a href="shop.php"> Shop</a>
                                    </li> -->
                                    <li class="user-icon">
                                        <i class="fa fa-user" style="color:white;font-size:20px;padding:0 2px;cursor:pointer;"></i>
                                        <div class="user-details">
                                            <h4>
                                                <?php
                                                if (isset($_SESSION['user'])) {
                                                    echo $_SESSION['user'];
                                                ?>
                                                    <a href="/BackendAssets/mysqlcode/logout.php" style="color:red !important;">Logout</a><br>
                                                    <a href="/order.php" target="_blank">My orders</a>
                                                <?php
                                                } else {
                                                ?>
                                                    <span style="font-size:18px;"><a href="/login.php" style="color:green !important;">Login/</a><a href="/signup.php" style="color:green !important;">Sign up</a><br></span>
                                                <?php
                                                    echo "No user";
                                                }
                                                ?>
                                            </h4>
                                        </div>
                                    </li>
                                    <li class="cart-icon">
                                    <div class="cartcountval"></div>
                                        <i class="fa fa-shopping-cart" style="color:white;font-size:20px;padding:0 2px;cursor:pointer;"></i>
                                    </li>
                                    <!--   <li>
                               <a href="media.html">Impact</a>
                               </li> 
								
                          <li>
							  <a href="join-us.html">Join Us</a>
							  </li>
                               </ul>-->
                                    <!--------------end Menu--------------->


                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </nav>


        <div class="addtocart">
            <div class="addtocart-main">
                <div class="container-fluid p-0">
                    <div class="row">
                        <div class="col-sm-8 p-0">
                            <div class="blank-area">

                            </div>
                        </div>
                        <div class="col-sm-4" style="background-color:#fff;height:100vh;">
                            <div class="addtocart-content-area">
                                <h3>Cart</h3>
                                <div class="addtocart-main-card">
                                    <?php
                                    include("./BackendAssets/db.php");
                                    if (isset($_SESSION["user"])) {
                                    $user_name = $_SESSION["user"];
                                    $sql = "SELECT * FROM `productscart` as pc INNER JOIN `products` as p WHERE pc.product_id=p.id";
                                    $result = mysqli_query($conn, $sql);
                                    $sqlTwo="SELECT `id` FROM `user` WHERE `First_name`='$user_name'";
                                    $resultTwo = mysqli_query($conn, $sqlTwo);
                                    $userRow= mysqli_fetch_array($resultTwo);
                                    if ($result) {
                                        foreach ($result as $val) {
                                            if ($val['user_id'] == $userRow['id']) {
                                    ?>
                                                <div class="addtocart-card">
                                                    <div class="row">
                                                        <div class="col-sm-4">
                                                            <img src="/BackendAssets/assets/images/ProductImages/<?= $val['productimage'] ?>" alt="">
                                                        </div>
                                                        <div class="col-sm-8">
                                                            <h5><?=$val['productname']?>
                                                            <a href="/BackendAssets/mysqlcode/removecart.php?id=<?=$val['cartid']?>&page=<?=$_SERVER['PHP_SELF']?>" style="color:gray !important;">
                                                                <span class="remove_cart_cross_icon"><i class="fa fa-times-circle" style="font-size:20px;float:inline-end;"></i></span></h5>
                                                            </a>
                                                            <h5>Category : <?=$val['category']?></h5>
                                                            <h5>Price : <?=$val['price']?></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- </div> -->
                                    <?php
                                            }
                                        }
                                    } 
                                    else 
                                    {
                                        echo "Your cart empty";
                                    }
                                }
                                else
                                {
                                    ?>
                                    <a href="/login.php" style="color:#9c9c9c !important;">
                                        <h4>Your are not logged in now <i class="fa fa-arrow-right" aria-hidden="true"></i></h4>
                                    </a>
                                    <?php
                                }
                                    ?>
                                </div>
                                <div class="checkout-button">
                                    <?php
                                    if(isset($_SESSION["user"])) {
                                    ?>
                                    <a href="/checkout.php" target="_blank">
                                        <button>Checkout</button>
                                    </a>
                                    <?php
                                    }
                                    ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>