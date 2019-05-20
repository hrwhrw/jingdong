<?php
// header('Content-Type: text/html; charset=gb2312'); 
// $content = iconv("gb2312","UTF-8",$content);  
    $uname=isset($_POST['uname'])?$_POST['uname']:'';
    $upwd=isset($_POST['upwd'])?$_POST['upwd']:'';
  
    include 'connect.php';
    $sql ="INSERT INTO denglu(uname,mima) VALUES('$uname','$upwd')";
    $res =$conn->query($sql);
    if($res==true){
        echo 'yes';
    }else{
        echo 'no';
    }

?>