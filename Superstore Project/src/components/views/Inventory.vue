<template>
  <!--Bootstrap Card-->
  <div v-if="!loading" class="row">
    <div v-for="(item,index) in items" :key="index" class="card" style="width: 15rem;">
      <img :src="item.photo" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{item.title}}</h5>
        <p class="card-text">${{item.price}}</p>
        <a @click="addToCart(item)" class="btn btn-primary">+ add</a>
      </div>
    </div>
  </div>
  <h1 v-else>Loading...</h1>
</template>

<script>
import axios from 'axios'
export default {
  //props: ['items'],
  data(){
    return {
      loading: true,
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
      var self = this;
      axios.get('http://localhost:3000/items').then(response => {
      /*setTimeout(function (){
          self.items = response.data
          self.loading = false
        },3000)*/
        self.items = response.data
        self.loading = false
      })
    }
  }
}
</script>

<style>

</style>