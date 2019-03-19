<template>
    <div id="goods" style="margin-bottom:45px;width:100%">
        <van-tabs @click="onClick">
            <van-tab title="商品">
                <Gbanner :goodsss="goods"></Gbanner>
                <Gconnect :goods="goods"></Gconnect>
                <GconTwo :goodss="goods"></GconTwo>
            </van-tab>
            <van-tab title="详情">
                <Gdetails :good="goods"></Gdetails>
            </van-tab> 
         </van-tabs>
         <van-goods-action>
  <van-goods-action-mini-btn 
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
import jsonp from '../../assets/js/jsonpfz.js';
import { constants } from 'fs';

export default {
    data(){
        return{
            goods:[],
        }
    },
    
    methods:{
        onClick(){

        },
       
    },
    components:{
            Gbanner,
            Gconnect,
            GconTwo,
            Gdetails,
        },
    created(){
        var src ='http://api.ddky.com/cms/rest.htm?sign=99277C911FBF4A8635F7FA71D290841E&city=%E5%B9%BF%E5%B7%9E%E5%B8%82&lat=23.1200491&lng=113.30764968&loginToken=fad85fe5066be2be699e774502a4a00a&method=ddky.cms.product.detailfps.get&plat=H5&platform=H5&skuId=50034534&suite=1&t=2019-3-19%2014:33:22&uDate=17646720180113&userId=1004407295&v=1.0&versionName=4.9.0&callback=Zepto1552977201990';
        jsonp(src)
        .then(res=>{
            this.goods=res.data;
        })
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
