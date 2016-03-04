import {
    AUTH_TOKEN,
} from '../mutations';

const state = {
    token: null
};

const mutations = {

    [AUTH_TOKEN](state, token) {
        state.token = token;
    }
};

export default {
    state,
    mutations
}