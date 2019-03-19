<template>
     <div class="Instructions">
         <p><span>说明书</span></p>
        <van-tabs type="card">
            <van-tab title="布洛芬混悬液">
                <img src="https://img.ddky.com/c/cms/instructions1/228527_0-181102043100765.png">
            </van-tab>
            <van-tab title="医用退热贴">
                <img src="https://img.ddky.com/c/cms/instructions1/228527_0-181102043100815.png">   
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {
    methods:{
        onClick(){

        },
    }
};
</script>
<style lang="less" scoped>
* {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.Instructions p{
    border-top:1px solid #ccc;
    border-bottom:1px solid #efefef;
    border-left: 4px solid #db2828;
    height: 40px;
    line-height: 40px;
    font-size: 13px;
}
.Instructions p span{
    padding-left: 4%;
}
img{
    padding-top: 25px;
    padding-left: 20px;
    display: inline-block;
    width: 340px;
}
</style>
