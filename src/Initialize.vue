<template>
    <div>
        <button class="button" @click="init">Initialize app base state</button>
        <button class="button" @click="get"> Start Talking</button>
        <!--button class="button" @click="clear"> Clear </button-->
    </div>
</template>

<script>
    export default {
        name: 'Initialize',
        methods: {
            init () {
                this.$store.dispatch('users/seed')
                this.$store.dispatch('conversations/seed')
            },

            get () {
                this.$store.dispatch('users/get')
                this.$store.dispatch('conversations/get')
            },
        }
    }

</script>

<style scoped>
</style>