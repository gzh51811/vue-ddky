<template>
  <div class="category">
    <van-tabs sticky :offset-top="tops">
      <van-tab v-for="xxx in cate" :title="xxx.name" :key="xxx.id">
        <div v-for="xx in xxx.infoVos" class="category_dk" :key="xx.productId" @click="xq">
          <div class="category_dk_img">
            <img :src="xx.adImgUrl" alt>
          </div>
          <div class="category_dk_nr">
            <p class="category_dk_nr_bt">
              <span>3-5天</span>
              {{xx.adText}}
            </p>
            <p class="category_dk_nr_name">{{xx.name}}</p>
            <div class="category_dk_nr_promotionTips">{{xx.promotionTips[0]}}</div>
            <div class="category_dk_nr_jg">
              <span class="category_dk_nr_xj">{{"￥"+xx.totalPrice}}</span>
              <span class="category_dk_nr_yj">{{"￥"+xx.orgPrice}}</span>
              <div class="category_dk_nr_gwc">
                <van-icon
                  name="shopping-cart-o"
                  color="#ffffff"
                  size="17px"
                  class="category_dk_nr_gwc_ic"
                />
              </div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// jsonp 请求
import jsonp from "../../assets/js/jsonpfz.js";

export default {
  data() {
    return {
      tops: 45
    };
  },
  computed: {
    cate() {
      //   console.log(this.$store.state.mall.mallsj.data.mallBannerModule.topUrls);
      return this.$store.state.mall.cate.data.ueugList;
    }
  },
  beforeCreate: function() {
    this.$store.dispatch("mall_category");
  },
  methods: {
    xq() {
      this.$router.push("/goods");
    }
  }
};
</script>

<style scoped>
.category {
  background-color: #eeeef3;
  margin-bottom: 50px;
}
.category_dk {
  height: 154px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  margin-bottom: 9px;
}
.category_dk_img {
  width: 50%;
  float: left;
}
.category_dk_img > img {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin-top: 4px;
}
.category_dk_nr {
  width: 50%;
  height: 100%;
  float: left;
  position: relative;
}
.category_dk_nr_bt {
  font-size: 12px;
  width: 100%;
  /* height: 40px; */
}
.category_dk_nr_bt > span {
  display: inline-block;
  width: 42px;
  height: 17px;
  color: white;
  background-color: #f4a528;
  text-align: center;
  line-height: 17px;
  font-size: 11px;
  margin-right: 8px;
}
.category_dk_nr_name {
  font-size: 11px;
  color: #9b9b9b;
  margin: 3px 0 3px 0;
}
.category_dk_nr_promotionTips {
  font-size: 12px;
  color: #f93935;
  border: 1px solid #f93935;
  display: inline-block;
  padding: 0 4px 0 4px;
  text-align: center;
}
.category_dk_nr_jg {
  width: 90%;
  height: 30px;
  /* background-color: #e0e0e0; */
  position: absolute;
  bottom: 17px;
  line-height: 30px;
}
.category_dk_nr_xj {
  color: #f93935;
}
.category_dk_nr_yj {
  font-size: 8px;
  position: relative;
  top: -1px;
  margin-left: 10px;
  text-decoration: line-through;
  color: #9b9b9b;
}
.category_dk_nr_gwc {
  display: inline-block;
  width: 26px;
  height: 26px;
  background-color: #f93935;
  border-radius: 100%;
  float: right;
}
.category_dk_nr_gwc_ic {
  position: relative;
  left: 5px;
}
</style>