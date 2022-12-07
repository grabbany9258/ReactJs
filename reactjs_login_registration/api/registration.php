<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include("db_connect.php");

$data = file_get_contents("php://input");
echo $data;
$data = json_decode($data);
if (($data->fname) && ($data->fname != '')) {

    $fname = $data->fname;
    $lname = $data->lname;
    $email = $data->email;
    $password = $data->password;

    $result = mysqli_query($db_conn, "SELECT * FROM registration WHERE email = '$email'");

    if (mysqli_num_rows($result) > 0) {
        echo json_encode("Email Address should be difference");
    } else {

        mysqli_query($db_conn, "INSERT INTO registration (fname, lname, email,password) VALUES ('$fname','$lname','$email', '$password')");

        if (mysqli_affected_rows($db_conn) > 0) {
            echo json_encode("Registration completed");
        }
    }
} else {
    echo json_encode("All data must be filled");
}





    



// $db_conn = mysqli_connect("localhost", "root", "", "wdpf51_react_crud");

// // Check connection
// if ($db_conn === false) {
//     die("ERROR: Could not connect. " . mysqli_connect_error());
// }
// error_reporting(E_ALL);
// ini_set('display_errors', 'On');
