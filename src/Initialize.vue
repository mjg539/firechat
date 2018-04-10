<template>
    <div>
        <button @click="init">Initialize app base state</button>
        <button @click="get"> Start Talking</button>
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