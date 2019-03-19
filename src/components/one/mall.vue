<template>
  <div id="mall">
    <Header/>
    <Banner/>
    <Features/>
    <BrandSale/>
    <Category/>
  </div>
</template>

<script>
// 头部
import Header from "../malls/heade";
// 轮播图
import Banner from "../malls/banner";
// jsonp 请求
import jsonp from "../../assets/js/jsonpfz.js";
// 功能导航
import Features from "../malls/Features";
// 品牌销售
import BrandSale from "../malls/BrandSale";
// 分类列表
import Category from "../malls/Category";
export default {
  data() {
    return {};
  },
  components: {
    Banner,
    Header,
    Features,
    BrandSale,
    Category
  },
  methods: {},
  beforeCreate: function() {
    console.log("开始请求mall页面数据");
    this.$store.dispatch('mall_banner')

  }
};
</script>

<style scoped>
#mall {
  padding-top: 45px;
}
</style>