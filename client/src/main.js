import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'




Vue.config.productionTip = true

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import store from './store/store'

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')