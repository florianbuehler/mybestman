<?php
// Original Answer
#header('Content-Type: application/json');
header('Content-Type: text/html');
ob_start();
/*
$json = file_get_contents('php://input'); 
include($_SERVER['DOCUMENT_ROOT'].'/config.php');

$sel_data = "SELECT * FROM orders";
$res = $sql_conn->query($sel_data);

while($row = $res->fetch_assoc()){
    $data[] = $row;
}

$data = json_encode($data);
*/
ob_end_clean();
print_r($_GET);
?>