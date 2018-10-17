<template>
<div>
  <div class="head-main">
    <div class="header-left">
      <img src="../assets/logo.png" class="header-pic">
    </div>
    <router-link to="/login" class="header-right">
      登录
    </router-link>
  </div>

  <!--轮播图-->
  <div class="slider">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item,index) in slider" :key="index">
        <div class="slider-wrap">
          <router-link class="slider-wrap" href="/news" to="/news">
            <img :src="item.imgUrl">
            <div class="desc" v-text="item.title"></div>
          </router-link>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

  <!--菜单-->
  <div class="main-menu">
    <div class="menu-row">
      <router-link to="/news">
        <div class="menu-icon-wrap">
          <img src="../assets/icon_01.png">
        </div>
        <div class="menu-title">
          信工新闻眼
        </div>
      </router-link>
      <router-link to="/life">
        <div class="menu-icon-wrap">
          <img src="../assets/icon_02.png">
        </div>
        <div class="menu-title">
          掌上组织生活
        </div>
      </router-link>
      <router-link to="/login">
        <div class="menu-icon-wrap">
          <img src="../assets/icon_03.png">
        </div>
        <div class="menu-title">
          党员云互动
        </div>
      </router-link>
    </div>
    <div class="menu-row">
      <router-link to="/know">
        <div class="menu-icon-wrap">
          <img src="../assets/icon_04.png">
        </div>
        <div class="menu-title">
          党建一点通
        </div>
      </router-link>
      <router-link to="/identity">
        <div class="menu-icon-wrap">
          <img src="../assets/icon_05.png">
        </div>
        <div class="menu-title">
          党员亮身份
        </div>
      </router-link>
      <router-link to="/history">
        <div class="menu-icon-wrap">
          <img src="../assets/icon_06.png">
        </div>
        <div class="menu-title">
          党史上的今天
        </div>
      </router-link>
    </div>
  </div>

  <div class="img-wrap">
    <img src="../assets/banner01.png" alt="">
  </div>

  <div class="foot-menu">
    <router-link to="/free">
      <img src="../assets/tese.png" alt="">
    </router-link>
  </div>

  <tabs></tabs>

</div>
</template>

<script>
  // import axios from 'axios'
  import tabs from '../components/tabs'
  // import axios from 'axios'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  // require styles
  import 'swiper/dist/css/swiper.css'
    export default {
      name: "index",
      components: {
        swiper,
        swiperSlide,
        tabs
      },
      data() {
        return {
          slider: [],
          swiperOption: {
            loop: true,
            pagination: '.swiper-pagination',
            autoplay: 0
          }
        }
      },
      methods: {
        getSlider() {
          // axios.get("http://211.67.177.56:8080/hhdj/carousel/carouselList.do?type=0").then(res => {
          //   this.slider = res.data.rows;
          // })
          this.$axios.get("carousel/carouselList.do?type=0").then(res => {
            console.log(res)
            this.slider = res.rows;
          })
        }
      },
      created() {
        this.getSlider()
      }
    }
</script>

<style scoped lang="scss">
@import "../style/index.scss";
</style>
