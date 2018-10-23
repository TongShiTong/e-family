import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
//初始化store
const store = new Vuex.Store({
  state: {
    token:'',
    userInfo: {
      avatar: '',
      idnumber: '',
      desc: '',
    },
    loginData: {
      isTitle: true,
      content: '',
      switch: '/'
    }
  },
  mutations: {
    'CHANGE_Title'(state, type){
      state.loginData = type
    },
  //  存在这，payload,是负载数据
    'CHANGE_userInfo'(state, payload) {
    //  赋值数据
      state.userInfo = payload
    },
    'SET_Token'(state, token) {
      state.token = token
    }
  },
  actions: {

  },
  //设置存在的地方，存在sessionStorage
  plugins: [createPersistedState({
    storage: {
      getItem: key => sessionStorage.getItem(key),
      setItem: (key, value) =>
        sessionStorage.setItem(key, value
          //没有过期时间
          // , {expires: 3, secure: true}
          ),
      removeItem: key => sessionStorage.removeItem(key)
    },
  })]
})

export default store
