import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'



Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home' //默认重定向到首页页面
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
  {
    path:'/home',
    component: () => import(/* webpackChunkName: "Home" */ '../components/vue-shop/Home.vue'),
    redirect:'/welcome',
    children:[
      {
        path:'/welcome',
        component: () => import(/* webpackChunkName: "Login" */ '../components/vue-shop/Login.vue')
      },
      {
        path:'/users',
        component: () => import(/* webpackChunkName: "Login" */ '../components/vue-shop/Login.vue')
      },
      {
        path:'/rights',
        component: () => import(/* webpackChunkName: "Login" */ '../components/vue-shop/Login.vue')
      },
      {
        path:'/roles',
        component: () => import(/* webpackChunkName: "Login" */ '../components/vue-shop/Login.vue')Roles
      },
      {
        path:'/categories',
        component: () => import(/* webpackChunkName: "Login" */ '../components/vue-shop/Login.vue')Cate
      },
      {
        path:'/params',
        component: () => import(/* webpackChunkName: "Login" */ '../components/vue-shop/Login.vue')Params
      },
      {
        path:'/goods',
        component: () => import(/* webpackChunkName: "Login" */ '../components/vue-shop/Login.vue')
      },
      {
        path:'/goods/add',
        component: () => import(/* webpackChunkName: "Add" */ '../components/vue-shop/Add.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
