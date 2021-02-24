import { createStore } from 'vuex'
import actions from './modules/contacts/actions';
import mutations from './modules/contacts/mutations';
import state from './modules/contacts/state';
import contacts from './modules/contacts/index';
import getters from './modules/contacts/getters';

export default createStore({
  modules: {
    contacts
  },
  state: {
      return: {}
  },
  mutations,
  getters,
  actions,
  state
  }
);
