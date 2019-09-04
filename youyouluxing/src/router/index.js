import Vue from 'vue'
import Router from 'vue-router'
import Goods from '../pages/goods.vue'
import Bus from '../pages/bus.vue'
import Home from '../pages/'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/goods/:id',
    name: 'goods',
    component: Goods
  }, {
    path: '/bus',
    name: 'bus',
    component: Bus
  }]
})