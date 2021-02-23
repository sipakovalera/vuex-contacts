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
import { mapMutations } from 'vuex';
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
    addContact(name, phone, email) {
      this.$store.commit("addContact", 
        {
          name: this.contactName, 
          phone: this.contactPhone, 
          email: this.contactEmail
        });
      console.log(name, phone, email);
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
