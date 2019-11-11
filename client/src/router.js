import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home.vue'

import Page404 from './pages/Page404.vue'

import Me from './pages/Me.vue'

Vue.use(Router)


export default new Router({
    mode:'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path: '/',
            name: '',
            component: Home
          },
          {
            path: '/home',
            name: 'home',
            component: Home
          },
          {
            path: '/me',
            name: 'me',
            component: Me
          },
          {
            path: '*',
            component: Page404
          },
         
    ]
})