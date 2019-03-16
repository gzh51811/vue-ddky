<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="xxx in images" :key="xxx.id">
        <img :src="xxx.imageUrl" style="width:100%;height:auto">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created: function() {
    // console.log("banner组件入场");
  },
  computed: {
    images() {
    //   console.log(this.$store.state.mall.mallsj.data.mallBannerModule.topUrls);
      return this.$store.state.mall.mallsj.data.mallBannerModule.topUrls;
    }
  }
};
</script>

<style scoped>
</style>