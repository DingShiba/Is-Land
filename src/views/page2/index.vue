<script>
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default {
  name: "index",
  data() {
    return {
      colloseNum: 2,
      stArr:[]
    }
  },
  mounted() {
    setTimeout(()=>{
      this.createTTS()

    },2000)
  },

  methods: {
    createTTS() {
      this.createT1()
      this.createT2()
      this.createT3()
    },
    createT1() {
      const st21=ScrollTrigger.create({
        trigger: ".page-2-area-1",
        pin: true,
        start: "top top",
        end: "+=3000",
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
            .set(".page-2-area-1 .base-img-area .third", {
              opacity: 1,
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
            .set(".page-2-area-1 .base-img-area .forth-1", {
              opacity: 1
            }, "<")
            .set(".page-2-area-1 .base-img-area .forth-2", {
              opacity: 1
            }, "<")
            .to(".page-2-area-1 .step3-container .collose-item", {
              y: "-25vh"
            })
            .set(".page-2-area-1 .base-img-area .forth", {
              opacity: 1,
            }, ">")
            .fromTo('.page-2-area-1 .step3-container .even', {
              clipPath: "inset(0px 0px 0px 0px)"
            }, {
              clipPath: "inset(0px 0px 100% 0px)",
            })
            .set(".page-2-area-1 .step3-container .collose-item", {
              y: 0
            }, ">")
            .fromTo('.page-2-area-1 .step3-container .collose-item', {
              clipPath: "inset(100% 0px 0px 0px)"
            }, {
              clipPath: "inset(0px 0px 0px 0px)",
              onComplete: () => {
                gsap.fromTo('.page-2-area-1 .step4-container .even', {
                  clipPath: "inset(0px 0px 0px 0px)"
                }, {
                  clipPath: "inset(100% 0px 0px 0px)"
                })
              }
            })
            .set(".page-2-area-1 .white-collose .step3-container", {
              opacity: 0,
            }, ">")
            .set(".page-2-area-1 .white-collose .step4-container", {
              opacity: 1,
            }, ">")
            .set(".page-2-area-1 .base-img-area .five", {
              opacity: 1,
            }, ">")
            .fromTo('.page-2-area-1 .step4-container .even', {
              clipPath: "inset(100% 0px 0px 0px)"
            }, {
              clipPath: "inset(0px 0px 0px 0px)",
            }, ">")
            .set(".page-2-area-1 .white-collose .step4-container", {
              opacity: 0,
            }, ">")
            .fromTo('.page-2-area-1 .step5-container .single', {
              clipPath: "inset(0px 0px 0px 0px)"
            }, {
              clipPath: "inset(100% 0px 0px 0px)"
            })
            .set(".page-2-area-1 .white-collose .step5-container", {
              opacity: 1,
            }, "<")
            .set(".page-2-area-1 .base-img-area .six", {
              opacity: 1
            }, ">")

            .to('.page-2-area-1 .step5-container .even', {
              clipPath: "inset(0px 0px 100% 0px)",
            })
            .set(".page-2-area-1 .base-img-area .seven", {
              opacity: 1
            }, "<")
            .to('.page-2-area-1 .step5-container .collose-item', {
              clipPath: "inset(0px 0px 0px 0px)",
              onComplete: () => {
                gsap.fromTo('.page-2-area-1 .step6-container .single', {
                  clipPath: "inset(0px 0px 0px 0px)"
                }, {
                  clipPath: "inset(100% 0px 0px 0px)"
                })
              }
            })
            .set(".page-2-area-1 .step6-container", {
              opacity: 1
            })
            .set(".page-2-area-1 .base-img-area .eight", {
              opacity: 1
            })
            .set(".page-2-area-1 .step5-container", {
              opacity: 0
            })
            .fromTo('.page-2-area-1 .step6-container .single', {
              clipPath: "inset(100% 0px 0px 0px)",
            }, {
              clipPath: "inset(0px 0px 0px 0px)",
              onComplete: () => {
                gsap.fromTo('.page-2-area-1 .step7-container .single', {
                  clipPath: "inset(0px 0px 0px 0px)"
                }, {
                  clipPath: "inset(100% 0px 0px 0px)"
                })
              }
            })
            .set(".page-2-area-1 .step6-container", {
              opacity: 0
            })
            .set(".page-2-area-1 .step7-container", {
              opacity: 1
            })
            .set(".page-2-area-1 .base-img-area .nine", {
              opacity: 1
            })
            .to(".page-2-area-1 .step7-container", {
              y: "-6.25vh"
            })
            .fromTo('.page-2-area-1 .step7-container .even', {
              clipPath: "inset(0px 0px 0px 0px)"
            }, {
              clipPath: "inset(0px 0px 100% 0px)"
            })
            .set(".page-2-area-1 .base-img-area .ten", {
              opacity: 1
            }, "<")

      })
      this.stArr.push(st21)
    },
    createT2() {
      const st221=ScrollTrigger.create({
        trigger: ".page-2-area-2",
        scrub: true,
        start: "top bottom",
        end: "bottom bottom",
        animation: gsap.timeline()
        /*    .to(".page-2-area-1 .base-img-area",{
              scale:0.5
            })*/
            .to(".page-2-area-1 .find-love",{
              scale:0.5,
              y:'25vh'
            })
            .to(".page-2-area-1 .vertical-line",{
              scale:1.5
            },"<")
            .to(".page-2-area-1 .bottom-line",{
              scale:1.5
            },"<")
            .fromTo(".page-2-area-2 .img-text", {
              opacity: 0,
            }, {
              opacity: 1
            }, "<")



      })
      this.stArr.push(st221)
      const st222=ScrollTrigger.create({
        trigger:".page-2-area-2 .text-area",
        scrub:true,
        start:"top bottom-=300",
        toggleClass:"active",
      })
      this.stArr.push(st222)
    },
    createT3() {
      const st23=ScrollTrigger.create({
        trigger: ".page-2-area-3",
        scrub: true,
        pin:true,
        start: "top top",
        end: "bottom top",
        animation: gsap.timeline()
            .to(".page-2-area-3 .base-image",{
              y:-800
            })
            .fromTo(".page-2-area-3 .top-draw",{
              opacity:0
            },{
              opacity:1
            })
            .fromTo(".page-2-area-3 .top-img-area",{
              opacity:0
            },{
              opacity:1
            })




      })
      this.stArr.push(st23)
    },
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
  <div class="page-2">
    <div class="page-header">
      <span>CeL24</span>
    </div>
    <section class="page-2-area-1 screen">
      <div class="find-love">
        <div class="vertical-line left-line"></div>
        <div class="base-img-area">
          <img class="base-item first" src="./img/area1-1.webp" alt="">
          <img class="base-item second" src="./img/area1-2.webp" alt="">
          <img class="base-item third" src="./img/area1-3.webp" alt="">
          <img class="base-item forth-1" src="./img/area1-4-1.webp" alt="">
          <img class="base-item forth-2" src="./img/area1-4-2.webp" alt="">
          <img class="base-item forth" src="./img/area1-4.webp" alt="">
          <img class="base-item five" src="./img/area1-5.webp" alt="">
          <img class="base-item six" src="./img/area1-6.webp" alt="">
          <img class="base-item seven" src="./img/area1-7.webp" alt="">
          <img class="base-item eight" src="./img/area1-8.webp" alt="">
          <img class="base-item nine" src="./img/area1-9.webp" alt="">
          <img class="base-item ten" src="./img/area1-10.webp" alt="">
          <div class="bottom-line">
            <div class="line-item"></div>
          </div>
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
          <div class="step-container step4-container">
            <div v-for="item in 8" class="collose-item" :class="{even:item%2==0,single:item%2==1}"></div>
          </div>
          <div class="step-container step5-container">
            <div v-for="item in 8" class="collose-item" :class="{even:item%2==0,single:item%2==1}"></div>
          </div>
          <div class="step-container step6-container">
            <div v-for="item in 16" class="collose-item" :class="{even:item%2==0,single:item%2==1}"></div>
          </div>
          <div class="step-container step7-container">
            <div v-for="item in 16" class="collose-item" :class="{even:item%2==0,single:item%2==1}"></div>
          </div>
        </div>
        <div class="vertical-line right-line"></div>
      </div>
    </section>
    <section class="page-2-area-2 screen">
      <div class="content-area">
        <div class="img-text">
          <img src="./img/area2-1.webp" width="100%" alt="">
          <div class="text-area">
            <div class="describe-1">{{ $t('page2.describe1') }}</div>
            <div class="describe-2">{{ $t('page2.describe2') }}</div>
            <div class="describe-3">{{ $t('page2.describe3') }}</div>
          </div>
        </div>
      </div>
    </section>
    <section class="page-2-area-3 screen">
      <div class="base-image">
        <img src="./img/area3-1.webp" width="100%" alt="">
      </div>
      <div class="top-draw">

      </div>
        <img class="top-img-area" src="./img/area3-2.webp" style="position:absolute;top:0;right:0;z-index:12;mix-blend-mode: darken" alt="">
      <div class="text-describe">

      </div>
    </section>
    <section class="page-2-area-4">
      <img class="left-img" width="100%" src="./img/area4-1.webp" alt="">
      <img class="right-img" width="100%" src="./img/area4-2.webp" alt="">
    </section>
    <section class="footer">
      <span>{{$t('page1.area7.text')}}</span>
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

.page-2 {
  --base-font-family: MS-EL;
  --title-family: MS-Bold;
  color: #171717;
  background-color: #fafafa;
  font-family: var(--base-font-family);
}

.page-2-area-1 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  .find-love {
    position: relative;

  }

  .vertical-line {
    position: absolute;
    top: 0px;
    z-index: 5;
    height: 400vh;
    width: 1px;
    background-color: #171717;
  }

  .left-line {
    left: -20px;
  }

  .right-line {
    right: -20px;
  }

  .base-img-area {
    width: 100vw;
    //height: 100vh;
    //overflow: hidden;
    position: relative;

    .base-item {
      opacity: 0;
      height: 100%;
      width: 100%;

    }

    .second, .third, .forth, .forth-1, .forth-2, .five,
    .six, .seven, .eight, .nine, .ten {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;

    }

    .first {
      opacity: 1;
    }

    .bottom-line {
      width: 200vw;
      display: flex;
      justify-content: center;
      position: absolute;
      bottom: -20px;
      left: -50vw;

      .line-item {
        width: 200vw;
        height: 1px;
        background-color: #171717;
      }
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

    .step4-container {
      .collose-item {
        height: calc(100vh / 8);
      }
    }

    .step5-container {
      .collose-item {
        height: calc(100vh / 8);
      }
    }

    .step6-container {
      .collose-item {
        height: calc(100vh / 16);
      }
    }

    .step7-container {
      .collose-item {
        height: calc(100vh / 16);
      }
    }

  }
}

.page-2-area-2 {
  display: flex;
  justify-content: center;
  margin-top: 100px;
  border-top: 1px solid #171717;

  .vertical-line {
    height: 150vh;
    width: 1px;
    background-color: #171717;
  }

  .content-area {
    padding: 20px;

    .img-text {
      width: 50vw;

      .text-area {
        opacity: 0;
        padding: 46px;
        line-height: 1.5;
        text-align: center;

        .describe-2 {
          margin: 23px 0px;
        }
      }
      .text-area.active{
        opacity: 1;
        transition: opacity 0.5s linear;
      }
    }
  }
}

.page-2-area-3 {
  height: 100vh;
  overflow: hidden;
  position: relative;
  .top-draw{
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: 10;
    top:0;
    left:0;
    background-color: rgba(0, 0, 0, 0.6);
  }

}
.page-2-area-4{
  margin-top: 100px;
  display: flex;
  justify-content: center;
  .left-img{
    width: 70vw;
  }
  .right-img{
    width: 30vw;
  }
}
.footer{
  background-color: #171717;
  height: 46px;
  color: #fafafa;
  text-align: center;
  line-height: 46px;
}
</style>