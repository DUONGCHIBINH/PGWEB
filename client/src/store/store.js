import Vue from 'vue'
import Vuex from 'vuex'
import auth0 from 'auth0-js'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cur_usedb: { id: '123', name: '12312' },
        cur_user: {},
        userIsAuthorized: false,
        auth0: new auth0.WebAuth({
            domain: process.env.VUE_APP_AUTH0_CONFIG_DOMAIN,
            clientID: process.env.VUE_APP_AUTH0_CONFIG_CLIENTID,
            redirectUri: process.env.VUE_APP_DOMAINURL + '/auth0callback',
            responseType: process.env.VUE_APP_AUTH0_CONFIG_RESPONSETYPE,
            scope: process.env.VUE_APP_AUTH0_CONFIG_SCOPE,
        }),
    },
    mutations: {
        setUserIsAuthenticated(state, replacement) {
            state.userIsAuthorized = replacement;
        }

    },
    actions: {
        updateuserdb(context, ob) {

            context.state.cur_usedb = ob;
        },
        auth0Login(context) {
            console.log("in a store action named auth0Login");
            context.state.auth0.authorize()
        },
        auth0HandleAuthentication(context) {
            context.state.auth0.parseHash((err, authResult) => {

                if (authResult && authResult.accessToken && authResult.idToken) {
                    let expiresAt = JSON.stringify(
                            authResult.expiresIn * 1000 + new Date().getTime()
                        )
                        // save the tokens locally
                    localStorage.setItem('access_token', authResult.accessToken);
                    localStorage.setItem('id_token', authResult.idToken);
                    localStorage.setItem('expires_at', expiresAt);
                    localStorage.setItem('cur_user', JSON.stringify(authResult.idTokenPayload));
                    context.state.cur_user = authResult.idTokenPayload;


                    router.replace('/auth0callback');
                } else if (err) {
                    alert('login failed. Error #KJN838');
                    router.replace('/login');
                    console.log(err);
                }
            })
        },
        auth0Logout(context) {
            // No need to update the bearer in global axiosConfig to null because we are redirecting out of the application
            // Clear Access Token and ID Token from local storage
            localStorage.removeItem('access_token');
            localStorage.removeItem('id_token');
            localStorage.removeItem('expires_at');
            localStorage.removeItem('cur_user');
            context.state.cur_user = '';
            // redirect to auth0 logout to completely log the user out
            window.location.href = process.env.VUE_APP_AUTH0_CONFIG_DOMAINURL + "/v2/logout?returnTo=" + process.env.VUE_APP_DOMAINURL + "/login&client_id=" + process.env.VUE_APP_AUTH0_CONFIG_CLIENTID;
        },
    }
})