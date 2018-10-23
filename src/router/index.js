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
  list: () => import('@/views/list'),
  learn: () => import('@/views/learn'),
  organization: () => import('@/views/organization'),
  free: () => import('@/views/free'),
  inform: () => import('@/views/inform'),
  myparty: () => import('@/views/myparty'),
  activity: () => import('@/views/activity'),
  construction: () => import('@/views/construction'),
  photograph: () => import('@/views/photograph'),
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: components.index
    },


    {
      path: '/list',
      name: 'list',
      component: components.list,
      children: [
        {
          path: 'login',
          name: 'login',
          meta: {
            title: '登录'
          },
          component: components.login
        },
        {
          path: 'news',
          name: 'news',
          meta: {
            title: '信工新闻眼',
            type: 0
          },
          component: components.news
        },
        {
          path: 'life',
          name: 'life',
          meta: {
            title: '掌上组织生活'
          },
          component: components.life
        },
        {
          path: 'know',
          name: 'know',
          meta: {
            title: '党建一点通',
            type: 3
          },
          component: components.know
        },
        {
          path: 'identity',
          name: 'identity',
          meta: {
            title: '党员亮身份',
            type: 4
          },
          component: components.identity
        },
        {
          path: 'history',
          name: 'history',
          meta: {
            title: '党史上的今天'
          },
          component: components.history
        },
        {
          path: 'organization',
          name: 'organization',
          meta: {
            title: '流动党员找组织'
          },
          component: components.organization
        },
        {
          path: 'learn',
          name: 'learn',
          meta: {
            title: '政治学习',
            type: 8
          },
          component: components.learn
        },
        {
          path: 'free',
          name: 'free',
          meta: {
            title: '随时随地学',
            type: 6
          },
          component: components.free
        },
        {
          path: 'activity',
          name: 'activity',
          meta: {
            title: '特色学习',
            type: 6
          },
          component: components.activity
        },
        {
          path: 'construction',
          name: 'construction',
          meta: {
            title: '制度建设',
            type: 4
          },
          component: components.construction
        },
        {
          path: 'photograph',
          name: 'photograph',
          meta: {
            title: '随时随地拍',
            type: 4
          },
          component: components.photograph
        },
      ]

    },
    {
      path: '/inform',
      name: 'inform',
      component: components.inform
    },
    {
      path: '/myparty',
      name: 'myparty',
      component: components.myparty
    }
  ]
})


// 没一页的题目
// Router.beforeEach((to, from, next) => {
//   if(to.mate.title) {
//     document.title = to.mate.title
//   }
// })
