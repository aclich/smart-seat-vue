import Vue from "vue";
import Vuex from "vuex";
import 'es6-promise/auto'
import layout from './modules/layout'
import menu from './modules/menu'
import chat from './modules/chat'
import products from './modules/products'
import email from './modules/email'
import todo from './modules/todo'
import firebase_todo from './modules/firebase_todo'
import jobs from './modules/jobs'
import courses from './modules/courses'

Vue.use(Vuex);

//const debug = process.env.NODE_ENV !== 'production'

export const store = new Vuex.Store({
    modules: {
        layout,
        chat,
        menu,
        products,
        email,
        todo,
        firebase_todo,
        jobs,
        courses
    },
    strict: false
});

