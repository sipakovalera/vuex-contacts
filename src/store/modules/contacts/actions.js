export default {
    changeValid:({commit}, id) => {
        commit('toggleValid', id)
    },
    createContact:({commit}, {name, phone, email}) => {
        commit('addContact', {name, phone, email})
    },
    editInfo :({commit}, {name, phone, email}) => {
        commit('editInfo', {name, phone, email})
    },
    removeContact: ({commit}, id) => {
        console.log('go delete')
        setTimeout(() => {
        commit('deleteContact', id)
        }, 3000)
    },
}
