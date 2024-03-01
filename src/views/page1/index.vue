<script>
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin.js'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
export default {
  name: "index",
  data() {
    return {
      stArr: []
    }
  },
  mounted() {
    setTimeout(()=>{
      this.$emit("handleLoadingFalse")
      this.createTTs()
    },1000)
 /*   document.querySelector('.page-1').addEventListener("load",()=>{

    })*/
    /*this.$nextTick(()=>{
      const _doms=document.querySelectorAll('img')
      console.log(_doms)
      _doms.forEach((item,index)=>{
        console.log(index)
        item.addEventListener('load',()=>{
          console.log("图片"+index+"加载完成")
        })
      })
    })*/

  },
  methods: {
    createTTs() {
      this.createT1()
      this.createT3()
      this.createT4()
      this.createT5()
      this.createT6()
      this.createFooter()
    },
    createT1() {
      const st11 = ScrollTrigger.create({
        trigger: ".page-1-area-1",
        pin: true,
        start: "top top",
        bottom: "bottom top",
        scrub: true,
        animation: gsap.timeline()
            .to('.page-1-area-1 .img-item-2', {
              opacity: 1,
            })
            .to('.page-1-area-1 .img-item-2 img', {
              scale: 1.03,
              onComplete: () => {
                gsap.to(".page-1-area-1 .img-item-2 img", {
                  scale: 1
                })
              }
            }, "<")
            .to('.page-1-area-1 .img-item-2 img', {
              scale: 1,
            })
            .to('.page-1-area-1 .img-item-3', {
              opacity: 1,
            })
            .to(".page-1-area-1 .img-item-3 img", {
              scale: 1.03
            }, "<")
            .to(".page-1-area-1 .img-item-3 img", {
              scale: 1
            })
      })
      this.stArr.push(st11)
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
      const st13 = ScrollTrigger.create({
        trigger: ".page-1-area-3 .imgs-container-deep",
        scrub: true,
        start: "+=80% bottom",
        end: "center center",
        animation: t3
      })
      this.stArr.push(st13)
    },
    createT4() {
      const st14 = ScrollTrigger.create({
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
      this.stArr.push(st14)


    },
    createT5() {
      const st15 = ScrollTrigger.create({
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
      this.stArr.push(st15)
    },
    createT6() {
      const _dom = document.querySelector('.page-1-area-6')
      const st16 = ScrollTrigger.create({
        trigger: ".page-1-area-6",
        pin: true,
        start: "top top",
        end: "+=300",
        scrub: true,
        onEnter: () => {
          _dom.classList.add("active")
        },
        onLeaveBack: () => {
          _dom.classList.remove("active")
        },

      })
      this.stArr.push(st16)
    },
    createFooter() {
      const stFooter1 = ScrollTrigger.create({
        trigger: ".page-1 .page-footer",
        start: "top top+=10",
        onEnter: () => {
          gsap.to(".page-footer .footer-text", {
            opacity: 0, onComplete: () => {
              this.jumpPage()
            }
          })
        },
      })
      this.stArr.push(stFooter1)
      const stFooter2 = ScrollTrigger.create({
        trigger: ".page-1 .page-footer .footer-text",
        start: "bottom bottom-=12",
        end: "+=1080",
        pin: true
      })
      this.stArr.push(stFooter2)
    },
    jumpPage() {
      this.$emit("setCurrentPage", 2)
    },
    handleSelectFloat(index) {
      const _dom = document.querySelectorAll('.page-1-area-4 .dot-item')[index]
      const imgs = _dom.querySelectorAll("img")
      imgs.forEach(item => {
        gsap.timeline()
            .to(item, {
              scale: 0.5
            })
            .to(item, {
              scale: 1
            })
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
    this.stArr.forEach(item => {
      item.kill()
    })
    this.stArr = []
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
          <div class="fix-container">
            <img src="./img/area1-1.webp" height="100%" alt="">
          </div>
        </div>
      </div>
      <div class="img-container img-item-2">
        <div class="img-item ">
          <div class="fix-container">
            <img src="./img/area1-2.webp" height="103%" alt="">
          </div>
        </div>
      </div>
      <div class="img-container img-item-3">
        <div class="img-item">
          <div class="fix-container">
            <img src="./img/area1-3.webp" height="106%" alt="">
          </div>
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
    <section class="page-1-area-3">
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
        <div class="title" style="letter-spacing: -1.6px;">
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
              <img src="./img/area4-5d.png" class="copy-d" width="300" alt="">
            </div>
            <div class="dot-item" @click="handleSelectFloat(1)">
              <img src="./img/area4-6.webp" width="200" alt="">
              <img src="./img/area4-6d.png" class="copy-d" width="200" alt="">
            </div>
            <div class="dot-item" @click="handleSelectFloat(2)">
              <img src="./img/area4-7.webp" width="400" alt="">
              <img src="./img/area4-7d.png" class="copy-d" width="400" alt="">
            </div>
            <div class="dot-item" @click="handleSelectFloat(3)">
              <img src="./img/area4-8.webp" width="300" alt="">
              <img src="./img/area4-8d.png" class="copy-d" width="300" alt="">
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
    <section class="add-text-buchong">
      <div class="content-area">
        <div v-for="item in 6" class="cf-item">{{ $t(`page1.cf${item}`) }}</div>
      </div>
    </section>
    <section class="page-1-area-6 screen">
      <div class="container">
        <div class="img-container">
          <img class="bg-img" src="./img/area6-1.webp" width="100%" alt="">
        </div>
        <div class="text-area">
          <div class="title">island is land</div>
          <div class="">{{ $t('page1.area6.endDescribe') }}</div>
          <!--          <div v-for="item in 6" class="text-item">
                      <span>{{ $t(`page1.area6.text${item}`) }}</span>
                    </div>-->
        </div>
        <div class="white-area">
          <img src="./img/area6-2.webp" width="100%" alt="">
        </div>
      </div>
    </section>
    <section class="page-1-area-7 page-footer">
      <span class="footer-text">{{ $t('page1.area7.text') }}</span>
    </section>
  </div>
</template>

<style lang="less">
.page-1::-webkit-scrollbar {
  //width: 2px;
}

.page-1 {

  color: #171717;
  background-color: var(--content-bkcolor);
  font-family: var(--base-content-fontfamilly);

  .page-header {
    font-family: var(--base-title-fontfamilly);
    font-size: 26px;
    height: 46px;
    border-bottom: 1px solid #171717;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;

  }

  .screen {
    width: 100vw;
    height: 100vh;
    //scroll-snap-align: start;
    border-bottom: 1px solid #171717;
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
        width: max-content;
        //background-color: #fafafa;
        height: 100%;
        padding: 12px;
        border-right: 1px solid #171717;
        border-left: 1px solid #171717;
        margin: auto;
        display: flex;
        justify-content: center;
        background-color: var(--content-bkcolor);

        .fix-container {
          height: 100%;
          overflow: hidden;
        }
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
    border-bottom: 1px solid #171717;

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
      padding-bottom: 40px;

      .title {
        width: max-content;
        margin: auto;
        font-family: var(--title-bold-fontfamilly);
        font-size: 30px;
      }

      .describe {
        margin: 20px 0px 30px 0px;
      }
    }
  }

  .page-1-area-4 {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: relative;

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
        border-right: 1px solid #171717;
        border-left: 1px solid #171717;
        padding: 12px 12px 0px 12px;

      }

      .img-first {
        transform: scale(1.03) translateX(42vw);
        z-index: 5;
        transition: all 1s ease-in-out;

        img {
          height: 100vh;
          transition: all 1s ease-in-out;
        }
      }

      .img-second {
        opacity: 0;
        transform: scale(1.03);
        //transition: all 0.5s ease-in-out;
        img {
          height: 100vh;
          opacity: 0;
          transform: translateY(100vh);
          transition: all 1s ease-in-out;
        }
      }

      .img-third {
        position: relative;
        opacity: 0;
        transform: scale(1.03);
        padding-top: 46px;
        transition: all 1s ease-in-out;

        .third-container {
          width: 600px;
          height: 100%;
          overflow: hidden;
          transition: all 1s ease-in-out;

          position: relative;

          img {
            transition: all 1s ease-in-out;
            height: calc(100vh - 46px);
            transform: translateY(100vh);
            position: absolute;
            top: 46px;
            right: -180px;
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
            position: relative;
            //transition: all 0.5s ease-in-out;
            .copy-d {
              position: absolute;
              z-index: -1;
              left: -40px;
              top: 40px;
            }
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
            left: 30%;
            bottom: 86px;
            z-index: 6;
            animation: fudong1 4s linear infinite;
            transition: all 0.5s ease-in-out;
          }

          .dot-item:nth-child(2) {
            position: absolute;
            left: 26%;
            bottom: 180px;
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
            left: 140px;
            top: 53%;
            z-index: 3;
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
      padding: 0px 12px 12px 12px;

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
        opacity: 1;
        transition: all 0.5s ease-in-out 0.5s;
      }
    }
  }

  .page-1-area-4.second-step {
    .trans-move {
      gap: 200px;

      .img-second {
        opacity: 1;
        transform: scale(1);
        animation: imgSecondIn 1s ease-in-out;
        padding: 0px 12px 12px 12px;

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
            transform: translateY(0px);
            transition: all 0.5s ease-in-out;
          }
        }
      }
    }

  }

  .page-1-area-4.third-step {
    .trans-move {
      gap: 550px;
      padding-right: 0px;

      .img-third {
        padding-right: 0px;

        .third-container {
          //width: 1500px;
          img {
            transform: translateX(0px);
            right: -0px;
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
      padding: 12px 12px 0px 0px;
      position: relative;
      border-right: 1px solid #232323;
      border-left: 1px solid #232323;

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
          text-align: left;
          margin: 5vh auto;
          opacity: 0;
        }
      }

    }
  }
}

.add-text-buchong {
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .content-area {
    width: 600px;
    height: max-content;
    text-align: center;
    line-height: 2.5;
  }
}

.page-1-area-6 {
  .container {
    padding-top: 92px;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .img-container {
      width: 100vw;
      height: calc(100vh - 92px);
      overflow: hidden;
    }

    .bg-img {
      transform: scale(1.03);
      transition: all 0.5s ease-in-out;
      //height: calc(100vh - 92px);
    }

    .text-area {
      position: absolute;
      right: 90px;
      bottom: 200px;
      z-index: 5;

      width: 260px;

      .title {
        text-align: right;
        font-size: 26px;
        font-family: var(--title-bold-fontfamilly);
      }

      .text-item {
        text-align: right;
        margin: 10px 0px;
      }
    }

    .white-area {
      display: flex;
      align-items: center;
      position: absolute;
      right: 0px;
      top: 92px;
      background-color: #f0f0f0;
      z-index: 3;
      height: calc(100vh - 92px);
      border-top: 1px solid #7F583F;
      width: 500px;
      padding: 0px 90px;
      transform: translateX(100%);
      transition: all 0.5s ease-in-out;

      img {
        margin: auto;
        opacity: 0;
        transition: all 0.5s ease-in;
        transform: translateY(-100px);
      }
    }
  }
}

.page-1-area-6.active {
  .container {
    .bg-img {
      transform: scale(1);
    }

    .white-area {
      transform: translateY(0px);

      img {
        opacity: 1;
      }
    }
  }

}

.page-1-area-7 {
  background-color: #171717;
  height: 100vh;
  color: #fafafa;
  text-align: center;
  padding-top: 12px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
</style>