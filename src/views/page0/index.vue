<script>
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin.js'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
export default {
  name: "index",
  props: ["language"],
  data() {
    return {
      stArr: [],
      linksEn: "Yoshiyuki Iwase BachmannEckenstein Basel / Yoshiyuki Iwase - Japanese Master Photographer / Haenyeo - Seeing the Incredible Women Divers of Jeju Island - South Korea! - Dive O'Clock! / Ama Women Divers of Japan - Where to See & Explore this Culture - Dive O'Clock! / Culture of Jeju Haenyeo (women divers) - YouTube / Osatsu-kamado Ama Hut Experience ISESHIMA TOBA City / 海女（职业名称）_百度百科 / 这群韩国“海女”都七八十岁高龄了，还在下海捕捞 / 真实美人鱼，海女的历史与现状 / 海女的群像，那些在海里捡珍珠的人 / VisitJeju - 济州岛旅游综合信息网，济州岛自由行攻略 / 제주해녀박물관 ",
      linksZh: "Yoshiyuki Iwase BachmannEckenstein Basel / Yoshiyuki Iwase - Japanese Master Photographer / Haenyeo - Seeing the Incredible Women Divers of Jeju Island - South Korea! - Dive O'Clock! / Ama Women Divers of Japan - Where to See & Explore this Culture - Dive O'Clock! / Culture of Jeju Haenyeo (women divers) - YouTube / Osatsu-kamado Ama Hut Experience ISESHIMA TOBA City / 海女（职业名称）_百度百科 / 这群韩国“海女”都七八十岁高龄了，还在下海捕捞 / 真实美人鱼，海女的历史与现状 / 海女的群像，那些在海里捡珍珠的人 / VisitJeju - 济州岛旅游综合信息网，济州岛自由行攻略 / 제주해녀박물관",
      httpLinks: [
        "http://1995-2015.undo.net/it/mostra/88438",
          "http://yoshiyuki-iwase.blogspot.com/",
          "https://www.diveoclock.com/destinations/Asia/South_Korea/Haenyeo/",
          "https://www.diveoclock.com/destinations/Asia/Japan/Ama/",
          "https://www.youtube.com/watch?v=lk7DQLMKBTE",
          "https://osatsu.org/en/",
          "https://baike.baidu.com/item/海女/71257",
          "https://baijiahao.baidu.com/s?id=1720654313046941250&wfr=spider&for=pc",
          "https://www.douban.com/note/691652759/?from=tag&_i=4530369HMV8gKP,8430195HMV8gKP",
          "https://m.thepaper.cn/baijiahao_9306843",
          "https://www.visitjeju.net/cn",
          "http://www.jeju.go.kr/haenyeo/index.htm#english"
      ]
    }
  },
  mounted() {
    this.createTTs()
  },
  methods: {
    createTTs() {
      /*  ScrollTrigger.create({
          trigger: ".menu-header",
          scrub: true,
          pin: true,
          end: "+=999999",
        })*/
      this.createT0()
      // this.createT1()
      this.createT2()
      this.createT4()
      this.createT5()
    },
    handleWeel() {
      gsap.to('.ruchang-back', {
        opacity: 0.3,
        duration: 2,
        ease: "power1.inOut"
      })
      gsap.to('.area-1-video-2', {
        opacity: 1,
        duration: 2,
        ease: "power1.inOut"
      })
      this.$refs.biaotiVideo.play()
    },
    createT0() {
      const stg0 = ScrollTrigger.create({
        trigger: ".init-container",
        pin: true,
        start: "top top",
        end: "+=1080",
        scrub: true,
        markers: true,
        scroller: ".page-0-area-0",
        onUpdate: () => {
          const _top = document.querySelector('.in-sce').getBoundingClientRect().top
          this.$refs.biaotiVideo.style.setProperty("transform", `translateY(${-_top}px)`)
        },
        animation: gsap.timeline()
            .to('.ru-chang', {
              y: '-100vh',
            })
            .to(".area-1-video-2", {
              opacity: 0
            }, "<")
            .to(".page-0-area-1 .deep-second", {
              scale: 1
            }, "<")
            .fromTo(".area2texts", {
              height: 0
            }, {
              height: 230
            })
            .to(".page-0-area-1 .deep-second .move-area", {
              paddingTop: 420
            }, "<")
            .to(".page-0-area-0 .header-title-body .area2texts", {
              opacity: 0,
              height: 0
            })
            .to(".page-0-area-0 .header-title-body .descripe", {
              opacity: 0,
              height: 0
            }, "<")
            .to(".page-0-area-0 .title", {
              fontSize: 26,
              letterSpacing: 0,
              height: 46
            }, "<")
            .to(".header-title-container", {
              padding: 0
            }, "<")
            .to(".page-0-area-1 .deep-second .move-area", {
              paddingTop: 66,
            }, "<")
            .set(".page-0 .page-header", {
              opacity: 1
            })
            .set(".page-0-area-0", {
              zIndex: -1,
              onComplete: () => {
                gsap.to(".menu-nav", {
                  opacity: 1
                })
              }
            })

      })
      this.stArr.push(stg0)
    },
    createT1() {
      let st01 = ScrollTrigger.create({
        trigger: ".page-0-area-1",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        onUpdate: () => {
          const _top = document.querySelector('.in-sce').getBoundingClientRect().top
          this.$refs.biaotiVideo.style.setProperty("transform", `translateY(${-_top}px)`)
        },
        animation: gsap.timeline()
            .to('.ru-chang', {
              y: '-100vh',
            })
            .to(".area-1-video-2", {
              opacity: 0
            }, "<")
            .to(".page-0-area-1 .deep-second", {
              scale: 1
            }, "<")
            .fromTo(".area2texts", {
              height: 0
            }, {
              height: 230
            })
            .to(".page-0-area-1 .deep-second .move-area", {
              paddingTop: 420
            }, "<")
            .to(".page-0-area-1 .header-title-body .area2texts", {
              opacity: 0,
              height: 0
            })
            .to(".page-0-area-1 .header-title-body .descripe", {
              opacity: 0,
              height: 0
            }, "<")
            .to(".page-0-area-1 .title", {
              fontSize: 26,
              letterSpacing: 0,
              height: 46
            }, "<")
            .to(".header-title-container", {
              padding: 0
            }, "<")
            .to(".page-0-area-1 .deep-second .move-area", {
              paddingTop: 66,
            }, "<")
            .set(".page-0 .page-header", {
              opacity: 1
            })

      })
      this.stArr.push(st01)
      /* ScrollTrigger.create({
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
               }, '<')

         },

       })
       /!*固定deep-2*!/
       ScrollTrigger.create({
         trigger: '.deep-second',
         pin: true,
         start: "top top",
         end: "+=1400",
         scrub: true,
       })
       /!*固定header-title*!/
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
       })*/

    },
    createT2() {
      const st021 = ScrollTrigger.create({
        trigger: ".area-2",
        pin: true,
        start: "top top",
        end: "bottom top",
        scrub: true,
        animation: gsap.timeline()
            .to('.area-2-1', {
              scale: 1.2,
              x: -100
            })
            .to(".area-2-2", {
              y: '-50vh'
            }, "<")
            .to(".area-2-3", {
              clipPath: "inset(0px 0px 100% 0px)"
            })
            .fromTo(".area-2-1", {
              opacity: 1
            }, {
              opacity: 0
            }, "<")
            .to(".area-2-4", {
              y: -50
            })

            .to(".area-2-footer-bg", {
              clipPath: "inset(0px 0px 100% 0px)"
            })
            .to(".area-2-footer-text", {
              clipPath: "inset(0px 0px 100% 0px)"
            }, "<")
            .to(".area-2-4", {
              y: -300
            }, "<")
            .to(".area-2-4", {
              y: -350
            })
      })
      this.stArr.push(st021)
      const st022 = ScrollTrigger.create({
        trigger: ".area-2",
        start: "top bottom",
        end: "+=1080",
        scrub: true,
        animation: gsap.timeline()
            .fromTo('.area-2-1', {
              opacity: 0
            }, {
              duration: 1,
              opacity: 1
            })
            .fromTo('.area-2-2 .text-describe', {
              opacity: 0
            }, {
              duration: 1,
              opacity: 1
            }, "<")
            .fromTo('.area-2-footer-text', {
              opacity: 0
            }, {
              opacity: 1
            }, '>')
      })
      this.stArr.push(st022)
    },
    createT3() {
      const st03 = ScrollTrigger.create({
        trigger: ".area-3",
        scrub: true,

      })
      this.stArr.push(st03)
    },
    createT4() {
      const st04 = ScrollTrigger.create({
        trigger: ".area-4",
        scrub: true,
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
      this.stArr.push(st04)
    },
    createT5() {
      const st05 = ScrollTrigger.create({
        trigger: ".area-5",
        pin: true,
        start: "top top",
        end: 'bottom top',
        scrub: true,
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
      this.stArr.push(st05)
    },
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
  <div class="page-0" ref="page0">
    <div class="page-header">
      <span>CeL24</span>
    </div>
    <section class="page-0-area-0">
      <div class="init-container">
        <div class="ru-chang">
          <div class="in-sce">
            <video class="area-1-video-1"
                   autoplay
                   loop
                   preload>
              <source src="./img/backvideo.webm">
            </video>
            <img src="./img/ruchangBack.jpg" class="ruchang-back" alt="">
            <video class="area-1-video-2"
                   ref="biaotiVideo"
                   @click="handleWeel"
                   preload>
              <source src="./img/biaoti.mp4">
            </video>
          </div>
          <div class="header-title-container">
            <div class="header-title" id="cel24">
              <div class="title">CeL24</div>
              <div class="header-title-body"
                   style="overflow: hidden;">
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
      </div>
    </section>
    <section class="page-0-area-1">
      <div class="deep-second">
        <div class="move-area">
          <img class="deep-second-img" src="./img/area3Img1.webp" alt="">
          <div class="flex" style="justify-content: flex-end;margin-top: 12px">
            <div class="describe">
              <div class="right-1 describe-item">{{ $t('page0.footer1') }}</div>
              <div class="right-2 describe-item">{{ $t('page0.footer2') }}</div>
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
    <section class="area-3 screen">
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
    <section class="area-5" style="overflow: hidden">
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
             controls
             preload>
        <source src="./img/list-en.webm">
      </video>
    </section>
    <section class="footer">
      <div class="lianxi">
        <h2>{{ $t('page0.footer.lianxi') }}</h2>
        <span>cellphone24@163.com</span>
      </div>
      <div class="lianjie">
        <h2>{{ $t('page0.footer.lianjie') }}</h2>
        <div class="links">
          <span v-if="language=='en'">
            <span v-for="(item,index) in linksEn.split('/')">
              <a :href="httpLinks[index]"
                class="link-item"
                 target="_blank">{{item}}</a>
            <span v-if="index<httpLinks.length-1">/</span>
            </span>
          </span>
          <span v-else>
            <span v-for="(item,index) in linksZh.split('/')">
              <a :href="httpLinks[index]"
                 class="link-item"
                 target="_blank">{{item}}</a>
            <span v-if="index<httpLinks.length-1">/</span>
            </span>
          </span>
        </div>
      </div>
      <div class="introduce">
        <div class="first-intro">
          <div class="flex">
            <div class="label">{{$t('page0.footer.fashionDesign')}}</div>
            <div class="content">Cellphone24</div>
          </div>
          <div class="flex">
            <div class="label">{{$t('page0.footer.fashionTutor')}}</div>
            <div class="content">Meng Siyang</div>
          </div>
          <div class="flex">
            <div class="label">{{$t('page0.footer.Director')}}</div>
            <div class="content">Cellphone24</div>
          </div>
          <div class="flex">
            <div class="label">{{$t('page0.footer.Photographer')}}</div>
            <div class="content">Tan Yuxi</div>
          </div>
          <div class="flex">
            <div class="label">{{$t('page0.footer.MakeupArtist')}}</div>
            <div class="content">Tong Tong</div>
          </div>
          <div class="flex">
            <div class="label">{{$t('page0.footer.Model')}}</div>
            <div class="content">Hik</div>
          </div>
        </div>
        <div class="second-intro">
          <div class="flex">
            <div class="label">{{$t('page0.footer.WebDesign')}}</div>
            <div class="content">Cellphone24</div>
          </div>
          <div class="flex">
            <div class="label">{{$t('page0.footer.WebTechnology')}}</div>
            <div class="content">Ding Shiba</div>
          </div>
        </div>
        <div class="third-intro">
          <div class="flex">
            <div class="label">{{$t('page0.footer.ChineseEditing')}}</div>
            <div class="content">Cellphone24</div>
          </div>
          <div class="flex">
            <div class="label">{{$t('page0.footer.Proofreading')}}</div>
            <div class="content">Hailey G</div>
          </div>
        </div>
      </div>
      <div class="copyright">Copyright:琼ICP备2024018151号-1</div>
    </section>
  </div>
</template>

<style scoped>
/*.page-0::-webkit-scrollbar{
  display: none;
}*/
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
  background-color: #f0f0f0;
  opacity: 0;

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
  position: relative;
  word-break: break-all;
  color: #232323;
  font-size: 16px;
  --Rany-font-family: #7F583F;
  --base-width: 90vw;
  background-color: var(--content-bkcolor);
  font-family: var(--base-content-fontfamilly);


  .screen {
    width: 100%;
    height: 100vh;
    background-color: var(--content-bkcolor);
  }

  .page-0-area-0 {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    width: 100vw;
    height: 100vh;
    overflow: scroll;

    .init-container {
      width: 100vw;

      .ru-chang {
        .in-sce {
          width: 100vw;
          height: 100vh;
          position: relative;
          overflow: hidden;

          .area-1-video-1, .ruchang-back, .area-1-video-2 {
            width: 100%;
          }

          .ruchang-back {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 5;
            opacity: 0;
          }

          .area-1-video-2 {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 10;
            opacity: 0;
            mix-blend-mode: screen;
          }
        }

        .header-title-container {
          background-color: var(--title-bkcolor);
          padding: 20px 0px;
          font-family: var(--ruchang-describe-fontfamilly);
          border-bottom: 1px solid #171717;
          margin-bottom: 5000px;

          .title {
            font-family: var(--base-title-fontfamilly);
            font-size: 79px;
            letter-spacing: 6px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;

          }

          .area2texts {
            height: 0;
            overflow: hidden;

            .text-label {
              width: 505px;
            }
          }

          .descripe {
            width: 505px;
            margin: auto;
          }
        }
      }
    }


  }

  .page-0-area-0::-webkit-scrollbar {
    width: 0px;
  }

  .page-0-area-1 {
    width: 100vw;
    height: 100vh;
    position: relative;


    .deep-second {
      height: 100vh;
      width: 90%;
      margin: auto;
      transform: scale(0.6);

      .move-area {
        padding-top: 190px;
      }

      .deep-second-img {
        display: block;
        margin: auto;
        width: 100%;
      }

      .describe {
        width: 640px;
        text-align: right;
      }

      .left-area {
        width: 702px;
      }
    }
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
  //padding: 14px 0px; width: 100%; letter-spacing: 2px; font-size: 16px; position: absolute; z-index: 9999999; left: 0; top: 0;
  }


  .area-2 {
    height: 100vh;
    border-top: 1px solid #171717;
    position: relative;


    .area-2-footer-text {
      position: absolute;
      z-index: 11;
      width: 600px;
      left: 5vw;
      overflow: hidden;
      bottom: 50px;

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
      bottom: 50px;
      background-color: #171717;
      backdrop-filter: blur(5px);
    }

    .area-2-copy-text {
      position: absolute;
      z-index: 4;
      width: 600px;
      left: 5vw;
      bottom: 50px;

      .text-item {
        margin: 40px 20px;
        color: #232323;
        font-family: Rany-normal;
      }
    }

    .area-2-item {
      position: absolute;
      left: 0;
      top: 0px;
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
      z-index: 9;
      width: 100%;
      background-color: #fafafa;

      .kongbai {
        height: 60px;
        border-top: 1px solid #232323;
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
      top: 110px;
      overflow: hidden;
      height: calc(100vh - 110px);

      .ba-img {
        width: 90%;
        margin: auto;

      }
    }

    .area-2-4 {
      position: absolute;
      z-index: 7;
      left: 0;
      top: 110px;
      overflow: hidden;
      height: calc(100vh - 110px);

      .ba-img {
        width: 90%;
        margin: auto;

      }
    }
  }

  .area-3 {
    width: 100vw;
    height: 100vh;
    background-color: #171717;
    opacity: 1;
  }

  .area-4 {
    .area-4-title {
      height: 46px;
      line-height: 46px;
      text-align: center;
      width: 100vw;
      border-bottom: 2px solid #232323;
      font-size: 26px;
      font-family: var(--base-title-fontfamilly);
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
      width: 1920px;
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
    color: #fafafa;
    background-color: #232323;

    .lianxi {
      padding: 80px 0px;
      text-align: center;
    }
    .lianjie{
      text-align: center;
      .links{
        width: 70vw;
        margin: auto;
        word-break: break-all;
        line-height: 1.6;
        text-align: left;
        .link-item {
          color: #fafafa;
          text-decoration: none;
          font-family: var(--base-content-fontfamilly);
        }
        .link-item:hover {
          text-decoration: underline;
          transition: all 0.5s linear;
        }
      }

    }
    .introduce{
      width: 70vw;
      margin: 80px auto;
      word-break: break-all;
      line-height: 1.6;
      text-align: left;
      display: flex;
      justify-content: space-between;

      .flex{
        display: flex;
        .label{
          width: 150px;
        }
      }
    }
    .copyright{
      text-align: center;
      padding-bottom: 20px;
    }
  }

}
</style>