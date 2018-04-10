<template>
  <div>
  <h1> User Info </h1>
      <p>
        <input v-model="newMessageText" @keyup.enter="updateName" id="input" placeholder="Name for session..." />
      </p>
      <button @click="updateName" type="button" id="Submit">
          Submit
      </button>
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
  methods: {
    updateName: function updateName() {
      var userName = document.getElementById("input").value;
      this.$emit('nameEvent', userName);
    },
  },
};
</script>

<style>
</style>
