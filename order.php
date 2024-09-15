
<?php
ob_start();
include("./BackendAssets/Components/header.php");
include("./BackendAssets/db.php");
$msg ='';  

if (isset($_SESSION['user'])) {

    ob_end_flush();
    $user=$_SESSION['user'];

    $userselect="SELECT id FROM `user` WHERE `First_name` = '$user'";

    $userselectresult=mysqli_fetch_assoc(mysqli_query($conn,$userselect));

    $userid=$userselectresult['id'];

    $sql="SELECT * FROM `orders` WHERE userid='$userid'";

    $result=mysqli_fetch_all(mysqli_query($conn,$sql));


?>
    <link rel="stylesheet" href="BackendAssets/css/order.css">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 my-5">
                <h2>Oders</h2>
                <?php
                if(!isset($_GET['view_order']))
                {
                ?>
                <table>
                    <thead>
                        <tr>
                            <td>Date & Time</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Number</td>
                            <td>Address</td>
                            <td>View order</td>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        foreach($result as $order)
                        {
                            print_r($order);
                        ?>
                        <tr>
                            <td> <?= $order[1] ?> </td>
                            <td> <?= $order[4] ?> </td>
                            <td> <?= $order[5] ?> </td>
                            <td> <?= $order[6] ?> </td>
                            <td> <?= $order[10] ?> </td>
                            <td><a href="/order.php?view_order=true"><button class="view_order">View order</button></a></td>
                        </tr>
                        <?php 
                        }
                        ?>
                    </tbody>
                    <?php
                }
                else
                {
                    echo "helllo word";
                    $productides=[];
                    for ($t = 0; $t < count($result); $t++) {
                        $productid = json_decode($result[$t][3])->productid;
                        $productidArray = explode(',', $productid);
                        $productidArray = array_filter($productidArray);
                        $productides = array_merge($productides, $productidArray);
                    }
                    
                    print_r($productides);








                    echo "helllo word";
                    
                    $trimProductIdes=rtrim($productidandquantitydata['productid'],',');
                    
                    $productQuntites=explode(",",rtrim($productidandquantitydata['productquantity'],','));

                    
                    
                    $productsSql="SELECT productname,price,productimage FROM `products` WHERE id IN ($trimProductIdes)";
                    
                    $productsResult=mysqli_fetch_all(mysqli_query($conn,$productsSql));
                    
                $sno=1;
                ?>
                <table>
                    <thead>
                        <tr>
                            <td>Product Image</td>
                            <td>Product Name</td>
                            <td>Product Quantity</td>
                            <td>Product Price</td>
                            <td>Total price</td>
                        </tr>
                    </thead>
                    <tbody>
                <?php    
                
                if($productsResult)
                {
                    $sno=0;
                        foreach($productsResult as $value)
                        {
                            ?>
                                <tr>
                                    <td> <?= $value[2] ?> </td>
                                    <td> <?= $value[0] ?> </td>
                                    <td> <?= $productQuntites[$sno] ?> </td>
                                    <td> <?= $value[1] ?> </td>
                                    <td> <?= $value[1]*$productQuntites[$sno] ?> </td>
                                </tr>

                            <?php
                            $sno++;
                        }
                }
                else
                {
                    echo $conn->error;
                }
                ?>
                
                    </tbody>
                </table>

                <?php
                }
                ?>
                </table>
            </div>
        </div>
    </div>




    <?php
    include("./BackendAssets/Components/footer.php");
} 
else 
{
    $msg = "You are not logged in";
    header("Location: /login.php?msg=".urlencode($msg));   
    exit();
}
?>
