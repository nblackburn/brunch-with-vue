<template>

    <div class="error">
        <h1>Page not found</h1>
        <p>It would appear that <em>{{ path }}</em> could not be found.</p>
    </div>

</template>

<script>

    export default {

        name: 'Error',

        props: {

            path: {
                type: String,
                required: false
            }
        },

        created() {

            // Get the current route.
            let route = this.$route;

            // Set the route path in the data.
            this.path = route.path;
        }
    }

</script>