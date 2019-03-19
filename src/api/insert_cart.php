<?php
    include 'connect.php';
    //中文乱码
    header("content-type:text/html;charset=utf-8");
    $id=isset($_GET['id'])?$_GET['id']:'';
    $username=isset($_GET['username'])?$_GET['username']:'';
    // echo $name,$price,$picture1,$utel,$total;
    $sql="INSERT INTO buycart(id,username) VALUES('$id','$username')";
    $res=$conn->query($sql);
    if($res){
        echo 'yes';
    }else{
        echo 'no';
    }
?>


<!-- http://api.ddky.com/cms/rest.htm?sign=FAC3C8577F7906C8B4C356FEF817185D&city=%E5%B9%BF%E5%B7%9E%E5%B8%82&lat=23.1200491&lng=113.30764968&loginToken=4d053a66a8125e2a940e2f3568924567&method=ddky.cms.product.detailfps.get&plat=H5&platform=H5&skuId=10649801&suite=1&t=2019-3-19%2010:7:12&uDate=85663420190318&userId=1016756473&v=1.0&versionName=4.9.0&callback=Zepto1552961231128



http://api.ddky.com/cms/rest.htm?sign=657B637F2F97AD2486103BE3E91593CE&city=%E5%B9%BF%E5%B7%9E%E5%B8%82&lat=23.1200491&lng=113.30764968&loginToken=4d053a66a8125e2a940e2f3568924567&method=ddky.cms.product.detailfps.get&plat=H5&platform=H5&skuId=10396101&suite=1&t=2019-3-19%2010:8:18&uDate=85663420190318&userId=1016756473&v=1.0&versionName=4.9.0&callback=Zepto1552961296776 -->