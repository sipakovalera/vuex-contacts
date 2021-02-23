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
        },
        editContact:(state, id) => {
        },
        deleteContact:(state, id) => {
        }
    },
    getters: {
        contactList: (state) => { return state.friends; }
    },
    actions: {
        addContact:(context, contact) => {
            context.commit({type:"addContact", contact})
        } 
    }
})
