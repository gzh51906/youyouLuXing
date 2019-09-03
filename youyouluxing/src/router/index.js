import Vue from 'vue'
import Router from 'vue-router'
import Bus from '../pages/bus.vue'
import Home from '../components/Home.vue'
import Help from '../components/Help.vue'
import Phone from '../components/Phone.vue'
Vue.use(Router)


export default new Router({
  routes: [{
      path: '/bus',
      name: 'bus',
      component: Bus
    },

    {
      path: '/',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '/phone',
      name: 'phone',
      component: Phone
    }

  ]
})