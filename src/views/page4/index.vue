<script>
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default {
  name: "index",
  data() {
    return {
      stArr: []
    }
  },
  mounted() {
    setTimeout(()=>{
      this.createTTS()
    },1000)
  },
  methods: {
    createTTS() {
      this.createT41()
      this.createT43()
      this.createT44()
      this.createT45()
    },
    createT41() {
      const st41 = ScrollTrigger.create({
        trigger: ".page-4-area-1",
        pin: true,
        start: "top top",
        end: "bottom top",
        scrub: true,
        animation: gsap.timeline()
            .to(".page-4-area-1 .float-item", {
              clipPath: "inset(0px 0px 100% 0px)"
            })
      })
      this.stArr.push(st41)
    },
    createT43() {
      const st431 = ScrollTrigger.create({
        trigger: ".page-4-area-3 .trans-move",
        start: "top center",
        scrub: true,
        onEnter: () => {
          const _doms = document.querySelectorAll('.page-4-area-3 .trans-move img')
          _doms.forEach((dom, index) => {
            gsap.fromTo(dom, {
              opacity: 0
            }, {
              opacity: 1,
              duration: 1,
              delay: index * 0.4
            })
          })
        },
        onLeaveBack: () => {
          const _doms = document.querySelectorAll('.page-4-area-3 .trans-move img')
          _doms.forEach((dom, index) => {
            gsap.to(dom, {
              opacity: 0
            })
          })
        }
      })
      this.stArr.push(st431)
      const st432 = ScrollTrigger.create({
        trigger: ".page-4-area-3",
        start: "top top",
        end: "bottom top",
        pin: true,
        onLeave: () => {
          const _dom = document.querySelector('.page-4-area-3')
          _dom.classList.add("move-leave")
        },
        onEnterBack: () => {
          const _dom = document.querySelector('.page-4-area-3')
          _dom.classList.remove("move-leave")
        },
        scrub: true,
        animation: gsap.timeline()
            .to(".page-4-area-3 .trans-move", {
              x: '-60vw'
            })
      })
      this.stArr.push(st432)
    },
    createT44() {
      const st441 = ScrollTrigger.create({
        trigger: ".page-4-area-4 .top-area .text-area",
        pin: true,
        scrub: true,
        start: "center center",
        end: "+=2800",
      })
      this.stArr.push(st441)
      const st442 = ScrollTrigger.create({
        trigger: ".page-4-area-4",
        scrub: true,
        start: "top+=200 bottom",
        end: "top top",
        animation: gsap.timeline()
            .to(".page-4-area-4 .top-area", {
              backgroundColor: "rgba(0,0,0,0)"
            })
            .fromTo(".page-4-area-4 .top-area .text-area", {
              opacity: 0
            }, {
              opacity: 1
            }, "<")
      })
      this.stArr.push(st442)
      let _imgs = document.querySelectorAll('.trans-move-vertical .fade-in-img')
      _imgs.forEach((dom, index) => {
        ScrollTrigger.create({
          trigger: dom,
          start: "top center+=200",
          end: "+=50000",
          toggleClass: "active",
          scrub: true
        })
      })

      const st443 = ScrollTrigger.create({
        trigger: ".trans-move-vertical .end-describe",
        start: "top center+=300",
        end: "+=2000",
        toggleClass: "active",
        scrub: true
      })
      this.stArr.push(st443)
    },
    createT45() {
      const st45 = ScrollTrigger.create({
        trigger: ".page-4-area-5",
        start: 'bottom-=100 bottom',
        scrub: true,
        onEnter: () => {
          gsap.timeline()
              .to(".page-4-area-5 .content-container", {
                width: "100vw"
              })
              .to(".page-4-area-5 .content-container .base-video",{
                opacity:1,
                onStart:()=>{
                  document.querySelector('.page-4-area-5 .content-container .base-video').play()
                }
              })
              .to(".page-4-area-5 .content-container .float-video",{
                opacity:1,
                delay:8
              })
        }
      })
      this.stArr.push(st45)
    }
  },
  unmounted() {
    this.stArr.forEach(item => {
      item.kill()
    })
    this.stArr=[]
  }
}
</script>

<template>
  <div class="page-4">
    <div class="page-header">
      <span>CeL24</span>
    </div>
    <section class="page-4-area-1">
      <div class="base-img">
        <img src="./img/area1-2.webp" width="100%" alt="">
      </div>
      <div class="float-item">
        <img src="./img/area1-1.webp" width="100%" alt="">
      </div>
    </section>
    <section class="page-4-area-2">
      <div class="text-area-show">
        <div class="first-describe">{{ $t('page4.describe1') }}</div>
        <div class="second-describe">{{ $t('page4.describe102') }}</div>
        <div class="third-describe">{{ $t('page4.describe2') }}</div>
      </div>
    </section>
    <section class="page-4-area-3">
      <div>
        <div class="trans-move">
          <img src="./img/area3-1.webp" alt="">
          <img src="./img/area3-2.webp" alt="">
          <img src="./img/area3-3.webp" alt="">
          <img src="./img/area3-4.webp" alt="">
        </div>
      </div>

    </section>
    <section class="page-4-area-4">
      <div class="trans-move-vertical">
        <img src="./img/area4-1.webp" alt="">
        <img src="./img/area4-2.webp" alt="">
        <img src="./img/area4-3.webp" class="fade-in-img third" alt="">
        <img src="./img/area4-4.webp" class="fade-in-img forth" alt="">
        <img src="./img/area4-5.webp" class="fade-in-img five" alt="">
        <img src="./img/area4-6.webp" class="fade-in-img six" alt="">
        <img src="./img/area4-7.webp" class="fade-in-img end-fade-in" alt="">
        <div class="zhanwei-fu">

        </div>
        <img src="./img/area4-8.webp" style="margin-top: 50px" alt="">
        <div class="end-describe">
          <div v-for="item in 9"
               class="end-describe-item">{{ $t('page4.cf'+item) }}</div>
        </div>
      </div>
      <div class="top-area">
        <div class="text-area">
          <div class="first-describe">{{ $t('page4.describe3') }}</div>
          <div class="second-describe">{{ $t('page4.describe4') }}</div>
        </div>
      </div>
    </section>
    <section class="page-4-area-5">
      <div class="content-container">
        <img src="./img/area5-1.webp" width="100%" alt="">
        <video preload class="base-video" style="opacity: 0">
          <source src="./img/area5-2.mp4">
        </video>
        <video preload autoplay loop class="float-video" style="opacity: 0">
          <source src="./img/area5-3.mp4">
        </video>
      </div>
    </section>
  </div>
</template>

<style scoped lang="less">
.page-4 {
  --base-font-family: MS-EL;
  --title-family: MS-Bold;
  color: #171717;
  background-color: #fafafa;
  font-family: var(--base-font-family);
  text-align: left;
}

.page-header {
  font-family: Rany-normal;
  font-size: 16px;
  letter-spacing: 2px;
  height: 46px;
  border-bottom: 2px solid #232323;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;

}

.page-4-area-1 {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  .base-img {
    width: 100%;
    height: 100%;

  }

  .float-item {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    clip-path: inset(0% 0% 0% 0%);
  }
}

.page-4-area-2 {
  height: 60vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #171717;

  .text-area-show {
    width: 59vw;
    height: max-content;

    .second-describe {
      margin: 46px 0px;
      //line-height: 20px;
    }
  }
}

.page-4-area-3 {
  display: flex;
  align-items: flex-start;
  height: 100vh;

  .trans-move {
    width: 160vw;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #171717;

    img {
      height: 100vh;
      opacity: 0;
    }
  }
}

.page-4-area-3.move-leave {
  .trans-move {
    img {
      height: 90vh;
      transition: height 0.5s linear;
    }
  }
}

.page-4-area-4 {
  width: 100vw;
  background-color: #fafafa;
  border-top: 1px solid #171717;
  position: relative;

  .trans-move-vertical {
    width: 670px;
    margin: 100px auto;

    img {
      width: 100%;
      display: block;
      margin-bottom: 46px;
    }

    .end-fade-in {
      width: 180%;
      transform: translateX(-20%);
    }

    .fade-in-img {
      opacity: 0;
    }

    .fade-in-img.active {
      opacity: 1;
      transition: opacity 0.5s linear;
    }

    .zhanwei-fu {
      height: 300px;
    }

    .end-describe {
      opacity: 0;
      line-height: 2.5;
      text-align: left;
      .end-describe-item:nth-child(3){
        margin-bottom: 46px;
      }
    }

    .end-describe.active {
      opacity: 1;
      transition: opacity 0.5s linear;
    }
  }

  .top-area {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    background-color: rgba(0, 0, 0, 1);

    justify-content: center;

    .text-area {
      width: 888px;
      margin-top: 100px;
      height: max-content;

      .second-describe {
        margin-top: 24px;
        text-align: right;
      }
    }
  }
}

.page-4-area-5 {
  border-top: 1px solid #171717;

  .content-container {
    width: 90vw;
    margin: auto;
    position: relative;

    .base-video, .float-video {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      z-index: 5;
    }
  }
}
</style>