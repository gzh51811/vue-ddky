<template>
    <div class="ul_all">
                <h1 class="goods-name">
                    <span class="sign">{{goods.detail.deliveryInfo.typeText}}</span>{{goods.detail.name}}
                </h1>
                <div class="zhuzhi">
                    <p class="zhuzhi_info">{{goods.detail.productDescription}}</p>
                    <p class="goods-state">说明书</p>
                </div>
                <p class="other"><span>{{goods.detail.productSpecifications}}</span> </p>
                <div class="moneybox">
                    <p class="fl moneysetmeal">套餐价：</p>
                    <p class="money">
                        ¥<span>{{goods.detail.price}}</span>
                        <span class="oldPrice">{{goods.detail.originalPrice}}</span>
                    </p>
                    <p class="sales">月售{{goods.detail.saleVolume}} 笔</p>
                </div>
                <p class="eco"><span class="economize">立省{{goods.detail.discountPrice}}元</span></p>
                <div class="box"></div>
            </div>
            
</template>
<script>
export default {
   props:["goods"],
    
}
</script>
<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
li{
    list-style: none;
}
.ul_all {
    border-bottom: 1px solid #EEE;
    background-color: #fff;
}
.goods-name {
    padding-top: 8px;
    width: 94%;
    margin: auto;
    font-size: 13px;
    font-weight: 400;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
     overflow: hidden; 
}
.goods-name .sign {
    height: 17px;
    line-height: 22px;
    font-size: 12px;
    color: #FFF;
    background-color: #e94544;
    margin:0 5px 0 12px;
    vertical-align: middle;
    border-radius: 5px;
}
.zhuzhi {
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 3%;
}
.zhuzhi_info {
    width: 75%;
    padding-right: 10px;
    font-size: 12px;
    line-height: 17px;
    border-right: 1px dashed #DDD;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 30px;
    line-height: 30px;
}
.goods-state {
    margin-right: 1.5%;
    font-size: 12px;
    height: 22px;
    width: 55px;
    text-align: center;
    line-height: 22px;
    border: 1px solid #DDD;
    border-radius: 5px;
}
.ul_all .other {
    margin-left: 10px;
    font-size: 12px;
    color: #888;
    height: 25px;
    line-height: 25px;
}
.moneybox {
    width:94%;
    margin: auto;
    height: 30px;
    line-height: 30px;
}
.moneysetmeal {
    font-size: 14px;
    float: left;
}
.moneybox .money {
    color: #e94444;
    font-size: 14px;
    font-weight: 700;
    float: left;
}
.moneybox .money .oldPrice {
    color: #888;
    text-decoration: line-through;
    margin-left: 8px;
    font-weight: 400;
    font-size: 12px;
}
.moneybox .sales {
    color: #888;
    font-size: 12px;
    float: right;
}
.economize {
    height: 17px;
    color: #e94544;
    border: 1px solid #e94544;
    font-size: 12px;
    line-height: 17px;
    border-radius: 5px;
}
.eco{
    width:94%;
    margin:auto;
    height: 20px;
    clear:both;
    margin-bottom: 8px;
}
.box{
    width:100%;
    height: 12px;
    background: #EFEFF4;
}
</style>

