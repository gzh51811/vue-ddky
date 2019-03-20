<template>
  <div class="mail">
    <div class="navList">
      <ol>
        <li class="active">默认</li>
        <li class>销量</li>
        <li class="price">
          价格
          <a href="jacascript:;">
            <van-icon name="arrow-up"/>
          </a>
          
          <a href="jacascript:;">
            <van-icon name="arrow-down"/>
          </a>
        </li>
      </ol>
      <div class="nav_change">
        <span class="big-title">大图</span>
        <img src="https://img.ddky.com/c/wap/images/ddky2/towpic.png" alt="一列" class="img_two">
      </div>
    </div>
  </div>
</template>

<style scoped>
.mail {
  width: 100%;
  float: left;
  height: 50px;
  border-bottom: 5px solid#eee;
  border-top: 5px solid #eee;
  box-sizing: border-box;
}
.navList {
  width: 100%;
  float: left;
  height: 40px;
  background: #fff;
  line-height: 40px;
}
ol li {
  float: left;
  width: 30%;
  text-align: center;
}
ol {
  float: left;
  width: 75%;
  text-align: center;
}
.price {
  position: relative;
  border-right: 1px solid #eee;
}
.van-icon-arrow-up {
  position: absolute;
  top: 9px;
  left: 60px;
}
.van-icon-arrow-down {
  position: absolute;
  top: 18px;
  left: 60px;
}
.nav_change {
  width: 25%;
  float: left;
  vertical-align: middle;
}
.nav_change img {
  width: 14px;
  height: 14px;
  vertical-align: middle;
  margin-left: 5px;
}
a {
  color: #ccc;
}
</style>

