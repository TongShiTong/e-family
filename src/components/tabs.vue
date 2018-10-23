<template>
  <div class="tabs">
    <router-link to="/" class="tab-item" :class="{active:$route.name == 'index'}">
      <i class="iconfont icon-dang"></i>
      <div class="tab-title">
        首页
      </div>
    </router-link>
    <router-link to="/inform" class="tab-item" :class="{active:$route.name == 'inform'}">
      <i class="iconfont icon-xiaoxi"></i>
      <div class="tab-title">
        通知早知道
      </div>
    </router-link>
    <router-link to="/Myparty" class="tab-item" :class="{active:$route.name == 'myparty'}">
      <i class="iconfont icon-wode"></i>
      <div class="tab-title">
        我的党建
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name:'tabs'
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
    height: 1.12rem;
    background: #fafbfe;
    .tab-item{
      text-decoration: none;
      font-size: 14px;
      flex:1;
      color: #333;
      text-align: center;
      .iconfont{
        font-size: 24px;
      }
    }
    .active{
      border-top:1px solid #c7000a;
      color: #c7000a;
    }
  }
</style>
