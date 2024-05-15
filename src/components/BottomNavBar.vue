<template>
  <v-container class="pa-0">
    <v-bottom-navigation
      grow
      color="#FFFFFF"
      base-color="#AAAAAA"
      bg-color="#333333"
    >
      <v-btn to="/home">
        <v-icon icon="mdi-home" />
        <span>Home</span>
      </v-btn>
      <v-btn to="/workout">
        <v-icon icon="mdi-run" />
        <span>Workout</span>
      </v-btn>
      <v-btn to="/settings">
        <v-icon icon="mdi-cog" />
        <span>Settings</span>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<script>
export default {}
</script>
