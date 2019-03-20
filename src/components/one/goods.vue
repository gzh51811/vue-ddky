<template>
  <div id="goods" style="margin-bottom:45px;width:100%">
    <van-tabs>
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
      <van-goods-action-mini-btn icon="chat-o" text="药师咨询"/>
      <van-goods-action-mini-btn icon="cart-o" text="清单列表" to="/spncart" />
      <van-goods-action-big-btn primary text="加入清单"/>
    </van-goods-action>
  </div>
</template>
<script>
import Gbanner from "../goodslist/Gbanner";
import Gconnect from "../goodslist/Gconnect";
import GconTwo from "../goodslist/GconTwo";
import Gdetails from "../goodslist/Gdetails";
import jsonp from "../../assets/js/jsonpfz.js";
import { constants } from "fs";

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    Gbanner,
    Gconnect,
    GconTwo,
    Gdetails
  },
  created() {
    this.$store.dispatch("goodssj");
  }
};
</script>
<style lang="less" scoped>
.nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  background: red;
}
</style>
