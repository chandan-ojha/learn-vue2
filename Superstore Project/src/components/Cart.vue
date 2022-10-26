<template>
  <ul class="list-group">
    <li class="list-group-item">
      <span class="item-name">Name</span>
      <span class="item-price float-end">Price</span>
    </li>

    <hr>
    <li v-for="(item,index) in items" :key="index" class="list-group-item">
      <span class="item-name">{{ item.title }}</span>
      <button type="button" class="btn btn-danger btn-sm" @click="removeItem(index)">-</button>
      <span class="item-price float-end">${{ item.price }}</span>
    </li>
    <hr>

    <li class="list-group-item">
      <span class="item-name">Total</span>
      <span class="item-price float-end">${{totalPrice}}</span>
    </li>

    <li v-if="items.length > 0" class="list-group-item">
      <button @click="checkout" class="btn btn-block btn-success">Checkout</button>
    </li>
  </ul>
</template>

<script>
export default {
  /*props: ['items'],*/
  computed: {
    items(){
      return this.$store.getters.getCart
    },
    totalPrice(){
      var total = 0
      this.items.forEach(item => {
        total += parseFloat(item.price)
      })
      return total.toFixed(2);
    }
  },
  methods: {
    removeItem(index){
      //console.log(index)
      /*this.$emit('itemRemoved', index)*/
      this.$store.commit('removeItem',index)
    },
    checkout(){
      if(confirm('Are you sure you want to checkout?')){
        this.$store.commit('clearCart')
      }
    }
  }
}
</script>

<style>

</style>