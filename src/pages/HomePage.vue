<template>
  <v-sheet>

    <h2 class="mb-4">Home</h2>

    <v-sheet>
      <v-row no-gutters>
        <v-col cols="3">
          <v-icon icon="mdi-account-circle-outline" size="4rem" color="#343434" />
        </v-col>
        <v-col cols="auto">
          <div>{{ profile.name }}</div>
          <div>{{ profile.workouts.toString() + ' workouts' }}</div>
        </v-col>
      </v-row>
    </v-sheet>

  </v-sheet>
</template>

<script>
export default {
  data () {
    return {
      profile: {
        name: 'Matt B',
        workouts: 32
      }
    }
  }
}
</script>

<style scoped>
</style>
