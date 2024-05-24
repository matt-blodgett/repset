const state = {
  isActive: false
}

const getters = {
}

const mutations = {
  start (state, template) {
    state.isActive = true
  },
  cancel (state) {
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
