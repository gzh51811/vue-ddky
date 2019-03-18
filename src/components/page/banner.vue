<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="xxx in img" :key="xxx.id">
        <img :src="xxx.imageUrl" style="width:100%;height:auto">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  name: "Banner",
  components: {},
  data(){
    return {
    }
  },
  methods: {
  
  },
  created:function(){
    // console.log(this)
  },
  computed: {
    img() {
      return this.$store.state.homemsg.home_sj.data.topUrlNew.topUrls
    }
  },
};
</script>

<style  scoped>
@import url("../../../node_modules/swiper/dist/css/swiper.min.css");
img {
  width: 100%;
  height: 160px;
}
</style>

