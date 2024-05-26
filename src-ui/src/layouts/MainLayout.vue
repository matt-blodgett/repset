<template>
  <v-app>

    <v-main class="pa-4" style="background-color: green;">
      <router-view />
    </v-main>

    <!-- <v-spacer /> -->
    <BottomNavBar />

  </v-app>
</template>

<script>
import BottomNavBar from '@/components/BottomNavBar'

export default {
  components: {
    BottomNavBar
  }
}
</script>

<style scoped>
</style>
