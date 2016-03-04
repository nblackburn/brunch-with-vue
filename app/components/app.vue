<template>

    <div class="app">
        <h1>Hello World!</h1>
        <p v-if="token">You are authenticated with the following token <strong>{{ token }}</strong></p>
    </div>

</template>

<script>

    import Auth from '../api/auth';

    export default {
        
        name: 'App',
        
        vuex: {
            state: {
                token: state => state.Auth.token
            }
        },

        created() {
            Auth.signin('username', 'password');
        }
    }

</script>
