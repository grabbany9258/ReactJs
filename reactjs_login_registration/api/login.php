<?php


include("db_connect.php");

$data = file_get_contents("php://input");
//echo $data;
$data = json_decode($data);
if (isset($data->email) && ($data->password != '')) {

    $email = $data->email;
    $password = $data->password;


    $result = mysqli_query($db_conn, "SELECT * FROM registration WHERE email = '$email' AND password = '$password'");

    $row = mysqli_fetch_assoc($result);

    if ($result->num_rows === 1) {
        echo json_encode(['success' => true, 'msg' => 'Login Success', 'user' => $row]);
        return;
    } else {
        echo json_encode(['success' => false, 'msg' => 'Email or password incorrect']);
        return;
    }
} else {
    echo json_encode(['success' => false, 'msg' => 'Please Fill out the form']);
    return;
}




    



// $db_conn = mysqli_connect("localhost", "root", "", "wdpf51_react_crud");

// // Check connection
// if ($db_conn === false) {
//     die("ERROR: Could not connect. " . mysqli_connect_error());
// }
// error_reporting(E_ALL);
// ini_set('display_errors', 'On');
