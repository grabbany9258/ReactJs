<?php
include("db_connection.php");
$data = file_get_contents("php://input");
//echo $data;

$data = json_decode($data);
// print_r($data->items);
$items = ($data->items);
//echo $data->user;
$userid =  $data->user;

foreach ($items as $item) {
    // echo $item->name . "<br>";
    $sql = "INSERT INTO orders (product_id, product_name, product_price, product_qty, user_id) VALUES('$item->id','$item->name','$item->price','$item->quantity','$userid') ";
    mysqli_query($db_conn, $sql);
}
if (mysqli_affected_rows($db_conn) > 0) {
    echo json_encode("Your data submitted successfully");
}










// $sql = "SELECT * FROM cart";



// $result = mysqli_query($db_conn, $sql);


// while ($row = mysqli_fetch_assoc($result)) {
//     $cart['id'] = $row['id'];
//     $cart['url'] = $row['url'];
//     $cart['name'] = $row['name'];
//     $cart['category'] = $row['category'];
//     $cart['seller'] = $row['seller'];
//     $cart['price'] = $row['price'];

//     $mycart['cart'][] = $cart;
// }

// echo json_encode(["success" => "Yes", 'items' => $mycart]);
