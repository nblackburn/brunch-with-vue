import app from '../components/app.vue';
import error from '../components/error.vue';

export default {

    '*': {
        name: 'error',
        component: error
    },

    '/': {
        name: 'app',
        component: app
    }

}