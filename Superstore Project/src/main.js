import { createApp } from 'vue'
import App from './App.vue';
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

/*Vuex*/
import { createStore } from "vuex";
import { storage } from './store/index.js'
// Create a new store instance or import from module.
const store = createStore({
    /* state, actions, mutations */
    storage,
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");

//createApp(App).use(router,createStore).mount('#app')
