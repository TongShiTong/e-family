<template>
  <div class="content">
    <div class="wrap">
      <div class="title">旧密码：</div>
      <div class="wrap-input">
        <input type="text">
      </div>
    </div>
    <div class="wrap">
      <div class="title">新密码：</div>
      <div class="wrap-input">
        <input type="password">
      </div>
    </div>
    <div class="wrap">
      <div class="title">确认密码：</div>
      <div class="wrap-input">
        <input type="password">
      </div>
    </div>
    <div class="sure">
      <mt-button class="btn" size="large">确定</mt-button>
    </div>
  </div>
</template>

<script>
  import { Field } from 'mint-ui';
    export default {
        name: "password"
    }
</script>

<style scoped lang="scss">
  .content {
    width: 6rem;
    margin: 100px auto;

    .wrap {
      .title {
        width: 100%;
        font-size: 16px;
        color: #666;
        /*box-sizing: border-box;*/
      }

      .wrap-input {
        margin-top: -16px;
        margin-bottom: 6px;
        input {
          margin-top: 10px;
          width: 100%;
          border-radius: 5px;
          border: 1px solid #888;
          padding: 12px 0;
          line-height: 14px;
          font-size: 14px;
          color: #666;
        }
      }
    }
    .sure{
      .btn {
        margin-top: 16px;
        background: #ef473a;
        color: #fff;
      }
    }
  }
</style>
<style lang="scss">
</style>
