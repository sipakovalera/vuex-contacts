export default{
    addContact:(state, {name, phone, email}) => {
        state.friends.push({
            id: Date.now() + "",
            name: name,
            phone: phone,
            email: email,
            valid: false
        })
    },
    editInfo:(state, {name, phone, email}) => {
        if(name){
            state.friends = state.friends.map(el => {
                if(el.id === name.id){
                    return {...el, name: name}
                }
                return el
            })
            console.log(name.id)
            console.log(state.friends)
        }
        if(phone){
            state.friends = state.friends.map(el => {
                if(el.id === phone.id){
                    return {...el, phone: phone}
                }
                return el
            })
        }
    if(email){
        state.friends = state.friends.map(el => {
            if(el.id === email.id){
                return {...el, email: email}
            }
            return el
        })
        console.log(email)
    }
    },
    deleteContact:(state, id) => {
        state.friends = state.friends.filter((friend) => friend.id !== id);
    },
    toggleValid:(state, id) => {
        const friend = state.friends.find((friend) => friend.id === id);
        friend.valid = !friend.valid;
    },
}
