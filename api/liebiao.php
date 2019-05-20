<?php 
	include 'connect.php';
    $page=isset($_GET['page'])?$_GET['page'] :'';
    $num=isset($_GET['num'])?$_GET['num'] :'';
    $order=isset($_GET['order'])?$_GET['order'] :'';
    $type=isset($_GET['type'])?$_GET['type'] :'';
    $index=($page-1) * $num;
    $sql2 = "select * from liebiao";
    if($type) {
		//有排序
		$sql = "SELECT * FROM liebiao ORDER BY $type $order LIMIT $index,$num";	
	}else {
		//没有排序
		$sql = "SELECT * FROM liebiao LIMIT $index,$num";
	}
    // $sql = "SELECT * FROM liebiao LIMIT $index,$num";
    $result = $conn -> query($sql);
    $result2 = $conn -> query($sql2);
    $res = $result->fetch_all(MYSQLI_ASSOC);
    // $res2= $result2->fetch_all(MYSQLI_ASSOC);
	// echo json_encode($res,JSON_UNESCAPED_UNICODE);

	// //4.关闭查询结果集
    // $result->close();
    // //5.关闭数据库
    // $conn->close();
    $data =array(
		'total'=>$result2->num_rows,
		'goodslist'=>$res,
		'page'=>$page,
        'num'=>$num
        
    );
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
 ?>