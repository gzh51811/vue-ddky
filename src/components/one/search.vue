<template>
  <div class="search">
    <van-search
      placeholder="搜索药品、症状、品牌"
      show-action
      shape="round"
      @search="ProductList(searchvalue)"
      v-model="searchvalue"
    >
      <div slot="action" @click="ProductList(searchvalue)">搜索</div>
    </van-search>
    <!-- 搜索待选列表 -->
    <searchList/>

    <div class="search_hot">
      <p>热门搜索</p>
      <div class="search_hottag">
        <van-tag text-color="black" class="search_hottag_bp" plain v-for="(item, index) in hots" :key="index">{{item}}</van-tag>
      </div>
    </div>
    <div class="search_list">
      <p>常用分类</p>
      <div class="search_listtag"></div>
    </div>
  </div>
</template>

<script>
// jsonp 请求
import jsonp from "../../assets/js/jsonpfz.js";
// 搜索显示列表
import searchList from "../search/search_list";
export default {
  data() {
    return {
      searchvalue: ""
    };
  },
  components: {
    searchList
  },
  methods: {
    // 带参数跳转 商品列表 传入
    ProductList(data) {
      console.log("改变");
      console.log(data);
    }
  },
  watch: {
    // 监听输入框内容变更 请求列表数据 并更新vuex 控制列表显隐
    searchvalue: function() {}
  },
  beforeCreate: function() {
    this.$store.dispatch('popularSearches')
  },
  computed: {
    hots() {
      // console.log(this.$store.state.mall.mallsj.data.mallBannerModule.topUrls);
      return this.$store.state.search_store.hotssj.data;
    }
  }
};
</script>

<style scoped>
.search {
  position: relative;
}
.search_hot {
  margin-bottom: 25px;
  box-sizing: border-box;
  margin-top: 10px;
}
.search_hot > p {
  margin: 0;
  margin-bottom: 10px;
  margin-left: 15px;
}
.search_hottag {
  padding: 0 15px 0 15px;
}
.search_list {
  box-sizing: border-box;
}
.search_list > p {
  margin: 0;
  margin-bottom: 10px;
  margin-left: 15px;
}
.search_listtag {
  padding: 0 15px 0 15px;
}
.search_hottag_bp{
    margin-right: 10px;
    margin-bottom: 10px
}
</style>
