// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//引入自己封装好的$axios
import $axios from './utils'
//引入store
import store from './store'

//将$axios挂载到Vue原型上
Vue.prototype.$axios = $axios
Vue.use(MintUI)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //注入全局Vue实例上
  store,
  components: { App },
  template: '<App/>'
})
