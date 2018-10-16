<template>
  <div class="box">
    <div class="header clearfix">
      <div class="header-left fll" @click="$router.push('/life')">
        <img src="../assets/left.png" alt="" class="img">
      </div>
      <div class="login fll">
        流动党员找组织
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "organization"
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
</style>
