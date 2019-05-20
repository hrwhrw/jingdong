<?php
//接收数据，做查询，查到了就可以登陆，查不到就是账号或密码不对
// header('Content-Type: text/html; charset=gb2312'); 
// $content = iconv("gb2312","UTF-8",$content);  
    $uname =isset($_POST['uname'])?$_POST['uname']:'';  
    $upwd =isset($_POST['upwd'])?$_POST['upwd']:'';
    include 'connect.php';
    //1.sql语句
    $sql ="SELECT * FROM denglu WHERE uname='$uname' AND mima='$upwd'";
    //2.执行语句
    $res =$conn->query($sql);//查询结果集
    //3.找到就返回状态
    if($res->num_rows){
        echo 'yes';
    }else{
        echo 'no';
    }
    $res->close();
    $conn->close();

?>