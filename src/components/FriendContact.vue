<template>
  <li>
    <h2>
      <span>
        <input 
          type="text" 
          v-model="name" 
          @click="toggleInput"
        >
          ({{ valid ? "valid" : "invalid" }})
      </span>
      <div 
        id="editName" 
        @click="editParams(name, id)" 
        v-if="toggleAreVisible"
      ><i class="fas fa-save"></i></div>
      <button class="delete" @click="deleteContact({id})">X</button>
    </h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleValid(id)">Toggle Valid</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        <input 
          type="text" 
          v-model="phone" 
          @click="toggleInput"
        >
        <span 
          id="editPhone" 
          @click="editParams(phone, id)" 
          v-if="toggleAreVisible"
          ><i class="fas fa-save"></i></span>
      </li>
      <li>
        <strong>Email:</strong>
        <input 
          type="text" 
          v-model="email" 
          @click="toggleInput"
        >
        <span 
          id="editEmail" 
          @click="editParams(email, id)" 
          v-if="toggleAreVisible"
        ><i class="fas fa-save"></i></span>
      </li>
    </ul>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
  id: String,
  name: String,
  phone: String,
  email: String,
  valid: Boolean,
  },
  name: "contactList",
  data() {
    return {
       detailsAreVisible: false,
       toggleAreVisible: false,
    };
  },
  methods: {   
    ...mapActions(["editInfo","changeValid","removeContact"]),
    editParams(newName, newPhone, newEmail, id){
       this.toggleAreVisible = !this.toggleAreVisible;   
      if(newName){
        this.editInfo({id: id, name: newName});
      }
       if(newPhone){
        this.editInfo({id: id, phone: newPhone});
      }
      if(newEmail){
        this.editInfo({id: id, email: newEmail});
      } 
    },
     deleteContact(id) {
      this.removeContact(id)
    },
      toggleValid(id) {
      this.changeValid(id)
    },
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
     toggleInput() {
      this.toggleAreVisible = !this.toggleAreVisible;
    },
  },
};
</script>

<style scoped>
.delete {
  color: red !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  float: right;
}
#editName,
#editPhone,
#editEmail{
  color: black;
  background-color: #fff;
  border-color: #fff;
  margin-left: 20px;
  padding: 5px;
}
input{
  max-width: 300px;
  border: none;
}
h2{
  display: flex;
  justify-content: space-evenly;
}
</style>
