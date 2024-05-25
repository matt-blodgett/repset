import { apiClient } from '@/api'

const state = {
  profile: {
    username: 'username',
    name: 'Matt B'
  },
  exercises: [],
  workoutTemplates: [],
  folders: []
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
