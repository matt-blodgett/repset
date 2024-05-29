<template>
  <v-app>

    <v-container class="pa-0">
      <v-system-bar color="grey-darken-3" window>
        <v-icon class="me-2" icon="mdi-message" />
        <span>10 unread messages</span>
        <v-spacer />
        <v-btn icon="mdi-account" variant="text" />
      </v-system-bar>
    </v-container>

    <v-main style="background-color: green;">
      <router-view />
    </v-main>

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

  </v-app>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
