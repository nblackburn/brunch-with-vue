import Vue from 'vue';
import 'babel-polyfill';
import store from './state/store';
import VueRouter from 'vue-router';
import routes from './config/routes';
import RouterBase from './components/router-base.vue';
import VueResource from 'vue-resource';
import VueValidator from 'vue-validator';

//
// Vue extensions
// Here we tell Vue that we want to add extra functionality to the application.
//

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueValidator);

// 
// Enviromnment
// 

const environment = process.env.NODE_ENV;

// 
// Configure Vue
// Here we will configure Vue based on the environment we are running in.
// 

Vue.config.debug = (environment === 'development');
Vue.config.devtools = (environment === 'development');

// 
// Router
// Here we will create the router instance.
// 

let router = new VueRouter({
    history: true,
    routes
});

// 
// Start the application
// Finally, we can start the application.
// 

const app = new Vue({
    el: '#content',
    render: r => r(RouterBase),
    router,
    store
});

if (window) {
    window.App = app;
}
