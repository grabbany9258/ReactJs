<?php
include("db_connection.php");

$data = file_get_contents("php://input");
// echo $data;
$data = json_decode($data);

$fname = $data->fname;
$lname = $data->lname;
$email = $data->email;
$password = $data->password;
if ($fname && $lname && $email && $password) {
    $result = mysqli_query($db_conn, "INSERT  INTO  register_form (fname, lname, email, password) VALUES ('$fname', '$lname', '$email', '$password' )");
    if (mysqli_affected_rows($db_conn) > 0) {
        echo json_encode("Registration completed");
    } else {
        echo json_encode("Problem found");
    }
}
