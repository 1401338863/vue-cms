import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home/home.vue'
import member from '@/components/member/member.vue'
import shopcar from '@/components/shopcar/shopcar.vue'
import search from '@/components/search/search.vue'
import { link } from 'fs'

Vue.use(Router)

export default new Router({
  // 配置路由规则
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/member',
      component: member
    },
    {
      path: '/shopcar',
      component: shopcar
    },
    {
      path: '/search',
      component: search
    }
  ],
  linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类
})
