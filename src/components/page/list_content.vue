<template>
  <div class="content">

    <div class="items" v-for="x in shoplists.data.productList" :key="x.id">
      <dl class="cl">
        <dt class="fl">
          <img :src="x.imgUrl" alt>
          <p></p>
        </dt>
        <dd class="goodsInfo fr">
          <h3>
            <span class="sign">{{x.tab}}</span>
            {{x.name}}
          </h3>
          <p class="zhuzhi_info">{{x.productDescription}}</p>
          <p class="other">{{x.productSpecifications}}</p>
          <div class="goods_buyBox cl">
            <div class="aboutLeft fl">
              <p class="setmeal fl">￥{{x.productPrice}}</p>
              <p class="sales fl">月售{{x.saleVolume}}笔</p>
            </div>
            <img
              src="https://img.ddky.com/c/wap/images/ddky2/icon_add_cart.png"
              alt
              class="addCarImg fr"
            >
          </div>
          <br>
          <div class="prootiomBox">
            <span class="promotion">低价换购</span>
            <span class="promotion">1元换购</span>
          </div>
        </dd>
      </dl>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      // shoplists:this.$store.getters.shoplists
    };
  },
  created: function() {
    // 调用vuex请求 列表数据
    this.$store.dispatch("shoplists");
  },
  computed: {
    shoplists() {
      console.log(this.$store.getters.shoplists);
      return this.$store.getters.shoplists;
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.content {
  float: left;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.items {
  width: 100%;
  height: 180px;
  box-sizing: border-box;
  padding-top: 10px;
  border-bottom: 1px solid#ccc;
}
dt {
  width: 30%;
}
dl dt img {
  width: 100%;
}
dd {
  width: 65%;
  margin-left: 10px;
  position: relative;
}
h3 {
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 5px;
}
.sign {
  background: red;
  color: #fff;
  font-size: 12px;
  padding: 2px;
}
.zhuzhi_info,
.other,
.sales {
  font-size: 12px;
  color: #585757;
  margin-bottom: 3px;
}
.setmeal {
  color: red;
  font-size: 16px;
  line-height: 16px;
  margin-right: 5px;
}
.promotion {
  border: 1px solid #ea2222;
  font-size: 12px;
  color: #ea2222;
  padding: 3px;
  border-radius: 3px;
  margin-right: 5px;
}
.prootiomBox {
  width: 130px;
  height: 24px;
  position: absolute;
  bottom: 0px;
}
.addCarImg {
  width: 36px;
  height: 27px;
  margin-right: 10px;
}
.aboutLeft {
  float: left;
  vertical-align: middle;
  height: 16px;
}
</style>


