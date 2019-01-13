import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
Vue.use(ElementUI)

import './style/common.css'
import axios from 'axios'
import router from './router'

Vue.config.productionTip = false

// //按需导入需要的组件
// Vue.use(Button)
// Vue.use(submenu)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
