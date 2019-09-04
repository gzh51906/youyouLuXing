import Vue from 'vue'
import Router from 'vue-router'
import Bus from '../pages/bus.vue'
import Home from '../components/Home.vue'
import Help from '../components/Help.vue'
import Phone from '../components/Phone.vue'
import Goods from '../pages/goods.vue'

Vue.use(Router)


export default new Router({
  routes: [{
      path: '/bus',
      name: 'bus',
      component: Bus
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      
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
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods,
      // redirect: {
      //   name: 'home'
      // },

      // beforeEnter(to, from, next) {
      //   console.log('beforeEnter', to, from);
      //   next()
      // }

    }

  ]
})