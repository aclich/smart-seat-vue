import Vue from "vue";
import Vuex from "vuex";
import 'es6-promise/auto'
import menu from './modules/menu'
import layout from './modules/layout'


Vue.use(Vuex);

//const debug = process.env.NODE_ENV !== 'production'

function clone(obj){
    if(obj == null || typeof(obj) != 'object')
        return obj;

    var temp = new obj.constructor(); 
    for(var key in obj)
        temp[key] = clone(obj[key]);

    return temp;
}

export const store = new Vuex.Store({
    modules: {
        layout,
        menu,
    },
    state:{
        isLoading: false,
        user_info: {
            username: 'no_name',
            permission: 0,
            userrole: 'no_role'
        },
        update_flag: false,
        seat_list:[
        ]
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
        // setUser_info(state, val){
        //     console.log('set user_info to', val)
        //     state.user_info = val
        // },
        change_loading_state(state, data){
            // console.log('in VUEX-change loading state to', data)
            state.isLoading = data  
        },
        trigger_update_flag(state){
            // console.log('in VUEX-change updare flag to', !state.update_flag)
            state.update_flag = !state.update_flag
        },
        set_seat_list(state, in_data){
            state.seat_list = in_data
        },

        add_seat_list(state, new_seat){
            state.seat_list.push(new_seat)
        },
        modify_seat_list(state, mod_seat){
            let idx = state.seat_list.findIndex(x => x.id === mod_seat.id)
            state.seat_list[idx] = clone(mod_seat)
            state.seat_list.push('')
            state.seat_list.pop()
        },
        remove_seat_list(state, seat_id){
            console.log("remove seat list, seat_id:",seat_id)
            state.seat_list = state.seat_list.filter(x => x.id != seat_id)
        }
    },
    strict: false
});

