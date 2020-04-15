/*
 * @Author: your name
 * @Date: 2020-04-10 11:15:26
 * @LastEditTime: 2020-04-13 19:43:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodesc:\Users\xswl\Desktop\VUEX (2)\music\src\main.js
 */
 /* jshint esversion: 6 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import axios from 'axios';
import './assets/css/my-mint.scss';
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(MintUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

