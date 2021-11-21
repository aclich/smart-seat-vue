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
    strict: false
});

