<script>
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin.js'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
export default {
  name: "index",
  data() {
    return {
      areaVideoVisible: false,
      fixHome: undefined,
      hasInit: false
    }
  },
  mounted() {
    document.querySelector('body').style.setProperty("overflow", 'hidden')
    this.$refs.page0.addEventListener("wheel", (e) => {
      if (this.hasInit == false) {
        this.areaVideoVisible = true

        this.$refs.area1Video.play()
        this.$refs.area1Video.addEventListener("ended", this.handleListenVideoEnded)
        this.hasInit = true
      }
    })
    //   第er部-分
    this.createT2()
    // this.createT3()


  },
  methods: {
    createT2() {
      ScrollTrigger.create({
        trigger: ".area-2",
        start: "top top",
        end: "+=400",
        pin: true,
        scrub:true,
        markers: true,
        animation:gsap.timeline()
            .fromTo('.header-title-body',
                {
                  opacity:1,
                  height:200,
                },{
                  opacity:0,
                  height:0,
                },'<')
            .fromTo('.header-title .title',{
              height:100,
              fontSize:'30px'
            },{
              height:60,
              fontSize:'20px',
              duration:1
            },'<')

      })
      /*     gsap.timeline()
               .to(window, {
                 scrollTo: '#menu',
                 duration: 0.5,
                 onComplete:()=>{
                   gsap.to('.header-title .header-title-body',{
                     opacity:0,
                     height:0,
                     scrollTrigger:{
                       trigger:'.area-2',
                       pin:".xuni",
                       start:"top top",
                       end :"+=200",
                       scrub:true
                     }
                   })
                   gsap.to('.header-title .title',{
                     height:'60px',
                     fontSize:28,
                     scrollTrigger:{
                       trigger:'.area-2',
                       pin:".xuni",
                       start:"top top",
                       end :"+=200",
                       scrub:true
                     }
                   })
                   /!*ScrollTrigger.create({
                     trigger: ".area-2",
                     start: "top top",
                     end: "+=400",
                     markers: true,
                     scrub: true,
                     onUpdate: (self) => {
                       console.log("se", self.progress)
                     },
                     animation:gsap.timeline()
                         .to(".header-title .header-title-body",{
                           opacity:0,
                           duration:1
                         })


                   })*!/
                 }
               })
               .fromTo('.area2texts', {
                 height: 0,
                 opacity: 0,
               },{
                 height: 200,
                 opacity: 1,
                 duration: 1
               })*/


    },
    createT3() {


    },
    handleScroll() {
      const scrollTop = document.querySelector('.scroll-area').getBoundingClientRect().top
      console.log(scrollTop)
    },
    /**
     * 监听视频播放完成事件*/
    handleListenVideoEnded() {
      document.querySelector('body').style.setProperty("overflow", 'auto')
      // this.$refs.scrollArea.removeEventListener('wheel')
      gsap.to('.area-1-video-title', {
        opacity: 0,
        onUpdate: () => {
          const _top = document.querySelector('.area-1').getBoundingClientRect().top
          this.$refs.area1Video.style.setProperty('transform', `translateY(${-_top}px)`)

        },
        onComplete: () => {
          gsap.timeline()
              .to(window, {
                scrollTo: '#menu',
              })
              .fromTo('.area2texts', {
                height:0,
                opacity:0
              },{
                height:200,
                opacity:1,
                duration:1
              })
        },
        scrollTrigger: {
          trigger: '.area-1',
          start: "top top",
          end: "+=400",
          scrub: true,

        }
      })
    },
    endedVideo() {
      alert('1')
    }
  }
}
</script>

<template>
  <div class="page-0" ref="page0">
    <div class="scroll-area" ref="scrollArea">

    </div>
    <section class="area-1">
      <img class="area-img-1" src="./img/initTitle.webp" width="100%" alt="">
      <video ref="area1Video"
             v-show="areaVideoVisible"
             class="area-1-video-title"
             preload>
        <source src="./img/biaoti.mp4">
      </video>
    </section>
    <section class="area-2" id="menu">
      <div class="xuni">
        <div class="header-title">
          <div class="title">CeL24</div>
          <div class="header-title-body" style="overflow: hidden;">
            <div class="flex area2texts"
                 style="padding:0px 24px;align-items: flex-start;justify-content: space-between;">

              <div class="date-time">2019/2020</div>
              <div class="text-label">
                sajhddgis asdj ijasiodj ioasjdioj iaosjdpoasjopdjioasjioqwjiodja sasiodjioas jidasojdio jasiodj
              </div>
              <div class="toggleLanguage">
                <a style="text-decoration: underline;">切换成中文</a>
              </div>
            </div>
            <div class="descripe">
              iashjkdhjk aosjdk jkasjkdjl jpalsjdklj klasjkldj lha
              iashjkdhjk aosjdk jkasjkdjl jpalsjdklj klasjkldj lha
              iashjkdhjk aosjdk jkasjkdjl jpalsjdklj klasjkldj lha
              iashjkdhjk aosjdk jkasjkdjl jpalsjdklj klasjkldj lha
            </div>
          </div>

        </div>
        <div class="flex" style="justify-content: center">
          <span>
          <img src="./img/area3Img1.webp" alt="">
        <div class="flex" style="justify-content: space-between;align-items: flex-start;">
          <div class="left-describe"></div>
          <div class="right-describe">
            saihdfaslas dsfsaffsd sdsd
            saihdfaslas dsfsaffsd sdsd
             saihdfaslas dsfsaffsd sdsd
             saihdfaslas dsfsaffsd sdsd
             saihdfaslas dsfsaffsd sdsd
             saihdfaslas dsfsaffsd sdsd
             saihdfaslas dsfsaffsd sdsd
             saihdfaslas dsfsaffsd sdsd
             saihdfaslas dsfsaffsd sdsd
             saihdfaslas dsfsaffsd sdsd
             saihdfaslas dsfsaffsd sdsd
          </div>
        </div>

          </span>
        </div>
      </div>
    </section>
    <section class="area-3">


    </section>
  </div>
</template>

<style scoped lang="less">
/*.page-0::-webkit-scrollbar{
  display: none;
}*/
:root::-webkit-scrollbar {
  display: none;
}

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
  height: 5000vh;
  overflow: hidden;
  position: relative;
  color: black;

  .area-1 {
    width: 100%;
    overflow: hidden;
    position: relative;

    .area-1-video-title {
      position: absolute;
      left: 0px;
      top: 0px;
      mix-blend-mode: screen;
      animation: fadeIn 1s ease-in-out;
      z-index: 2;
    }

  }

  .area-2 {
    .header-title {
      padding: 12px 0;
      border-bottom: 2px solid #000;

      .title {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-weight: bold;
        font-size: 30px;
        height: 100px;
        letter-spacing: 4px;
      }

      .area2texts {
        height: 0;
        opacity: 0;
        overflow: hidden;
      }

      .descripe {
        width: 40%;
        margin: auto;
        white-space: normal;
      }
    }

    .right-describe {
      width: 200px;
      white-space: normal;
      height: 500px;
    }
  }

  .area-3 {
    padding: 24px 0px;

  }
}
</style>