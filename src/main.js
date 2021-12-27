import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import Breadcrumbs from './components/bread_crumbs'
import { store } from './store';
import Vue2Filters from 'vue2-filters'
import VueSweetalert2 from 'vue-sweetalert2';
import VueFormWizard from 'vue-form-wizard';
import VueTour from 'vue-tour'
import Notifications from 'vue-notification'
import { Vue2Dragula } from 'vue2-dragula'
import Toasted from 'vue-toasted';
import SmartTable from 'vuejs-smart-table'
import { VueMasonryPlugin } from 'vue-masonry'
import VueFeather from 'vue-feather';
import axios from 'axios'
import { Icon } from "leaflet";
delete Icon.Default.prototype._getIconUrl;

// Import Theme scss
import './assets/scss/app.scss'

// Icon.Default.mergeOptions({
//   iconRetinaUrl: require("./assets/images/vue2leaflet/marker-icon.png"),
//   iconUrl: require("./assets/images/vue2leaflet/marker-icon.png")
// });
axios.defaults.withCredentials=true
export let baseURL = process.env.VUE_APP_API_HOST
const api_server = axios.create({
  baseURL: baseURL,
  withCridentails: true,
  headers:{
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'POST, DELETE, GET, HEAD, OPTIONS, PUT'
  }
});
export {api_server};

function clone(obj){
  if(obj == null || typeof(obj) != 'object')
      return obj;

  var temp = new obj.constructor(); 
  for(var key in obj)
      temp[key] = clone(obj[key]);

  return temp;
}
export { clone };

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.component('loading', Loading)

Vue.use(VueFeather);

Vue.use(Toasted,{
  iconPack: 'fontawesome'
});
Vue.use(Vue2Dragula);

Vue.use(Notifications)
Vue.use(Vue2Filters)
Vue.use(VueSweetalert2);
Vue.use(VueFormWizard)
Vue.use(VueTour)
Vue.use(BootstrapVue)
Vue.use(SmartTable)
Vue.use(require('vue-chartist'))
Vue.use(require('vue-moment'));
Vue.component('Breadcrumbs', Breadcrumbs)
Vue.use(VueMasonryPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')