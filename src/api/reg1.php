<?php
//注册数据查询


  //中文乱码
  header("content-type:text/html;charset=utf-8");
  include 'connect.php';
  header('Access-Control-Allow-Origin:*');
// header('Access-Control-Allow-Methods:POST,GET,OPTION,DELETE');
// header('Content-type : application/json');
// header("Access-Control-Allow-Headers:x-requested-with,content-type");
$phoneNum = isset($_POST['phoneNum']) ? $_POST['phoneNum'] : '';
  // $sql = 'SELECT DISTINCT phoneNum from userlist';//目前只是字符串
  $sql ="SELECT * FROM userlist where phoneNum = '$phoneNum'";
  $res = $conn->query($sql);
  $row = $res->fetch_all(MYSQLI_ASSOC);
  // var_dump($row);
  if($row){
    echo 'yes';//存在
}else{
    echo 'no';//不存在这条数据
}
 
?>