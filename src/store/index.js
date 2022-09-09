import Vue from 'vue';
import Vuex from 'vuex';
import $ from 'jquery';
import { auth } from '../firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";
import router from "@/router";

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
      user: null
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    },
    CLEAR_USER (state) {
      state.user = null
    }
  }, 
  actions: {
    async login ({commit} , details) {
      const { email, password} = details
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            alert("User not found")
            break
          case 'auth/wrong-password':
            alert("Wrong password")
            break
          default:
            alert("Something went wrong")
          }
        return
      }       
      $('#login').hide()
      $(".modal-backdrop").removeClass('modal-backdrop')
      commit('SET_USER', auth.currentUser)
      router.push('admin'); 
    },

    async register ({commit} , details) {
      const { email, password} = details
      try {
        await createUserWithEmailAndPassword(auth, email, password)       
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert("Email already in use")
            break
          case 'auth/invalid-email':
            alert("Invalid email")
            break
          case 'auth/operation-not-allowed':
            alert("Operation not allowed")
            break
          case 'auth/weak-password':
            alert("Weak password")
            break
          default:
            alert("Something went wrong")
        }
        return
      }
      $('#login').hide()
      $(".modal-backdrop").removeClass('modal-backdrop')
      commit('SET_USER', auth.currentUser)
      router.push('admin'); 
    },

    async logout ({commit}) {
      await signOut(auth)
      commit('CLEAR_USER')
      router.push('/')
    }
  }
})