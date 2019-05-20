<?php 
	include 'connect.php';

	$sql = "select * from shouye";
	$result = $conn -> query($sql);
	$res = $result->fetch_all(MYSQLI_ASSOC);
	echo json_encode($res,JSON_UNESCAPED_UNICODE);

	//4.关闭查询结果集
    $result->close();
    //5.关闭数据库
    $conn->close();

 ?>