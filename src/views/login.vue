<template>
    <div class="box">
      <div class="header clearfix">
        <div class="header-left fll" @click="$router.push('/')">
          <img src="../assets/left.png" alt="" class="img">
        </div>
        <div class="login fll">
          登录
        </div>
      </div>

      <div class="img-wrap">
        <img src="../assets/logo.png" alt="">
      </div>

      <form action="" class="form">
        <div class="input-wrap">
          <input type="text"placeholder="身份证号">
        </div>
        <div class="input-wrap">
          <input type="password" value="password" placeholder="密码">
        </div>
        <div class="login">
          <mt-button size="large" class="btn">登录</mt-button>
        </div>
      </form>

    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped lang="scss">
  .box {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #c50206;
    height: auto;


    .header {
      height: 1.13rem;

      .img {
        padding: 10px;
      }

      .login {
        padding-left: 120px;
        line-height: 62px;
        font-weight: 400;
        font-size: 17px;
        color: #fff;
      }
    }

    /*logo样式*/
    .img-wrap {
      img {
        padding-top: 20px;
        padding-left: 40px;
        height: 1.04rem;
        width: 3.85rem;
      }
    }

    /*表单样式*/
    .form {
      width: 6rem;
      margin: 0 auto;

      .input-wrap {
        margin-top: -12px;

        input {
          background: #c50206;
          width: 100%;
          border-radius: 5px;
          border: 1px solid #ff0;
          padding: 14px 0;
          line-height: 14px;
          font-size: 14px;
          color: #fff;
        }
      }
    }
  }
</style>
<style lang="scss">
  .login .mint-button {
    font-size: 14px;
    color: #fff;
  }
  .login{
    .btn {
      margin-top: 16px;
      background: #e43228;
    }
  }
</style>
