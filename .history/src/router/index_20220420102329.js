import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'



Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home' //默认重定向到页面
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/zmwk',
    name:'ZMWK',
    component: () => import(/* webpackChunkName: "zmwk" */ '../components/vue-zmwk.vue')
  },
  {
    path:'/login',
    name:'login',
    component: () => import(/* webpackChunkName: "Login" */ '../components/vue-shop/Login.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
