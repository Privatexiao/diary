import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'



Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/zmwk',
    name:'ZMWK',
    component: () => import(/* webpackChunkName: "ZMWK" */ '../components/vue-zmwk.vue')
  },
  {
    path:'/login',
    name:'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../components/vue-shop/Login.vue')
  },
  {
    path:'/home',
    component: () => import(/* webpackChunkName: "Home" */ '../components/vue-shop/Home.vue'),
    redirect:'/welcome',
    children:[
      {
        path:'/welcome',
        component: () => import(/* webpackChunkName: "Welcome" */ '../components/vue-shop/Welcome.vue')
      },
      {
        path:'/users',
        component: () => import(/* webpackChunkName: "Users" */ '../components/vue-shop/user/Users.vue')
      },
      {
        path:'/rights',
        component: () => import(/* webpackChunkName: "Rights" */ '../components/vue-shop/power/Rights.vue')
      },
      {
        path:'/roles',
        component: () => import(/* webpackChunkName: "Roles" */ '../components/vue-shop/power/Roles.vue')
      },
      {
        path:'/categories',
        component: () => import(/* webpackChunkName: "Cate" */ '../components/vue-shop/goods/Cate.vue')
      },
      {
        path:'/params',
        component: () => import(/* webpackChunkName: "Params" */ '../components/vue-shop/goods/Params.vue')
      },
      {
        path:'/goods',
        component: () => import(/* webpackChunkName: "List" */ '../components/vue-shop/goods/List.vue')
      },
      {
        path:'/goods/add',
        component: () => import(/* webpackChunkName: "Add" */ '../components/vue-shop/goods/Add.vue')
      }
      ,
      {
        path:'/order/order',
        component: () => import(/* webpackChunkName: "Order" */ '../components/vue-shop/order/Order.vue')
      }
    ]
  },  
  {
    path:'/xiaomishangcheng',
    name:'XiaoMiShangCheng',
    component: () => import(/* webpackChunkName: "XiaoMiShangCheng" */ '../components/XiaoMiShangCheng.vue')
  },
  {
    path:'/kefuzhushou',
    name:'KeFuZhuShou',
    component: () => import(/* webpackChunkName: "KeFuZhuShou" */ '../components/KeFuZhuShou.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
