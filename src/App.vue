<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: { AppHeader, AppFooter }
};
</script>

<style>
@font-face {
  font-family: "Gotham";
  src: url("/static/fonts/Gotham-Book.otf");
  src: url("/static/fonts/Gotham-Book.otf") format("opentype");
}

@font-face {
  font-family: "GothamBold";
  src: url("/static/fonts/Gotham-Bold.otf");
  src: url("/static/fonts/Gotham-Bold.otf") format("opentype");
}

body {
  min-height: 100vh;
  font-size: 16px;
  font-family: "Gotham", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h3 {
  font-family: "IBM Plex Serif", serif;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2rem;
}

h2 {
  font-family: "IBM Plex Serif", serif;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2.5rem;
}

.p2 {
  font-size: 1.5rem;
  line-height: 2.3rem;
  text-align: center;
}
</style>