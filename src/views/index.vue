<template>
<div>
  <div class="head-main">
    <div class="header-left">
      <img src="../assets/logo.png" class="header-pic">
    </div>
    <router-link to="/list/login" class="header-right">
      登录
    </router-link>
  </div>

  <!--轮播图-->
  <div class="slider">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item,index) in slider" :key="index">
        <div class="slider-wrap">
          <router-link class="slider-wrap" :to="{name: 'news', params: {id: item.url}}">
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
      <router-link to="/list/news">
        <div class="menu-icon-wrap">
          <img src="../assets/icon_01.png">
        </div>
        <div class="menu-title">
          信工新闻眼
        </div>
      </router-link>
      <router-link to="/list/life">
        <div class="menu-icon-wrap">
          <img src="../assets/icon_02.png">
        </div>
        <div class="menu-title">
          掌上组织生活
        </div>
      </router-link>
      <router-link to="/list/login">
        <div class="menu-icon-wrap">
          <img src="../assets/icon_03.png">
        </div>
        <div class="menu-title">
          党员云互动
        </div>
      </router-link>
    </div>
    <div class="menu-row">
      <router-link to="/list/know">
        <div class="menu-icon-wrap">
          <img src="../assets/icon_04.png">
        </div>
        <div class="menu-title">
          党建一点通
        </div>
      </router-link>
      <router-link to="list/identity">
        <div class="menu-icon-wrap">
          <img src="../assets/icon_05.png">
        </div>
        <div class="menu-title">
          党员亮身份
        </div>
      </router-link>
      <router-link to="/list/history">
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
    <div class="menu-left">
    </div>
    <div class="menu-right">
      <div class="row">
        <router-link to="/list/free"></router-link>
        <router-link to="/list/photograph"></router-link>
      </div>
      <div class="row">
        <router-link to="/list/construction"></router-link>
        <router-link to="/list/activity"></router-link>
      </div>
    </div>
  </div>

  <tabs></tabs>

</div>
</template>

<script>
  import {mapState} from 'vuex'
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
          swiperOption:{
            //显示分页
            pagination: {
              el: '.swiper-pagination',
              clickable:true
            },
            //切换模式  横屏或者竖屏
            // direction : 'vertical',
            //设置自动播放速度
            autoplay: {
              disableOnInteraction: false,
              delay:3000
            },
            //开启无限循环
            loop:false,
            //设置点击箭头
            paginationClickable :true,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
            //设置同屏显示的数量，默认为1，使用auto是随意的意思。
            slidesPerView:1,
            //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
            mousewheel:false ,
            //默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
            // freeMode:true
          },
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
        },
        goDetail(id) {
          this.$router.push(`/news/newDetail/${id}`)
        },
        goOtherList(type) {
          this.$router.push(`/list/${type}`)
        }
      },
      computed: {
        ...mapState(['userInfo','token'])
      },
      created() {
        this.getSlider()
      }
    }
</script>

<style scoped lang="scss">
@import "../style/index.scss";
</style>
