import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = {
  index: () => import('@/views/index'),
  login: () => import('@/views/login'),
  news: () => import('@/views/news'),
  know: () => import('@/views/know'),
  identity: () => import('@/views/identity'),
  history: () => import('@/views/history'),
  life: () => import('@/views/life'),
  learn: () => import('@/views/learn'),
  organization: () => import('@/views/organization'),
  free: () => import('@/views/free')
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: components.index
    },
    {
      path: '/login',
      name: 'login',
      component: components.login
    },
    {
      path: '/news',
      name: 'news',
      component: components.news
    },
    {
      path: '/know',
      name: 'know',
      component: components.know
    },
    {
      path: '/identity',
      name: 'identity',
      component: components.identity
    },
    {
      path: '/history',
      name: 'history',
      component: components.history
    },
    {
      path: '/life',
      name: 'life',
      component: components.life
    },
    {
      path: '/learn',
      name: 'learn',
      component: components.learn
    },
    {
      path: '/organization',
      name: 'organization',
      component: components.organization
    },
    {
      path: '/free',
      name: 'free',
      component: components.free
    }
  ]
})
