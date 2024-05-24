<template>
  <v-app>

    <v-main class="pa-4">
      <router-view />
    </v-main>

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
