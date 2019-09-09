import { log } from "util";

export default {
    state: {
        authorization: '',
        username:''
    },
    getters: {
        a() {
            return 100
        }
    },
    mutations: {
        login(state, authorization) {
            localStorage.setItem('Authorization', authorization)
            state.authorization = authorization
        },
        logout(state) {
            state.authorization = '';
            state.username ='';
            localStorage.removeItem('Authorization');
        },
        getusername(state,username){
         state.username =username;
         console.log(state.username);
         
          
           
        }
    }
}