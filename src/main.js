import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'

import './style/common.css'
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI)
// //按需导入需要的组件
// Vue.use(Button)
// Vue.use(submenu)

//配置根路径
import axios from 'axios'
axios.defaults.baseURL = 'http://litc.pro:9999/v1/'
//在Vue的原型上挂载这么一个方法 axios 其他位置引用直接 使用 无需二次导入
Vue.prototype.axios = axios


//导航守卫，进行路由跳转前的拦截
router.beforeEach((to,from,next) => {
  let token = localStorage.getItem('token')
  if(!token && to.path !== "/login"){
    return next('/login')
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
