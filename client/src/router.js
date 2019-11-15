import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home.vue'

import Page404 from './pages/Page404.vue'

import Me from './pages/Me.vue'
import Events from './pages/Events.vue'
import Quanly from './pages/Quanly.vue'
import PG from './pages/PG.vue'
Vue.use(Router)


export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
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
            path: '/event',
            name: 'event',
            component: Events
        },
        {
            path: '/sukien',
            name: 'sukien',
            component: Events
        },
        {
            path: '/quanly',
            name: 'quanly',
            component: Quanly
        },
        {
            path: '/pg',
            name: 'pg',
            component: PG
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