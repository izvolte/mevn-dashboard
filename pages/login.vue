<template>
  <div class="col-md-6 col-sm-12">
    <div class="login-form">
      <FormValidator ref="authForm">
        <form @submit.prevent="onLogin">
          <FieldValidator name="email" rules="email|required" mode="lazy" slim v-slot="{errors}">
            <div class="form-group">
              <label>Электронная почта</label>
              <input
                type="text"
                class="form-control"
                placeholder="Электронная почта"
                :class="{'is-invalid': errors.length > 0}"
                name="email"
                v-model="loginForm.email"
              >
              <div
                class="invalid-feedback"
                v-for="(error, key) in errors"
                :key="`email-${key}`"
                v-show="errors"
              >
                {{error}}
              </div>
            </div>
          </FieldValidator>
          <FieldValidator name="password" rules="required" mode="lazy" slim v-slot="{errors}">
            <div class="form-group">
              <label>Пароль</label>
              <input
                type="password"
                class="form-control"
                placeholder="Пароль"
                :class="{'is-invalid': errors.length > 0}"
                name="password"
                v-model="loginForm.password"
              >
              <div
                class="invalid-feedback"
                v-for="(error, key) in errors"
                :key="`password-${key}`"
                v-show="errors"
              >
                {{error}}
              </div>
            </div>
          </FieldValidator>
          <div>
            <button type="submit" class="btn btn-success">Войти</button>
          </div>
          <div class="login-form__network-error" v-if="loginFormError">
            {{loginFormError}}
          </div>
        </form>
      </FormValidator>
    </div>
  </div>
</template>

<script>
  import {ValidationObserver, ValidationProvider} from 'vee-validate'

  export default {
    name: "LoginPage",
    layout: 'unauthorized',
    components: {
      FormValidator: ValidationObserver,
      FieldValidator: ValidationProvider
    },
    data: () => ({
      loginForm: {
        email: '',
        password: ''
      },
      loginFormError: null
    }),
    methods: {
      async onLogin() {
        const isCorrect = this.$refs.authForm.validate()
        if (isCorrect) {
          try {
            let response = await this.$auth.loginWith('local', {data: this.loginForm})
            this.$router.push('/orders')
          } catch (err) {
            console.log(err.response)
            this.loginFormError = err.response.data.message
          }
        }
      }
    }
  }
</script>

<style scoped>
  .login-form__network-error{
    border-radius: 6px;
    padding: 10px;
    color: white;
    background: red;
    margin-top: 10px;
  }
</style>
