<template>
  <div class="home">
    <NavBar></NavBar>
      <HeroVue/>
      <ProductsView />

      <div class="container h-100">
        <div class="row p-5 h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <img src="/img/svg/product.svg" alt="" width="400">
          </div>
          <div class="col-md-6">
            <h3>Learn More About us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!
            </p>
             <button class="btn custom-btn btn-outline-primary mr-4">Browse Products</button>
          </div>
        </div>
      </div>
      <LoginVue/>
      <!-- <mini-cart></mini-cart> -->

  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import HeroVue from "@/components/HeroVue.vue";
import ProductsView from "@/views/ProductsView.vue";
import LoginVue from "@/components/LoginVue.vue";

export default {
  name: "HomeView",
  components: {
    HeroVue,
    ProductsView,
    NavBar,
    LoginVue
}
};
</script>

<style>

</style>
