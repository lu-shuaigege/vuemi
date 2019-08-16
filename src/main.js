import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
const bus = new Vue();

Vue.prototype.bus = bus;


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
