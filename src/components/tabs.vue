<template>
  <div class="tabs">
    <router-link to="/" class="tab-item" :class="{active:$route.name == 'index'}">
      <i class="iconfont">
        <img src="../assets/dang1.png" alt="" v-if="isShow">
        <img src="../assets/dang.png" alt="">
      </i>
      <div class="tab-title">
        首页
      </div>
    </router-link>
    <router-link to="/inform" class="tab-item" :class="{active:$route.name == 'inform'}">
      <i class="iconfont">
        <img src="../assets/tz1.png" alt="" v-if="isShow">
        <img src="../assets/tz.png" alt=""v-else>
      </i>
      <div class="tab-title">
        通知早知道
      </div>
    </router-link>
    <router-link to="/myparty" class="tab-item" :class="{active:$route.name == 'myparty'}">
      <i class="iconfont">
        <img src="../assets/wode1.png" alt="" v-if="isShow">
        <img src="../assets/wode.png" alt=""v-else>
      </i>
      <div class="tab-title">
        我的党建
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name:'tabs',
    computed: {
      isShow() {
        var href = window.location.href
        // console.log(this.$route.name)
        if (href = `http://localhost:8080/#/${this.$route.name}`) {
          return false
        }else {
          return true
        }
      }
    }
  }
</script>

<style lang="scss">
  .tabs{
    position: fixed;
    bottom: 0;
    display: flex;
    left: 0;
    right: 0;
    width: 100%;
    border: 1px solid #f1f1f1;
    align-items: center;
    height: 0.92rem;
    background: #fafbfe;
    .tab-item{
      text-decoration: none;
      font-size: 14px;
      flex:1;
      color: #333;
      text-align: center;
      .iconfont{
        font-size: 24px;

        img{
          width: 25px;
          height: 25px;
        }
      }
    }
    .active{
      img {
      color: #c7000a;
    }
      border-top:1px solid #c7000a;
      color: #c7000a;
    }
  }
</style>
