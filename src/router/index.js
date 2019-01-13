import Vue from 'vue'
import Router from 'vue-router'
import homeComponent from '../pages/home'
import loginComponent from '../pages/login'
import registerComponent from '../pages/register'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/home'},
    // {path: '/home',component: homeComponent,children:[{path:'/register',component:registerComponent}]},
    {path: '/home',component: homeComponent},
    {path: '/login',component: loginComponent},
    {path: '/register',component: registerComponent}
  ]
})
