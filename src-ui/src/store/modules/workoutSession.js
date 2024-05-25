const state = {
  isActive: false,
  selectedWorkoutTemplate: null
}

const getters = {
}

const mutations = {
  start (state, workoutTemplate) {
    state.selectedWorkoutTemplate = workoutTemplate
    state.isActive = true
  },
  cancel (state) {
    state.selectedWorkoutTemplate = null
    state.isActive = false
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
