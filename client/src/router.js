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
import adevent from './pages/admin/ad_event.vue'
import adpg from './pages/admin/ad_pg.vue'
import Store from './store/store'
import Login from './pages/Login.vue'
import Auth0Callback from './pages/Auth0Callback.vue'


Vue.use(Router)


const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/auth0callback',
            name: 'auth0callback',
            component: Auth0Callback,
        }, {
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
            meta: { requiresAuth: true },
            children: [
                //UserInfo component is rendered when /user/:id is matched
                { path: 'aduser', component: aduser, name: 'aduser' },
                { path: 'adevent', component: adevent, name: 'adevent' },
                { path: 'adpg', component: adpg, name: 'adpg' },
                { path: ':id', component: UserInfo, props: true }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
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
});

router.beforeEach((to, from, next) => {
    // Allow finishing callback url for logging in
    if (to.matched.some(record => record.path == "/auth0callback")) {
        console.log("router.beforeEach found /auth0callback url");
        Store.dispatch('auth0HandleAuthentication');
        next(false);
    }

    // check if user is logged in (start assuming the user is not logged in = false)
    let routerAuthCheck = false;
    // Verify all the proper access variables are present for proper authorization
    if (localStorage.getItem('access_token') && localStorage.getItem('id_token') && localStorage.getItem('expires_at')) {
        console.log('found local storage tokens');
        // Check whether the current time is past the Access Token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        // set localAuthTokenCheck true if unexpired / false if expired
        routerAuthCheck = new Date().getTime() < expiresAt;
    }

    // set global ui understanding of authentication
    Store.commit('setUserIsAuthenticated', routerAuthCheck);

    // check if the route to be accessed requires authorizaton
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Check if user is Authenticated
        if (routerAuthCheck) {
            // user is Authenticated - allow access
            next();
        } else {
            // user is not authenticated - redirect to login
            router.replace('/login');
        }

    }
    // Allow page to load 
    else {
        next();
    }
});
export default router;