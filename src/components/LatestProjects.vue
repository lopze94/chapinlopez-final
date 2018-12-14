<template>
    <div class="w-100 bg-white">

  <div class="container py-5">
    <a name="focus"></a>
        <h2>Check out some of my coolest projects</h2>
    <p class="p2">
    </p>
  </div>
  <div class="container">
    <div class="card-deck ">
      <a class="card border-0 py-0" href="https://honors.byu.edu">
        <img class="card-img-top w-50 mx-auto" src="/static/img/honors.png" alt="Front-End Development">
        <div class="image-wrapper card-img-top mx-auto">
          <img class=" w-50 img-abs" src="/static/img/honors-hover.png" alt="Front-End Development">
        </div>
        <div class="card-body">
          <h5 class="card-title">BYU Honors Program</h5>
          <p class="card-text">
            <ul>
              <li>Full-stack development of a RESTful API and a new, redesigned website and CMS</li>
            </ul>
             <div style="font-size:3em; color:#d3d3d3;" class="text-center">
              <i class="fab fa-html5"></i>&nbsp;
              <i class="fab fa-css3-alt"></i>&nbsp;
              <i class="fab fa-js"></i><br>
              <i class="fab fa-vuejs"></i>&nbsp;
              <i class="fab fa-node-js"></i>&nbsp;
              <img class="pt-2" src="/static/img/mysql.png" alt="Front-End Development" width="80px">
             </div>
          </p>
        </div>
      </a>
      <div class="card border-0 py-0">
        <img class="card-img-top w-50 mx-auto" src="/static/img/pevc.png" alt="Front-End Development">
        <div class="image-wrapper card-img-top mx-auto">
          <img class=" w-50 img-abs" src="/static/img/pevc-hover.png" alt="Front-End Development">
        </div>
        <div class="card-body">
          <h5 class="card-title">Static Sites</h5>
          <p class="card-text">
            <ul>
              <li>
                Development of sleek static websites for clients
              </li>
            </ul> 
      <a href="https://lzstartups.com">
        <button class="btn btn-outline-dark rounded-0 w-100">BYU PE&VC Club</button>
      </a>
      <a href="http://valuedempyrean.com">
        <button class="btn btn-outline-dark rounded-0 my-2 w-100">Valued Empyrean</button>
      </a>
             <div style="font-size:3em; color:#d3d3d3;" class="text-center">
              <i class="fab fa-html5"></i>&nbsp;
              <i class="fab fa-css3-alt"></i>&nbsp;
              <i class="fab fa-js"></i><br> 
             </div>
          </p>
        </div>
      </div>
      <div class="card border-0 py-0">
        <img class="card-img-top w-50 mx-auto" src="/static/img/api.png" alt="Front-End Development">
        <div class="image-wrapper card-img-top mx-auto">
          <img class=" w-50 img-abs" src="/static/img/api-hover.png" alt="Front-End Development">
        </div>
        <div class="card-body">
          <h5 class="card-title">Third-Party APIs</h5>
          <p class="card-text">
                        <ul>
              <li>
Third-party API implementations with beautiful design
              </li>
            </ul> 
                  <a href="https://lzstartups.com/stockquotingapp">
        <button class="btn btn-outline-dark rounded-0 w-100">Stock Quoting API</button>
      </a>
      <a href="https://lzstartups.com/apis/weather.html">
        <button class="btn btn-outline-dark rounded-0 my-2 w-100">Weather API</button>
      </a>
      <a href="https://lzstartups.com/apis/stack.html">
        <button class="btn btn-outline-dark rounded-0  w-100">Stack Overflow API</button>
      </a>
             <div style="font-size:3em; color:#d3d3d3;" class="text-center">
              <i class="fab fa-html5"></i>&nbsp;
              <i class="fab fa-css3-alt"></i>&nbsp;
              <i class="fab fa-js"></i><br> 
             </div>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'LatestProjects'
  }
</script>

<style scoped>
.card-title{
  font-family: 'GothamBold',sans-serif;
}
.image-wrapper {
  position: absolute; 
  transform: translateX(25%);
}
.img-abs {
  width: 100%;
  opacity: 0;
  -webkit-transition: opacity 0.5s; /* Safari */
  transition: opacity 0.5s;
}
.card:hover .img-abs {
  opacity: 1;
}
.card-deck a{
  text-decoration: none;
  color: black; 
  cursor: pointer;
}

</style>
