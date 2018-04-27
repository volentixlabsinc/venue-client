import Vue from 'vue'
import router from './router';
import App from './App.vue'
import '../public/scss/mdb.scss'



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
