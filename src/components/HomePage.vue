<template>
<div>
  <div>

<div class="video-container">

  <video autoplay="autoplay" loop="true" width="1280" height="720" muted>
    <source v-bind:src="vidPath" type="video/mp4">
  </video>

</div>

        <div class="container" id="myContainer">
      <div class="row align-items-center myrow">
        <div class="col text-center text-white">
          <p id="homeTagline">I'm here to create meaningful and lasting relationships with my employers and clients.</p>
          <br>
          <h1 id="homeTitle">LET'S BUILD SOMETHING AMAZING TOGETHER</h1>
         
          
        </div>
      </div>
      <div class="row align-items-end myrow2">
        <div class="col text-center text-white">
         <a href="#focus"><img v-bind:src="imgPath" height="60px"></a>
        </div>
        </div>
    </div>


  </div>

  <div class="w-100 bg-light">

    <div class="container py-5">
      <a name="focus"></a> 
      <div class="w-100 py-3">
   <h3>Hello, I’m Josue Lopez (aka "El Chap&iacute;n")</h3>
      <p class="px-5 mx-3 p2">Let's be honest and cut through the marketing fluff. You need a website that looks amazing and actually works. Bottom line, that's what I do. And if you want to learn more about working with me, pick up the phone and give me a call (or email).</p>
      </div>
   

    </div>

  </div>
  
  <full-stack id="fullstack"></full-stack>
  <latest-projects></latest-projects>
</div>
</template>

<script>
import FullStack from './FullStack.vue'
import LatestProjects from './LatestProjects.vue'

export default {
  name: 'HomePage',
  data() {
    return{
      vidPath: '/static/vid/bg.mp4',
      imgPath: '/static/img/arrow.png'
    }
  },
  components : {
    'FullStack': FullStack,
    'LatestProjects': LatestProjects
  }
}
</script>

<style>
.video-container {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%; 
  overflow: hidden;
  z-index: -1000;
}

.video-container video {
  /* Make video to at least 100% wide and tall */
  min-width: 100%; 
  min-height: 100%; 
  
  /* Setting width & height to auto prevents the browser from stretching or squishing the video */
  width: auto;
  height: auto;
  
  /* Center the video */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  
}




#myVideo{
  position: absolute;
	z-index: -1000;
	width: 100%;
	overflow: hidden;
	top: 0;
	left: 0;
}

#homeTitle{
  font-family: 'GothamBold', sans-serif;
  font-size: 4.5rem;
  line-height: 4.5rem;
}

#homeTagline{
  font-family: 'IBM Plex Serif', serif;
  font-style: italic;
  font-size: 1.3rem;
}

.myrow{
  height: 70vh;
}

.myrow2{
  height: 10vh;
}
</style>
