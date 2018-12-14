<template>
<div>
 <div class="px-5" id="header">
  <!-- NavBar -->
  <nav class="navbar navbar-expand-lg navbar-dark">
<router-link to="/" exact class="nav-item nav-link"><img v-bind:src="imagePath" height="60px"></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <router-link to="/" exact class="nav-link text-white">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/experience" class="nav-link text-white">Experience</router-link>
        </li>
<li class="nav-item">
          <router-link to="/contact" class="nav-link text-white">Contact</router-link>
        </li>
      </ul>
    </div>

  </nav>
</div>
</div>
</template>

<script>
 export default {
     name: 'AppHeader',
     data () {
	 return {
	     imagePath: '/static/img/logo.png'
	 }
     }
 
 }
</script>

<style scoped>
#header{
  height: 20vh;
}

.active-link,
nav li:hover {
   color: #f6b84f !important;
 }
</style>
