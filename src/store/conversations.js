import Vue from 'vue'
import uuidv4 from 'uuid/v4'

const state = {
    all: {},
    allIds: [],
    allMsgIds: [],
}

const mutations = {
	SET_CONVERSATION (state, { conversation }) {
		const data = conversation.data()
		state.all = {...state.all, [conversation.id]: { users: data.users, created: data.created, messages: [], displayUser: data.displayUser }} 

		state.allIds.push(conversation.id)
    },
    
    ADD_MESSAGE (state, { conversationId, message }) {
        if (!state.allMsgIds.includes(message.id)) {
          state.all[conversationId].messages.push(message)
          state.allMsgIds.push(message.id)
        }
    },
}

const actions = {
    sendMessage ({ commit, rootState }, { text, created, sender, conversationId, displayUser }) {
        const convoRef = rootState.db.collection('conversations').doc(conversationId)
    
        convoRef.update({
          messages: [...state.all[conversationId].messages, { id: uuidv4(), created, sender, text, displayUser }]
        })
        .then(res => console.log('Message sent.'))
        .catch(err => console.log('Error', err))
    },

    seed ({ rootState }) {
        let convoRef = rootState.db.collection('conversations')
        
        convoRef.add({
            created: Date.now(),
            users: ['mr_a', 'mr_b'],
            messages: [
              ]
            })
    },

    async get ({ commit, rootState }) {
        let convoRef = rootState.db.collection('conversations')
        let convos = await convoRef.get()
    
        convos.forEach(conversation => commit('SET_CONVERSATION', { conversation }))
    },
    

}

export default { namespaced: true, state, mutations, actions }
