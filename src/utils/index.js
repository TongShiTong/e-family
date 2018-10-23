//封装axios
//引入axios
import axios from 'axios'
import store from '../store'

//process是全局变量，在生产环境的时候，将会被设置为production
//在开发环境的时候，将会被设置为development
// const env = process.env.NODE_ENV

//用上面的全局变量判断baseURL
// let baseURL = env == 'development' ? '/api' : '/'
const baseURL = 'http://211.67.177.56:8080/hhdj'
//生成axios实例
const instance = axios.create({
  //本来是baseURL: baseURL
  baseURL,
//  请求时间
  timeout: 15000
})

const xhr = {
  get(url, data, config = {}) {
    config.headers = {
      'token' : store.state.token
    }
    return new Promise((resolve, reject) => {
      instance.get(url, {params: data}, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  fetch(url, data, config = {}, methods) {
    config.headers = {
      'tooken': store.state.token
    }
    return new Promise((resolve, reject) => {
      instance[methods](url, data, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  post(url, data, config) {
    return this.fetch(url, data, config, 'post')
  }
}

//导出方法
export default xhr
