import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

import user from './modules/user'
import workoutSession from './modules/workoutSession'

const vuexLocal = new VuexPersistence({
  key: 'repset',
  storage: window.localStorage
})

const store = createStore({
  strict: process.env.NODE_ENV !== 'production',
  plugins: [
    vuexLocal.plugin
  ],
  modules: {
    user: {
      namespaced: true,
      ...user
    },
    workoutSession: {
      namespaced: true,
      ...workoutSession
    }
  }
})

export default store
