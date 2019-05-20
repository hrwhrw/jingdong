<?php
include 'connect.php';
$name = isset($_POST['name'])?$_POST['name']:'';
$img = isset($_POST['img'])?$_POST['img']:'';
$price = isset($_POST['price'])?$_POST['price']:'';
$nums = isset($_POST['nums'])?$_POST['nums']:'';
$count_price = isset($_POST['count_price'])?$_POST['count_price']:'';
// var_dump($name,$img,$price,$nums);
$sql = "INSERT INTO `gouwuche` (name,img,price,num,zongjia) VALUES ('$name','$img','$price',$nums,'$count_price')";

$res = $conn->query($sql);
// echo "ID of last inserted recordis: ".mysql_insert_id();

// if ($res) {
// //    echo "yes";
// }else{
//     // echo "no";
// }

?>