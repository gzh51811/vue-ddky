<template>
  <div id="app">
   <!--  <header>
        <span class="bianji-txt">编辑</span>
        <h1 class="title">清单列表</h1>
    </header> -->
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
<!--     <div class="content">
        <div class="shopBox">
            <dl>
                <dt class="shoptitle">
                    <img src="https://img.ddky.com/c/wap/images/ddky2/oval_icon.png" class="oval fl">
                    <div class="shopInfo">
                        <h2>
                            <img src="https://img.ddky.com/c/wap/images/ddky2/kuai_icon.png">
                            <span class="shopName">叮当智慧药房（广州）有限公司广州越秀东川路店</span>
                            <span class="deliverTip red_col fr">急送,满¥28免运费</span>
                        </h2>
                    </div>
                </dt>
            <dd class="topTitdd" style="display: none;">

            </dd>
            <dd>
                <div class="item">
                    <div class="item_info cl">
                        <div class="selectImgBox fl">
                            <img src="https://img.ddky.com/c/wap/images/ddky2/oval_icon.png" class="oval">
                        </div>
                        <div class="goodsInfo fl">
                            <div class="goodsImg fl">
                                <img src="https://imgq.ddky.com/c/product/516532/big/z_1.jpg?t=1509699827236&amp;watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100">
                                <p class="stock-Info">还剩3件</p>
                            </div>
                            <div class="goods_description">
                                <h3 class="">【2盒装】[盘龙云海]排毒养颜胶囊</h3>
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
                       <img src="https://img.ddky.com/c/wap/images/ddky2/oval_icon.png" class="oval"></div>
                       <div class="goodsInfo fl">
                           <div class="goodsImg fl">
                               <img src="https://imgq.ddky.com/c/product/518675/big/z_1.jpg?t=1490255001647&amp;watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100">
                               <p class="stock-Info">还剩4件</p>
                           </div>
                           <div class="goods_description">
                               <h3 class="">
                                   【3盒装】[优思明]屈螺酮炔雌醇片</h3>
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
                           
                       </div>
                   </div>
               </dd>
           </dl>
       </div>
       <p class="notice">如含有处方药,需您凭处方经药店执业药师审核购买。
       </p>
       </div> -->
    <!--  底部开始-->
   <!--  <div class="footerBox">
        <div class="totalBox cl">
            <div class="totalPrice fl">
                <p>总计：￥0.00</p>
                <span>金额：￥0.00</span>
                <span>优惠：￥-0.00</span>
            </div>
                <p class="settle fr">结算(0)</p>
        </div> -->
            <!-- <div id="box" class="footBtn_w4 footer cl">
                <div class="footerbtn IndexPage">
                    <img src="https://img.ddky.com/c/cms/temp/20181117/1542445956477_104_104.jpg">
                </div>
                <div class="footerbtn shoppingMall">
                    <img src="https://img.ddky.com/c/cms/temp/20181117/1542445964888_104_104.jpg">
                </div>
                <div class="footerbtn whiteCart">
                    <img src="https://img.ddky.com/c/cms/temp/20181117/1542445971938_104_104.jpg"> 
                    <span class="cartNum" style="">5</span>
                </div>
                <div class="footerbtn mine">
                    <img src="https://img.ddky.com/c/cms/temp/20181117/1542445977803_104_104.jpg">
                </div>
            </div> -->
        <!-- </div> -->
   </div>
</template>

<script>
import jsonp from '../../assets/js/jsonpfz.js';

import Header from '../spncart/header.vue';

import Content from '../spncart/content.vue';

import Footer from '../spncart/footer.vue';

export default {
  data() {
    return {};
  },
  components:{
    Header,
    Content,
    Footer,
  },
  beforeCreate: function(){
            console.error(err);
  }
}


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
/*header {
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
}*/

/*头部的样式结束*/
/*内容的样式开始*/

/*内容的样式结束*/

</style>