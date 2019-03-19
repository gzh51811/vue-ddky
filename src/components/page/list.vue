<template>
  <div class="drugList">
    <div class="drugType" v-for="aa in icon" :key="aa.categoryId">
      <img :src="aa.categoryIcon" alt>
      <p>{{aa.categoryName}}</p>
    </div>
   <div class="blank_space"></div>
  </div>
</template>
<script>
export default {
  name: "list",
  
   computed: {
    icon() {
      // console.log(this.$store.state.homemsg.home_sj.data.categoryList);
      return this.$store.state.homemsg.home_sj.data.categoryList;
    }
  }
};
</script>
<style scoped>
.drugList {
  width: 100%;
  border-bottom: 1px solid #d4d4d4;
  border-top: 1px solid #d4d4d4;
}
.drugList .drugType {
  width: 25%;
  padding-top: 15px;
  text-align: center;
  display: inline-block;
}
.drugList .lastType{
  padding-bottom: 10px;
}
.drugList .drugType img {
  height: 30px;
}
.drugList .drugType p {
  font-size: 12px;
  margin: 4px 0;
}
.blank_space {
    width: 100%;
    height: 10px;
    background-color: #f5f5f5;
}
</style>

