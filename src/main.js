import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery';
import { initializeApp } from "firebase/app";
import 'popper.js';
import 'bootstrap';
import './assets/app.scss';
import { store } from './store/index.js'
import { auth } from './firebase';
window.$ = window.jQuery = jQuery;

Vue.config.productionTip = false

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCnISH6PUDVWEZiwRTs_a6mugynFwUpGDc",
  authDomain: "vue-shop-b0741.firebaseapp.com",
  projectId: "vue-shop-b0741",
  storageBucket: "vue-shop-b0741.appspot.com",
  messagingSenderId: "840999512004",
  appId: "1:840999512004:web:86f24f10ecaf1837e66691",
  measurementId: "G-8JZKH8KEC6"
};

// const analytics = getAnalytics(app);
initializeApp(firebaseConfig);

Vue.component('NavBar', require('./components/NavBar.vue').default)
Vue.config.productionTip = false

let app = '';

auth.onAuthStateChanged(function() {
  if(!app) {
    new Vue({
      router,
      render: h => h(App),
      store
    }).$mount('#app')
  }
})


