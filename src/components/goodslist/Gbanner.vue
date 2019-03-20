<template>
    <li class="lunbo">
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item><img :src="goodsss.detail.imgUrl"/></van-swipe-item>
                <van-swipe-item><img :src="goodsss.detail.imgUrl"/></van-swipe-item>
            </van-swipe>
            
    </li>
</template>
<script>
export default {
    props:["goodsss"],
}
</script>
<style lang="less" scoped>
.lunbo{
    width: 100%;
    height: 218px;
    border-bottom: 1px solid #ccc;
}
li{
    list-style: none;
}
img{
    padding-left: 30%;
    padding-top: 5%;
    width: 160px;
}
</style>

