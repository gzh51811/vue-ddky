<?php
//登录账号密码数据查询


  //中文乱码
  header("content-type:text/html;charset=utf-8");
  include 'connect.php';
  header('Access-Control-Allow-Origin:*');
// header('Access-Control-Allow-Methods:POST,GET,OPTION,DELETE');
// header('Content-type : application/json');
// header("Access-Control-Allow-Headers:x-requested-with,content-type");
$phoneNum = isset($_POST['phoneNum']) ? $_POST['phoneNum'] : '';
$pswNum = isset($_POST['pswNum']) ? $_POST['pswNum'] : '';
  // $sql = 'SELECT DISTINCT phoneNum from userlist';//目前只是字符串
  $sql ="SELECT phoneNum,pswNum from userlist where phoneNum='$phoneNum' and pswNum='$pswNum'";
  $res = $conn->query($sql);
  $row = $res->fetch_all(MYSQLI_ASSOC);
   //var_dump($row);
  if($row){
    echo 'yes';//账号密码正确
}else{
    echo 'no';//账号密码不匹配
}
 
?>