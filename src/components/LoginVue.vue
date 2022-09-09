<template>
  <div class="modal" id="login" tabindex="-1" role="dialog" aria-labelledby="loginTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

          <div class="modal-body">
            <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-login-tab" data-bs-toggle="pill" data-bs-target="#pills-login" type="button" role="tab" aria-controls="pills-login" aria-selected="true">Login</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-register-tab" data-bs-toggle="pill" data-bs-target="#pills-register" type="button" role="tab" aria-controls="pills-register" aria-selected="false">Signup</button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab" tabindex="0">
                <h5 class="text-center">Login Please</h5>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="login_form.email">
                  <small class="form-text text-muted ">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group mt-3">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" @keyup.enter="login"  class="form-control mb-3" id="exampleInputPassword1" placeholder="Password" v-model="login_form.password">
                </div>
                <div class="form-group">
                  <button class="btn btn-primary" @click="login">Login</button>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab" tabindex="0">
                <h5 class="text-center">Create New Account</h5>                             
                  <div class="form-group">
                      <label for="name">Your name</label>
                      <input type="text" class="form-control mb-3" id="name" placeholder="Your nice name" v-model="register_form.name">
                  </div>
                  <div class="form-group">
                      <label for="email-register">Email address</label>
                      <input type="email"  v-model="register_form.email" class="form-control mb-3" id="email-register" aria-describedby="emailHelp" placeholder="Enter email">
                  </div>
                  <div class="form-group">
                      <label for="password-register">Password</label>
                      <input type="password" @keyup.enter="register" v-model="register_form.password" class="form-control mb-3" id="password-register" placeholder="Password">
                  </div>
                  <div class="form-group">
                      <button class="btn btn-primary" @click="register">Signup</button>
                  </div>
              </div>  
            </div>                  

          </div>
      
      </div>
  </div>
  </div>
</template>

<script>

import "firebase/auth";
import { ref } from "vue";
import { store } from '../store'

// import {fb,db} from '../firebase'

export default {
  name: "LoginVue",
  props: {
    msg: String
  },
  setup() {
    const register_form = ref({})
    const login_form = ref({})
    
    const login = () => {
      store.dispatch('login', login_form.value)
    }

    const register = async () => {
      store.dispatch('register', register_form.value)
      // .then(() => {  
        // db.collection("profiles").doc(user.user.uid).set({
        //   name: register_form.value.name
      // })
    }

    return {
      register_form,
      login_form,
      register,
      login,
    }

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>