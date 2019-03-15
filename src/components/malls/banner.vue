<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white" >
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" style="width:100%;height:auto">
      </van-swipe-item>
    </van-swipe>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "http://img.ddsy.com/c/cms/temp/20171024/1508777695861_720_320.jpg",
        "https://img.ddky.com/c/cms/temp/20190306/1551864328317_720_320.jpg",
        "https://img.ddky.com/c/cms/temp/20190306/1551861790806_720_320.jpg"
      ]
    };
  }
};
</script>

<style scoped>
</style>