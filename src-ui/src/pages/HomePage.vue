<template>
  <v-sheet>

    <h2 class="mb-4">Home</h2>

    <v-sheet>
      <v-row no-gutters>
        <v-col cols="3">
          <v-icon icon="mdi-account-circle-outline" size="4rem" color="#343434" />
        </v-col>
        <v-col cols="auto">
          <div>{{ $store.state.user.userProfile.username }}</div>
          <div>{{ '32 workouts' }}</div>
        </v-col>
      </v-row>
    </v-sheet>

    <v-btn color="primary" text="refresh" @click="refresh()" />

  </v-sheet>
</template>

<script>
export default {
  data: () => ({
  }),
  methods: {
    async refresh () {
      await this.$store.dispatch('user/loadExercises')
      await this.$store.dispatch('user/loadWorkoutTemplates')
    }
  }
}
</script>

<style scoped>
</style>
