<template>
  <v-app>

    <v-system-bar color="grey-darken-3"></v-system-bar>

    <!-- class="pa-0 d-flex align-center justify-center"  -->
    <!-- <v-app-bar ref="app-bar" :elevation="2"> -->
    <v-app-bar ref="app-bar" :elevation="2">
      <v-app-bar-title>Login App Bar</v-app-bar-title>
    </v-app-bar>

    <v-main style="background-color: lightcoral;">
      <router-view />
    </v-main>

    <v-footer app class="bg-grey-lighten-1">
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          class="mx-2"
          color="white"
          rounded="xl"
          variant="text"
          :text="link"
        />
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>Repset</strong>
        </v-col>
      </v-row>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us'
    ]
  })
}
</script>

<style scoped>
</style>
