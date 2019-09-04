import Vue from 'vue'
import Router from 'vue-router'
import Bus from '../pages/bus.vue'
import Home from '../components/Home.vue'
import Help from '../components/Help.vue'
import Phone from '../components/Phone.vue'
import Mine from '../components/Mine.vue'
import Login from '../components/Login.vue'
import Reg from '../components/Reg.vue'
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
import store from '../store'
Vue.use(Router)



 let router=new Router({
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
    },{
      path: '/',
      redirect:'/home',
      component: Phone
    },
    {
      path: '/mine',
      name:'mine',
      component:Mine,      
    },{
      path: '/mine/login',
      name: 'login',
      component: Login,
      meta: { requiresAuth: true }
    },{
      path: '/mine/reg',
      name: 'reg',
      component: Reg,
      meta: { requiresAuth: true }
    },{
      path: '/mine/myCollection',
      name: 'myCollection',
      component: MyCollection,
      meta: { requiresAuth: true }
    },{
      path: '/mine/myjieban',
      name: 'myjieban',
      component: Myjieban,
      meta: { requiresAuth: true }
    },{
      path: '/mine/mynews',
      name: 'mynews',
      component: Mynews,
      meta: { requiresAuth: true }
    },{
      path: '/mine/myorder',
      name: 'myorder',
      component: Myorder
    },{
      path: '/mine/mypintuan',
      name: 'mypintuan',
      component: Mypintuan,
      meta: { requiresAuth: true }
    },{
      path: '/mine/myyouji',
      name: 'myyouji',
      component: Myyouji,
      meta: { requiresAuth: true }
    },{
      path: '/mine/myzixun',
      name: 'myzixun',
      component: Myzixun,
      meta: { requiresAuth: true }
    },{
      path: '/mine/distributor',
      name: 'distributor',
      component:Distributor,
      meta: { requiresAuth: true }
    },{
      path: '/mine/refund',
      name: 'refund',
      component:Refund,
      meta: { requiresAuth: true }
    },{
      path: '/mine/awaitComment',
      name: 'awaitComment',
      component:AwaitComment,
      meta: { requiresAuth: true }
    },{
      path: '/mine/awaitConsumption',
      name: 'awaitConsumption',
      component:AwaitConsumption,
      meta: { requiresAuth: true }
    },{
      path: '/mine/awaitPayment',
      name: 'awaitPayment',
      component:AwaitConsumption,
      meta: { requiresAuth: true }
    },{
      path: '/mine/awaitPayment',
      name: 'awaitPayment',
      component:AwaitPayment,
      meta: { requiresAuth: true }
    }
    
    
  ]
})

export default router

router.beforeEach((to,from,next)=>{
      let res=['/home','/help','/phone','/bus']
      let result=res.some((item)=>{return to.path===item})
      store.commit('changeroutetoshow',result);
      console.log(to);
      if(to.matched.some(item=>item.meta.requiresAuth)){
         
          
      }
      next()

})