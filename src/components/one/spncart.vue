<template>
  <div id="app">
    <header>
        <span class="bianji-txt">编辑</span>
        <h1 class="title">清单列表</h1>
    </header>
    <div class="content">
        <div class="shopBox">
            <dl>
                <dt class="shoptitle">
                    <img src="https://img.ddky.com/c/wap/images/ddky2/oval_icon.png" class="oval fl">
                    <div class="shopInfo">
                        <h2>
                            <img src="https://img.ddky.com/c/wap/images/ddky2/kuai_icon.png"><!---->
                            <span class="shopName">叮当智慧药房（广州）有限公司广州越秀东川路店</span>
                            <span class="deliverTip red_col fr">急送,满¥28免运费</span>
                        </h2>
                    </div>
                </dt>
            <dd class="topTitdd" style="display: none;">

            </dd>
            <dd>
                <div class="item"><!---->
                    <div class="item_info cl">
                        <div class="selectImgBox fl">
                            <img src="https://img.ddky.com/c/wap/images/ddky2/oval_icon.png" class="oval"><!---->
                        </div>
                        <div class="goodsInfo fl">
                            <div class="goodsImg fl">
                                <img src="https://imgq.ddky.com/c/product/516532/big/z_1.jpg?t=1509699827236&amp;watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100">
                                <p class="stock-Info">还剩3件</p>
                            </div>
                            <div class="goods_description">
                                <h3 class=""><!---->【2盒装】[盘龙云海]排毒养颜胶囊</h3>
                                <p class="promotionsDesc">0.4gx70粒x2盒</p>
                                <p class="goods_promition"></p>
                                <p class="noPrice" style="display: none;">
                                    <span class="nowisnoPrice" style="display: none;">暂无报价</span>
                                    <span class="fr">X3</span>
                                </p>
                                <p class="goodsPrice">￥169.00</p>
                            </div>
                            <div class="goodsNum-edit">
                            <img src="https://img.ddky.com/c/wap/images/ddky2/jian_icon.png" class="fl">
                            <i class="goodsnum">3</i>
                            <img src="https://img.ddky.com/c/wap/images/ddky2/jia_icon.png" class="fr">
                        </div>
                    </div>
                </div>
                <div class="item_info cl">
                   <div class="selectImgBox fl">
                       <img src="https://img.ddky.com/c/wap/images/ddky2/oval_icon.png" class="oval"><!----></div>
                       <div class="goodsInfo fl">
                           <div class="goodsImg fl">
                               <img src="https://imgq.ddky.com/c/product/518675/big/z_1.jpg?t=1490255001647&amp;watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100">
                               <p class="stock-Info">还剩4件</p>
                           </div>
                           <div class="goods_description">
                               <h3 class="">
                                   <!---->【3盒装】[优思明]屈螺酮炔雌醇片</h3>
                                   <p class="promotionsDesc">21片x3盒</p>
                                   <p class="goods_promition"></p>
                                   <p class="noPrice" style="display: none;">
                                       <span class="nowisnoPrice" style="display: none;">暂无报价</span>
                                       <span class="fr">X1</span>
                                   </p>
                                   <p class="goodsPrice">￥363.00</p>
                               </div>
                               <div class="goodsNum-edit">
                                   <img src="https://img.ddky.com/c/wap/images/ddky2/jian_icon.png" class="fl"> 
                                   <i class="goodsnum">1</i> 
                                   <img src="https://img.ddky.com/c/wap/images/ddky2/jia_icon.png" class="fr">
                               </div>
                           </div>
                           <!-- 每一个列表结束 -->
                       </div>
                   </div>
               </dd>
           </dl>
       </div>
       <p class="notice">如含有处方药,需您凭处方经药店执业药师审核购买。
       </p><!---->
       </div>

   </div>
</template>

<script>
import jsonp from '../../assets/js/jsonpfz.js';
export default {
  data() {
    return {};
  },
  mounted(){
        console.log('开始请求页面数据');
        var src="sign=8071D558645AF8A7B9770EEBEC00C0DC&city=广州市&lat=23.1200491&lng=113.30764968&method=ddky.cms.product.detailfps.get&plat=H5&platform=H5&skuId=50034534&suite=1&t=2019-3-18%2014:50:41&v=1.0&versionName=4.9.0&callback=Zepto1552891839767";
        jsonp(src)
        .then(result => {
            // console.log('请求数据成功');
            console.log(result);
        })
        .catch(err => {
            // console.log('请求数据成功');
            console.error(err);
        });
  },


// export default {
// name: "good",
// beforeCreate: function() {
// // console.log("开始请求home页面数据");
// var src = this.$store.state.RequestLink_store.home_goods;
// jsonp(src)
// .then(result => {
// // console.log(result);
// this.$store.commit("goodsmsg", result);
// })
// .catch(err => {
// console.error(err);
// });
// },
// computed: {
// goods() {
// // console.log(this.$store.state.homemsg.shangpin.result);
// return this.$store.state.homemsg.shangpin.result;
// }
// }
// };

 // sign=64AEE77EE5CC1FDD6047FBC296D99FA8&city=%E5%B9%BF%E5%B7%9E%E5%B8%82&lat=23.1200491&lng=113.30764968&loginToken=4d053a66a8125e2a940e2f3568924567&method=ddky.cms.product.detailfps.get&plat=H5&platform=H5&skuId=50019487&suite=1&t=2019-3-18%2017:26:3&uDate=85663420190318&userId=1016756473&v=1.0&versionName=4.9.0&callback=Zepto1552901143446

 // sign=8071D558645AF8A7B9770EEBEC00C0DC&city=广州市&lat=23.1200491&lng=113.30764968&method=ddky.cms.product.detailfps.get&plat=H5&platform=H5&skuId=50034534&suite=1&t=2019-3-18%2014:50:41&v=1.0&versionName=4.9.0&callback=Zepto1552891839767
};
</script>

<style scoped>
iframe, img {
    border: 0;
}
*{
    margin: 0;
    padding: 0;
}
img{
    border:0;
}
ol, ul ,li{list-style: none;} 
p{
    margin: 0;
}
h1 {
  text-align: center;
}
/*公共样式*/
*{
    box-sizing: border-box;

}
dl, ol, ul {
    list-style-type: none;
}
a, audio, canvas, i, progress, span, time, video {
    display: inline-block;
}
.fr {
    float: right!important;
}
.app{
    width: 100%;
    height: 100%;
    background:#efeff4;
}
/*头部的样式开始*/
header {
    height: 35px;
    padding: 0 10px;
    background-color: #FFf;
    border-bottom: 1px solid #CBCBCB;
    position: relative;
}
header>.bianji-txt {
    position: absolute;
    font-size: 12px;
    right: 10px;
    top: 0;
}
header>.bianji-txt, header>h1 {
    color: #333;
}
header>h1 {
    font-size: 15px;
    text-align: center;
    font-weight: 400;
}

/*头部的样式结束*/
/*内容的样式开始*/
.content {
    width: 100%;
    height: 100%;
    padding-bottom: 80px;
    overflow-y: auto;
}
.shopBox {
    padding-top: 10px;
}

.shopBox, .shopBox .shoptitle {
    border-bottom: 1px solid #EEE;
}
.shopBox .shoptitle {
    height: 43px;
    line-height: 43px;
    padding: 0 10px;
}

.shopBox, .shopBox .shoptitle {
    border-bottom: 1px solid #EEE;
}
.item, .shopBox .item_tit, .shopBox .shoptitle, .topTitBox {
    background-color: #FFF;
}
.shoptitle>.oval {
    margin-top: 10px;
    margin-right: 10px;
}

.oval {
    height: 15px;
    vertical-align: top;
}
.fl {
    float: left!important;
}
.shoptitle .shopInfo {
    padding-left: 15px;
}
.shopBox .shoptitle {
    line-height: 42px;
}
.shoptitle .shopInfo h2 {
    font-weight: 400;
    font-size: 0;
}
.shoptitle .shopInfo img {
    height: 15px;
    vertical-align: middle;
    margin-right: 5px;
}
.shoptitle .shopInfo .shopName {
    width: 120px;
}
.shoptitle .shopInfo .deliverTip, .shoptitle .shopInfo .shopName {
    width: 120px;
    font-size: 12px;
    line-height: 42px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: top;
}
.shoptitle .shopInfo .deliverTip {
    text-align: right;
}
.red_col {
    color: #e94544;
}
dd {
    display: block;
    -webkit-margin-start: 10px;
}
.item, .shopBox .item_tit, .shopBox .shoptitle, .topTitBox {
    background-color: #FFF;
}
/*每个商品列表开始*/
.item_info:nth-child(1) {
    margin-top: 0;
}
.item_info {
    padding: 9px 14px 9px 0;
    position: relative;
}
.cl, .cl:after {
    content: "\20";
    display: block;
    clear: both;
}
.item_info .selectImgBox {
    width: 15px;
    text-align: center;
    margin-top: 30px;
}

.fl {
    float: left!important;
}
.oval {
    height: 15px;
    vertical-align: top;
}
.item_info .goodsInfo {
    /*width: 76px;*/
    float:left;
    display: inline-block;

}
.item_info .goodsImg {
    width: 76px;
    height: 76px;
    margin-right: 5px;
    position: relative;
}
.item_info .goodsImg>img {
    width: 100%;
}
.stock-Info {
    width: 100%;
    height: 14px;
    background-color: rgba(0,0,0,.5);
    line-height: 14px;
    font-size: 12px;
    color: #FFF;
    left: 0;
    bottom: 0;
}
.goodsNum-edit, .stock-Info {
    position: absolute;
    text-align: center;
}
.goods_description {
    /*overflow: hidden;*/
    height: 100%;
    float: left;
}
.goods_description>h3 {
    font-size: 12px;
    line-height: 16px;
    color: #333;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 400;
}
.goods_description .promotionsDesc {
    height: 16px;
    margin-bottom: 3px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-top: 2px;
}
.goods_description .noPrice, .goods_description .promotionsDesc {
    line-height: 16px;
    font-size:12px;
    color: #888;
}
.goods_promition {
    height: 5px;
    overflow: hidden;
}
.goods_description .noPrice .nowisnoPrice {
    color: #000;
}
.goodsPrice {
    font-size: 12px;
    line-height: 33px;
    height: 23px;
    color: #E94544;
}
.goodsNum-edit {
    width: 100px;
    height: 20px;
    right: 10px;
    bottom: 5px;
    line-height: 20px;
}
.goodsNum-edit img{
    width: 20px;
    height: 20px;
}
.goodsNum-edit, .stock-Info {
    position: absolute;
    text-align: center;
}
.notice {
    padding: 0 10px;
    background-color: #efeff4;
    color: #888;
    font-size: 12px;
    line-height: 30px;
}
/*内容的样式结束*/

</style>