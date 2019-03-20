<template>
  <div class="lunbo">
    <van-swipe :autoplay="3000" indicator-color="white">

      <van-swipe-item v-for="(ss,index) in goodssj.data.detail.imgUrls" :key="index">
        <img :src="ss">
      </van-swipe-item>

    </van-swipe>
  </div>
</template>
<script>
export default {
  computed: {
    goodssj() {
      console.log(this.$store.getters.goodssj);
      return this.$store.getters.goodssj;
    }
  }
};
</script>
<style lang="less" scoped>
.lunbo {
  width: 100%;
  height: 255px;
//   border-bottom: 1px solid #ccc;
//   padding-bottom: 20px
}
img {
//   width: 100%;
  height: 255px;
  margin-left: 60px;
}
</style>

