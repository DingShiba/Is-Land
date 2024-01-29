<script>
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin.js'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
export default {
  name: "index",
  data() {
    return {
      bodyHeight: 0,
      areaVideoVisible: false,
      fixHome: undefined,
      hasInit: false
    }
  },
  mounted() {
    gsap.to(window, {
      scrollTo: ".page-0",
      duration: 0.5
    })
    document.body.style.setProperty('overflow', 'hidden')
    document.addEventListener('wheel', this.handleWeel)
    // this.createTTs()
  },
  methods: {
    createTTs() {
      ScrollTrigger.create({
        trigger: ".menu-header",
        scrub: true,
        pin: true,
        end: "+=999999",
      })
      this.createT1()
      this.createT2()
      this.createT4()
      this.createT5()
    },
    handleWeel() {
      document.removeEventListener('wheel', this.handleWeel)
      gsap.fromTo('.area-1-video-title', {
        opacity: 0,
      }, {
        opacity: 1,
      })
      this.$refs.area1Video.play()
      this.$refs.area1Video.addEventListener('ended', this.handleVideoEnd)
    },
    createT1() {
      ScrollTrigger.create({
        trigger: ".mobilization",
        start: "top top",
        end: "bottom center",
        scrub: true,
        onUpdate: () => {
          const _top = document.querySelector('.mobilization').getBoundingClientRect().top
          this.$refs.area1Video.style.setProperty("transform", `translateY(${-_top}px)`)
        },
        animation: gsap.to('.area-1-video-title', {
          opacity: 0,
        })
      })
      ScrollTrigger.create({
        trigger: '.header-title',
        start: 'top center',
        end: "+=400",
        scrub: true,
        toggleClass: "active",
        onEnter: () => {
          gsap.timeline()
              .to(window, {
                scrollTo: '.header-title-container',
                duration: 0.5
              })
              .fromTo('.deep-second-img', {
                scale: 0.8
              }, {
                scale: 1
              },'<')

        },

      })
      /*固定deep-2*/
      ScrollTrigger.create({
        trigger: '.deep-second',
        pin: true,
        start: "top top",
        end: "+=1400",
        scrub: true,
      })
      /*固定header-title*/
      ScrollTrigger.create({
        trigger: '.header-title-container',
        pin: true,
        scrub: true,
        start: 'top top',
        end: '+=427',
        onUpdate: (self) => {
        },
        onEnter: () => {
          gsap.timeline()
              .to('.area2texts', {
                opacity: 1,
                height: 280
              })
              .to('.deep-second .move-area', {
                paddingTop: 440
              }, '<')
        },
        animation: gsap.timeline()
            .fromTo('.header-title-body', {
              opacity: 1,
              height: 320
            }, {
              height: 0,
              opacity: 0
            })
            .to('.deep-second .move-area', {
              y: -350
            }, '<')
            .to('.header-title .title', {
              fontSize: 16
            }, '<')
            .to('.header-title', {
              paddingBottom: 0
            }, "<")
            .set('.menu-header', {
              opacity: 1
            }, ">")
      })

    },
    createT2() {
      ScrollTrigger.create({
        trigger: ".area-2",
        pin: true,
        start: "top top",
        end: "bottom top",
        scrub: true,
        animation: gsap.timeline()
            .to('.area-2-1 img', {
              scale: 1.2,
              x: -100
            })
            .to(".area-2-2", {
              y: '-50vh'
            }, "<")
            .to(".area-2-2", {
              y: '-50vh'
            }, "<")
            .to(".area-2-3", {
              height: 0
            }, ">")
            .to(".area-2-4", {
              height: '70vh'
            }, ">")
            .to(".area-2-1", {
              opacity: 0
            }, "<")
            .to(".area-2-footer-bg", {
              height: 0
            }, "<")
            .to(".area-2-footer-text", {
              height: 0
            }, "<")
      })
      ScrollTrigger.create({
        trigger: ".area-2",
        start: "top bottom",
        end: "+=1080",
        scrub: true,
        markers: true,
        animation: gsap.timeline()
            .fromTo('.area-2-1', {
              opacity: 0
            }, {
              duration: 1,
              opacity: 1
            })
            .fromTo('.area-2-footer-text', {
              opacity: 0
            }, {
              opacity: 1
            }, '>')
      })
    },
    createT4() {
      /*  const _res=document.querySelector('.area-4 .cao-img-item')
        _res.forEach(item=>{
          gsap.to(item,{
            opacity:1,
            scrollTrigger:{
              trigger:".area-4",
              start:"top bottom",
              end:'+=600',
              scrub:true,
              markers:true
            }
          })
        })*/
      ScrollTrigger.create({
        trigger: ".area-4",
        scrub: true,
        markers: true,
        start: 'top center+=100',
        end: "+=500",
        animation: gsap.timeline()
            .to('.area-4-cao-imgs .cao-img-item1', {
              opacity: 1,
              ease: "power1.in",
            })
            .to('.area-4-cao-imgs .cao-img-item2', {
              opacity: 1,
              delay: 0.2,
              ease: "power1.in",
            }, "<")
            .to('.area-4-cao-imgs .cao-img-item3', {
              opacity: 1,
              delay: 0.2,
              ease: "power1.in",
            }, "<")
            .to('.area-4-cao-imgs .cao-img-item4', {
              opacity: 1,
              delay: 0.2,
              ease: "power1.in",
            }, "<")
      })

    },
    createT5() {
      ScrollTrigger.create({
        trigger: ".area-5",
        pin: true,
        start: "top top",
        end: 'bottom top',
        scrub: true,
        markers: true,
        onEnter: () => {
          gsap.to('.area-5 .list-video', {
            opacity: 1,
            onStart: () => {
              document.querySelector('.area-5 .list-video').play()
            }
          })
        },
        animation: gsap.timeline()
            .to('.area-5-2', {
              x: 500,
            })
            .set('.move-container .gifs-arr', {
              opacity: 1
            })
            .to('.area-5-2', {
              x: 1800,
            }, '<')
            .fromTo('.area-5 .list-video', {
              opacity: 1,
            }, {
              opacity: 0,
            }, "<")
            .to(".move-container", {
              x: -460,
            })
      })
    },
    handleVideoEnd() {
      document.body.style.setProperty("overflow", "auto")
      this.$refs.area1Video.removeEventListener('ended', this.handleVideoEnd)
      this.createTTs()
    },
  },
  unmounted() {
    ScrollTrigger.killAll()
  }
}
</script>

<template>
  <div class="page-0" ref="page0">
    <div class="menu-header">
      CeL24
    </div>
    <section class="area-1 screen">
      <div class="deep-first">
        <div class="mobilization">
          <img class="area-img-1"
               src="./img/initTitle.webp"
               height="100%"
               width="100%" alt="">
          <video ref="area1Video"
                 class="area-1-video-title"
                 preload>
            <source src="./img/biaoti.mp4">
          </video>
        </div>
        <div class="header-title-container">
          <div class="header-title" id="cel24">
            <div class="title">CeL24</div>
            <div class="header-title-body" style="overflow: hidden;">
              <div class="flex area2texts"
                   style="padding:0px 24px;align-items: flex-start;justify-content: space-between;">
                <div class="date-time">2019/2020</div>
                <div class="text-label">
                  {{ $t('page0.textArea') }}
                </div>
                <div class="toggleLanguage">
                  <a style="text-decoration: underline;">切换成中文</a>
                </div>
              </div>
              <div class="descripe">
                <div class="descripe-item">{{ $t('page0.describe1') }}</div>
                <div class="descripe-item">{{ $t('page0.describe2') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="deep-second">
        <div class="move-area">
          <img class="deep-second-img" src="./img/area3Img1.webp" alt="">
          <div class="flex" style="justify-content: flex-end">
            <div class="describe">
              <div class="right-1 describe-item">{{ $t('page0.footer1') }}</div>
              <div class="right-2 describe-item">{{ $t('page0.footer2') }}</div>
            </div>
          </div>
          <div class="left-area">
            <div class="left1">
              <span>{{ $t('page0.left1') }}</span>
            </div>
            <div class="left2" style="margin-top: 20px">
              <span>{{ $t('page0.left2') }}</span>
            </div>
          </div>
        </div>


      </div>

    </section>
    <section class="area-2 screen">
      <div class="area-2-footer-text">
        <div class="text-item">
          <span>{{ $t('page0.area2.fixed1') }}</span>
        </div>
        <div class="text-item">
          <span>{{ $t('page0.area2.fixed2') }}</span>
        </div>
      </div>
      <div class="area-2-copy-text">
        <div class="text-item">
          <span>{{ $t('page0.area2.fixed1') }}</span>
        </div>
        <div class="text-item">
          <span>{{ $t('page0.area2.fixed2') }}</span>
        </div>
      </div>
      <div class="area-2-footer-bg">

      </div>
      <div class="area-2-1 area-2-item">
        <img src="./img/area-2-1.webp" width="100%" height="100%" alt="">
      </div>
      <div class="area-2-2 area-2-item ">
        <div class="text-describe">
          <div class="text-1 text-item">
            <span>{{ $t('page0.area2.describe1') }}</span>
          </div>
          <div class="text-2 text-item">
            <span>{{ $t('page0.area2.describe2') }}</span>
          </div>
          <div class="text-3 text-item">
            <span>{{ $t('page0.area2.describe3') }}</span>
          </div>
        </div>
        <div class="kongbai">

        </div>
      </div>
      <div class="area-2-3 area-2-item ">
        <div class="ba-img">
          <img src="./img/area-2-2.webp" width="100%" alt="">
        </div>

      </div>
      <div class="area-2-4 area-2-item ">
        <div class="ba-img">
          <img src="./img/area-2-4.webp" width="100%" alt="">
        </div>
      </div>
    </section>
    <section class="area-4">
      <div class="area-4-title">
        <span>Island is land</span>
      </div>
      <div class="area-4-cao-imgs">
        <img class="cao-img-item cao-img-item1" src="./img/area-4-1.webp" alt="">
        <img class="cao-img-item cao-img-item2" src="./img/area-4-2.webp" alt="">
        <img class="cao-img-item cao-img-item3" src="./img/area-4-3.webp" alt="">
        <img class="cao-img-item cao-img-item4" src="./img/area-4-4.webp" alt="">
      </div>
    </section>
    <section class="area-5">
      <div class="area-5-title">
        <span>LOOK BOOK:</span>
      </div>
      <div class="area-5-describe">
        <span style="display:block;width: 40vw">{{ $t('page0.area5.describe') }}</span>
      </div>
      <div class="area-5-movies">
        <div class="area-5-2">
          <img src="./img/area-5-2.webp" width="100%" height="100%" alt="">
        </div>
        <div class="area-5-3">
          <div class="move-container">
            <img class="movies-index movies-item" src="./img/area-5-movies-index.webp" alt="">
            <div class="gifs-arr">
              <img class="movies-item" src="./img/area5/0-10a.webp">
              <img class="movies-item" src="./img/area5/0-10a.webp">
              <img class="movies-item" src="./img/area5/0-10a.webp">
              <img class="movies-item" src="./img/area5/0-10a.webp">
            </div>

            <!--            <img src="img/area5/area5-2.gif">
                        <img src="img/area5/area5-3.gif">
                        <img src="img/area5/area5-4.gif">-->
          </div>
        </div>
      </div>
      <video class="list-video"
             refs="area5Video"
             preload>
        <source src="./img/area-5-1.mp4">
      </video>
    </section>
    <section class="footer">

    </section>
  </div>
</template>

<style scoped>
/*.page-0::-webkit-scrollbar{
  display: none;
}*/

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.flex {
  display: flex;
  align-items: center;

}

.page-0 {
  width: 100vw;
  position: relative;
  color: #232323;
  font-size: 16px;
  --Rany-font-family: #7F583F;
  --base-width: 90vw;

  .screen {
    width: 100%;
    height: 100vh;
    background-color: #f0f0f0;
  }

  .menu-header {
    height: 46px;
    border-bottom: 2px solid #232323;
    opacity: 0;
    font-family: Rany-Bold;
    font-weight: bold;
    background-color: #fafafa;
    display: flex;
    align-items: center;
    justify-content: center;
  //padding: 14px 0px; width: 100%; letter-spacing: 2px; font-size: 16px; position: absolute;
    z-index: 9999999;
    left: 0;
    top: 0;
  }

  .area-1 {
    position: relative;

    .deep-first {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 15;

      .mobilization {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        position: relative;
      }

      .header-title {
        border-bottom: 2px solid #232323;
        background-color: #fafafa;
        padding-bottom: 14px;

        .title {
          font-family: Rany-Bold;
          font-size: 60px;
          font-weight: normal;
          letter-spacing: 2px;
          text-align: center;
          padding: 14px 0px;
        }

        .area2texts {
          font-family: 思源黑体-EL;
          font-size: 16px;
          height: 0;
          overflow: hidden;
          white-space: normal;
          opacity: 0;

          .text-label {
            width: 530px;
          }
        }

        .descripe {
          margin: auto;
          width: 530px;
        }
      }

      .area-1-video-title {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        opacity: 0;
        width: 100%;
        height: 100vh;
        mix-blend-mode: screen;
      }
    }

    .deep-second {
      height: 100vh;
      width: 90%;
      margin: auto;

      .move-area {
        padding-top: 164px;
      }

      .deep-second-img {
        display: block;
        margin: auto;
        width: 100%;
        transform: scale(.8);
      }

      .describe {
        width: 600px;
        text-align: right;
      }

      .left-area {
        width: 60%;
        font-family: Rany-normal;
      }
    }


  }

  .area-2 {
    height: 100vh;
    border-top: 2px solid #232323;
    position: relative;
    margin-top: 150vh;

    .area-2-footer-text {
      position: absolute;
      z-index: 11;
      width: 600px;
      left: 5vw;
      overflow: hidden;
      top: calc(100vh - 355px);

      .text-item {
        margin: 40px 20px;
        color: #fafafa;
        font-family: Rany-normal;
      }
    }

    .area-2-footer-bg {
      position: absolute;
      z-index: 10;
      width: 600px;
      height: 247px;
      left: 5vw;
      top: calc(100vh - 355px);
      background-color: #171717;
      backdrop-filter: blur(5px);
    }

    .area-2-copy-text {
      position: absolute;
      z-index: 4;
      width: 600px;
      left: 5vw;
      bottom: 0;

      .text-item {
        margin: 40px 20px;
        color: #232323;
        font-family: Rany-normal;
      }
    }

    .area-2-item {
      position: absolute;
      left: 0;
      top: 0;
    }

    .area-2-1 {
      z-index: 10;
      width: 100%;
      height: 100vh;
      position: relative;
      display: flex;
      justify-content: flex-end;

      img {
        position: absolute;
        right: 0px;
        top: 0;
      }
    }

    .area-2-2 {
      font-family: Rany-normal;
      border-bottom: 2px solid #232323;
      z-index: 9;
      width: 100%;
      background-color: #fafafa;

      .kongbai {
        height: 60px;
        border-top: 2px solid #232323;
      }

      .text-describe {
        width: var(--base-width);
        margin: auto;
        padding: 60px 0px;

        .text-item {
          margin-top: 20px;
          width: 40vw;
        }
      }

      .text-1 {

      }
    }

    .area-2-3 {
      position: absolute;
      z-index: 8;
      left: 0;
      top: 0;
      overflow: hidden;
      height: 100vh;

      .ba-img {
        width: 90%;
        margin: auto;

      }
    }

    .area-2-4 {
      position: absolute;
      z-index: 7;
      left: 0;
      top: 0;
      overflow: hidden;
      height: 100vh;

      .ba-img {
        width: 90%;
        margin: auto;

      }
    }
  }

  .area-4 {
    .area-4-title {
      height: 46px;
      line-height: 46px;
      text-align: center;
      width: 100vw;
      border-bottom: 2px solid #232323;
      font-family: Rany-normal;
      font-size: 16px;
    }

    .area-4-cao-imgs {
      width: 70%;
      margin: 60px auto;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .cao-img-item {
        width: 15vw;
        opacity: 0;
      }
    }
  }

  .area-5 {
    height: 100vh;
    background-color: #f0f0f0;

    .list-video {
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      z-index: 11;
      mix-blend-mode: screen;
    }

    .area-5-title {
      width: 90vw;
      margin: auto;
      padding-top: 10vh;
      font-family: Rany-Bold;
      font-size: 30px;

    }

    .area-5-describe {
      width: 80vw;
      margin: 5px auto 20px;
    }

    .area-5-movies {
      width: 100vw;
      position: relative;
      overflow: hidden;
    }

    .area-5-1 {
      position: absolute;
      z-index: 8;
      right: 10vw;
      top: 0;
    }

    .area-5-2 {
      width: 80vw;
      height: 750px;
      margin: auto;
      position: absolute;
      z-index: 10;
      left: 10vw;
      top: 0;

    }

    .area-5-3 {
      height: 750px;
      width: 100vw;
      overflow: hidden;

      .move-container {
        height: 100%;
        display: flex;
        transform: translateX(10vw);

        .gifs-arr {
          opacity: 0;
          display: flex;
        }

        .movies-item {
          height: 100%;
        }
      }

    }

  }

  .footer {

    height: 600px;
    background-color: #232323;
  }

}
</style>