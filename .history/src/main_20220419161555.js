import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Tabs } from 'element-ui';

Vue.config.productionTip = false


Vue.use(Tabs);
Vue.use(TabP)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
