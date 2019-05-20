<?php
    include 'connect.php';

    $sql = "SELECT * FROM gouwuche";
    

    $res = $conn -> query($sql);
    $content = $res->fetch_all(MYSQLI_ASSOC);

    $data = array(
            'count' => $res ->num_rows,
            'infos'=> $content,
        );
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>