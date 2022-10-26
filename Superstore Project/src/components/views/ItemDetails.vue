<template>
  <!--<h3>Details {{ $route.params.id }}</h3>-->
  <div v-if="item" class="row">
    <div class="col-sm-6">
      <img :src="item.photo" alt="Photo">
    </div>
    <div class="col-sm-6">
      <h4>{{ item.title }}</h4>
      <p>{{ item.description }}</p>
      <div class="card-footer">
        <span>${{ item.price }}</span>
        <a @click="addToCart(item)" class="btn btn-sm btn-primary float-end">+ add</a>
      </div>
    </div>
  </div>
  <h3 v-else>Loading...</h3>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      item: null
    }
  },
  mounted() {
    this.fetchItem()
  },
  methods: {
    fetchItem(){
      var self = this;
      axios.get('http://localhost:3000/item/'+ this.$route.params.id).then(response => {
        self.item = response.data
      })
    },
    addToCart(item){
      this.$store.commit('addToCart',item)
    }
  }
}
</script>

<style scoped>

</style>