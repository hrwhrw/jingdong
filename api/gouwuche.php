<?php
include 'connect.php';
$name = isset($_POST['name'])?$_POST['name']:'';
$img = isset($_POST['img'])?$_POST['img']:'';
$price = isset($_POST['price'])?$_POST['price']:'';
$nums = isset($_POST['nums'])?$_POST['nums']:'';
$id = isset($_POST['id'])?$_POST['id']:'';
$type =isset($_POST['type'])?$_POST['type']:'';
$count_price = isset($_POST['count_price'])?$_POST['count_price']:'';
// var_dump($name,$img,$price,$nums,$id);
if($type='i'){
$sql = "INSERT INTO `gouwuche` (goid,name,img,price,num,zongjia) VALUES ($id,'$name','$img','$price',$nums,'$count_price')";
}
// if($type='d'){
//     $sql2 = "DELETE FROM gouwuche WHERE goid= $id";
//     $res2 = $conn->query($sql2);
// }

$res = $conn->query($sql);
// echo "ID of last inserted recordis: ".mysql_insert_id();

// if ($res) {
//    echo "yes";
// }else{
//     echo "no";
// }

?>