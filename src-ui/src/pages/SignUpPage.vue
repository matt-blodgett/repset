<template>
  <v-sheet class="fill-height d-flex justify-center align-center">

    <v-sheet :border="true" class="pa-6 mx-auto" rounded width="85vw" max-width="450px">

      <h2 class="text-h5 mb-6">Sign Up</h2>

      <v-alert
        color="error"
        class="my-6"
        closable
        icon="mdi-alert"
        title="Registration Failed"
        text="There was an error creating your account"
        v-model="isErrorSubmit"
      />

      <v-form ref="form" fast-fail @submit.prevent="submit">

        <v-text-field
          label="Name"
          v-model="formData.name"
          :rules="formRules.name"
          :maxlength="30"
          counter
          density="compact"
          prepend-inner-icon="mdi-account-outline"
          autocomplete="name"
        />

        <v-text-field
          label="Email"
          v-model="formData.email"
          :rules="formRules.email"
          :error-messages="formErrorMessages.email"
          :maxlength="128"
          counter
          density="compact"
          prepend-inner-icon="mdi-email-outline"
          autocomplete="email"
        />

        <v-text-field
          label="Password"
          v-model="formData.password"
          :type="formTypes.password"
          :rules="formRules.password"
          :maxlength="128"
          density="compact"
          prepend-inner-icon="mdi-lock-outline"
          :append-inner-icon="formTypes.password === 'password' ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="formTypes.password = formTypes.password === 'password' ? 'text' : 'password'"
          autocomplete="new-password"
        />

        <v-text-field
          label="Confirm Password"
          v-model="formData.confirmPassword"
          :type="formTypes.confirmPassword"
          :rules="formRules.confirmPassword"
          :maxlength="128"
          density="compact"
          prepend-inner-icon="mdi-lock-outline"
          :append-inner-icon="formTypes.confirmPassword === 'password' ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="formTypes.confirmPassword = formTypes.confirmPassword === 'password' ? 'text' : 'password'"
          autocomplete="new-password"
        />

        <v-divider class="mb-4" />

        <div class="text-center">
          <v-btn
            color="primary"
            text="Submit"
            @click="submit()"
            :loading="isLoadingSubmit"
          />
        </div>

      </v-form>

    </v-sheet>

  </v-sheet>
</template>

<script>
export default {
  data: vm => ({
    isLoadingSubmit: false,
    isErrorSubmit: false,
    formData: {
      name: null,
      email: null,
      password: null,
      confirmPassword: null
    },
    formRules: {
      email: [
        value => {
          if (!value) {
            return 'Field is required'
          } else if (value.length > 128) {
            return 'Email must be less than 128 characters long'
          } else if (!value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return 'Invalid email'
          } else {
            vm.checkEmailExists(value)
          }
          return true
        }
      ],
      name: [
        value => {
          if (!value) {
            return 'Field is required'
          } else if (value.length < 3) {
            return 'Name must be at least 3 characters long'
          } else if (value.length > 30) {
            return 'Name must be less than 30 characters long'
          }
          return true
        }
      ],
      password: [
        value => {
          if (!value) {
            return 'Field is required'
          } else if (value.length < 8) {
            return 'Password must be at least 8 characters long'
          } else if (!value.match(/[A-Z]/)) {
            return 'Password must include at least one upper case letter'
          } else if (!value.match(/[a-z]/)) {
            return 'Password must include at least one lower case letter'
          } else if (!value.match(/[0-9]/)) {
            return 'Password must include at least one number 0-9'
          } else if (!value.match(/!|%|\^|\*|\(|\)|_|-|\+|=|<|>|\||\\|\[|\]/)) {
            return 'Password must include at least one special character ! % ^ * ( ) _ - + = < > | \ [ ]'
          }
          return true
        }
      ],
      confirmPassword: [
        value => {
          if (value !== vm.formData.password) {
            return 'Passwords must match'
          }
          return true
        }
      ]
    },
    formErrorMessages: {
      // username: null,
      email: null
    },
    formTypes: {
      password: 'password',
      confirmPassword: 'password'
    }
  }),
  methods: {
    checkEmailExists (email) {
      // const url = '/users/check_exists'
      // const params = {
      //   type: 'email',
      //   value: email
      // }
      // this.$apiClient.get(url, { params: params }).then(response => {
      //   this.formErrorMessages.email = response.data.exists ? 'An account with that email address already exists' : null
      // })
    },
    async submit () {
      const { valid } = await this.$refs.form.validate()
      if (!valid) {
        return
      }
      this.isErrorSubmit = false
      this.isLoadingSubmit = true
      const success = await this.$store.dispatch('user/signup', this.formData).catch(error => {
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
