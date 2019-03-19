<template>
    <li class="lunbo">
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item>这里改为公共轮播组件</van-swipe-item>
                <van-swipe-item>同一张图片轮播</van-swipe-item>
            </van-swipe>
            
    </li>
</template>
<script>
export default {
    
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
</style>

