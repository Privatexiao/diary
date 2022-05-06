import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import axios from 'axios'
import TreeTable from 'vue-table-with-tree-grid'


// 导入全局样式表
import './assets/css/global.css'

//配置请求的根路径
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'
//axios请求拦截
axios.interceptors.request.use(config=>{
  //为请求头对象，添加token验证的Authorization字段
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
// 把axios挂载到vue的原型上
Vue.prototype.$http = axios

// 注册组件TreeTable
Vue.component('tree-table',TreeTable)


// 定义一个全局过滤器，处理时间戳
Vue.filter('dateFormat',function(originVal){

  const time = new Date(originVal)

  const y= time.getFullYear()
  const m= (time.getMonth()+1+'').padStart(2,'0')
  const d= (time.getDate()+'').padStart(2,'0')

  const hh= (time.getHours()+'').padStart(2,'0')
  
  const mm= (time.getMinutes()+'').padStart(2,'0')
  const ss= (time.getSeconds()+'').padStart(2,'0')

  return `${y}-${m}-${d}- ${hh}:${mm}:${ss}`
})

Vue.config.productionTip = false




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
