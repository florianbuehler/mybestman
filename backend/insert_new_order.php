<?php

include('config.php');

$arr_order = [
                "product" => ["price" => 3.50],
                "contact" =>    [
                                "Name" =>   [
                                                "First" => 'Max',
                                                "Last" => 'Mustermann'],
                                "Email" => ['max.mustermann_2@email.com'],
                                "Phone" => ['0123445678'],
                                "Address" => [[
                                                "Country" => 'DE',
                                                "Street" => 'Musterstraße 10',
                                                "City" => 'Musterstadt',
                                                "Zip" => '12345'
                                             ]]
                                ],
                "product-ids" => [0, 1, 2, 3]
            ];

#echo json_encode($arr_order);

$sql_customer = "INSERT INTO customers (firstname, lastname, email) VALUES ('".$arr_order['contact']['Name']['First']."', '".$arr_order['contact']['Name']['Last']."', '".$arr_order['contact']['Email'][0]."')";

$sql_conn->query($sql_customer);

$id_customer = $sql_conn->insert_id;
if(empty($id_customer)){
    $sql_customer_sel = "SELECT id_customer FROM customers WHERE email = '".$arr_order['contact']['Email'][0]."' LIMIT 0, 1";
    $res = $sql_conn->query($sql_customer_sel);
    $row = $res->fetch_object();
    $id_customer = $row->id_customer;
}
foreach($arr_order['contact']['Phone'] as $phone_number){
    $sql_phone = "INSERT INTO phone (id_customer, phone_number) VALUES (".$id_customer.", '".$phone_number."')";
    $sql_conn->query($sql_phone);
}
foreach($arr_order['contact']['Address'] as $address){
    $sql_address = "INSERT INTO address (id_customer, country, street, city, zip) VALUES (".$id_customer.", '".$address['Country']."', '".$address['Street']."', '".$address['City']."', '".$address['Zip']."')";
    $sql_conn->query($sql_address);
}
$sql_order = "INSERT INTO orders (id_customer, id_price) VALUES (".$id_customer.", ".$arr_order['product']['price'].")";
$sql_conn->query($sql_order);
echo $sql_order;
$id_order = $sql_conn->insert_id;

foreach($arr_order['product-ids'] as $product_id){
    $sql_pos = "INSERT INTO order_positions (id_order, id_product) VALUES (".$id_order.", ".$product_id.")";
    $sql_conn->query($sql_pos);
}


?>