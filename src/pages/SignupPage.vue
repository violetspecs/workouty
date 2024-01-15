<template>
    <q-page>
        <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="email"
        label="Email"
      />

      <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>


      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
    </q-page>
</template>
<script>
import { defineComponent } from 'vue'
import { signUpNewUser } from '../js/auth'

export default defineComponent({
  name: 'SignupPage',
  data() {
    return {
      email: '',
      password: '',
      isPwd: true,
    }
  },
  methods: {
    onSubmit() {
      console.log("Submitting....")
      signUpNewUser(this.email, this.password)
    },
    onReset() {
        this.email = ''
        this.password = ''
    }
  }

})
</script>