import Vue from 'vue';
import 'babel-polyfill';
import store from './state/store';
import VueRouter from 'vue-router';
import routes from './config/routes';
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
// Application
// Here we will create the application instance.
// 

let application = {
    store
};

// 
// Router
// Here we will create the router instance.
// 

let router = new VueRouter({
    history: true
});

// 
// Router mapping.
// Here we will tell VueRouter what routes the application will be using.
// 

router.map(routes);

// 
// Start the application
// Finally, we can start the application.
// 

router.start(application, '#content', function() {
    
    if (window) {
        window.App = router.app;
    }

});