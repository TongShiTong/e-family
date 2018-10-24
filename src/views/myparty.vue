<template>
  <div class="box">
    <div class="header clearfix">
      <div class="login fll">
        我的党建
      </div>
    </div>

    <div class="content">
      <div class="user">
        <div class="img-wrap">
          <img src="../assets/bt_bg.png" alt="">
        </div>
        <div class="desc">你还没有登录，请
          <router-link to="/list/login">登录</router-link>
        </div>
      </div>
    </div>
    <div class="imges">
      <router-link to="/info" class="imges-wrap">
        <div class="befor-img"><img src="../assets/grxx.png" alt=""></div>
        <div class="title">个人信息</div>
        <div class="after-img"><img src="../assets/right.png" alt=""></div>
      </router-link>
      <router-link to="list/integral" class="imges-wrap">
        <div class="befor-img"><img src="../assets/grlhjf.png" alt=""></div>
        <div class="title">个人量化积分</div>
        <div class="after-img"><img src="../assets/right.png" alt="" class="img"></div>
      </router-link>
      <router-link to="list/password" class="imges-wrap">
        <div class="befor-img"><img src="../assets/xgmm1.png" alt=""></div>
        <div class="title">修改密码</div>
        <div class="after-img"><img src="../assets/right.png" alt=""></div>
      </router-link>
      <router-link to="list/dues" class="imges-wrap">
        <div class="befor-img"><img src="../assets/icon3.png" alt=""></div>
        <div class="title">党费缴纳</div>
        <div class="after-img"><img src="../assets/right.png" alt=""></div>
      </router-link>
    </div>


    <tabs></tabs>
  </div>
</template>

<script>
  import tabs from '../components/tabs'
  export default {
    components: {
      tabs
    }
  }
</script>

<style scoped lang="scss">
  .box  {
    background: #c50206;
    .header {
      background: #c50206;
      width: 100%;
      height: 1.05rem;

      .login {
        padding-left: 150px;
        line-height: 56px;
        font-weight: 400;
        font-size: 17px;
        color: #fff;
      }
    }

    .user {
      background: #c50206;
      /*border-top: 1px solid #ffe8ed;*/

    .img-wrap {
      margin: 54px auto 10px;
      width: 1.3rem;
      height: 1.3rem;
      border: 1px solid #c50206;
      /*background: url("../assets/bt_bg.png");*/
      img {
        border-radius: 50px;
        width: 100%;
        height: 100%;
      }
    }

      .desc {
        padding-bottom: 20px;
        text-align: center;
        color: #fff;
        font-size: 12px;

        a {
          text-decoration: none;
          color: #fff;
          font-size: 12px;
        }
      }
    }
  }

  .imges {
    display: flex;
    flex-direction: column;
    background: #fff;

    .imges-wrap {
      text-decoration: none;
      border-bottom: 1px solid #ccc;
      display: flex;
      height: 1rem;

      .title {
        font-weight: 500;
        font-size: 17px;
        color: #888;
        padding-top: 14px;
      }

      .befor-img {
        padding: 0 15px;
        width: 0.64rem;
        height: 0.64rem;

        img {
          padding-bottom: 12px;
          width: 100%;
          height: 100%;
        }
      }

      .after-img {
        padding: 0 15px;
        width: 0.2rem;
        height: 0.3rem;

        img {
          padding-left: 210px;
          padding-bottom: 20px;
          width: 100%;
          height: 100%;
        }

        .img {
          padding-left: 175px;
        }

      }
    }
  }
</style>
