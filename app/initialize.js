import Vue from 'vue';
import 'babel-polyfill';
import store from './state/store';
import VueRouter from 'vue-router';
import routes from './config/routes';
import VueResource from 'vue-resouce';
import VueValidator from 'vue-validator';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueValidator);

let application = {
    store
};

let router = new VueRouter({
    history: true
});

router.map(routes);

router.start(application, '#content', function() {
    
    if (window) {
        window.App = router.app;
    }

});