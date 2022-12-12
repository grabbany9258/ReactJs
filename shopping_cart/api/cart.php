<?php
include("db_connection.php");
$sql = "SELECT * FROM cart";

$result = mysqli_query($db_conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    $cart['id'] = $row['id'];
    $cart['url'] = $row['url'];
    $cart['name'] = $row['name'];
    $cart['category'] = $row['category'];
    $cart['seller'] = $row['seller'];
    $cart['price'] = $row['price'];

    $mycart['cart'][] = $cart;
}

echo json_encode(["success" => "Yes", 'items' => $mycart]);
