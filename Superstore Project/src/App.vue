<template>
  <div id="app">
    <!--Navbar-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Super Store</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <!--Card-->
    <div class="container">
    <div class="row">
      <div class="col-sm-9">
        <div class="row">
          <div class="card" style="width: 15rem;">
            <img src="./assets/images/default-image.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
               <p class="card-text"></p>
               <a href="#" class="btn btn-primary">Go somewhere</a>
             </div>
          </div>
          <div class="card" style="width: 15rem;">
            <img src="./assets/images/default-image.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text"></p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card" style="width: 15rem;">
            <img src="./assets/images/default-image.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text"></p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <ul class="list-group">
          <li class="list-group-item">
            Item-price
          </li>
          <li class="list-group-item">
            Item-price
          </li>
          <li class="list-group-item">
            Item-price
          </li>
        </ul>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.container{
  padding-top: 10px;
}
</style>
