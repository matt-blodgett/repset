import { apiClient } from '@/api'

const state = {
  userProfile: {
    name: null,
    email: null
  },
  apiToken: null,

  folders: [],
  exercises: [],
  workoutTemplates: []
}

const getters = {
  getExercise: (state) => (id) => {
    return state.exercises.find((e) => e.id === id)
  },
  getWorkoutTemplate: (state) => (id) => {
    return state.workoutTemplates.find((e) => e.id === id)
  },
  getFolder: (state) => (id) => {
    return state.folders.find((e) => e.id === id)
  }
}

const mutations = {
  setUserProfile (state, data) {
    state.userProfile = data
  },
  setApiToken (state, data) {
    state.apiToken = data
    if (data) {
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${state.apiToken}`
    } else {
      delete apiClient.defaults.headers.common['Authorization']
    }
  },
  setExercises (state, data) {
    state.exercises = data
  },
  setWorkoutTemplates (state, data) {
    state.workoutTemplates = data
  },
  deleteWorkoutTemplate (state, id) {
    let delIndex = -1
    for (let i = 0; i < state.workoutTemplates.length; i++) {
      if (state.workoutTemplates[i].id == workoutTemplate.id) {
        delIndex = i
        break
      }
    }
    if (delIndex >= 0) {
      this.workoutTemplates.splice(delIndex, 1)
    }
  }
}

const actions = {
  signup ({ dispatch, commit, state}, data) {
    return new Promise((resolve, reject) => {
      apiClient.post('/api/signup', data).then(response => {
        dispatch('login', data).then(response => {
          resolve(true)
        }).catch(error => {
          reject(error)
        })
      }).catch(error => {
        reject(error)
      })
    })
  },
  login ({ dispatch, commit, state }, data) {
    return new Promise((resolve, reject) => {
      apiClient.post('/api/auth', data).then(response => {
        commit('setUserProfile', response.data['profile'])
        commit('setApiToken', response.data['token'])
        resolve(true)
      }).catch(error => {
        dispatch('logout')
        reject(error)
      })
    })
  },
  logout ({ dispatch, commit, state}) {
    commit('setUserProfile', {})
    commit('setApiToken', null)
  },
  loadExercises ({ dispatch, commit, state }) {
    return new Promise((resolve, reject) => {
      apiClient.get('/api/exercises').then(response => {
        commit('setExercises', response.data)
        resolve(true)
      }).catch(error => {
        reject(error)
      })
    })
  },
  loadWorkoutTemplates ({ dispatch, commit, state}) {
    return new Promise((resolve, reject) => {
      apiClient.get('/api/workout_templates').then(response => {
        commit('setWorkoutTemplates', response.data)
        resolve(true)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
