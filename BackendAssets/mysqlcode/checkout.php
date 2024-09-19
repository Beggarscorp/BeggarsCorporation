
<?php
include('../db.php');

if (isset($_POST["place_order"])) {

    $name = $_POST["username"];
    $email = $_POST["useremail"];
    $number = $_POST["usernumber"];
    $userid = $_POST['useridforstoreindatabase'];
    $usercountry=$_POST['country'];
    $userstate = $_POST["state"];
    $usercity = $_POST["city"];
    $userpincode = $_POST["userpincode"];
    $useraddress = $_POST["useraddress"];
    $totalPrice = $_POST["totalPrice"];
    $productidandquantity = $_POST['productidandquantity'];

    if ($name != "" && $email != "" && $number != "" && $usercountry != "" && $userstate != "" && $usercity != "" && $userpincode != "" && $useraddress != ""  && $userid != "" && $userid != "" && $totalPrice != "" && $productidandquantity != "") {

        $productId = explode(',', rtrim(json_decode($productidandquantity)->productid, ','));

        $productQty = explode(',', rtrim(json_decode($productidandquantity)->productquantity, ','));


        $success = true;

        for ($pq = 0; $pq < count($productId); $pq++) {
            $proID = $productId[$pq];
            $proQTY = $productQty[$pq];

            $stmt = $conn->prepare("INSERT INTO `orders` (`userid`, `productid`, `productquantity`, `username`, `usercountry`, `useremail`, `usernumber`, `userstate`, `usercity`, `userpincode`, `useraddress`, `totalprice`) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
                // ON DUPLICATE KEY UPDATE `productquantity` = VALUES(`productquantity`)

            $stmt->bind_param('iiisssissisi', $userid, $proID, $proQTY, $name,
            $usercountry, $email, $number, $userstate, $usercity, $userpincode, $useraddress, $totalPrice);

            if (!$stmt->execute()) {
                $success = false;
                break; // Exit loop on failure
            }
        }

        if ($success) {
            header("Location: /order.php?order=successful");
        } else {
            header("Location: /checkout.php?order=failed");
        }

        exit();
    }
    else
    {
        echo "NOt get values";
    }
}
?>