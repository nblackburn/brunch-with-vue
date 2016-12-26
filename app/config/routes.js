import app from '../components/app.vue';
import error from '../components/error.vue';

export default [

    {
        path: '/',
        name: 'app',
        component: app
    },

    {
        path: '*',
        name: 'error',
        component: error
    }

]
