import Vue from 'vue'
import router from './router';
import VeeValidate from 'vee-validate';
import App from './App.vue'
import '../public/scss/mdb.scss'

Vue.use(VeeValidate);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
