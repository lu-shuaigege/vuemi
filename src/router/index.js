import Vue from 'vue'
import Router from 'vue-router'
import classs from '../components/classs'
import home from '../components/home'
import my from '../components/my'
import shopping from '../components/shopping'
import mykaifa from '../views/mykaifa'
import sousuo from '../views/sousuo'
import xiangqing from '../views/xiangqing'
import xiangqing1 from '../views/xiangqing1'
import login from '../views/login'

// 安装路由插件
Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      // redirect是重定向
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/classs',
      name: 'classs',
      component: classs,
    },
    {
      path: '/my',
      name: 'my',
      component: my,
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: shopping,
      meta: {
        required: false,
      }
    },
    {
      path: '/mykaifa',
      name: 'mykaifa',
      component: mykaifa,
    },
    {
      path: '/sousuo',
      name: 'sousuo',
      component: sousuo,
    },
    {
      path: '/xiangqing',
      name: 'xiangqing',
      component: xiangqing,
    },
    {
      path: '/xiangqing1',
      name: 'xiangqing1',
      component: xiangqing1,
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ],

})
router.beforeEach((to, from, next) => {
  if (to.meta.required) {
    to.meta.required = false
    console.log(to.name);
    next({
      name: 'login',
      query: { required: to.name }
    })
  } else {
    next()
  }
})
export default router
