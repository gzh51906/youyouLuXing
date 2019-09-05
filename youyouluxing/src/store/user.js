import { log } from "util";

export default {
    state:{
        authorization:'',
    },
    mutations:{
        login(state,authorization){
            state.authorization=authorization;
            localStorage.setItem('Authorization',authorization)
            // console.log(111);            
        },
        loginout(state){
            state.authorization='';
            localStorage.removeItem('Authorization')
        }
    }
}