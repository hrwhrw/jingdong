<?php
    include 'connect.php';
    $id = isset($_POST['id'])?$_POST['id']:'';
    $type =isset($_POST['type'])?$_POST['type']:'';

    if($type='d'){
            $sql2 = "DELETE FROM gouwuche WHERE goid= $id";
           
        }
        $res2 = $conn->query($sql2);
?>