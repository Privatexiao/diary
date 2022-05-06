import Vue from 'vue'
import App from './App.vue'
import router from './router'


import { TabPane, Tabs } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false


Vue.use(Tabs);
Vue.use(TabPane)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
