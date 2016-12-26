import Vue from 'vue';
import State from '../state/store';
import VueResource from 'vue-resource';
import {
    AUTH_TOKEN,
} from '../state/mutations';

Vue.use(VueResource);

export default {

    signin: function(username, password) {
        State.commit(AUTH_TOKEN, 'Q6SnSk2N5wGbXsEllqG6hSx7vRmxcz');
    },

    signout: function() {
        State.commit(AUTH_TOKEN, null);
    }
}
