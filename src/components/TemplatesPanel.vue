<template>
  <v-container class="pa-0">

    <h2 class="mb-4">Start a Workout</h2>

    <v-sheet>
      <v-btn class="text-none" color="primary" block density="comfortable" text="Quick Start" @click="$emit('quick-start')" />
    </v-sheet>

  </v-container>
</template>

<script>
export default {}
</script>
