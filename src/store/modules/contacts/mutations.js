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
        state.friends.name = changes.name;
        alert("you change Name")
    },
    editPhone:(state, changes) => {
        state.friends.phone = changes.phone;
        alert("you change Phone")
        console.log(state.friends);
    },
    editEmail:(state, changes) => {
        state.friends.email = changes.email;
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
