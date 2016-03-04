import Vue from 'vue';
import State from '../state/store';
import VueResource from 'vue-resource';

Vue.use(VueResource);

export default {

    signin: function(username, password) {
        State.dispatch('AUTH_TOKEN', 'Q6SnSk2N5wGbXsEllqG6hSx7vRmxcz');
    },

    signout: function() {
        State.dispatch('AUTH_TOKEN', null);
    }
}