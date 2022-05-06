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
    component: () => import(/* webpackChunkName: "zmwk" */ '../components/vue-zmwk.vue')
  },
  {
    path:'/long',
    name:'ZMWK',
    component: () => import(/* webpackChunkName: "zmwk" */ '../components/vue-zmwk.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
