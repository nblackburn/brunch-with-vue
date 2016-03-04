import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';

Vue.use(Vuex);
Vue.config.debug = true;

export default new Vuex.Store({

    strict: true,

    modules: {
        auth
    },

    middlewares: [
        Vuex.createLogger()
    ]

});