<template>
  <div id="app">
    <h1 class="lightgreen"> Welcome to the ChatApp </h1>
    <Initialize/>
    <UserInfo
    class="lightgreen"
    :displayUser="displayUser"
    v-on:nameEvent="updateUserName"/>
    <br>
    <ConversationContainer
      :displayUser="displayUser"
      v-for="id in convoIds"
      :conversation="conversations[id]"
      :id="id"
      :key="id"
      />
      <Credits/>
  </div>
</template>

<!--script src="https://www.gstatic.com/firebasejs/4.12.1/firebase.js"></script-->

<script>
import Initialize from './Initialize.vue'
import ConversationContainer from './ConversationContainer.vue'
import UserInfo from './UserInfo.vue'
import Credits from './Credits.vue'

import { mapState } from 'vuex'

export default {
  name: 'app',
  
  components: {
    Initialize,
    ConversationContainer,
    UserInfo,
    Credits,
  },

  computed: {
    ...mapState({
      conversations: state => state.conversations.all,
      convoIds: state => state.conversations.allIds
    })
  },

  data(){
    return{
      displayUser: 'Defaulticus Boringman',
    }
  },
  
  methods: {
    updateUserName: function updateUserName(userName){
      console.log(userName);
      this.displayUser = userName;
    }
  }

};

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #349b66;
  margin-top: 15px;
  background-color: #2c302e
}
body {
    background-color: #2c302e;
}
p {
  color: #46dd8f;
  white-space: nowrap;
}
div {
    background-color: #2c302e
}
b {
  font-size: 14px;
}
h2 {
  font-size: 18px;
}
ul {
  height: 80%;
  overflow: scroll;
  overflow: hidden;
  padding-left: 0;
}
.button {
    background-color: #349b66; 
    border-color: black;
    color: black;
    padding: 12px 28px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin-bottom: 20px;
}

.input {
  background-color: #2c302e;
  border-color: black;
  color: #349b66
}

.lightgreen{
  color: #46dd8f;
}

.conversation {
  height: 450px;
  overflow-y: scroll;
  overflow-x: hidden;
}


</style>
