import Vue from 'vue';
import 'babel-polyfill';
import VueRouter from 'vue-router';

import store from './state/store';
import routes from './config/routes';

Vue.use(VueRouter);
Vue.config.debug = true;

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