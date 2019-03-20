<template>
           <div>
                <p class="peisong-info">
                <img :src="goodss.detail.deliveryInfo.logo"/>
                <span>&nbsp;&nbsp;{{goodss.detail.deliveryInfo.title1}}</span>
            </p>
            <p class="foryou"><span class="shopName fl">本商品由叮当智慧药房（广州）有限公司广州越秀东川路店为您服务</span>
            <van-icon name="weapp-nav" class='icon' />
            </p>
            <div class="box"></div>
            <div class="promotionBox">
                <p class="fl">促销</p>
                <ul class="fl">
                    <li><span class="promotion">{{goodss.detail.promotionsList[0].promotionsType}}</span>{{goodss.detail.promotionsList[0].promotionsDesc}}</li>   
                    <li><span class="promotion">1元换购</span>{{goodss.detail.promotionsList[1].promotionsDesc}}</li>
                </ul>
                <img src="https://img.ddky.com/c/wap/images/ddky2/clickpoint.png" class="fr">
            </div>
            <div class="box"></div>
            <div class="favourable">
                <p style="float:left">好评度&nbsp;&nbsp;<span class="red_col">{{goodss.detail.positiveCommentCountPercentStr}}</span></p>
                <p style="float:right" class="comment">
                <span>{{goodss.detail.totalCommentCount}}条评价>></span>
                </p>
            </div>
            <div class="box"></div>
           </div>
</template>
<script>
export default {
    props:['goodss'],
}
</script>
<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
.fr{
    float: right;
}
.fl{
    float: left;
}
.box{
    width:100%;
    height: 12px;
    background: #EFEFF4;
}
.peisong-info {
    height: 38px;
    line-height: 38px;
    padding-left: 3%;
    font-size: 13px;
    color: #333;
    border-bottom:1px solid rgb(197, 197, 201);
}
.peisong-info img {
    height:23px;
    top: -1px;
    vertical-align: middle;
}
.peisong-info span {
    color: #E94544;
}
.foryou{
    height: 38px;
    padding-left: 3%;
    font-size: 13px;
    color: #333;
    position: relative;
}
.shopName {
    display: inline-block;
    width: 90%;
    text-overflow:ellipsis;
    white-space: nowrap;
    overflow: hidden;
    line-height: 38px;
}
.icon{
    position: absolute;
    bottom:10px;
    right:4%;
}
.favourable>p {
    font-size: .3rem;
}
.red_col {
    color: #e94544;
}
.favourable{
    height: 40px;
    line-height: 40px;
    width:94%;
    margin: auto;
}
.favourable .comment {
    color: #888;
    font-size: 0;
}
.favourable .comment span {
    font-size: 12px;
    vertical-align: middle;
}
.promotionBox {
    width:94%;
    margin:auto;
    height: 76px;
    // padding: .16rem .3rem;
    font-size: 12px;
    line-height: 38px;
    position: relative;
}
.promotionBox>p {
    width: 10%;
    margin-right: 2%;
}
.promotionBox li {
    width: 98%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.promotion {
    height: 22px;
   margin-right: 10px;
    color: #e94544;
    border: 1px solid #e94544;
    font-size: 12px;
    border-radius: 5px;
    line-height: 22px;
}
.promotionBox>img {
    height: 3px;
    position: absolute;
    top:57px;
    right:5px;
}
</style>
