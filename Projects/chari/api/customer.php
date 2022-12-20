<?php

include('db_connection.php');
$sql = "SELECT * FROM employee_list";
$result = mysqli_query($db_conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    $employee_list['id'] = $row['id'];
    $employee_list['employee_name'] = $row['employee_name'];
    $employee_list['designation'] = $row['designation'];
    $employee_list['phone_nb'] = $row['phone_nb'];

    $myemployee_list['pr'][] = $employee_list;
}
echo json_encode(["success" => "yes",  "datas" => $myemployee_list]);
