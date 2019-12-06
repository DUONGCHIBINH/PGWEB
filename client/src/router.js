import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import Page404 from './pages/Page404.vue'
import Me from './pages/Me.vue'
import Events from './pages/Events.vue'
import Quanly from './pages/Quanly.vue'
import PG from './pages/PG.vue'
import admin from './pages/admin.vue'
import UserInfo from './pages/userinfo.vue'
import aduser from './pages/admin/ad_user.vue'
Vue.use(Router)


export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'Home',
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
            path: '/admin',
            name: 'admin',
            component: admin,
            children: [
                //UserInfo component is rendered when /user/:id is matched
                { path: 'aduser', component: aduser, name: 'aduser' },
                { path: ':id', component: UserInfo, props: true }
            ]
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