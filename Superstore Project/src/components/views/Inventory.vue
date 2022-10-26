<template>
  <!--Bootstrap Card-->
  <div v-if="!loading" class="row g-2">
    <div v-for="(item,index) in items" :key="index" class="col-lg-3">
      <div class="card">
        <router-link tag="div" :to="{ path: '/item/' + item.id}">
          <img :src="item.photo" class="card-img-top" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title text-center">{{ item.title }}</h5>
          </div>
        </router-link>
        <div class="card-footer">
          <span class="card-text">${{ item.price }}</span>
          <a @click="addToCart(item)" class="btn btn-sm btn-primary float-end">+ add</a>
        </div>
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
      loading: true
      /*items: []*/
    }
  },
  computed: {
    items(){
      return this.$store.getters.getInventory
    }
  },
  mounted() {
    this.fetchInventory();
  },
  methods: {
    addToCart(item){
      /*this.$emit('newItemAdded',item)*/
      this.$store.commit('addToCart', item);
    },
    fetchInventory(){
      var self = this;
      axios.get('http://localhost:3000/items').then(response => {
      /*setTimeout(function (){
          self.items = response.data
          self.loading = false
        },3000)*/
        /*self.items = response.data*/
        self.$store.commit('setInventory',response.data)
        self.loading = false
      })
    }
  }
}
</script>

<style>

</style>