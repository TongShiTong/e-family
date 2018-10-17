<template>
  <div class="box">
    <div class="header clearfix">
      <div class="login fll">
        通知早知道
      </div>
    </div>

    <router-link to="/detail" class="content">
      <div class="content-left">
        <img src="../assets/iconfont_gonggaotongzhi.png" alt="">
      </div>
      <div class="content-right">
        <div class="desc">
          信息工程学院召开党员精准帮扶第三批“四困”学生工作部署会
        </div>
        <div class="date">
          2018-05-29 17:12:50
        </div>
      </div>
    </router-link>

    <div class="title">没有数据了</div>

    <tabs></tabs>
  </div>
</template>

<script>
  import tabs from '../components/tabs'
    export default {
      name: "iinform",
      components: {
          tabs
      }
    }
</script>

<style scoped lang="scss">
  .box  {
    .header {
      background: #c50206;
      width: 100%;
      height: 1.05rem;

      .login {
        padding-left: 140px;
        line-height: 56px;
        font-weight: 400;
        font-size: 17px;
        color: #fff;
      }
    }

    .title {
      padding-top: 10px;
      font-weight: 500;
      font-size: 16px;
      color: #888;
      text-align: center;
    }
  }

  .content {
    text-decoration: none;
    display: flex;
    width: 100%;
    height: 1.86rem;
    border-bottom: 1px solid #ccc;

    .content-left {
      padding: 5px 20px 0;

      flex: 1;
      img {
        width: 0.7rem;
        height: 0.7rem;
      }
    }

    .content-right {
      padding: 15px 10px;
      display: flex;
      flex-direction: column;
      /*justify-content: space-between;*/
      .desc {
        padding-bottom: 5px;
        color: #333;
        font-size: 16px;
      }

      .date {
        padding-bottom: 14px;
        color: #666;
        font-size: 12px;

      }
    }
  }
</style>
