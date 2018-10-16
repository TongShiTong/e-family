<template>
  <div class="box">
    <div class="header clearfix">
      <div class="header-left fll" @click="$router.push('/')">
        <img src="../assets/left.png" alt="" class="img">
      </div>
      <div class="login fll">
        党建一点通
      </div>
    </div>

    <router-link to="/detail" class="content">
      <div class="content-left">
        <img src="../assets/xinwen.png" alt="">
      </div>
      <div class="content-right">
        <div class="desc">
          信息工程学院召开党员精准帮扶第三批“四困”学生工作部署会
        </div>
        <div class="date-view">
          <div class="date">
            2018-05-29 17:12:50
          </div>
          <span class="view">
                <img src="../assets/yan.png" alt="">
                47
              </span>
        </div>
      </div>
    </router-link>

  </div>
</template>

<script>
  export default {
    name: "news"
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

  .content {
    text-decoration: none;
    display: flex;
    width: 100%;
    height: 1.86rem;
    border-bottom: 1px solid #ccc;

    .content-left {
      padding: 0 10px;
      flex: 1;
      img {
        width: 1.6rem;
        height: 1.56rem;
      }
    }

    .content-right {
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .desc {
        color: #333;
        font-size: 16px;
      }

      .date-view {
        padding-bottom: 14px;
        display: flex;
        justify-content: space-between;
        color: #666;
        font-size: 12px;

        .view{
          img {
            width: 20px;
            height: 12px;
          }
        }
      }
    }
  }
</style>
