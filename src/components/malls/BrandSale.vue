<template>
  <div class="BrandSale">
    <div class="BrandSale_left">
      <img src="https://img.ddky.com/c/cms/temp/20190307/1551944467986_540_504.jpg" alt>
    </div>
    <div class="BrandSale_right">
      <img src="https://img.ddky.com/c/cms/temp/20190307/1551944474000_540_252.jpg" alt>
      <img src="https://img.ddky.com/c/cms/temp/20190307/1551944479808_540_252.jpg" alt>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created: function() {},
  computed: {}
};
</script>

<style scoped>
.BrandSale {
  width: 100%;
  height: 175px;
  border-top: 3px solid #ededed;
  border-bottom: 3px solid #ededed;
  background-color: #ededed;
}
.BrandSale img {
  width: 100%;
}
.BrandSale_left {
  width: 50%;
  float: left;
  height: 175px;
}
.BrandSale_right {
  width: 50%;
  float: left;
  height: 175px;
}
.BrandSale_right>img{
    display: inline-block;
    float: left;
}
</style>