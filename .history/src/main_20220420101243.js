import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import axios from 'axios'
import TreeTable from 'vue-table-with-tree-grid'




Vue.config.productionTip = false




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
