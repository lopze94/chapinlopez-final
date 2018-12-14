<template>
    <div class="w-100 bg-white">

  <div class="container py-5">
    <a name="focus"></a>
    <h2>I provide high-quality full-stack solutions and web design</h2>
    <p class="p2">I'm passionate about implementing new technologies into my repertoire. Fortunately,
      <a href="https://www.pluralsight.com/">Pluralsight</a> has allowed me to keep adding and strengthening those skills. If you are a student and would like to get a 3-month trial for free (no card needed), follow the link below.
      <br>
      <br>
      <a href="https://imagine.microsoft.com/en-us/Catalog/Product/21">
        <button class="btn btn-outline-dark rounded-0">Get Pluralsight for Students</button>
      </a>
    </p>
  </div>
  <div class="container">
    <div class="card-deck text-center">
      <div class="card border-0 py-0">
        <img class="card-img-top w-50 mx-auto" src="http://2015.nyccamp.org/sites/default/files/styles/icon_-_header/public/nycc-icon-frontendCamp.png?itok=ymXqVB56"
          alt="Front-End Development">
        <div class="card-body">
          <h5 class="card-title">Front-End</h5>
          <p class="card-text">
            <div style="font-size:3em; color:#d3d3d3;">
              <i class="fab fa-html5"></i>&nbsp;
              <i class="fab fa-css3-alt"></i>&nbsp;
              <i class="fab fa-js"></i>
              <br>
              <i class="fab fa-sass"></i>&nbsp;
              <i class="fab fa-vuejs"></i>
            </div>
          </p>
        </div>
      </div>
      <div class="card border-0">
        <img class="card-img-top w-50 mx-auto" src="https://www.codeterritory.com/assets/icon_server-4d5403dc91dcc464cd0a21f0046e3e77.png"
          alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Back-End</h5>
          <p class="card-text">
            <div style="font-size:3em; color:#d3d3d3;">
              <i class="fab fa-node-js"></i>&nbsp;
              <i class="fab fa-python"></i>
              <br>
              <i class="fab fa-php"></i>
            </div>
          </p>
        </div>
      </div>
      <div class="card border-0">
        <img class="card-img-top w-50 mx-auto" src="/static/img/database.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Database</h5>
          <p class="card-text">
            <img class="pt-3" src="/static/img/mongo.png" alt="Front-End Development" width="75px">
            <br>
            <img class="pt-2" src="/static/img/mysql.png" alt="Front-End Development" width="80px">
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'FullStack'
  }
</script>

<style>
.card-title{
  font-family: 'GothamBold',sans-serif;
}
</style>
