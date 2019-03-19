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
  created(){
        console.log('开始请求页面数据');
        //根据登录的用户渲染页面
        
        // this.$axios.get('http:localhost',params:{
        //     phoneNum:'phoneNum',
        // })
        // .then(res=>{
        //     //打印后端返回的数据，然后进行渲染
        //     console.log(res);
        // });
        
        var src="http://api.ddky.com/cms/rest.htm?sign=39F265C451EB2DDC9DAE8731F8C1890D&city=%E5%B9%BF%E5%B7%9E%E5%B8%82&lat=23.1200491&lng=113.30764968&loginToken=4d053a66a8125e2a940e2f3568924567&method=ddky.cms.product.detailfps.get&plat=H5&platform=H5&skuId=50019487&suite=1&t=2019-3-19%2015:6:25&uDate=85663420190318&userId=1016756473&v=1.0&versionName=4.9.0&callback=Zepto1552979183892";
        jsonp(src).then(result => {
            // console.log('请求数据成功');
            console.log(result.data);
            this.goodslist=result.data;
            // console.log(this.goodslist);

        }).catch(err => {
            // console.log('请求数据成功');
            console.error(err);
        });
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