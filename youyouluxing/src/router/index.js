import Vue from 'vue'
import Router from 'vue-router'
import Bus from '../pages/bus.vue'
import Home from '../components/Home.vue'
import Help from '../components/Help.vue'
import Phone from '../components/Phone.vue'
import Mine from '../components/Mine.vue'
import Login from '../components/Login.vue'
import Reg from '../components/Reg.vue'
import Goods from '../pages/goods.vue'
import MyCollection from '../components/MyCollection.vue'
import Myjieban from '../components/Myjieban.vue'
import Mynews from '../components/Mynews.vue'
import Myorder from '../components/Myorder.vue'
import Mypintuan from '../components/Mypintuan.vue'
import Myyouji from '../components/Myyouji.vue'
import Myzixun from '../components/Myzixun.vue'
import Distributor from '../components/Distributor.vue'
import Refund from '../components/Refund.vue'
import AwaitComment from '../components/AwaitComment.vue'
import AwaitConsumption from '../components/AwaitConsumption.vue'
import AwaitPayment from '../components/AwaitPayment.vue'
import Myordersearch from '../components/Myordersearch.vue'
import Myaccount from '../components/Myaccount.vue'
import store from '../store'
import Save from '../pages/save.vue'
import More from '../pages/more.vue'
import Booking from '../pages/booking.vue'

Vue.use(Router)

import axios from 'axios';


let router = new Router({
  routes: [{
    path: '/bus',
    name: 'bus',
    component: Bus
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
  }, {
    path: '/',
    redirect: '/home',
    component: Home
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine,
  }, {
    path: '/mine/login',
    name: 'login',
    component: Login,
  
  }, {
    path: '/mine/reg',
    name: 'reg',
    component: Reg,

  }, {
    path: '/mine/myCollection',
    name: 'myCollection',
    component: MyCollection,
    meta: { requiresAuth: true }
  }, {
    path: '/mine/myordersearch',
    name: 'myordersearch',
    component: Myordersearch
  }, {
    path: '/mine/myjieban',
    name: 'myjieban',
    component: Myjieban,
    meta: { requiresAuth: true }
  }, {
    path: '/mine/myaccount',
    name: 'myaccount',
    component: Myaccount,
 
  }, {
    path: '/mine/mynews',
    name: 'mynews',
    component: Mynews,
    meta: { requiresAuth: true }
  }, {
    path: '/mine/myorder',
    name: 'myorder',
    component: Myorder,
    meta: { requiresAuth: true }
  }, {
    path: '/mine/mypintuan',
    name: 'mypintuan',
    component: Mypintuan,
    meta: { requiresAuth: true }
  }, {
    path: '/mine/myyouji',
    name: 'myyouji',
    component: Myyouji,
    meta: { requiresAuth: true }
  }, {
    path: '/mine/myzixun',
    name: 'myzixun',
    component: Myzixun,
    meta: { requiresAuth: true }
  }, {
    path: '/mine/distributor',
    name: 'distributor',
    component: Distributor,
    meta: { requiresAuth: true }
  }, {
    path: '/mine/refund',
    name: 'refund',
    component: Refund,
    meta: { requiresAuth: true }
  }, {
    path: '/mine/awaitComment',
    name: 'awaitComment',
    component: AwaitComment,
    meta: { requiresAuth: true }
  }, {
    path: '/mine/awaitConsumption',
    name: 'awaitConsumption',
    component: AwaitConsumption,
    meta: { requiresAuth: true }
  }, {
    path: '/mine/awaitPayment',
    name: 'awaitPayment',
    component: AwaitPayment,
    meta: { requiresAuth: true }
  },{
      path: '/booking',
      name: 'booking',
      component: Booking,
    },
    {
      path: '/more',
      name: 'more',
      component: More,
      // beforeEnter(to, from, next) {
      //   console.log(from);
      //   next()
      // }
    },
    {
      path: '/save',
      name: 'save',
      component: Save,
      meta: {
        requiresAuth: true
      }
    },
     {
      path: '/goods',
      name: 'goods',
      component: Goods
    }

  ]
})

export default router

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}


router.beforeEach((to, from, next) => {
  let res = ['/home', '/help', '/phone', '/bus']
  let result = res.some((item) => {
    return to.path === item
  })
  store.commit('changeroutetoshow', result);
  // console.log(to);
  if (to.matched.some(item => item.meta.requiresAuth)) {
    let authorization = localStorage.getItem('Authorization')
    if (authorization) {
      // console.log('authorization',authorization);
      //校验
      axios.get('http://localhost:3003/verify', {
        headers: {
          Authorization: authorization
        }
      }).then((res) => {
        // console.log('token', res.data.data.authorization);
        // console.log(res);
        if (res.data.data.authorization) {
          //如果校验正确
          next()
        } else {
          //校验不正确，跳转登陆
          next({
            path: '/mine/login',
            query: {
              targer: to.fullPath
            }
          })
        }

      })

    } else {
      next({
        path: '/mine/login',
        query: {
          targer: to.fullPath
        }

      })
    }

  } else {

    next()
  }


})