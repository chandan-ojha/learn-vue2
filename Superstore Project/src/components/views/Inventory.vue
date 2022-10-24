<template>
  <!--Bootstrap Card-->
  <div class="row">
    <div v-for="(item,index) in items" :key="index" class="card" style="width: 15rem;">
      <img :src="item.photo" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{item.title}}</h5>
        <p class="card-text">${{item.price}}</p>
        <a @click="addToCart(item)" class="btn btn-primary">+ add</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  //props: ['items'],
  data(){
    return {
      items: []
    }
  },
  mounted() {
    this.fetchInventory();
  },
  methods: {
    addToCart(item){
      this.$emit('newItemAdded',item)
    },
    fetchInventory(){
      axios.get('http://localhost:3000/items').then(response => {
        console.log(response);
      })
    }
  }
}
</script>

<style>

</style>