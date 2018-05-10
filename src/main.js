import Vue from 'vue'

import router from './router';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import '../public/scss/mdb.scss';
import { store } from './store';
// import VueSweetalert2 from 'vue-sweetalert2';
 
// Vue.use(VueSweetalert2);



Vue.use(VeeValidate);

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
})
