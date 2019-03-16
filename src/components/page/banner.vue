<template>
  <div class="banner">
    <div class="swiper-container" id="swiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in imgurl" :key="index">
          <img :src="item">
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  name: "Banner",
  components: {},
  data(){
    return {
        imgurl: [
          "https://img.ddky.com/c/cms/temp/20190314/1552526545283_720_300.jpg",
          "https://img.ddky.com/c/cms/temp/20190308/1552035441028_720_300.jpg",
          'https://img.ddky.com/c/cms/temp/20190308/1552035492473_720_300.jpg',
          'https://img.ddky.com/c/cms/temp/20190308/1552038202616_720_300.jpg',
          'https://img.ddky.com/c/cms/temp/20190308/1552038243711_720_300.jpg',
          'https://img.ddky.com/c/cms/temp/20190314/1552525493073_720_300.jpg'
        ]
    }
  },
  methods: {
  
  },
  mounted() {
    var swiper1 = new Swiper("#swiper1", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>

<style  scoped>
@import url("../../../node_modules/swiper/dist/css/swiper.min.css");
img {
  width: 100%;
  height: 160px;
}
</style>

