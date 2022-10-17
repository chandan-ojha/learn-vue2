<template>
  <!--Bootstrap Card-->
  <div class="row">
    <div v-for="(item,index) in items" :key="index" class="card" style="width: 15rem;">
      <img :src="item.photo" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{item.title}}</h5>
        <p class="card-text">{{item.price}}</p>
        <a href="#" class="btn btn-primary">+ add</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items']
}
</script>

<style>

</style>