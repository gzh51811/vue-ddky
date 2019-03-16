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
    // console.log("开始请求mall页面数据");

    var src =
      "https://api.ddky.com/cms/rest.htm?sign=1844F1A2984D92F0A26C7FB9C593EAB8&cityName=%E5%B9%BF%E5%B7%9E%E5%B8%82&loginToken=46997443576320445e34a6cf726ffe3a&method=com.ddky.wisphmall.load&plat=H5&platform=H5&shopId=202132&t=2019-3-15%2015:50:41&uDate=58927020190314&userId=1016718971&v=1.0&versionName=4.9.0&callback=Zepto1552636241096";

    jsonp(src, "Zepto1552636241096")
      .then(result => {
        // console.log("mall页面数据开始存储")
        this.$store.commit("mallsjcc", result);
      })
      .catch(err => {
        console.error(err);
      });
    // console.log("mall页面数据请求结束");
  }
};
</script>

<style scoped>
#mall {
  padding-top: 45px;
}
</style>