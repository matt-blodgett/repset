<template>
  <v-sheet class="fill-height d-flex justify-center align-center">
    <v-sheet :border="true" class="pa-6 mx-auto" rounded width="85vw" max-width="450px">

      <h2 class="text-h5 mb-6">Login</h2>

      <v-alert
        class="my-6"
        closable
        color="error"
        icon="mdi-alert"
        title="Login Failed"
        text="Invalid username or password"
        v-model="isErrorSubmit"
      />

      <v-form ref="form" fast-fail @submit.prevent="submit">

        <v-text-field
          label="Email"
          type="email"
          autocomplete="email"
          v-model="formData.email"
          :maxlength="255"
          prepend-inner-icon="mdi-account"
          @keyup.enter="submit()"
        />

        <v-text-field
          label="Password"
          :type="passwordFieldType"
          v-model="formData.password"
          autocomplete="current-password"
          :append-inner-icon="passwordFieldType === 'password' ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="passwordFieldType = passwordFieldType === 'password' ? 'text' : 'password'"
          prepend-inner-icon="mdi-lock-outline"
          @keyup.enter="submit()"
        />

        <div class="text-right">
          <a href="/reset-password">Forgot password?</a>
        </div>

        <v-divider class="my-4" />

        <div class="text-center mt-6">
          <v-btn
            color="primary"
            block
            text="Login"
            @click="submit()"
            :loading="isLoadingSubmit"
          />
        </div>
      </v-form>

      <div class="text-center mt-12">
        <div>Don't have an account? <a href="/signup">Sign up now</a></div>
      </div>

    </v-sheet>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    isLoadingSubmit: false,
    isErrorSubmit: false,
    formData: {
      email: null,
      password: null
    },
    passwordFieldType: 'password'
  }),
  methods: {
    async submit () {
      const { valid } = await this.$refs.form.validate()
      if (!valid) {
        return
      }
      this.isErrorSubmit = false
      this.isLoadingSubmit = true
      const success = await this.$store.dispatch('user/login', this.formData).catch(error => {
        this.isErrorSubmit = true
        this.isLoadingSubmit = false
        console.log(error)
      })
      this.isLoadingSubmit = false
      if (success) {
        this.$router.push({ path: '/home' })
      }
    }
  }
}
</script>

<style scoped>
</style>
