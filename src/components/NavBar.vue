<template>
  <nav class="navbar custom-nav navbar-expand-lg bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Fire Shop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link" aria-current="page" >Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
      </ul>
      <form class="d-flex align-items-center" role="search">
        <input class="form-control me-2 search-input" type="search" placeholder="Search" aria-label="Search">
        <a class="btn btn-outline-success get-started my-2 my-sm-0" type="submit" data-bs-toggle="modal" data-bs-target="#login">Get Started</a>
      </form>
    </div>
  </div>
  <LoginVue />
</nav>
</template>

<script>
import LoginVue from './LoginVue.vue';

export default {
  name: 'NavBar',
  props: {
    msg: String
  },
  components: {
    LoginVue
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .get-started {
    width: 150px !important;
  }    
  .search-input {
    max-height: 45px;
  }
</style>
