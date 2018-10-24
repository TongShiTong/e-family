<template>

 <div class="container imges">
   <div class="mode">
     请选择支付方式：
   </div>
   <div class="imges-wrap wx">
     <div class="befor-img"><img src="../assets/weixin.png" alt=""></div>
     <div class="title">微信</div>
     <div class="after-img"><img src="../assets/right.png" alt="" class="img"></div>
   </div>
   <div class="imges-wrap zfb">
     <div class="befor-img"><img src="../assets/zhifubao.png" alt=""></div>
     <div class="title">支付宝</div>
     <div class="after-img"><img src="../assets/right.png" alt=""></div>
   </div>
 </div>

</template>

<script>
  export default {
    name: "dues",
  }
</script>

<style scoped lang="scss">
  .imges {
    display: flex;
    flex-direction: column;
    background: #fff;

    .mode {
      font-size: 15px;
      height: 0.8rem;
      line-height: 0.8rem;
      border-bottom: 1px solid #ccc;
    }

    .imges-wrap {
      text-decoration: none;
      border-bottom: 1px solid #ccc;
      display: flex;
      height: 1.2rem;

      .title {
        font-weight: 500;
        font-size: 16px;
        color: #333;
        padding-top: 20px;
      }

      .befor-img {
        padding: 0 15px;
        width: 0.8rem;
        height: 0.8rem;

        img {
          padding-bottom: 4px;
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
          padding-left: 228px;
        }
      }
    }
    /*.wx:active {*/
      /*min-width: 100vh;*/
      /*min-height: 100vh;*/
      /*background: url("../assets/wechat.png");*/
      /*opacity: .3;*/
    /*}*/
  }
</style>
