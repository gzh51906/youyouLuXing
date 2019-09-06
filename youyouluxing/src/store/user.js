import { log } from "util";

export default {
    state: {
        authorization: ''
    },
    mutations: {
        login(state, data) {
            let { authorization, username } = data;
            state.authorization = authorization;
            // console.log('data',data);
            // console.log(username);            
            localStorage.setItem('Authorization', authorization);
            localStorage.setItem('username', username);
            // console.log(111);            
        },
        loginout(state) {
            state.authorization = '';
            localStorage.removeItem('Authorization')
            localStorage.removeItem('username');
        }
    }
}