<script>
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default {
  name: "index",
  props: ["language"],
  data() {
    return {
      stArr: [],
      newsImg: [1, 2, 3, 4],
      currentImg: 1,
      pptVisible: false,
      xNum: window.innerWidth/2-1290/2,
      moveDistance: 0
    }
  },
  mounted() {
    setTimeout(()=>{
      this.$emit("handleLoadingFalse")
      this.setArea3Height()
      this.createTTs()
    },1500)
  },
  methods: {
    setArea3Height(){
      const _height=document.querySelector('.page-3-area-2 .area2Video').offsetHeight-300;
      document.querySelector('.page-3-area-2').style.setProperty('height',_height+'px')
    },
    getImage(name) {
      const _url = new URL(`./img/${name}`, import.meta.url)
      return _url.pathname
    },
    createTTs() {
      this.createT31()
      this.createT32()
      this.createT33()
        this.createFooter()

    },
    createT31() {
      const st31 = ScrollTrigger.create({
        trigger: ".page-3-area-1",
        pin: true,
        scrub: true,
        start: "top top",
        end: "+=2000",
        onUpdate: (self) => {
          const _imgArea = document.querySelector(".tarns-area .img-area"),
              _tarnsArea = document.querySelector(".page-3-area-1 .tarns-area"),
              _selectedImg = document.querySelector('.page-3-area-1 .selected-img')
          /*if (self.progress > 0.1) {
            _imgArea.classList.add("active")
            _selectedImg.classList.add("fly-hidden")
          } else {
            _imgArea.classList.remove('active')
            _selectedImg.classList.remove('fly-hidden')
          }*/
          if (self.progress > 0.1) {
            _imgArea.classList.add("second-step")
            _selectedImg.classList.add("fly-hidden")
          } else {
            _imgArea.classList.remove('second-step')
            _selectedImg.classList.remove('fly-hidden')
          }
          if (self.progress > 0.2) {
            _imgArea.classList.add("third-step")
          } else {
            _imgArea.classList.remove('third-step')
          }
          if (self.progress > 0.3) {
            _imgArea.classList.add("third-step")
          } else {
            _imgArea.classList.remove('third-step')
          }
          if (self.progress > 0.4) {
            _tarnsArea.classList.add("force-step")
          } else {
            _tarnsArea.classList.remove('force-step')
          }
          if (self.progress > 0.6) {
            _tarnsArea.classList.add("five-step")
          } else {
            _tarnsArea.classList.remove('five-step')
          }
          if (self.progress > 0.8) {
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
      this.stArr.push(st31)
    },
    createT32() {
      const st32 = ScrollTrigger.create({
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
      this.stArr.push(st32)
    },
    createT33() {
      const st33 = ScrollTrigger.create({
        trigger: ".page-3-area-3",
        scrub: true,
        start: "top +=650",
        end: "top top",
        onEnter: () => {
          gsap.fromTo(".page-3-area-3 .text-area", {
            opacity: 0,
          }, {
            duration: 1,
            opacity: 1
          })
          gsap.fromTo(".page-3-area-3 .left-video", {
            opacity: 0,
          }, {
            duration: 1,
            opacity: 1
          })
        },
        onLeaveBack: () => {
          gsap.fromTo(".page-3-area-3 .text-area", {
            opacity: 1,
          }, {
            duration: 1,
            opacity: 0
          })
          gsap.fromTo(".page-3-area-3 .left-video", {
            opacity: 1,
          }, {
            duration: 1,
            opacity: 0
          })
        },
        animation: gsap.timeline()
            .to(".page-3-area-2 .zhezhao", {
              backgroundColor: "rgba(0,0,0,1)"
            })
      })
      this.stArr.push(st33)
    },
    handleOpenZhedie() {
      if (!this.pptVisible) {
        gsap.to(".zhedie-area", {
          height: 800,
          onComplete: () => {
            this.pptVisible = true
          }
        })
        gsap.set(".zhedie-area .trans-move-area", {
          x: this.xNum
        })
      }

    },
    handleCloseZhedie() {
      gsap.to(".zhedie-area", {
        height: 0,
        onComplete: () => {
          this.pptVisible = false
          this.xNum = 100
        }
      })
    },
    handleDragStrat(e) {
      let _this = this;
      let drag = document.querySelector('.zhedie-area .trans-move-area')
      let diffX = e.clientX;
      document.onmousemove = function (e) {
        // 元素的 clientX 和 clientY 默认是以元素左上角位置来计算的，这里需要向左向上同时减去鼠标点击的位置差，从而可以保证鼠标始终显示在拖拽元素时的位置
        _this.moveDistance = e.clientX - diffX;
        // 边界处理，防止超出各个边
        /* if (left < 0) {
           left = 0;
         } else if (left > window.innerWidth - drag.offsetWidth) {
           left = window.innerWidth - drag.offsetWidth;
         }*/
        const leftMax=24*1290-(window.innerWidth/2-1290/2)
        let _xTrue = _this.xNum + _this.moveDistance
        if (_xTrue > (window.innerWidth/2-1290/2)) {
          _xTrue = (window.innerWidth/2-1290/2)
        }else if(_xTrue < -leftMax){
          _xTrue = -leftMax
        }
        drag.style.setProperty("transform", `translateX(${_xTrue}px)`);
      };

    },
    handleDragEnd(e) {
      this.xNum += this.moveDistance;
      if (this.xNum > 100) {
        this.xNum = 100
      }
      this.moveDistance = 0;

      document.onmousemove = null
    },
    handleSelectImg(index, e) {
      const _domLeft = e.srcElement.getBoundingClientRect().left + 332 / 2;
      const _distance = (this.currentImg + 3) * (332 + 60) - (window.innerWidth / 2 - 150 - 332 / 2) -
          (window.innerWidth / 2 - _domLeft - 150);
      gsap.timeline()
          .to(".page-3-area-1 .new-imgs .move-area", {
            x: -_distance,
          })
          .to(".page-3-area-1 .new-imgs", {
            opacity: 0,
            zIndex: 3
          })
          .to(".selected-img .selected-img-container",{
            opacity:1
          },"<")
      this.currentImg = index
    },
    handleOpenListImg() {
      const _dis = (this.currentImg + 3) * (332 + 60) - (window.innerWidth / 2 - 150 - 332 / 2);
      console.log(_dis)
      gsap.timeline()
          .to(".selected-img .selected-img-container",{
            opacity:0
          })
          .set(".new-imgs .move-area", {
            x: -_dis
          },"<")
          .to(".page-3-area-1 .new-imgs", {
            opacity: 1,
            zIndex: 10
          },"<")
    },
    closeSelect(){
      gsap.timeline()
          .to(".page-3-area-1 .new-imgs", {
            opacity: 0,
            zIndex: 3
          })
          .to(".selected-img .selected-img-container",{
            opacity:1
          },"<")
    },
    createFooter() {
      const stFooter1 = ScrollTrigger.create({
        trigger: ".page-footer",
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
        trigger: ".page-footer .footer-text",
        start: "bottom bottom-=12",
        end: "+=1080",
        pin: true
      })
      this.stArr.push(stFooter2)
    },
    jumpPage(){
      this.$emit("setCurrentPage",4)
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
  <div class="page-3" @click.stop="handleCloseZhedie">
    <div class="page-header">
      <span>CeL24</span>
    </div>
    <section class="page-3-area-1">
      <div class="tarns-area">
        <div class="vertical-line left-line"></div>
        <div class="vertical-line right-line"></div>
        <div class="img-area">
          <img src="./img/area1-1.webp" alt="" class="base-img">
          <!--          <img src="./img/news-1.webp" alt="" class="float-img active-img">-->
          <div class="second-area">
            <div style="height: 100vh;background-color: #f0f0f0;">
              <div class="img-list">
                <img src="./img/area1-3.webp" alt="">
                <img src="./img/area1-4.webp" alt="">
                <img src="./img/area1-5.webp" alt="">
                <img src="./img/area1-6.webp" alt="">
              </div>
              <div class="text-describe">
                <div>{{ $t('page3.describe1') }}</div>
                <div>{{ $t('page3.describe2') }}</div>
                <div>{{ $t('page3.describe3') }}</div>
                <div>{{ $t('page3.describe4') }}</div>
              </div>

            </div>
            <div class="end-img">
              <img src="./img/area1-7.webp" width="100%" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="selected-img">
        <div class="selected-img-container">
          <img class="selected-img-item"
               @click="handleOpenListImg"
               :src="getImage('news-'+currentImg+'.webp')" alt="">
        </div>
      </div>
      <div class="new-imgs" @click.stop="closeSelect">
        <div class="move-area">
          <div class="img-item" v-for="item in newsImg" @mousedown="handleSelectImg(item,$event)">
            <img :src="getImage('news-'+item+'.webp')" alt="">
          </div>
          <div class="img-item" v-for="item in newsImg" @mousedown="handleSelectImg(item,$event)">
            <img :src="getImage('news-'+item+'.webp')" alt="">
          </div>
          <div class="img-item" v-for="item in newsImg" @mousedown="handleSelectImg(item,$event)">
            <img :src="getImage('news-'+item+'.webp')" alt="">
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
        <video preload autoplay muted loop class="left-video">
          <source src="./img/area3-1.webm">
        </video>
        <div class="text-area">
          <div class="title" @click.stop="handleOpenZhedie">{{ $t('page3.area3.title') }}</div>
          <div class="first-describe">{{ $t('page3.area3.firstDescribe') }}</div>
          <div class="second-describe">{{ $t('page3.area3.secondDescribe') }}</div>
        </div>
      </div>
    </section>
    <section class="zhedie-area" @click.stop="handleOpenZhedie">
      <div class="trans-move-area">
        <img v-for="item in 25"
             :src="getImage('ppt/ppt'+item+'.webp')"
             alt="">
      </div>
      <div class="visible-dom" @mouseup="handleDragEnd"
           @mousedown="handleDragStrat"></div>
      <div class="footer" v-if="language=='zh'">最后更新时间：2020/08/15</div>
      <div class="footer" v-else>Last updated: 15th Aug, 2020</div>
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
    <section class="page-footer">
      <span class="footer-text">{{$t('page1.area7.text')}}</span>
    </section>
  </div>
</template>

<style scoped lang="less">
.page-3 {
  font-family: var(--base-content-fontfamilly);
  background-color: var(--content-bkcolor);
}

.page-header {
  font-family: var(--base-title-fontfamilly);
  font-size: 26px;
  height: 46px;
  border-bottom: 2px solid #171717;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--title-bkcolor);

}

.page-3-area-1 {
  height: 100vh;
  display: flex;
  justify-content: center;

  .tarns-area {
    position: relative;
    padding: 0px 12px 12px 12px;
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
      width: 40vw;
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


      .second-area {
        width: 100%;
        height: 100vh;
        position: absolute;
        background-color: #f0f0f0;
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
            transition-delay: 0.8s;
          }

          img:nth-child(3) {
            transition-delay: 0.8s;
          }

          img:nth-child(4) {
            transition-delay: 1s;
          }
        }

        .text-describe {
          width: 440px;
          margin: 100px auto;
          text-align: center;
          line-height: 2;
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
      width: 40vw;
    }
  }

  .selected-img {
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    align-items: center;
    left: 0;
    top: 0;
    z-index: 5;
    transform: translateY(-50px);
    transition: opacity 0.5s linear;

    .selected-img-container {
      width: 330px;
      margin: auto;
      img {
        height: 556px;
        margin: auto;
        position: relative;
        left: -150px;
        cursor: pointer;
      }
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

    .selected-img-item {
      animation: floatImg 4s linear infinite;
    }
  }

  .selected-img.fly-hidden {
    opacity: 0;

  }

  .new-imgs {
    width: 100vw;
    position: absolute;
    left: 0;
    top: 0px;

    z-index: 3;
    opacity: 0;
    height: 100vh;
    overflow: hidden;

    background-color: rgba(255, 255, 255, .8);

    .move-area {
      display: flex;
      align-items: center;
      height: 100vh;
      gap: 60px;
      width: max-content;
      transform: translateX(-930px) translateY(-50px);
    }

    .img-item {
      border: 1px solid #232323;
      height: 556px;
      width: 330px;
      display: flex;
      overflow: hidden;
      justify-content: center;
      img {
        height: 556px;
      }

    }

    .img-item:hover {
      border-width: 2px;
    }
  }
}

.page-3-area-2 {
  width: 100vw;
  border-top: 1px solid #171717;
  display: flex;
  position: relative;
  justify-content: center;

  .vertical-line {
    width: 1px;
    background-color: #171717;
    height: 100%;
  }

  .img-container {
    padding: 12px;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  .img-area {
    width: 40vw;
    height: 100vh;
    margin: auto;
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
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, .0);
  }
}

.page-3-area-3 {
  width: 100vw;
  position: relative;
  border-top: 1px solid #171717;
  .container {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #171717;

    .left-video {
      width: 40vw;
      border-right: 1px solid #232323;
      //mix-blend-mode: screen;
    }

    .text-area {
      width: 60vw;
      padding: 100px;
      line-height: 1.5;
      opacity: 0;

      .title {
        cursor: pointer;
        font-family: var(--title-bold-fontfamilly);
        width: max-content;
        font-size: 25px;
        border-bottom: 1px solid #171717;
      }

      .first-describe {
        margin: 20px 0px;
      }
    }
  }


}

.zhedie-area {
  //height: 85vh;
  height: 0;
  width: 100vw;
  background-color: #cbcbcb;
  overflow: hidden;
  position: relative;

  .visible-dom {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 5;
    position: absolute;
  }

  .trans-move-area {
    height: calc(800px - 48px);
    display: flex;
    width: max-content;
    padding: 12px 0px;
    transform: translateX(100px);

    img {
      border-top: 1px solid #232323;
      border-left: 1px solid #232323;
      border-bottom: 1px solid #232323;
      width: 1290px;
    }

    img:nth-child(25) {
      border-right: 1px solid #232323;
    }
  }

  .footer {
    text-align: center;
    padding: 12px 0;
  }
}

.page-3-area-4 {
  height: 100vh;
  width: 100vw;
  margin-bottom: 20px;

  .content-area {
    width: 100%;
    display: flex;
  }
}
.page-footer{
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