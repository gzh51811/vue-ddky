<template>
  <div id="home">
    <Xheader></Xheader>
    <banner></banner>
    <mess></mess>
    <list></list>
  </div>
</template>
<script>
import banner from "../page/banner.vue";
import Xheader from "../malls/heade.vue";
import mess from "../page/luanqibazao.vue";
import list from "../page/list.vue";
// jsonp 请求
import jsonp from "../../assets/js/jsonpfz.js";
export default {
  data() {
    return {
        images: [
          // this.$store.
      ]
    };
  },
  components: {
    Xheader,
    banner,
    mess,
    list
  },
  methods: {},
  beforeCreate: function() {
    // console.log("开始请求home页面数据");
    var src =
      "http://api.ddky.com/cms/rest.htm?sign=DA600E0013B93CFE168561600F13584E&city=%E5%B9%BF%E5%B7%9E%E5%B8%82&loginToken=0d1b16118a78e4326c9984ed0a1988a6&method=ddky.cms.h5.o2o.homepage.get&plat=H5&platform=H5&shopId=202132&t=2019-3-18%209:24:44&uDate=74645220170407&userId=1007394111&v=1.0&versionName=4.6.0&callback=Zepto1552872284233";
    jsonp(src,'Zepto1552872284233')
      .then(result => {
        // console.log(result);
        this.$store.commit("homemsg", result);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>

<style scoped>
#home {
  padding-top: 45px;
}
</style>