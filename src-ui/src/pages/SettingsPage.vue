<template>
  <v-sheet>

    <h2 class="mb-4">Settings</h2>

    <v-btn text="logout" color="negative" @click="logout()" />

  </v-sheet>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style scoped>
</style>
