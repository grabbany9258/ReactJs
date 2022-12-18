<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// include('db_connection.php');

// $alldata = $_POST;
// print_r($_FILES);

if (isset($_POST['mydata']) && isset($_FILES['mydata1'])) {



    $data = json_decode($_POST["mydata"]);
    $username = $data->username;
    $name = $data->name;

    $file = $_FILES["mydata1"];
    print_r($_FILES);

    $photo_name = $file['name'];
    $photo_temp_name = $file['tmp_name'];
    $error = $file['error'];

    $url = "uploads/";

    move_uploaded_file($photo_temp_name, $url . $photo_name);
    // echo json_encode("Succesfully Uploaded");


    // This part for send data in database

    $host = "localhost";
    $user = "root";
    $password = "";
    $dbname = "reactjs_axios_fileupload";

    $db_conn = mysqli_connect($host, $user, $password, $dbname);

    $sql = "insert into users (username, name, photo) values ('$username', '$name', '$photo_name')";
    $result = mysqli_query($db_conn, $sql);

    if (mysqli_affected_rows($db_conn) > 0) {
        echo json_encode(["msg" => "Succesfully Uploaded"]);
    }
} else {
    echo json_encode(["msg" => "First Select file and enter data"]);
}


// else {
//     echo json_encode("First Select file and enter data");
// }
