import Vuex from 'vuex'
import {
  createClient
} from '~/plugins/contentful.js';
const client = createClient();
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      cases: []
    },
    mutations: {
      setCases(state, cases) {
        state.cases = cases.items
      }
    },
    getters: {
      getCases(state) {
        return state.cases
      },
      getCaseById(state) {
        return (id) => {          
          return state.cases.find(item => item.fields.casePageUrl === id);
        }       
      }
    },
    actions: {
      nuxtServerInit({
        commit
      }) {
        return Promise.all([
            client.getEntries({
              content_type: 'case',
              order: '-sys.createdAt',
            }),
          ])
          .then(([cases]) => {
            return commit('setCases', cases);
          })
          .catch(console.error);
      }
    }
  })
}

export default createStore
