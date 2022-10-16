<template>
  <div id="app">
    <navbar></navbar>
    <!--Bootstrap Card-->
    <div class="container">
    <div class="row">
      <div class="col-sm-9">
        <inventory></inventory>
      </div>
      <div class="col-sm-3">
        <cart></cart>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Cart from './components/Cart.vue'
import Inventory from "./components/Inventory.vue";

export default {
  components: {
    Navbar,
    Cart,
    Inventory
  }
}
</script>

<style>
.container{
  padding-top: 10px;
}
</style>
