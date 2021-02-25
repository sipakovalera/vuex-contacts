export default{
    addContact:(state, {name, phone, email}) => {
        state.friends.push({
            id: Date.now() + "",
            name: name,
            phone: phone,
            email: email,
            valid: false
        })
        console.log(state.friends)
    },
    editName:(state, changes) => {
        state.friends = state.friends.map(el => {
            if(el.id === changes.id){
                return {...el, name: changes.name}
            }
            return el
        })
        alert("you change Name")
    },
    editPhone:(state, changes) => {
        state.friends = state.friends.map(el => {
            if(el.id === changes.id){
                return {...el, phone: changes.phone}
            }
            return el
        })
        alert("you change Phone")
    },
    editEmail:(state, changes) => {
        state.friends = state.friends.map(el => {
            if(el.id === changes.id){
                return {...el, email: changes.email}
            }
            return el
        })
        alert("you change Email")
    },
    deleteContact:(state, id) => {
        state.friends = state.friends.filter((friend) => friend.id !== id);
    },
    toggleValid:(state, id) => {
        const friend = state.friends.find((friend) => friend.id === id);
        friend.valid = !friend.valid;
    }
}
