<template>
     <div class="Instructions">
         <p><span>说明书</span></p>
         <!-- <van-tabs @click="onClick">
            <van-tab :title="goodssj.data.instructionsImg.instruction[0].name">
                <img :src="goodssj.data.instructionsImg.instruction[0].imgs[0].imgUrl"/>
            </van-tab>
            <van-tab :title="goodssj.data.instructionsImg.instruction[1].name">
                <img :src="goodssj.data.instructionsImg.instruction[1].imgs[0].imgUrl"/>
                <img :src="goodssj.data.instructionsImg.instruction[1].imgs[1].imgUrl" />
            </van-tab> -->
        <!-- </van-tabs> -->
        <img v-for="(xx,index) in goodssj.data.instructionsImg.instruction[0].imgs " :src="xx.imgUrl" :key="index"/>
         
    </div>
</template>
<script>
export default {
    computed: {
    goodssj() {
      console.log(this.$store.getters.goodssj);
      return this.$store.getters.goodssj;
    }
  }
};
</script>
<style lang="less" scoped>
* {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.Instructions p{
    border-top:1px solid #ccc;
    border-bottom:1px solid #efefef;
    border-left: 4px solid #db2828;
    height: 40px;
    line-height: 40px;
    font-size: 13px;
}
.Instructions p span{
    padding-left: 4%;
}
img{
    padding-top: 25px;
    padding-left: 20px;
    display: inline-block;
    width: 340px;
}

</style>
