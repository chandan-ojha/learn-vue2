import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

/*jQuery*/
import $ from 'jquery'

/*Bootstrap*/
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

/*Vue Router*/
import {createRouter, createWebHistory}  from 'vue-router'

import {routes} from "./router/index.js";

const router = createRouter({
    history:createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
