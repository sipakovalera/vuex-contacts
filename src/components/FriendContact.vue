<template>
  <li>
    <h2>
      <span>{{ name }} ({{ valid ? "valid" : "invalid" }})</span>
      <button class="delete" @click="deleteContact(id)">X</button>
    </h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleValid(id)">Toggle Valid</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
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
    };
  },
  methods: {   
    ...mapActions(["changeValid","removeContact", "editContact"]),
     deleteContact(id) {
      this.$store.dispatch("removeContact", id)
    },
      toggleValid(id) {
      this.$store.dispatch("changeValid", id)
    },
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
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
</style>
