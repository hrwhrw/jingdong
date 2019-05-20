<?php
    include 'connect.php';
    $uname=isset($_POST['uname']) ? $_POST['uname']:'';
	$sql = "SELECT * FROM denglu WHERE uname='$uname'";
	//2.执行语句
	$res = $conn->query($sql);
	
//	var_dump($res);
	if($res->num_rows==0) {
		//真：存在，不给注册
		echo 'yes';
	}else{
		//假：不存在，可以注册
		echo 'no';
	}
?>