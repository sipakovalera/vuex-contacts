export default {
    changeValid:({commit}, id) => {
        commit('toggleValid', id)
    },
    createContact:({commit}, {name, phone, email}) => {
        commit('addContact', {name, phone, email})
    },
    editName :({commit}, changeName) => {
        commit('editName', changeName)
    },
    editPhone :({commit}, changePhone) => {
        commit('editPhone', changePhone)
    },
    editEmail :({commit}, changeEmail) => {
        commit('editEmail', changeEmail)
    },
    removeContact: ({commit}, id) => {
        console.log('go delete')
        setTimeout(() => {
        commit('deleteContact', id)
        }, 3000)
    }
}
