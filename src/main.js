import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/common.css'
Vue.use(ElementUI)

import axios from 'axios'
axios.defaults.baseURL = 'http://litc.pro:9999/v1/'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // {
  //   headers: { Authorization: token }
  // }
  let token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

Vue.prototype.$http = axios

// console.log(Vue.prototype)

// 路由的导航守卫 作用: 在每一次路由跳转的时候, 都会触发一系列回调函数, 这些回调函数被称为导航守卫, 可以在这些回调函数中进行路由拦截操作
// 在进入某个路由之前
router.beforeEach((to, from, next) => {
  // 在此处就需要判断, 是否能进入一些禁地(需要登录的页面)
  // console.log(to, from)
  // 如果添加了导航守卫的回调函数
  // 必须调用next函数  将其引导到某个页面, 如果不传参数就是不干预路由跳转
  let token = localStorage.getItem('token')
  if (!token && to.path !== '/login') {
    // console.log('我在疯狂的进login')
    return next('/login')
  }

  next()
})

// 在进入之后
router.afterEach(route => {

})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
