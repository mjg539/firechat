<template>
  <div id="app">
    <Initialize/>
    <UserInfo
    v-on:nameEvent="updateUserName"/>
    <br>
    <ConversationContainer
      v-for="id in convoIds"
      :conversation="conversations[id]"
      :id="id"
      :key="id"
      />
  </div>
</template>

<!--script src="https://www.gstatic.com/firebasejs/4.12.1/firebase.js"></script-->

<script>
import Initialize from './Initialize.vue'
import ConversationContainer from './ConversationContainer.vue'
import UserInfo from './UserInfo.vue'

import { mapState } from 'vuex'

export default {
  name: 'app',
  
  components: {
    Initialize,
    ConversationContainer,
    UserInfo,
  },

  computed: {
    ...mapState({
      conversations: state => state.conversations.all,
      convoIds: state => state.conversations.allIds
    })
  },

  data(){
    return{
      userName: this.state.currentUser,
    }
  },
  
  methods: {
    updateUserName: function updateUserName(userName){
      console.log(userName);
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
