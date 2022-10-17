<template>
  <div id="app">
    <navbar></navbar>
    <!--Bootstrap Card-->
    <div class="container">
    <div class="row">
      <div class="col-sm-9">
        <inventory @newItemAdded="addCartItem" :items="items"></inventory>
      </div>
      <div class="col-sm-3">
        <cart :items="cart"></cart>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Cart from './components/Cart.vue'
import Inventory from "./components/Inventory.vue";
import data from './data.js'

export default {
  components: {
    Navbar,
    Cart,
    Inventory
  },
  data(){
    return {
      items: [],
      cart: [{
        id: 1,
        title: 'Test',
        price: 10.50,
        photo: "http://dummyimage.com/250x250.png/cc0000/ffffff"
      }]
    }
  },
  mounted() {
    this.items = data
  },
  methods:{
    addCartItem(item){
      this.cart.push(item)
    }
  }
}
</script>

<style>
.container{
  padding-top: 10px;
}
</style>
