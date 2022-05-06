import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { TabPane, Tabs } from 'element-ui';

Vue.config.productionTip = false

Vue
Vue.use(Tabs);
Vue.use(TabPane)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
