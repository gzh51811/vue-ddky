<template>
  <div id="mess">
    <div class="mess">
      <div class="aaa" v-for="(item,index) in msg" :key="index">
        <van-icon name="passed" class="gou"/>
        <span class="msg">{{item}}</span>
      </div>
    </div>
    <div class="adviceBox">
      <img src="https://img.ddky.com/c/cms/temp/20180919/1537323873480_180_168.jpg" alt class="w25">
      <img src="https://img.ddky.com/c/cms/temp/20180919/1537323877744_180_168.jpg" alt class="w25">
      <img src="https://img.ddky.com/c/cms/temp/20180919/1537323890865_180_168.jpg" alt class="w25">
      <img src="https://img.ddky.com/c/cms/temp/20180919/1537323895801_180_168.jpg" alt class="w25">
    </div>

    <div class="bbb">
      <img src="https://img.ddky.com/c/cms/temp/20190307/1551954235298_180_168.jpg" alt class="w25">
      <img src="https://img.ddky.com/c/cms/temp/20190307/1551954237585_180_168.jpg" alt class="w25">
      <img src="https://img.ddky.com/c/cms/temp/20190307/1551954239827_180_168.jpg" alt class="w25">
      <img src="https://img.ddky.com/c/cms/temp/20190307/1551954241650_180_168.jpg" alt class="w25">
    </div>

    <div class="flash_sale cl">
      <img src="https://img.ddky.com/c/cms/temp/20190311/1552266763574_360_118.jpg" alt>
      <img src="https://img.ddky.com/c/cms/temp/20190311/1552266956133_360_118.jpg" alt>
    </div>
  </div>
</template>
<script>
export default {
  name: "mess",
  data() {
    return {};
  },
  methods: {},
  created: function() {
    console.log(this);
  },
  computed: {
    msg() {
      return [
        this.$store.state.home.home_sj.data.deliveryTime,
        this.$store.state.home.home_sj.data.freight,
        this.$store.state.home.home_sj.data.serviceReamark,
        this.$store.state.home.home_sj.data.appointment
      ];
    }
  }
};
</script>
<style scoped>
.mess {
  box-sizing: border-box;
  padding: 0 15px;
  margin-right:5px; 
  display: flex;
  height: 30px;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid#ccc;
}
.aaa {
  flex: 1;
}
.gou {
  color: #f93935;
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  margin: 0 3px;
  vertical-align: middle;
}
.msg {
  color: #f93935;
  font-size: 12px;
  height: 30px;
  line-height: 30px;
}
.adviceBox {
  display: flex;
  float: left;
  border-bottom: 1px solid#ccc;
}
.adviceBox > img {
  height: 85px;
  flex: 1;
  width: 93px;
}
.bbb {
  display: flex;
  height: 100px;
  float: left;
  width: 100%;
  border-bottom: 1px solid#ccc;
}
.bbb > img {
  width: 25%;
}
.flash_sale {
  float: left;
  width: 100%;
  border-bottom: 1px solid#ccc;
}
.flash_sale > img {
  height: 74px;
  width: 50%;
}
</style>


