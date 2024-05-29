<template>
  <v-sheet class="fill-height">

    <h2 class="mb-4">Settings</h2>

    <v-btn text="logout" color="negative" @click="logout()" />

  </v-sheet>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('user/logout')
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style scoped>
</style>
