import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = () => import(/* webpackChunkName: "helloWorld" */ '@/page/HelloWorld')

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
