<template>
    <div id="app">
        <Header ></Header>
        <Content :goodslist="goodslist"></Content>
        <Footer></Footer>

    </div>
</template>

<script>
import jsonp from '../../assets/js/jsonpfz.js';

// 引入子组件
import Header from '../spncart/header.vue';
import Content from '../spncart/content.vue';
import Footer from '../spncart/footer.vue';
export default {
  data(){
        return{
         goodslist:[],
        }
  },
  components:{
    Header,
    Content,
    Footer,
  },

}


</script>

<style scoped>
iframe, img {
    border: 0;
}
*{
    margin: 0;
    padding: 0;
}
img{
    border:0;
}
ol, ul ,li{list-style: none;} 
p{
    margin: 0;
}
h1 {
  text-align: center;
}
/*公共样式*/
*{
    box-sizing: border-box;

}
dl, ol, ul {
    list-style-type: none;
}
a, audio, canvas, i, progress, span, time, video {
    display: inline-block;
}
.fr {
    float: right!important;
}
.app{
    width: 100%;
    height: 100%;
    background:#efeff4;
}


</style>