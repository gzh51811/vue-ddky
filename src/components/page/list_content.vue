<template>
  <div class="content">
    <div class="items">
      <dl class="cl">
        <dt class="fl">
          <img src="https://img.ddky.com/c/product/537938/small/z_1.jpg" alt>
          <p></p>
        </dt>
        <dd class="goodsInfo fr">
          <h3>
            <span class="sign">28分钟</span>
            【2盒装】[扬子江]蓝芩口服液
          </h3>
          <p class="zhuzhi_info">清热解毒，利咽消肿。用于急性咽炎、肺胃实热证所致的咽痛、咽干、咽部灼热。</p>
          <p class="other">10mlx12支x2盒</p>
          <div class="goods_buyBox cl">
            <div class="aboutLeft fl">
              <p class="setmeal fl">￥69.90</p>
              <p class="sales fl">月售2139笔</p>
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
  name: "list_contents"
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
  height: 155px;
  box-sizing: border-box;
  padding-top: 15px;
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
  margin-right: 10px;
  border-radius: 3px;
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


