<template>
  <div class="container box">
    <div class="header clearfix">
      <div class="login fll">
        通知早知道
      </div>
    </div>

    <router-link to="/detail" class="content" v-for="(item,index) in listData" :key="index">
      <div class="content-left">
        <img src="../assets/iconfont_gonggaotongzhi.png" alt="">
      </div>
      <div class="content-right">
        <div class="desc">
          {{item.title}}
        </div>
        <div class="date">
          {{item.currentTime}}
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
      },
      data() {
        return {
          listData: [],
          page: 2,
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
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
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
      margin-bottom: 60px;
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
