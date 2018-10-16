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
    <swiper>
      <swiper-slide>
        <router-link class="slider-wrap" href="/news" to="/news">
          <img src="../assets/01.png" alt="">
          <div class="desc">习近平：”永远做人民公仆，时代先锋，民族脊梁“</div>
        </router-link>
      </swiper-slide>
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
      }
    }
</script>

<style scoped lang="scss">
@import "../style/index.scss";
</style>
