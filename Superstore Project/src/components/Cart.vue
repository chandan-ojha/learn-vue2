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
  </ul>
</template>

<script>
export default {
  props: ['items'],
  computed: {
    totalPrice(){
      var total = 0
      this.items.forEach(item => {
        total += parseFloat(item.price)
      })
      return total;
    }
  },
  methods: {
    removeItem(index){
      //console.log(index)
      this.$emit('itemRemoved', index)
    }
  }
}
</script>

<style>

</style>