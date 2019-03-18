<template>
  <div id="home" style="margin-bottom:100px">
    <Xheader></Xheader>
    <banner></banner>
    <mess></mess>
    <list></list>
    <goods></goods>
  </div>
</template>
<script>
import banner from "../page/banner.vue";
import Xheader from "../malls/heade.vue";
import mess from "../page/luanqibazao.vue";
import list from "../page/list.vue";
import goods from "../page/good.vue";

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
    list,
    goods
  },
  methods: {},
  beforeCreate: function() {
    // console.log("开始请求home页面数据");
    var src =this.$store.state.RequestLink_store.home_banner;
    jsonp(src)
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