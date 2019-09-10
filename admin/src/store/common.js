import {
    log
} from "util";

export default {
    state: {
        authorization: '',
        username: ''
    },
    getters: {
        a() {
            return 100
        }
    },
    mutations: {
        login(state, authorization,username) {
            localStorage.setItem('htAuthorization', authorization)     
            state.authorization = authorization
            state.username = username
        },
        logout(state) {
            state.authorization = '';
            state.username = '';
            localStorage.removeItem('htAuthorization');
            localStorage.removeItem('htusername');
        },
        getusername(state, username) {
            localStorage.setItem('htusername', username)
            state.username = localStorage.getItem('htusername')



        }
    }
}