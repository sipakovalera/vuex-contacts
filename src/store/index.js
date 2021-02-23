import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
        friends: [
            {
            id: "manuel",
            name: "Manuel Lorenz",
            phone: "0123 45678 90",
            email: "manuel@localhost.com",
            valid: true,
            },
            {
            id: "julie",
            name: "Julie Jones",
            phone: "0987 654421 21",
            email: "julie@localhost.com",
            valid: false,
            }
        ],
      }
    },
    mutations: {
        addContact:(state, {name, phone, email}) => {
            state.friends.push({
                id: Date.now() + "",
                name: name,
                phone: phone,
                email: email,
                valid: false
            })
            console.log(phone)
            console.log(state.friends)
        },
        editContact:(state, id) => {
        },
        deleteContact(state, id){
            state.friends = state.friends.filter((el) => el.id !== id);
        },
        toggleValid:(state, id) => {
            const friend = state.friends.find((friend) => friend.id === id);
            friend.valid = !friend.valid;
        }
    },
    getters: {
        contactList: (state) => { return state.friends; }
    },
    actions: {
        changeValid:({commit}, id) => {
            commit('toggleValid', id)
        },
        createContact:({commit}, {name, phone, email}) => {
            commit('addContact', {name, phone, email})
        },
        editContact :({commit}, id) => {
            commit('editContact', id)
        },
        removeContact: ({commit}, id) => {
            console.log('go delete')
            setTimeout(() => {
              commit('deleteContact', id)
            }, 3000)
          },
    }
})
