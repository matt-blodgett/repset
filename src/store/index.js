import { createStore } from 'vuex'

import user from './modules/user'
import workoutSession from './modules/workoutSession'

export default createStore({
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
