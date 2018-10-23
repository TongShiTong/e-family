<template>
    <div class="container box">
      <router-link to="/list/photograph">
        <div class="img-wrap">
          <img src="../assets/wechat.png" alt="">
        </div>
        <div class="title">
          扫雪除冰暖人心--学院组织开展
        </div>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "photograph"
    }
</script>

<style scoped lang="scss">
  .box {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    a {
      display: block;
      width: 3.75rem;
      text-decoration: none;

      .img-wrap {
        width: 100%;
      }

      .title {
        font-size: 13px;
        color: #666;
        line-height: 1.5;
      }
    }
  }
</style>
