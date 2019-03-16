<template>
  <div id="home">
    <Xheader></Xheader>
    <banner></banner>
  </div>
</template>
<script>
import banner from "../page/banner.vue";
import Xheader from "../malls/heade.vue";
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
    banner
  },
  methods: {},
  beforeCreate: function() {
    // console.log("开始请求home页面数据");
    var src =
      "http://api.ddky.com/cms/rest.htm?sign=63D6BC09F07187D207F1C7A71B9A65EC&city=%E5%B9%BF%E5%B7%9E%E5%B8%82&loginToken=0d1b16118a78e4326c9984ed0a1988a6&method=ddky.cms.h5.o2o.homepage.get&plat=H5&platform=H5&shopId=202132&t=2019-3-16%209:37:2&uDate=74645220170407&userId=1007394111&v=1.0&versionName=4.6.0&callback=Zepto1552700221663";
    jsonp(src,'Zepto1552700221663')
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
.banner {
  padding-top: 45px;
}
</style>