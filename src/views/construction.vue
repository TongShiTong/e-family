<template>
  <div class="container box">
    <!--<div class="header clearfix">-->
    <!--<div class="header-left fll" @click="$router.push('/')">-->
    <!--<img src="../assets/left.png" alt="" class="img">-->
    <!--</div>-->
    <!--<div class="login fll">-->
    <!--党建一点通-->
    <!--</div>-->
    <!--</div>-->

    <router-link to="/detail" class="content" v-for="(item,index) in listData" :key="index">
      <div class="content-left">
        <img :src="item.pic">
      </div>
      <div class="content-right">
        <div class="desc">
          {{item.title}}
        </div>
        <div class="date-view">
          <div class="date">
            {{item.currentTime}}
          </div>
          <span class="view">
            <img src="../assets/yan.png" alt="">
            {{item.count}}
          </span>
        </div>
      </div>
    </router-link>

  </div>
</template>

<script>
  export default {
    name: "news",
    data() {
      return {
        listData: [],
        page: 1,
        rows: 10,
        type: 0,
        loadingTransition: false,
        refreshing: false,
        loading: false,
        loadedAll: false
      }
    },
    methods: {
      getListData() {
        let page = this.page;
        let rows = this.rows;
        this.loadingTransition = true
        this.$axios.get('/news/newsList.do', {page, rows, type: this.$route.meta.type}).then(res => {
          console.log(res)
          if (res.code == 1) {
            this.listData = res.rows
            this.loadingTransition = false
          } else {
            alert('请求有误')
          }
        }).catch(err => {
          this.loadingTransition = false
          this.$toast.info('数据获取失败')
        })
        // axios.get(`http://211.67.177.56:8080/hhdj/news/newsList.do?page=${this.page}&rows=${this.rows}&type=${type}`)
        //   .then(res => {
        //     this.listData = res.data.rows
        //   })
      },
    },
    created() {
      this.getListData()
    }
  }
</script>

<style scoped lang="scss">
  .box  {
    /*.header {*/
    /*background: #c50206;*/
    /*width: 100%;*/
    /*height: 1.05rem;*/

    /*.img {*/
    /*padding-bottom: 14px;*/
    /*padding-left: 10px;*/
    /*}*/

    /*.login {*/
    /*padding-left: 102px;*/
    /*line-height: 56px;*/
    /*font-weight: 400;*/
    /*font-size: 17px;*/
    /*color: #fff;*/
    /*}*/
    /*}*/
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
