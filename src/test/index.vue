<template>
    <div>
      <div>
        <button @click="habdleChange">切换显示</button>
      </div>
      <!--v-if性能高，他是真正的从dom树中删除，true的时候在画出，可以用v-show,只隐藏-->
      <div class="box" v-show="isShow">
        <ul>
          <li v-for="(item,index) in arr" :class="{done: item.isDone}" @click="handleTargte(index)">
            {{index}}{{item.todo}}
          </li>
        </ul>
      </div>
      <div>
        <input type="text" v-model="userInfo.username">
        <br>
        <input type="password" value="password" v-model="userInfo.password">
        <input type="checkbox" :checked="isShow">
        <button @click="getUserinfo">弹出</button>
      </div>
      <div>
        <input type="text" v-model="firstname">
        <br>
        <input type="text" v-model="lastname">
        <h2>你的全名是{{fullname}}</h2>
      </div>
    </div>
</template>

<script>
    export default {
      name: "index",
      data(){
        return {
          firstname: '',
          lastname: '',
          // fullname: '',
         userInfo:{
           username: '',
           password: '',
         },
          isShow: true,
          arr: [
            {
              todo: '吃饭',
              isDone: false
            },
            {
              todo: '睡觉',
              isDone: true
            }
          ]
        }
      },
      methods: {
        habdleChange(){
          this.isShow = !this.isShow
        },
        handleTargte(index) {
          this.arr[index].isDone = !this.arr[index].isDone
        },
        getUserinfo() {
          alert(this.userInfo.password)
        }
      },
      //监听你的data里数据的变化
      // watch: {
      //   firstname(newValue, oldValue) {
      //     this.fullname = newValue + this.lastname
      //   },
      //   lastname(newValue, oldValue) {
      //     this.fullname = this.firstname + newValue
      //   }
      // },
      //  计算属性代替watch
      computed: {
        fullname() {
          return this.firstname + this.lastname
        }
      }
    }
</script>

<style scoped lang="scss">
.box {
  height: 100px;
  width: 100px;
  background: #f00;

  .done {
    text-decoration: line-through;
  }
}
</style>
