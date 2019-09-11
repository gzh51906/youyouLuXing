import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios';

import sortlist from '../pages/sortlist.vue'
import addsort from '../pages/addsort.vue'
import goodslist from '../pages/goodslist.vue'
import addgoods from '../pages/addgoods.vue'
import order from '../pages/order.vue'
import userlist from '../pages/userlist.vue'
import adduser from '../pages/adduser.vue'
import setsortlist from '../pages/setsortlist.vue'
import setgoodslist from '../pages/setgoodslist.vue'
import login from '../pages/login.vue'
Vue.use(Router);

const router = new Router({
    routes: [{
            path: "/",
            redirect: {
                name: "login"
            }
        },
        {
            name: "sortlist",
            path: "/sortlist",
            component: sortlist,
            meta: { requiresAuth: true }
        }, {
            name: "addsort",
            path: "/addsort",
            component: addsort,
            meta: { requiresAuth: true }
        
        }, {
            name: "order",
            path: "/order",
            component: order,
            meta: { requiresAuth: true }
        }, {
            name: "userlist",
            path: "/userlist",
            component: userlist,
            meta: { requiresAuth: true }
        }, {
            name: "adduser",
            path: "/adduser",
            component: adduser,
            meta: { requiresAuth: true }
        }, {
            name: "goodslist",
            path: "/goodslist",
            component: goodslist,
            meta: { requiresAuth: true }
        }, {
            name: "addgoods",
            path: "/addgoods",
            component: addgoods,
            meta: { requiresAuth: true }
        }, {
            name: "setsortlist",
            path: "/setsortlist",
            component: setsortlist,
            meta: { requiresAuth: true }
        },
        {
            name: "setgoodslist",
            path: "/setgoodslist",
            component: setgoodslist,
            meta: { requiresAuth: true }
        },
        {
            name: "login",
            path: "/login",
            component: login
        }
    ]
});

router.beforeEach(function(to,from,next){
  //  console.log('beforeEach',to);

    // 判断目标路由是否需要登录权限
    if(to.matched.some(item=>item.meta.requiresAuth)){
        // 判断是否已登录
        let authorization = localStorage.getItem('htAuthorization');
        if(authorization){
            // 发起校验
            axios.get('../htverify',{
                headers:{
                    Authorization:authorization
                }
            }).then(res=>{
               // window.console.log('then',res)
            })
            next();
        }else{
            next({
                path:'/login',
                query:{targetUrl:to.fullPath}
            })
        }
    }else{
        next();
    }

    
    

    
})
export default router;