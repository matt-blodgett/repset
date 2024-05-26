<template>
  <!-- <v-sheet style="background-color: purple; min-width: 200px; min-height: 200px;"> -->

    <v-layout>
      <v-btn text="register" color="green" @click="register()" />
      <v-btn text="login" color="green" @click="login()" />
    </v-layout>


  <!-- </v-sheet> -->
</template>

<script>
export default {
  methods: {
    register () {
      const data = {
        username: 'matt3511',
        password: 'testpass',
        email: 'test@test.ca'
      }
      this.$apiClient.post('/api/register', data).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    login () {
      const data = {
        username: 'matt3511',
        password: 'testpass'
      }
      this.$store.dispatch('user/login', data).then(success => {
        this.$router.push({ path: '/home' })
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
</style>
