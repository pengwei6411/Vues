/*
 * @Author: your name
 * @Date: 2020-04-10 11:15:26
 * @LastEditTime: 2020-04-12 11:27:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodesc:\Users\xswl\Desktop\VUEX (2)\music\src\router\index.js
 */
 /* jshint esversion: 6 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      musicurl:null
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/playlists/:id',
    name: 'playlists',
    component: () => import(/* webpackChunkName: "about" */ '../views/playlists.vue')
  },
  {
    path: '/singer',
    name: 'singx',
    component: () => import(/* webpackChunkName: "about" */ '../views/singer.vue')
  },
  {
    path: '/models/:id',
    name: 'models',
    component: () => import(/* webpackChunkName: "about" */ '../views/models.vue')
  },
  {
    path:'/ranking',
    name:'ranking',
    component:()=>import('../views/ranking.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
