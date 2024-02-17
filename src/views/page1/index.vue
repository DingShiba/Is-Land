<script>
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin.js'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
export default {
  name: "index",
  data() {

  },
  mounted() {
    window.scroll(0, 0)
    this.createTTs()
  },
  methods: {
    createTTs() {
      this.createT1()
      this.createT3()
      this.createT4()
      this.createT5()
      this.createT6()
    },
    createT1() {
      ScrollTrigger.create({
        trigger: ".page-1-area-1",
        pin: true,
        start: "top top",
        bottom: "bottom top",
        scrub: true,
        animation: gsap.timeline()
            .to('.page-1-area-1 .img-item-2', {
              opacity: 1,
              height: "103vh"
            })
            .to(".page-1-area-1 .img-item-2", {
              height: "100vh"
            })
            .to('.page-1-area-1 .img-item-3', {
              opacity: 1,
              height: "103vh"
            })
            .to(".page-1-area-1 .img-item-3", {
              height: "100vh"
            })
      })
    },
    createT3() {
      const _boxs = document.querySelectorAll(".page-1-area-3 .imgs-container .imgs-item")
      const t3 = gsap.timeline()
      _boxs.forEach((box, index) => {
        t3.fromTo(box, {
          opacity: 0,
        }, {
          opacity: 1,
          ease: "power1.inOut",
          delay: 0.2
        }, '<')
      })
      ScrollTrigger.create({
        trigger: ".page-1-area-3 .imgs-container-deep",
        scrub: true,
        start: "+=80% bottom",
        end: "center center",
        animation: t3
      })
    },
    createT4() {

      ScrollTrigger.create({
        trigger: ".page-1-area-4",
        pin: true,
        start: "top top",
        end: "bottom top",
        scrub: true,
        toggleClass: "active",
        onUpdate: (self) => {
          // if(self.process)
          const _imgSecond = document.querySelector(".page-1-area-4 .img-second"),
              _imgFirst = document.querySelector(".page-1-area-4 .img-first"),
              _pageArea4 = document.querySelector(".page-1-area-4")
          if (self.progress > 0.25) {
            _pageArea4.classList.add("first-step")
          } else {
            _pageArea4.classList.remove('first-step')
          }
          if (self.progress > 0.5) {
            _pageArea4.classList.add("second-step")
          } else {
            _pageArea4.classList.remove("second-step")
          }
          if (self.progress > 0.75) {
            const _thirdImgWidth = document.querySelector('.page-1-area-4 .third-container img').offsetWidth
            document.querySelector(".page-1-area-4 .img-third .third-container").style.setProperty('width', _thirdImgWidth + 'px')
            _pageArea4.classList.add("third-step")
          } else {
            document.querySelector(".page-1-area-4 .img-third .third-container").style.setProperty('width', '600px')
            _pageArea4.classList.remove("third-step")
          }
          if (self.progress == 1) {
            _pageArea4.classList.add("leave-step")
          } else {
            _pageArea4.classList.remove("leave-step")
          }
        }
      })


    },
    createT5() {
      ScrollTrigger.create({
        trigger: ".page-1-area-5",
        pin: true,
        start: "top top",
        end: "bottom top",
        scrub: true,
        toggleClass: "active",
        animation: gsap.timeline()
            .to(".area-5-container .back-img", {
              scale: 1.25
            })
            .fromTo(".area-5-container .first-describe", {
              opacity: 0,
              y: 300
            }, {
              opacity: 1,
              y: 0
            }, "<")
            .to(".area-5-container .back-img", {
              scale: 1
            })
            .fromTo(".area-5-container .second-describe", {
              opacity: 0,
              y: 300
            }, {
              opacity: 1,
              y: 0
            }, "<")

      })
    },
    createT6() {
      const _dom=document.querySelector('.page-1-area-6')
      ScrollTrigger.create({
        trigger: ".page-1-area-6",
        pin: true,
        start: "top top",
        end: "+=300",
        scrub: true,
        onEnter:()=>{
          _dom.classList.add("active")
        },
        onLeaveBack:()=>{
          _dom.classList.remove("active")
        },

      })
    },
    handleSelectFloat(index) {
      const _dom = document.querySelectorAll('.page-1-area-4 .dot-item img')[index]
      gsap.timeline()
          .to(_dom, {
            scale: 0.5
          })
          .to(_dom, {
            scale: 1
          })
    },
    handleArea1Scroll() {
      const _top = document.querySelector('.page-1-area-1 .img-item-2').getBoundingClientRect().top
      /* if(_top==0){
         alert(1)
       }*/
    },
    getImage(index) {
      const _url = new URL(`./img/area3-${index}.webp`, import.meta.url)
      return _url.pathname
    }
  },
  unmounted() {
    ScrollTrigger.killAll()
  }
}
</script>

<template>
  <div class="page-1">
    <div class="page-header">
      <span>CeL24</span>
    </div>
    <section class="page-1-area-1 screen">
      <div class="img-container  img-item-1">
        <div class="img-item">
          <img src="./img/area1-1.webp" height="100%" alt="">
        </div>
      </div>
      <div class="img-container img-item-2">
        <div class="img-item ">
          <img src="./img/area1-2.webp" height="100%" alt="">
        </div>
      </div>
      <div class="img-container img-item-3">
        <div class="img-item">
          <img src="./img/area1-3.webp" height="100%" alt="">
        </div>
      </div>

    </section>
    <section class="page-1-area-2 screen">
      <div class="text-area">
        <div class="describe-1">
          <span>{{ $t('page1.describe1') }}</span>
        </div>
        <div class="describe-2">
          <span>{{ $t('page1.describe2') }}</span>
        </div>
        <div class="describe-3">
          <span>{{ $t('page1.describe3') }}</span>
        </div>
      </div>

    </section>
    <section class="page-1-area-3 screen">
      <div class="imgs-container">
        <div class="imgs-container-deep">
          <div v-for="item in 5" class="imgs-item">
            <img :src="getImage(item)"
                 width="100%"
                 alt="">
          </div>
        </div>
      </div>
      <div class="drifting">
        <div class="title">
          <span>{{ $t('page1.area3.title') }}</span>
        </div>
        <div class="text-area">
          <div class="describe-1 describe">
            <span>{{ $t('page1.area3.describe1') }}</span>
          </div>
          <div class="describe-2 describe">
            <span>{{ $t('page1.area3.describe2') }}</span>
          </div>
        </div>
      </div>
    </section>
    <section class="page-1-area-4 screen">
      <div class="trans-move">
        <div class="img-first img-item">
          <img src="./img/area4-1.webp" height="100%" alt="">
        </div>
        <div class="img-second img-item">
          <img src="./img/area4-2.webp" height="100%" alt="">
        </div>
        <div class="img-third img-item">
          <div class="third-container">
            <img src="./img/area4-3.webp" height="100%" alt="">
          </div>
          <div class="float-dot">
            <div class="dot-item" @click="handleSelectFloat(0)">
              <img src="./img/area4-5.webp" width="300" alt="">
            </div>
            <div class="dot-item" @click="handleSelectFloat(1)">
              <img src="./img/area4-6.webp" width="200" alt="">
            </div>
            <div class="dot-item" @click="handleSelectFloat(2)">
              <img src="./img/area4-7.webp" width="400" alt="">
            </div>
            <div class="dot-item" @click="handleSelectFloat(3)">
              <img src="./img/area4-8.webp" width="200" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="page-1-area-5 screen">
      <div class="area-5-container">
        <div class="left-img-area">
          <div class="img-container">
            <img class="left-img view-img" src="./img/area5-1.webp" alt="">
            <img class="left-img back-img" src="./img/area5-2.webp" alt="">
          </div>

        </div>
        <div class="text-describe-container">
          <div class="text-area">
            <div class="first-describe">
              <span>{{ $t('page1.area5.describe1') }}</span>
            </div>
            <div class="second-describe">
              <span>{{ $t('page1.area5.describe2') }}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section class="page-1-area-6 screen">
      <div class="container">
        <img class="bg-img" src="./img/area6-1.webp" width="100%" alt="">
        <div class="text-area">
          <div v-for="item in 6" class="text-item">
            <span>{{ $t(`page1.area6.text${item}`) }}</span>
          </div>
        </div>
        <div class="white-area">
          <img src="./img/area6-2.webp" width="60%" alt="">
        </div>
      </div>
    </section>
    <section class="page-1-area-7">
      <span>{{$t('page1.area7.text')}}</span>
    </section>
  </div>
</template>

<style lang="less">
.page-1::-webkit-scrollbar {
  //width: 2px;
}

.page-1 {
  --base-font-family: MS-EL;
  --title-family: MS-Bold;
  color: #171717;
  background-color: #fafafa;
  font-family: var(--base-font-family);
  /* scroll-snap-type: y mandatory;
   overflow: scroll;
   height: 100vh;*/

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

  .screen {
    width: 100vw;
    height: 100vh;
    //scroll-snap-align: start;
    border-bottom: 2px solid #232323;
    //padding-top: 46px;
  }

  .page-1-area-1 {
    position: relative;
    //background-color: #171717;
    overflow: hidden;

    .img-container {
      width: 100vw;
      height: 100vh;
      position: absolute;
      left: 0px;
      top: 0px;

      .img-item {
        padding: 0 30px;
        width: max-content;
        background-color: #fafafa;
        height: 100%;
        border-right: 2px solid #232323;
        border-left: 2px solid #232323;
        margin: auto;
        display: flex;
        justify-content: center;
      }


    }

    .img-item-1 {
      opacity: 1;
      z-index: 1;
    }

    .img-item-2 {
      opacity: 0;
      z-index: 2;
      //margin-top: 200px;
    }

    .img-item-3 {
      opacity: 0;
      z-index: 3;
      //margin-top: 200px;
    }
  }

  .page-1-area-2 {
    height: 600px;
    display: flex;
    align-items: center;

    .text-area {
      width: 50vw;
      margin: auto;

      .describe-2 {
        margin: 20px 0px;
      }
    }
  }

  .page-1-area-3 {
    .imgs-container {
      width: 100vw;
      padding: 46px 0px;

      .imgs-container-deep {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
      }

      .imgs-item {
        width: 15vw;
      }
    }

    .drifting {
      width: 40vw;
      margin: auto;
      text-align: center;

      .title {
        width: max-content;
        margin: auto;
        font-family: var(--title-family);
        height: 25px;
        border-bottom: 1px solid #232323;
      }

      .describe {
        margin: 20px 0px;
      }
    }
  }

  .page-1-area-4 {
    --imgFirstWidth: 0px;
    height: 100vh;
    width: 100vw;
    //background-color: red;
    overflow: hidden;
    position: relative;
    //scroll-snap-align: start;

    .trans-move {
      position: absolute;
      right: 0px;
      top: 0;
      display: flex;
      justify-content: space-between;
      height: 100%;
      align-items: flex-start;
      gap: 20px;
      width: max-content;
      min-width: 100vw;
      padding-right: 20px;
      transition: gap 0.5s ease-in-out;

      .img-item {
        width: max-content;
        height: 100%;
        transform: scale(1.03);
        display: flex;
        align-items: flex-end;
        border-right: 2px solid #232323;
        border-left: 2px solid #232323;
        padding: 0px 20px 0px 20px;

      }

      .img-first {
        transform: scale(1.03) translateX(42vw);
        z-index: 5;
        transition: all 0.5s ease-in-out;

        img {
          height: 100vh;
          transition: all 0.5s ease-in-out;
        }
      }

      .img-second {
        opacity: 0;
        transform: scale(1.03);
        //transition: all 0.5s ease-in-out;
        img {
          height: 100vh;
          transform: translateY(100vh);
          transition: all 0.5s ease-in-out;
        }
      }

      .img-third {
        position: relative;
        opacity: 0;
        transform: scale(1.03);
        padding-top: 46px;
        transition: all 0.5s ease-in-out;

        .third-container {
          width: 600px;
          overflow: hidden;
          transition: all 0.5s ease-in-out;

          img {
            transition: all 0.5s ease-in-out;
            -webkit-clip-path: inset(0% 10% 0% 35%);
            height: calc(100vh - 46px);
            transform: translateX(-35%) translateY(100vh);
          }
        }

        .float-dot {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 6;
          transition: all 0.5s ease-in-out;

          .dot-item {
            cursor: pointer;
            opacity: 0;
            //transition: all 0.5s ease-in-out;
          }

          @keyframes fudong1 {
            0% {
              transform: translateX(0px);
            }
            25% {
              transform: translateX(5px);
            }
            50% {
              transform: translateX(0px);
            }
            75% {
              transform: translateX(-5px);
            }
            100% {
              transform: translateX(0px);
            }
          }
          @keyframes fudong2 {
            0% {
              transform: translateY(0px) scale(1);
            }
            25% {
              transform: translateY(5px) scale(0.98);
            }
            50% {
              transform: translateY(0px) scale(1);
            }
            75% {
              transform: translateY(-5px) scale(1.02);
            }
            100% {
              transform: translateY(0px) scale(1);
            }
          }
          @keyframes fudong3 {
            0% {
              transform: translateX(0px) scale(1);
            }
            25% {
              transform: translateX(-5px) scale(1.02);

            }
            50% {
              transform: translateX(0px) scale(1);
            }
            75% {
              transform: translateX(5px) scale(0.98);
            }
            100% {
              transform: translateX(0px) scale(1);
            }
          }
          @keyframes fudong4 {
            0% {
              transform: translateY(0px) scale(1);
            }
            25% {
              transform: translateY(-5px) scale(1.02);

            }
            50% {
              transform: translateY(0px) scale(1);
            }
            75% {
              transform: translateY(5px) scale(0.98);

            }
            100% {
              transform: translateY(0px) scale(1);
            }
          }

          .dot-item:nth-child(1) {
            position: absolute;
            left: 45%;
            bottom: 46px;
            z-index: 6;
            animation: fudong1 4s linear infinite;
            transition: all 0.5s ease-in-out;
          }

          .dot-item:nth-child(2) {
            position: absolute;
            left: 30%;
            bottom: 80px;
            z-index: 5;
            animation: fudong2 4s linear infinite;
            transition: all 0.5s ease-in-out 0.2s;
          }

          .dot-item:nth-child(3) {
            position: absolute;
            left: -100px;
            bottom: 150px;
            z-index: 5;
            animation: fudong3 4s linear infinite;
            transition: all 0.5s ease-in-out 0.4s;
          }

          .dot-item:nth-child(4) {
            position: absolute;
            left: 200px;
            top: 45%;
            z-index: 5;
            animation: fudong4 4s linear infinite;
            transition: all 0.5s ease-in-out 0.6s;
          }
        }


      }
    }
  }

  .page-1-area-4.active {
    .img-first {
      transform: translateX(42vw) scale(1);
    }
  }

  .page-1-area-4.first-step {
    .img-first {
      transform: translateX(0px);
      padding: 0px 20px 20px 20px;

      img {
        height: 88vh;
      }
    }

    @keyframes imgSecondIn {
      0% {
        opacity: 0;
        transform: scale(1.03);
      }
      50% {
        opacity: 1;
        transform: scale(1.03);
      }
      100% {
        transform: scale(1);
      }
    }

    .img-second {
      opacity: 1;
      transform: scale(1);
      animation: imgSecondIn 1s ease-in-out;

      img {
        transform: translateY(0px);
        transition: all 0.5s ease-in-out;
      }
    }
  }

  .page-1-area-4.second-step {
    .img-second {
      opacity: 1;
      transform: scale(1);
      animation: imgSecondIn 1s ease-in-out;
      padding: 0px 20px 20px 20px;

      img {
        height: 88vh;
      }
    }

    .img-third {
      opacity: 1;
      transform: scale(1);
      animation: imgSecondIn 1s ease-in-out;

      .third-container {
        img {
          transform: translateX(-35%) translateY(0px);
          transition: all 0.5s ease-in-out;
        }
      }
    }
  }

  .page-1-area-4.third-step {
    .trans-move {
      gap: 550px;
      padding-right: 0px;
    }

    .img-third {
      padding-right: 0px;

      .third-container {
        //width: 1500px;

        img {
          -webkit-clip-path: inset(0% 0% 0% 0%);
          transform: translateX(0px);
        }
      }

      .float-dot {
        opacity: 1;

        .dot-item {
          opacity: 1;
          transition: opacity 0.5s ease-in-out;
        }

      }
    }


  }

  .page-1-area-4.leave-step {
    .img-third {
      .float-dot {
        opacity: 0;
      }
    }

  }

}

@keyframes scaleIn {
  from {
    transform: scale(1.03);
  }
  to {
    transform: scale(1);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }

}

.page-1-area-5 {
  .area-5-container {

    display: flex;
    height: 100vh;
    overflow: hidden;

    .left-img-area {
      width: 50vw;
      overflow: hidden;
      display: flex;
      align-items: flex-start;
      padding: 46px 20px 0px 0px;
      position: relative;
      border-right: 2px solid #232323;
      border-left: 2px solid #232323;

      .img-container {
        width: 100%;
        overflow: hidden;

      }

      .left-img {
        width: 100%;
        //transform: scale(1.8);
        //height: calc(100vh - 46px);
      }

      .back-img {
        transform: scale(1.5);
      }

      .view-img {
        position: absolute;
        z-index: 5;
        left: 0;
        top: 46px;
        width: 120%;
        transform: translateX(-30%) translateY(-5%);
      }
    }

    .text-describe-container {
      width: 50vw;
      padding: 0px 8vw;
      display: flex;
      align-items: center;

      .text-area {
        .first-describe, .second-describe {
          text-align: center;
          margin: 10vh auto;
          opacity: 0;
        }
      }

    }
  }
}

.page-1-area-6 {
  .container {
    padding-top: 92px;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .bg-img {
      transform: scale(1.03);
      transition: all 0.5s ease-in-out;
      //height: calc(100vh - 92px);
    }

    .text-area {
      position: absolute;
      right: 92px;
      bottom: 92px;
      z-index: 5;
      .text-item {
        text-align: right;
        margin: 10px 0px;
      }
    }
    .white-area{
      display: flex;
      align-items: center;
      position: absolute;
      right:0px;
      top:92px;
      background-color: #fafafa;
      z-index: 3;
      height: calc(100vh - 92px);
      border-top: 2px solid #7F583F;
      width: max-content;
      padding: 0px 92px;
      transform: translateX(100%);
      transition: all 0.5s ease-in-out;
      img{
        margin: auto;
        opacity: 0;
        transition: all 0.5s ease-in;
        transform: translateY(-100px);
      }
    }
  }
}
.page-1-area-6.active{
  .container{
    .bg-img{
      transform: scale(1);
    }
    .white-area{
      transform: translateY(0px);
      img{
        opacity: 1;
      }
    }
  }

}
.page-1-area-7{
  background-color: #171717;
  height: 46px;
  color: #fafafa;
  text-align: center;
  line-height: 46px;
}
</style>