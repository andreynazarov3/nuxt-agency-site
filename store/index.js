import Vuex from 'vuex'
import {
  createClient
} from '~/plugins/contentful.js';
const client = createClient();
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      cases: [],
      tagsWork: new Set(),
      tagsProject: new Set(),
      allTags: new Set(),
      years: new Set()
    },
    mutations: {
      setCases(state, cases) {
        state.cases = cases.items;
        // fill tags and years
        cases.items.forEach(({
          fields
        }) => {
          if (fields && fields.year) {
            state.years.add(fields.year.fields.year);
          }
          if (fields && fields.tagsWork) {
            fields.tagsWork.fields.tags.forEach((tag) => {
              state.tagsWork.add(tag)
              state.allTags.add(tag)
            });
          }
          if (fields && fields.tagsProject) {
            fields.tagsProject.fields.tags.forEach((tag) => {
              state.tagsProject.add(tag)
              state.allTags.add(tag)
            });
          }
        });
      }
    },
    getters: {
      getCases(state) {
        return state.cases
      },
      getTagsAndYears(state) {
        return {
          tagsWork: Array.from(state.tagsWork),
          tagsProject: Array.from(state.tagsProject),
          years: Array.from(state.tagsWork),
          allTags: Array.from(state.allTags)
        }
      },
      getCaseById(state) {
        return (id) => {
          return state.cases.find(item => item.fields.casePageUrl === id);
        }
      },
      getNextCaseById(state) {
        return (id) => {          
          const index = state.cases.findIndex(item => item.fields.casePageUrl === id);
          if (index === state.cases.length - 1) {
            return state.cases[0];
          } else {
            return state.cases[index + 1];
          }
        }
      },
      getPrevCaseById(state) {
        return (id) => {          
          const index = state.cases.findIndex(item => item.fields.casePageUrl === id);
          if (index === 0) {
            return state.cases[state.cases.length - 1];
          } else {
            return state.cases[index - 1];
          }
        }
      },
      getCasesForMainPage(state) {
        return state.cases.filter(item => item.fields.showOnMainPage === true);
      },
    },
    actions: {
      nuxtServerInit({
        commit
      }) {
        return Promise.all([
            client.getEntries({
              include: 10,
              content_type: 'case',
              order: '-sys.updatedAt',
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
