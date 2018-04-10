<template>
  <div>
  <h2> User Info </h2>
      <p>
        <input class="input" v-model="newMessageText" @keyup.enter="updateName" id="input" placeholder="Name for session..." />
      </p>
      <button class="button" @click="updateName" type="button" id="Submit">
          Submit
      </button>
      <br/>
      <b class ="lightgreen">Current Display Name:</b> {{ displayUser }}
      <br/>
      <b class ="lightgreen">Time: </b> {{ new Date().toLocaleTimeString() }}
  </div>
</template>
<script>

export default {
  name: 'UserInfo',
  data() {
    return {
      newMessageText: "",
    };
  },
  props: {
    displayUser: String,
  },
  methods: {
    updateName: function updateName() {
      var userName = document.getElementById("input").value;
      this.$emit('nameEvent', userName);
      this.clear();
    },
    clear: function clear () {
      this.newMessageText = "";
    },
  },
};
</script>

<style>
</style>
