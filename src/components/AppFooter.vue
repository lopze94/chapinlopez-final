<template>
<div class="w-100 bg-dark p-5 text-white">
  <div class="container text-center">
    <h2>Get a website that looks amazing and actually works.</h2>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <ul class="navbar-nav ml-auto mx-auto">
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

    </nav>
    <br>
    <p class="text-muted">© 2018 Josue Lopez. All rights reserved. Web Developer</p>
  </div>

</div>
</template>

<style scoped>
.active-link,
nav li:hover {
   color: #f6b84f !important;
 }
</style>

