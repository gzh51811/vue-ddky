<template>
  <div>
    <search>叮当快药</search>
    <banner></banner>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)
import banner from "../page/banner.vue";
import search from "../Xheader.vue";
export default {
  data() {
    return {
      shop: []
    };
  },
  components: {
    banner,
    search
  },
  created: function () {
   this.getdata()
	},
  methods: {
    async getdata() {
      // let data = await this.$axios.get("http://api.ddky.com/cms/rest.htm?sign=270BCE35C462E647EC8CA5550D7644EB&city=%E5%B9%BF%E5%B7%9E%E5%B8%82&loginToken=0d1b16118a78e4326c9984ed0a1988a6&method=ddky.cms.h5.o2o.homepage.get&plat=H5&platform=H5&shopId=202132&t=2019-3-15%2014:55:6&uDate=74645220170407&userId=1007394111&v=1.0&versionName=4.6.0&callback=Zepto1552632905617");
      // console.log(data)
      // this.shop = this.shop.concat(data.data);
      this.$http.jsonp('http://api.ddky.com/cms/rest.htm?sign=270BCE35C462E647EC8CA5550D7644EB&city=%E5%B9%BF%E5%B7%9E%E5%B8%82&loginToken=0d1b16118a78e4326c9984ed0a1988a6&method=ddky.cms.h5.o2o.homepage.get&plat=H5&platform=H5&shopId=202132&t=2019-3-15%2014:55:6&uDate=74645220170407&userId=1007394111&v=1.0&versionName=4.6.0&callback=Zepto1552632905617', {
      params: {},
      jsonp: 'onBack'
    }).then((res) => {
      console.log(res); 
})
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>