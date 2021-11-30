import Vue from "vue";
import Vuex from "vuex";
import 'es6-promise/auto'
import menu from './modules/menu'
import layout from './modules/layout'


Vue.use(Vuex);

//const debug = process.env.NODE_ENV !== 'production'

export const store = new Vuex.Store({
    modules: {
        layout,
        menu,
    },
    state:{
        user_info: {
            username: 'no_name',
            permission: 0,
            userrole: 'no_role'
        }
    },
    mutations:{
        // setusername(state, val){
        //     console.log('changeing username to', val)
        //     state.user_info.username = val;
        // },
        // setpermission(state, val){
        //     console.log('changeing permission to', val)
        //     state.user_info.permission = val;
        // }
        setUser_info(state, val){
            console.log('set user_info to', val)
            state.user_info = val
        }
    },
    strict: false
});

