<?php
//注册数据插入

  //中文乱码
  header("content-type:text/html;charset=utf-8");
  include 'connect.php';
  header('Access-Control-Allow-Origin:*');
// header('Access-Control-Allow-Methods:POST,GET,OPTION,DELETE');
// header('Content-type : application/json');
// header("Access-Control-Allow-Headers:x-requested-with,content-type");

$pswNum = isset($_POST['pswNum']) ? $_POST['pswNum'] : ''; 
$phoneNum = isset($_POST['phoneNum']) ? $_POST['phoneNum'] : '';
  // $sql = 'SELECT DISTINCT phoneNum from userlist';//目前只是字符串
     //echo $number;
      $sql = "INSERT into userlist (phoneNum,pswNum) VALUE ('$phoneNum','$pswNum')";
    //   echo $sql ;
      $res = $conn->query($sql);
    //   echo $res;
      echo json_encode($res,JSON_UNESCAPED_UNICODE);
 
?>