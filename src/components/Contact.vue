<template>
<div>
   <div class="topheader">

  </div>
   <h2 class="mt-4">Contact</h2>

<div class="container">

     <p class="text-center p2">
       <img class="img-fluid my-3" src="/static/img/josue-lopez.png" alt="Josue Lopez">
      </p>
       <h2>lopze.94@gmail.com</h2>
       <h2>(801) 400-8794</h2>
     <p class="text-center">
      <a href="https://github.com/lopze94">
        <button class="btn btn-outline-dark rounded-0">Github</button>
      </a>
            <a href="https://www.instagram.com/lopze94/?hl=en">
        <button class="btn btn-outline-dark rounded-0">Instagram</button>
      </a>
            <a href="https://www.linkedin.com/in/lopez-josue/">
        <button class="btn btn-outline-dark rounded-0">LinkedIn</button>
      </a>
            </a>
            <a href="/static/Lopez_Josue-Resume.pdf">
        <button class="btn btn-outline-dark rounded-0">Resume</button>
      </a>

    </p>

</div>

</div>
</template>

<script>

export default {
  name: 'Experience'
}
</script>

<style scoped>
.company{
  position: absolute;
  bottom: 0px;
  font-family: 'GothamBold',sans-serif;
  color: white;
  font-size: 2rem;
}
.topheader{
  position: absolute;
  top: 0;
  width: 100%;
  height: 20%;
  overflow: hidden;
  z-index: -1000;
  background-image: url('/static/img/contact.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
