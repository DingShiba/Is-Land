<script>
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default {
  name: "index",
  mounted() {
    this.createTTs()
  },
  methods: {
    createTTs() {
      this.createT31()
      this.createT32()
      this.createT33()
    },
    createT31() {
      ScrollTrigger.create({
        trigger: ".page-3-area-1",
        pin: true,
        scrub: true,
        start: "top top",
        end: "+=2000",
        onUpdate: (self) => {
          const _imgArea = document.querySelector(".tarns-area .img-area"),
              _tarnsArea = document.querySelector(".page-3-area-1 .tarns-area")
          if (self.progress > 0.1) {
            _imgArea.classList.add("active")
          } else {
            _imgArea.classList.remove('active')
          }
          if (self.progress > 0.2) {
            _imgArea.classList.add("second-step")
          } else {
            _imgArea.classList.remove('second-step')
          }
          if (self.progress > 0.3) {
            _imgArea.classList.add("third-step")
          } else {
            _imgArea.classList.remove('third-step')
          }
          if (self.progress > 0.4) {
            _imgArea.classList.add("third-step")
          } else {
            _imgArea.classList.remove('third-step')
          }
          if (self.progress > 0.5) {
            _tarnsArea.classList.add("force-step")
          } else {
            _tarnsArea.classList.remove('force-step')
          }
          if (self.progress > 0.6) {
            _tarnsArea.classList.add("five-step")
          } else {
            _tarnsArea.classList.remove('five-step')
          }
          if (self.progress > 0.7) {
            _tarnsArea.classList.add("six-step")
          } else {
            _tarnsArea.classList.remove('six-step')
          }
        },
        /* animation: gsap.timeline()
             .fromTo(".page-3-area-1 .float-img", {
               top: 80,
               opacity: 1
             }, {
               top: -300,
               opacity: 0
             })
             .fromTo(".page-3-area-1 .img-area", {
               width: '40vw'
             }, {
               width: '10vw',
             })
             .to(".page-3-area-1 .img-area", {
               opacity: 0,
             })
             .to(".tarns-area", {
               padding: 0
             }, "<")
             .set(".tarns-area", {
               y: '-100vh'
             })*/
        /*.fromTo(".page-3-area-1 .base-img",{
          width:'10vw',
          opacity:1
        },{
          width:0,
          opacity:0,

        })*/


      })
    },
    createT32() {
      ScrollTrigger.create({
        trigger: ".page-3-area-2",
        pin: true,
        scrub: true,
        start: "top top",
        end: "bottom top",
        animation: gsap.timeline()
            .to(".page-3-area-1 .left-line", {
              x: '-50vw'
            })
            .to(".page-3-area-1 .right-line", {
              x: '50vw'
            }, "<")
            .to(".page-3-area-2 .base-img", {
              scale: 3.5
            }, "<")
            .to(".page-3-area-2 .float-img", {
              scale: 2,
              y: 300
            }, "<")
            .to(".page-3-area-2 .base-img", {
              scale: 5
            })
            .to(".page-3-area-2 .float-img", {
              scale: 4,
              y: 500,
              opacity: 0
            })
            .to(".page-3-area-2 .area2Video", {
              opacity: 1,
              onStart: () => {
                document.querySelector('.page-3-area-2 .area2Video').play()
              }
            }, '<')
            .to(".page-3-area-2 .area2Video", {
              y: -300,
            })


      })
    },
    createT33(){
      ScrollTrigger.create({
        trigger:".page-3-area-3",
        scrub:true,
        start:"top +=650",
        end:"top top",
        onEnter:()=>{
          gsap.fromTo(".page-3-area-3 .text-area",{
            opacity:0,
          },{
            duration:1,
            opacity:1
          })
          gsap.fromTo(".page-3-area-3 .left-video",{
            opacity:0,
          },{
            duration:1,
            opacity:1
          })
        },
        onLeaveBack:()=>{
          gsap.fromTo(".page-3-area-3 .text-area",{
            opacity:1,
          },{
            duration:1,
            opacity:0
          })
          gsap.fromTo(".page-3-area-3 .left-video",{
            opacity:1,
          },{
            duration:1,
            opacity:0
          })
        },
        animation:gsap.timeline()
            .to(".page-3-area-2 .zhezhao",{
              backgroundColor:"rgba(0,0,0,1)"
            })
      })
    }
  },
  unmounted() {
    ScrollTrigger.killAll()
  }

}
</script>

<template>
  <div class="page-3">
    <div class="page-header">
      <span>CeL24</span>
    </div>
    <section class="page-3-area-1">
      <div class="tarns-area">
        <div class="vertical-line left-line"></div>
        <div class="vertical-line right-line"></div>
        <div class="img-area">
          <img src="./img/area1-1.webp" alt="" class="base-img">
          <img src="./img/area1-2.webp" alt="" class="float-img active-img">
          <div class="second-area">
            <div style="height: 100vh;background-color: #fafafa;">
              <div class="img-list">
                <img src="./img/area1-3.webp" alt="">
                <img src="./img/area1-4.webp" alt="">
                <img src="./img/area1-5.webp" alt="">
                <img src="./img/area1-6.webp" alt="">
              </div>
              <div class="text-describe">{{ $t('page3.describe1') }}</div>
            </div>
            <div class="end-img">
              <img src="./img/area1-7.webp" width="100%" alt="">
            </div>
          </div>
        </div>

      </div>
    </section>
    <section class="page-3-area-2">
      <div class="img-container">
        <div class="img-area">
          <img src="./img/area2-1.webp" class="base-img" alt="">
          <img src="./img/area2-2.webp" class="float-img" alt="">

        </div>
      </div>
      <video class="area2Video" preload>
        <source src="./img/area2-3.mp4">
      </video>
      <div class="zhezhao">

      </div>
    </section>
    <section class="page-3-area-3">
      <div class="container">
        <video preload autoplay loop class="left-video">
          <source src="./img/area3-1.webm">
        </video>
        <div class="text-area">
          <div class="title">{{$t('page3.area3.title')}}</div>
          <div class="first-describe">{{$t('page3.area3.firstDescribe')}}</div>
          <div class="second-describe">{{$t('page3.area3.secondDescribe')}}</div>
        </div>
      </div>
    </section>
    <section class="page-3-area-4">
      <div class="content-area">
        <img src="./img/area4-1.webp" width="70%" alt="">
        <img src="./img/area4-2.webp" width="30%" alt="">
      </div>
    </section>
    <section class="page-3-area-5">
      <div class="img-show">
        <img src="./img/area5-1.webp" width="100%">
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

.page-3-area-1 {
  height: 100vh;
  display: flex;
  justify-content: center;

  .tarns-area {
    position: relative;
    padding: 20px;
    height: 100vh;
    transition: all 1s ease-in-out;

    .vertical-line {
      position: absolute;
      top: 0;
      width: 1px;
      background-color: #171717;
      height: 900vh;
    }

    .left-line {
      left: 0;
    }

    .right-line {
      right: 0;
    }

    .img-area {
      width: 36vw;
      position: relative;
      height: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;
      transition: all 1s ease-in-out;

      .base-img {
        width: 100%;
      }

      .float-img {
        position: absolute;
        left: 30px;
        width: 30vw;
        top: 15%;
        z-index: 2;
        transition: all 1s ease-in-out;
      }

      @keyframes floatImg {
        0% {
          transform: translateX(5px);
        }
        25% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateY(5px);
        }
        75% {
          transform: translateY(-5px);
        }
        100% {
          transform: translateX(5px);
        }
      }

      .active-img {
        animation: floatImg 4s linear infinite;
      }

      .second-area {
        width: 100%;
        height: 100vh;
        position: absolute;
        background-color: #fafafa;
        z-index: 5;
        opacity: 0;
        left: 0;
        top: 0;

        .img-list {
          display: flex;
          gap: 20px;
          margin-top: 100px;
          justify-content: center;
          align-items: center;

          img {
            width: 18vw;
            opacity: 0;
            transition: all 1s ease-in-out;
          }

          img:nth-child(1) {
            transition-delay: 1s;
          }

          img:nth-child(2) {
            transition-delay: 0.5s;
          }

          img:nth-child(3) {
            transition-delay: 0.5s;
          }

          img:nth-child(4) {
            transition-delay: 1s;
          }
        }

        .text-describe {
          width: 400px;
          margin: 100px auto;
          text-align: center;
        }

        .end-img {
          width: 100%;
        }
      }
    }

    .img-area.active {
      .float-img {
        opacity: 0;
        top: -40%;
      }
    }

    .img-area.second-step {
      width: 20vw;
    }

    .img-area.third-step {
      width: 10vw;
    }


  }

  .tarns-area.force-step {
    @keyframes secondShow {
      0% {
        width: 10vw;
      }
      50% {
        width: 0px;
        padding: 0px;
      }
      100% {
        padding: 20px;
        width: 80vw;
      }
    }

    .img-area {
      width: 80vw;
      animation: secondShow 1s ease-in-out;
    }

    @keyframes secondOpacity {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    .second-area {
      opacity: 1;
      animation: secondOpacity 1s ease-in-out;

      .img-list {
        img {
          opacity: 1;
        }
      }

    }

  }

  .tarns-area.five-step {

    @keyframes zhedie {
      0% {
        transform: rotateY(0deg);
      }
      100% {
        transform: rotateY(90deg);
      }
    }

    .img-list {
      img {
        transition-delay: 0s;
        transform: rotateY(90deg);
        animation: zhedie 1s ease-in-out;
      }
    }

    .second-area {
      transition: all 0.5s ease-in-out;
      transition-delay: 1s;
      transform: translateY(-200px);
    }
  }

  .tarns-area.six-step {
    .second-area {
      transition-delay: 0s;
      transform: translateY(calc(-100vh - 100px));
    }

    .img-area {
      width: 36vw;
    }
  }
}

.page-3-area-2 {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  border-top: 1px solid #171717;
  border-bottom: 1px solid #171717;
  display: flex;
  position: relative;
  justify-content: center;

  .vertical-line {
    width: 1px;
    background-color: #171717;
    height: 100%;
  }

  .img-container {
    padding: 20px;
  }

  .img-area {
    width: 36vw;
    position: relative;

    img {
      width: 100%;
    }

    .float-img {
      position: absolute;
      z-index: 5;
      left: 0;
      top: 0;
    }

  }

  .area2Video {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100vw;
    opacity: 0;
  }
  .zhezhao {
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    background-color: rgba(0,0,0,.0);
  }
}

.page-3-area-3 {
  width: 100vw;
  position: relative;
  .container {
    display: flex;
    justify-content: space-between;
    background-color: #fafafa;
    border-bottom: 1px solid #171717;

    .left-video {
      width: 40vw;
      //mix-blend-mode: screen;
    }

    .text-area {
      width: 60vw;
      padding: 100px;
      line-height: 1.5;
      opacity: 0;
      font-family: Rany-normal;
      .title{
        font-family: Rany-Bold;
        width: max-content;
        font-size: 25px;
        border-bottom: 1px solid #171717;
      }
      .first-describe{
        margin: 20px 0px;
      }
    }
  }


}

.page-3-area-4 {
  height: 100vh;
  width: 100vw;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  .content-area{
    width: 100%;
    display: flex;
  }
}
</style>