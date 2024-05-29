<template>
  <v-app>

    <v-app-bar :elevation="2" prominent flat>
      <v-app-bar-title>Repset</v-app-bar-title>
      <div>{{ appVersion }}</div>
    </v-app-bar>

    <v-main style="background-color: green">
      <router-view />
    </v-main>

    <v-footer app class="bg-grey-lighten-1">
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in footerLinks"
          :key="link.path"
          :to="link.path"
          :text="link.label"
          class="mx-2"
          color="white"
          rounded="xl"
          variant="text"
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
    footerLinks: [
      { label: 'About', path: '/about' },
      { label: 'Contact', path: '/about' }
    ]
  }),
  computed: {
    appVersion () {
      return 'v' + process.env.APP_VERSION
    }
  }
}
</script>

<style scoped>
</style>
