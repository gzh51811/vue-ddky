<template>
    <div id="goods" style="margin-bottom:45px;width:100%">
         <one></one>
        <van-tabs @click="onClick">
            <van-tab title="商品">
                <Gbanner></Gbanner>
                <Gconnect></Gconnect>
                <GconTwo></GconTwo>
            </van-tab>
            <van-tab title="详情">
                <Gdetails></Gdetails>
            </van-tab> 
         </van-tabs>
         <van-goods-action>
  <van-goods-action-mini-btn 
    info="5"
    icon="chat-o"
    text="药师咨询"
  />
  <van-goods-action-mini-btn
    icon="cart-o"
    text="清单列表"
  />
  <van-goods-action-big-btn
    primary
    text="加入清单"
  />
</van-goods-action>

       
    </div>
</template>
<script>
import Gbanner from '../goodslist/Gbanner';
import Gconnect from '../goodslist/Gconnect';
import GconTwo from '../goodslist/GconTwo';
import Gdetails from '../goodslist/Gdetails';


export default {
    methods:{
        onClick(){

        },
       
    },
     components:{
            Gbanner,
            Gconnect,
            GconTwo,
            Gdetails,
        }
}
</script>
<style lang="less" scoped>
.nav{
    position: fixed;
    bottom:0;
    width:100%;
    height: 40px;
    background: red
}
</style>
