<template>
  <div class="box">
    <div class="header clearfix">
      <div class="header-left fll" @click="$router.push('/')">
        <img src="../assets/left.png" alt="" class="img">
      </div>
      <div class="login fll">
        掌上组织生活
      </div>
    </div>

    <div class="banner-wrap">
      <img src="../assets/banner1.png" alt="">
    </div>

    <div class="box">
      <div class="upper">
        <router-link to="/learn" class="content-wrap">
          <div class="img-wrap">
            <img src="../assets/icon1.png" alt="">
          </div>
          <div class="desc">
            政治学习
          </div>
        </router-link>
        <router-link to="/login"class="content-wrap">
          <div class="img-wrap">
            <img src="../assets/icon2.png" alt="">
          </div>
          <div class="desc">
            思想汇报
          </div>
        </router-link>
        <router-link to="/login"class="content-wrap">
          <div class="img-wrap">
            <img src="../assets/icon3.png" alt="">
          </div>
          <div class="desc">
            心得总结
          </div>
        </router-link>
      </div>
      <div class="under">
        <router-link to="#"class="content-wrap">
          <div class="img-wrap">
            <img src="../assets/icon4.png" alt="">
          </div>
          <div class="desc">
            民主评议
          </div>
        </router-link>
        <router-link to="/organization"class="content-wrap">
          <div class="img-wrap">
            <img src="../assets/icon5.png" alt="">
          </div>
          <div class="desc">
            流动党员找组织
          </div>
        </router-link>
        <div class="content-wrap">
          <div class="img-wrap">
          </div>
          <div class="desc">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "life"
    }
</script>

<style scoped lang="scss">
  .box  {
    .header {
      background: #c50206;
      width: 100%;
      height: 1.05rem;

      .img {
        padding-bottom: 14px;
        padding-left: 10px;
      }

      .login {
        padding-left: 102px;
        line-height: 56px;
        font-weight: 400;
        font-size: 17px;
        color: #fff;
      }
    }
  }

  .banner-wrap {
    width: 7.5rem;

    img {
      width: 100%;
      height: 4.12rem;
    }
  }

  .box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .upper, .under {
      display: flex;
      justify-content: space-around;

      .content-wrap {
        text-decoration: none;
        img {
          width: 1.6rem;
          height: 1.6rem;
        }

        .desc {
          width: 1.6rem;
          font-size: 14px;
          color: #666;
          text-align: center;
        }
      }
    }

    .upper {
      padding: 10px 0 30px;
    }
  }
</style>
