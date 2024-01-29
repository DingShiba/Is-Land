<script>
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default {
  name: "index",
  data() {
    return {
      colloseNum: 2
    }
  },
  mounted() {
    this.createTTS()
  },
  methods: {
    createTTS() {
      this.createT1()
    },
    createT1() {
      ScrollTrigger.create({
        trigger: ".page-2-area-1",
        pin: true,
        start: "top top",
        end: "+=2000",
        scrub: true,
        animation: gsap.timeline()
            .fromTo(".page-2-area-1 .step1-container .collose-item", {
              clipPath: "inset(100% 0px 0px 0px)"
            }, {
              clipPath: "inset(0px 0px 0px 0px)"
            })
            .set(".page-2-area-1 .base-img-area .second", {
              opacity: 1,
              onComplete: () => {
                gsap.fromTo('.page-2-area-1 .step2-container .even', {
                  clipPath: "inset(0px 0px 0px 0px)"
                }, {
                  clipPath: "inset(100% 0px 0px 0px)"
                })
              }
            })
            .set(".page-2-area-1 .white-collose .step2-container", {
              opacity: 1,
            }, "<")
            .set(".page-2-area-1 .white-collose .step1-container", {
              opacity: 0
            }, "<")
            .fromTo('.page-2-area-1 .step2-container .even', {
              clipPath: "inset(100% 0px 0px 0px)"
            }, {
              clipPath: "inset(0px 0px 0px 0px)",
            })
            /*第三张图*/
            .set(".page-2-area-1 .base-img-area .third",{
              opacity:1,
              onComplete: () => {
                gsap.fromTo('.page-2-area-1 .step3-container .single', {
                  clipPath: "inset(0px 0px 0px 0px)"
                }, {
                  clipPath: "inset(100% 0px 0px 0px)"
                })
              }
            })
            .set(".page-2-area-1 .white-collose .step3-container", {
              opacity: 1,
            }, "<")
            .set(".page-2-area-1 .white-collose .step2-container", {
              opacity: 0
            }, "<")
            .fromTo(".page-2-area-1 .step3-container .single",{
              clipPath: "inset(100% 0px 0px 0px)"
            },{
              clipPath: "inset(0px 0px 0px 0px)"
            })
            .fromTo(".page-2-area-1 .step3-container .even",{
              clipPath: "inset(0px 0px 0px 0px)"
            },{
              clipPath: "inset(0px 0px  100% 0px)"
            },"<")
          /*  .fromTo('.page-2-area-1 .step3-container .even', {
              clipPath: "inset(100% 0px 0px 0px)"
            }, {
              clipPath: "inset(0px 0px 0px 0px)",
            },">")*/
          /*  .fromTo('.page-2-area-1 .step3-container .single', {
              clipPath: "inset(100% 0px 0px 0px)"
            }, {
              clipPath: "inset(0px 0px 0px 0px)",
            },"<")*/
            /*显示第四张*/
           /* .set(".page-2-area-1 .base-img-area .forth",{
              opacity:1
            },"<")*/

      })
    }
  }
}
</script>

<template>
  <div class="page-2">
    <div class="page-header">
      <span>CeL24</span>
    </div>
    <section class="page-2-area-1 screen">
      <div class="base-img-area">
        <img class="base-item first" src="./img/area1-1.webp" alt="">
        <img class="base-item second" src="./img/area1-2.webp" alt="">
        <img class="base-item third" src="./img/area1-3.webp" alt="">
        <img class="base-item forth" src="./img/area1-4.webp" alt="">
      </div>
      <div class="white-collose">
        <div class="step-container step1-container">
          <div v-for="item in 2" class="collose-item"></div>
        </div>
        <div class="step-container step2-container">
          <div v-for="item in 4" class="collose-item" :class="{even:item%2==0}"></div>
        </div>
        <div class="step-container step3-container">
          <div v-for="item in 4" class="collose-item" :class="{even:item%2==0,single:item%2==1}"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="less">
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

.page-2-area-1 {
  position: relative;

  .base-img-area {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;

    .base-item {
      opacity: 0;
    }

    .second, .third ,.forth{
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;
    }

    .first {
      opacity: 1;
    }
  }

  .white-collose {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    --collose-height: 50vh;

    .step-container {
      position: absolute;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      left: 0;
      top: 0;
      opacity: 0;

      .collose-item {
        background-color: #fff;
        height: 50vh;
      }
    }

    .step1-container {
      opacity: 1;

      .collose-item {
        height: 50vh;
      }
    }

    .step2-container {
      .collose-item {
        height: 25vh;
      }
    }
    .step3-container {
      .collose-item {
        height: calc(100vh / 4);
      }
    }

  }
}
</style>