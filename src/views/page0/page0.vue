<script>
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default {
  name: "page0",
  data() {
    return {}
  },
  mounted() {
    gsap.to(".ball-2", {
      scale: 2,
      duration: 2,
      scrollTrigger: {
        trigger: ".ball-2",
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
        markers: true,
      },
    });
    gsap.from(".ball-3", {
      x: 300,
      scale: 0.3,
      rotation: 360,
      duration: 2,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: ".ball-3",
        // markers: true,
        start: "center center",
        end: "center 25%",
        scrub: true,
        pin: true,
      },
    });
    //   设置滚动监听
    /*   this.$refs.page0.addEventListener('scroll',()=>{
         console.log("shenme ")
       })*/
/*    console.log("gsap", gsap)
    gsap.to('.area-1', {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".area-1",
        start: 'bottom center',
        markers: true,
      }
    })*/

    /*    console.log()
        const _dom=document.querySelector('.jsdh')
        gsap.to(_dom, {
          x: 150,
          opacity:1,
          duration:1,

          onStart: () => {
            alert("开始")
          },
          onComplete:()=>{
            alert("结束")
          },
          scrollTrigger: {
            trigger: ".jsdh",
            start: 'bottom bottom',
            end :"top center",
            markers: true,

            // scrub: true,
          },
        });*/
  },
  methods: {}
}
</script>

<template>
  <div class="page-0" ref="page0">
    <section id="section-1">
      <div class="ball-1"></div>
    </section>

    <section id="section-2">
      <div class="ball-2"></div>
    </section>

    <section id="section-3">
      <div class="ball-3"></div>
    </section>

    <section id="section-4">
      <div class="ball-4"></div>
      <div class="ball-4"></div>
      <div class="ball-4"></div>
    </section>

    <section id="section-5">
      <div class="ball-5"></div>
    </section>
    <div class="container">
      <div class="area-1">
        <img src="./img/img0-1.webp" width="100%">
        <div class="jsdh"></div>
        <video class="area-1-video-title"
               disablepictureinpicture
               width=""
               autoplay>
          <source src="./img/biaoti.mp4"/>
        </video>

      </div>
      <div class="body">
        <div class="area-2"></div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="less">
/*.page-0::-webkit-scrollbar {
  display: none;
}*/
section {
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 1rem;
  outline: 4px solid var(--bg, red);
  outline-offset: -5px;
}

section:nth-of-type(even) {
  background: hsl(240 60% 97%);
}

section:last-of-type {
  margin-bottom: 100vh;
}

[class^="ball-"] {
  height: 15vmin;
  width: 15vmin;
  border-radius: 50%;
  background: var(--bg, red);
}

#section-2 {
  --bg: purple;
}

#section-3,
#section-4,
#section-5 {
  justify-content: center;
  gap: 2rem;
}

#section-3 {
  --bg: cornflowerblue;
}

#section-4 {
  --bg: orangered;
}

#section-5 {
  --bg: lightpink;
}

.ball-5.active {
  background: green;
}

#section-3 {
  justify-content: flex-start;
}

.ball-3 {
  border-radius: 2rem;
}

.page-0 {
  width: 100vw;
  height: 100vh;
  overflow: auto;

  .container {
    .area-1 {
      width: 100vw;
      height: 100vh;
      position: relative;
      opacity: .5;

      .jsdh {
        width: 100px;
        height: 100px;
        background-color: #2b4acb;
        margin: auto;
        opacity: 1;
      }

      .area-1-video-title {
        background-color: #2b4acb;
        opacity: 0;
      }
    }

    .area-2 {

    }
  }
}

</style>