<template>
  <v-app>

    <v-main>
      <router-view />
    </v-main>

    <bottom-nav-bar />

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
