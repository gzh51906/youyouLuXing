import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD


=======
import Home from '../components/Home.vue'
import Help from '../components/Help.vue'
import Phone from '../components/Phone.vue'
>>>>>>> 815f4a1cd0f5fa518fdbd68bef035e1c44d15fe6
Vue.use(Router)

export default new Router({
  routes: [
<<<<<<< HEAD
=======
    {
      path:'/',
      redirect:'/home',
      component:Home
    }
    ,
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path:'/help',
      name:'help',
      component:Help
    },
    {
      path:'/phone',
      name:'phone',
      component:Phone
    }
>>>>>>> 815f4a1cd0f5fa518fdbd68bef035e1c44d15fe6
  ]
})