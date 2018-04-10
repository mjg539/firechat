<template>
  <div class="message-container">
    <div :class="getPosition">
      <b>{{message.sender}}:</b> {{ message.text }}
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Message',

    props: {
      message: {
        type: Object,
        required: true
      }
    },

    computed: {
      getPosition () {
        if (this.message.sender === this.$store.state.users.currentUser) {
          return 'my message'
        } else {
          return 'message'
        }
      }
    }
  }
</script>

<style scoped>
.my.message {
  text-align: left;
}
/*
.message-container {

}*/

</style>