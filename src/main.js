import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VueCookies from 'vue-cookies'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap-icons/font/bootstrap-icons.css"

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'


// createApp(App).use(store).use(router).use(VueCookies).mount('#app')
createApp(App).use(store).use(router).use(VueCookies).use(VueSweetalert2).mount('#app')
