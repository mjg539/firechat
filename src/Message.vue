<template>
  <div>
    <b><p>{{ message.displayUser }}: </p></b>
  <div class="message-container">
    <div :class="getPosition">
      <ul>
        {{ message.text }}
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'Message',

    props: {
      displayUser: {
        type: String,
      },
      message: {
        type: Object,
        required: true
      },
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
  margin-left: 16px;
  font-size: 12px;
}


</style>