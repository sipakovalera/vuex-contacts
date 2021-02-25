<template>
  <form @submit.prevent="addContact(contactName, contactPhone, contactEmail)">
    <div>
      <label>Name</label>
      <input type="text" v-model="contactName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="contactPhone" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="contactEmail" />
    </div>
    <button>
      add contact
    </button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "new-contact",
  data() {
    return {
        contactName: "",
        contactPhone: "",
        contactEmail: "",
    };
  },
  computed: {
    formValid() {
      return (
        this.contactEmail !== "" &&
        this.contactPhone !== "" &&
        this.contactEmail !== ""
      );
    },
  },
  methods: {
      ...mapActions("contacts",["createContact"]),
      addContact(){
      this.createContact({
          name: this.contactName, 
          phone: this.contactPhone, 
          email: this.contactEmail
        });
      this.resetForm();
    },
    resetForm() {
      this.contactName = "";
      this.contactPhone = "";
      this.contactEmail = "";
    },
  },
};
</script>

<style></style>
