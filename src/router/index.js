import Vue from 'vue'
import Router from "vue-router";
// import firebase from 'firebase';
// import Userauth from '../auth/js/index'

import Body from '../components/body'
import Auth from '../auth/auth'

/* Auth */
import login from '../auth/login'
import callback from '../pages/callback'
import Register from '../auth/register'

/* Error Pages */
import Error400 from '../errors/error_400'
import Error401 from '../errors/error_401'
import Error403 from '../errors/error_403'
import Error404 from '../errors/error_404'
import Error500 from '../errors/error_500'
import Error503 from '../errors/error_503'

/* Authentication */
import LoginImage from '../pages/authentication/login_image'
import LoginVideo from '../pages/authentication/login_video'
import RegisterImage from '../pages/authentication/register_image'
import RegisterVideo from '../pages/authentication/register_video'
import Unlock from '../pages/authentication/unlock'
import ForgetPassword from '../pages/authentication/forget_password'
import ResetPassword from '../pages/authentication/reset_password'

// component
import Home from '../pages/home'
import Sample2 from '../pages/sample_2'

Vue.use(Router)

const routes = [
{ path: '', redirect: { name: 'default' }},
{
  path: '/home',
  component: Body,
  children:[
    {
      path:'default',
      name: 'default',
      component: Home,
      meta:{
        title: 'Home | Smart Seats'
      }
    }

  ]
},
{
  path: '/sample',
  component: Body,
  children: [
    {
      path: '2',
      name: 'sample2',
      component: Sample2,
      meta:{
        title: 'Sample_2 | Smart Seats'
      }
    }
  ]
},
{
  path: '/auth',
  component: Auth,
  children: [
  {
    path: 'login',
    name: 'Login 1',
    component: login,
    meta: {
      title: ' login | Smart Seats',
    }
  },
  {
    path: 'register',
    name: 'register 1',
    component: Register,
    meta: {
      title: ' Register | Smart Seats',
    }
  }
  ]
},
{
  path: '/callback',
  name: 'callback',
  component: callback,
  meta: {
      title: 'Auth0',
  }
},
{
  path:'/error-400',
  name:'Error400',
  component:Error400,
  meta: {
      title: 'Error400 | Smart Seats',
    }
},
{
  path:'/error-401',
  name:'Error401',
  component:Error401,
  meta: {
      title: 'Error401 | Smart Seats',
    }
},
{
  path:'/error-403',
  name:'Error403',
  component:Error403,
  meta: {
      title: 'Error403 | Smart Seats',
    }
},
{
  path:'/error-404',
  name:'Error404',
  component:Error404,
  meta: {
      title: 'Error404 | Smart Seats',
    }
},
{
  path:'/error-500',
  name:'Error500',
  component:Error500,
  meta: {
      title: 'Error500 | Smart Seats',
    }
},
{
  path:'/error-503',
  name:'Error503',
  component:Error503,
  meta: {
      title: 'Error503 | Smart Seats',
    }
},
{
  path:'/authentication/login/image',
  name:'LoginImage',
  component:LoginImage,
  meta: {
      title: 'LoginImage | Smart Seats',
    }
},
{
  path:'/authentication/login/video',
  name:'LoginVideo',
  component:LoginVideo,
  meta: {
      title: 'LoginVideo | Smart Seats',
    }
},
{
  path:'/authentication/register/image',
  name:'RegisterImage',
  component:RegisterImage,
  meta: {
      title: 'RegisterImage | Smart Seats',
    }
},
{
  path:'/authentication/register/video',
  name:'RegisterVideo',
  component:RegisterVideo,
  meta: {
      title: 'RegisterVideo | Smart Seats',
    }
},
{
  path:'/authentication/unlockuser',
  name:'Unlock',
  component:Unlock,
  meta: {
      title: 'Unlock | Smart Seats',
    }
},
{
  path:'/authentication/forgetpassword',
  name:'ForgetPassword',
  component:ForgetPassword,
  meta: {
      title: 'ForgetPassword | Smart Seats',
    }
},
{
  path:'/authentication/resetpassword',
  name:'ResetPassword',
  component:ResetPassword,
  meta: {
      title: 'ResetPassword | Smart Seats',
    }
},

];

const router = new Router({
  routes,
  base: '/',
  mode: 'history',
  linkActiveClass: "active",
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});

router.beforeEach((to, from, next) => {
  console.log("from", from.fullPath)
  console.log("to", to.fullPath)
  if (to.fullPath == '/auth/register'){
    return next();
  }
  if (to.fullPath == '/auth/login'){
    return next();
  }
  // next('/auth/login')
  return next();
//   firebase.auth().onAuthStateChanged(() => {
//     if(to.meta.title)
//       document.title = to.meta.title;
//     const CurrentUser = firebase.auth().currentUser;    
//     const  path = ['/auth/login','/auth/register'];
//     if (path.includes(to.path) || to.path === "/callback" || CurrentUser || Userauth.isAuthenticatedUser()){
//       return next();
//     }
//     next('/auth/login')
//   });
});

export default router
