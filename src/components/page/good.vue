<template>
  <div>
    <div class="goods" v-for="aa in goods" :key="aa.name">
      <div class="special_choose">
        <img src="https://img.ddky.com/c/wap/images/ddky2/choose.jpg" alt>
        <p>{{aa.name}}</p>
      </div>
      <div
        id="special_drug"
        class="special_drug cl"
        v-for="bb in aa.infoVos"
        :key="bb.id"
        @click="xq"
      >
        <img id="listpage" :src="bb.adImgUrl" alt>
        <div class="top fr">
          <p class="one">{{bb.adText}}</p>
          <p class="two">{{bb.name}}</p>
          <p class="specification">{{bb.packageSpecifications}}</p>
          <p class="three">{{bb.discontPrice}}</p>
          <div class="down">
            <span class="spec">¥{{bb.totalPrice}}</span>
            <span class="spec1 addLine">￥{{bb.orgPrice}}</span>
            <p class="spec1">{{bb.saleVolumeText}}</p>
          </div>
          <img id="showcart" src="https://img.ddky.com/c/wap/images/ddky2/car.png" alt>
        </div>
        <img src alt class="yellowIcon">
      </div>
    </div>
  </div>
</template>
<script>
import jsonp from "../../assets/js/jsonpfz.js";
export default {
  name: "good",
  beforeCreate: function() {
    this.$store.dispatch("home_goods");
  },
  computed: {
    goods() {
      // console.log(this.$store.state.homemsg.shangpin.result);
      return this.$store.state.homemsg.shangpin.result;
    }
  },
  methods: {
    xq() {
      this.$router.push("/goods");
    }
  }
};
</script>
<style scoped>
.special_choose {
  height: 34px;
  width: 100%;
  line-height: 34px;
  text-align: center;
  background-color: #fff;
}
.special_choose img {
  height: 12px;
  width: 12px;
}
.special_choose p {
  display: inline-block;
  font-size: 14px;
  margin-left: 5px;
  color: #e94544;
}
.special_drug {
  width: 100%;
  min-height: 150px;
  position: relative;
  background-color: #fff;
}
.special_drug > img {
  width: 100%;
  display: block;
  margin: 16px 0;
}
.special_drug .top {
  position: absolute;
  right: 0;
  top: 0;
  padding-right: 5px;
}
.top {
  width: 50%;
  position: relative;
  padding: 5px 0;
}
.fr {
  float: right;
}
.top .one {
  font-size: 12px;
  color: #000;
  font-weight: 700;
  width: 100%;
  margin-bottom: 3px;
  overflow: hidden;
}
.top .two {
  color: #686969;
}
.top .specification,
.top .two {
  font-size: 12px;
  width: 100%;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.top .specification {
  color: #686969;
}

.top .three {
  color: #de5d61;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 12px;
}

.down .spec {
  font-size: 10px;
  color: #e94444;
}
.down .spec[data-v-2f67dc46] {
  font-size: 16px;
  color: #e94444;
}
.down .spec1 {
  font-size: 12px;
  color: #686969;
}
.addLine {
  text-decoration: line-through;
}
#showcart {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 125px;
  right: 15px;
}
</style>


