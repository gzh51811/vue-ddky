<template>
  <div>
    <div class="features_top">
      <div>
        <van-icon name="passed" color="#F93935" size="15px" class="features_top_icon"/>
        <span class="features_top_text">满79免运费</span>
      </div>
      <div>
        <van-icon name="passed" color="#F93935" size="15px" class="features_top_icon"/>
        <span class="features_top_text">3-5天送达</span>
      </div>
      <div>
        <van-icon name="passed" color="#F93935" size="15px" class="features_top_icon"/>
        <span class="features_top_text">覆盖全国</span>
      </div>
    </div>

    <div class="features_bottom">
        <img src="https://img.ddky.com/c/cms/temp/20180703/1530608215147_180_168.jpg" alt="">
        <img src="https://img.ddky.com/c/cms/temp/20180703/1530587529572_180_168.jpg" alt="">
        <img src="https://img.ddky.com/c/cms/temp/20180703/1530587532162_180_168.jpg" alt="">
        <img src="https://img.ddky.com/c/cms/temp/20180703/1530587535261_180_168.jpg" alt="">
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
.features_top {
  height: 40px;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #d8d8d8;
  color: #f93935;
  line-height: 40px;
  padding: 0 13px 0 13px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.features_top_text {
  font-size: 12px;
  position: relative;
  top: -3px;
}
.features_top_icon {
  margin-right: 4px;
}
.features_bottom {
  width: 100%;
  height: 88px;
}
.features_bottom>img{
    height: 87px;
}
</style>