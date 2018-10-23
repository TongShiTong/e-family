<template>
  <div class="container box">


    <div class="banner-wrap">
      <img src="../assets/banner1.png" alt="">
    </div>

    <div class="box">
      <div class="upper">
        <router-link to="/list/learn" class="content-wrap">
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
  .banner-wrap {
    width: 7.5rem;
    margin-top: -10px;

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
