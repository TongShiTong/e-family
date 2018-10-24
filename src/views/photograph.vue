<template>
    <div class="container box">
      <div class="content" v-for="(item,index) in listData" :key="index">
        <div class="img-wrap">
          <img :src="item.pic">
        </div>
        <div class="title">
          {{item.title}}
        </div>
      </div>
      <div class="empty">

      </div>
    </div>
</template>

<script>
    export default {
      name: "photograph",
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
  .box {
    /*padding-bottom: 30px;*/
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .content {
      padding-bottom: 30px;
      width: 3.16rem;
      margin: 0 10px;

      .img-wrap{
        height: 2.5rem;
        img{
          height: 100%;
          width: 100%;
          display: block;
        }
      }

      .title {
        color: #666;
        font-size: 13px;
        line-height: 1.5;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical
      }
    }

    .empty {
      width: 3.5rem;
    }
  }
</style>
