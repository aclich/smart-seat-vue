import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import Breadcrumbs from './components/bread_crumbs'
import { store } from './store';
import firebase from 'firebase/app';
import Vue2Filters from 'vue2-filters'
import VueSweetalert2 from 'vue-sweetalert2';
import VueFormWizard from 'vue-form-wizard';
import VueTour from 'vue-tour'
import Notifications from 'vue-notification'
import { Vue2Dragula } from 'vue2-dragula'
import Toasted from 'vue-toasted';
import SmartTable from 'vuejs-smart-table'
import * as VueGoogleMaps from 'vue2-google-maps'
import { VueMasonryPlugin } from 'vue-masonry'
import VueFeather from 'vue-feather';

import { Icon } from "leaflet";
delete Icon.Default.prototype._getIconUrl;

// Import Theme scss
import './assets/scss/app.scss'


// config for firebase
import config from './config.json'

Icon.Default.mergeOptions({
  iconRetinaUrl: require("./assets/images/vue2leaflet/marker-icon.png"),
  iconUrl: require("./assets/images/vue2leaflet/marker-icon.png")
});

Vue.use(VueFeather);

Vue.use(Toasted,{
  iconPack: 'fontawesome'
});
Vue.use(Vue2Dragula);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'API_KEY',
    libraries: 'places',
  },
})

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
firebase.initializeApp(config.firebase);

export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')