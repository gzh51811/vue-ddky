<template>
  <div class="Xlabel">
    <div class="headList">
      <div class="top">
        <span class="active">全部</span>
        <span class>儿童感冒</span>
        <span class>儿童腹泻</span>
        <span class>儿童消化不良</span>
        <span class>儿童补益</span>
        <span class>儿童咳嗽</span>
        <span class>小儿退热贴</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Xlabel",
  data(){
    return {
      
    }
  },
  methods: {
    change() {}
  }
};
</script>

<style scoped>
.Xlabel {
  width: 100%;
  float: left;
}
.headList {
  padding: 10px 10px;
}
.headList {
  background-color: #fff;
}
.headList span.active {
  color: #e94544;
  border: 1px solid #e94544;
}
.headList span {
  border: 1px solid #ddd;
  color: #333;
  border-radius: 30px;
  padding: 4px 16px;
  font-size: 12px;
  text-align: center;
  margin-right: 2px;
  margin-top: 5px;
}
.chufangBox,
.headList,
.headList span,
.navList {
  margin-bottom: 1px;
}
.top span {
  flex: 1;
}
</style>
