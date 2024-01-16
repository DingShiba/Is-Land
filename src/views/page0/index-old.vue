<script setup>
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);
  import {onMounted, onUnmounted, ref} from "vue";


  onMounted(()=>{

    window.addEventListener("scroll",()=>{
      const scrollTop=document.querySelector('.scroll-area').getBoundingClientRect().top
      console.log(scrollTop)
    })
   /* const fixHome=ScrollTrigger.create({
      trigger: ".area-1",

      pin:true,
      markers: true,

      scrub: true,
   /!*   animation:gsap
          .to('.area-1-video-title',{
            opacity:1,
            duration:1
          })*!/
    })*/

  })
  function handleScroll(){
    const scrollTop=document.querySelector('.scroll-area').getBoundingClientRect().top
    console.log(scrollTop)
  }
</script>

<template>
<div class="page-0" ref="page0">
  <div class="scroll-area">
    <section class="area-1">
      <img src="./img/initTitle.webp" width="100%" alt="">
      <video class="area-1-video-title"
             autoplay>
        <source src="./img/biaoti.mp4">
      </video>
    </section>
    <div>
      <video
             autoplay>
        <source src="./img/biaoti.mp4">
      </video>
    </div>
  </div>

</div>
</template>

<style scoped lang="less">
/*.page-0::-webkit-scrollbar{
  display: none;
}*/
.page-0{
  width: 100vw;
  height: 100vh;
  overflow: auto;
  .area-1{
    width: 100%;
    position: relative;
    .area-1-video-title{
      position: absolute;
      left:0;
      top:0px;
      opacity: 0.6;
      mix-blend-mode: screen;
    }
  }
}
</style>