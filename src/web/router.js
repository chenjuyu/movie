import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import index from '../native/demo/index.vue'
import nav from '../native/demo/nav.vue'
import navigator from '../native/demo/module/navigator.vue'
import drawer from '../native/demo/component/drawer.vue'
import host from '../native/demo/component/host.vue'


Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/demo/index.js',
      name: 'index',
      component: index,
      meta:{
        keepAlive:true
      }

    },
    {
      path: '/demo/nav.js',
      name: 'nav',
      component: nav,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/demo/module/navigator.js',
      name: 'navigator',
      component: navigator,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/demo/component/drawer.js',
      name: 'drawer',
      component: drawer,

    },
    {
      path: '/demo/component/host.js',
      name: 'host',
      component: host
    }
  ]
})
