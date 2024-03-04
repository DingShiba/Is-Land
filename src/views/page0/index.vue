<script>
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin.js'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
export default {
  name: "index",
  props: ["language", "hasInit","loading"],
  data() {
    return {
      stArr: [],
      currentTime: 0,
      timer:null,
      videoTimer:null,
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
    this.initPage()
  },
  methods: {
    initPage(){
      this.timer=setTimeout(()=>{
        if(!this.loading){
          clearTimeout(this.timer)
          gsap.to(window, {
            duration: 0.5,
            scrollTo: 0,
            onComplete: () => {
              this.createTTs()
              /**
               * 30s 自动播放title*/
              this.videoTimer=setTimeout(() => {
                const _index = document.querySelector('.page-0-area-0').style.zIndex
                if (_index != -1) this.handleWeel()
              }, 30 * 1000)
            }
          });
        }else {
          this.initPage()
        }
      },60)
    },
    createTTs() {
      if (!this.hasInit) {
        this.createT0()
      } else {
        this.createT2()
        this.createT3()
        this.createT4()
        this.createT5()
        this.createTFooter()
      }

    },
    handleWeel() {
      gsap.to('.ruchang-back', {
        opacity: 0.3,
      })
      gsap.to('.area-1-video-2', {
        opacity: 1,
      })
      this.$refs.biaotiVideo.play()
    },
    toggleLanguage() {
      this.$emit("toggleLanguage")
    },
    createT0() {
      const stg0 = ScrollTrigger.create({
        trigger: ".init-container",
        pin: true,
        start: "top top",
        end: "+=1080",
        scrub: true,
        scroller: ".page-0-area-0",
        onLeave: () => {
          /*初始化完成*/
          this.$emit("handleSetInit", true)
          this.createTTs()
        },
        onUpdate: (self) => {
          const _top = document.querySelector('.in-sce').getBoundingClientRect().top
          this.$refs.biaotiVideo.style.setProperty("transform", `translateY(${-_top}px)`)
        },
        animation: gsap.timeline()
            .to('.ru-chang', {
              y: '-50vh',
            })
            .to('.ru-chang', {
              y: '-100vh',
            })
            .to(".page-0-area-1 .deep-second", {
              scale: 1
            }, "<")
            .fromTo(".area2texts", {
              height: 0
            }, {
              height: 190
            })
            .to(".page-0-area-1 .deep-second .move-area", {
              paddingTop: 420
            }, "<")
            .to(".zhanwei-blank", {
              scale: 2
            })
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
            })
      })
      this.stArr.push(stg0)
    },
    createT2() {
      const st021 = ScrollTrigger.create({
        trigger: ".area-2",
        pin: true,
        start: "top top",
        end: "+=2000",
        scrub: true,
        animation: gsap.timeline()
            .to('.area-2-1', {
              scale: 1.2,
              x: -100,
              y: 100,
              duration: 1.5
            })
            .to(".area-2 .beizhu", {
              opacity: 1
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
              y: -62
            })
            .to(".area-2 .beizhu", {
              y: -62
            }, "<")
            .to(".area-2-footer-bg", {
              clipPath: "inset(0px 0px 100% 0px)"
            })
            .to(".area-2-footer-text", {
              clipPath: "inset(0px 0px 100% 0px)"
            }, "<")
            .to(".area-2-4", {
              y: -312
            }, "<")
            .to(".area-2 .beizhu", {
              y: -312
            }, "<")
            .to(".area-2-4", {
              y: -374
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
      const tl = gsap.timeline(),
          _doms = document.querySelectorAll('.area3-photo-item');
      _doms.forEach((item, index) => {
        tl.add(gsap.to(item, {
          opacity: 1
        }))
        if (index > 0) {
          tl.add(gsap.to(_doms[index - 1], {
            opacity: 0
          }))
        }

      })
      const st03 = ScrollTrigger.create({
        trigger: ".area-3",
        scrub: true,
        pin: true,
        start: "top top",
        direction: 1,
        end: "+=15000",
        /* onUpdate:(self)=>{
           if(self.direction==-1){
             st03.clearScrollMemory()
             st03.kill()
           }
         },*/
        animation: tl

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
      /*计算move-container 多宽？*/
      const _domWidth = document.querySelector('.area-5-3 .move-container').offsetWidth;
      const _distance = _domWidth - window.innerWidth;
      const st05 = ScrollTrigger.create({
        trigger: ".area-5",
        pin: true,
        // pinSpacing: "margin",
        start: "top top+=40",
        end: 'bottom top',
        scrub: true,
        onEnter: () => {
          const _doms = document.querySelectorAll(".area-5 .list-area .flex")
          _doms.forEach((item, index) => {
            if (index > 1) {
              gsap.to(item, {
                y: 0,
                delay: index * 0.05,
                duration: 1
              })
            }

          })
          gsap.timeline()
              .to(".area-5 .list-area .first-flex", {
                y: 0,
                duration: 1
              })
              .to(".area-5 .list-area .second-flex", {
                y: 0,
                delay: 0.1,
                duration: 1
              }, "<")
              .to(".area-5 .list-area .first-flex", {
                color: "#232323",
                duration: 0.2,
                delay: 0.8
              }, "<")
              .to(".area-5 .list-area .second-flex", {
                color: "#232323",
                duration: 0.2,
                delay: 0
              }, "<")

        },
        animation: gsap.timeline()
            .to('.area-5-2', {
              x: 300,
            })
            .set('.move-container .gifs-arr', {
              opacity: 1
            })
            .to('.area-5-2', {
              x: 1800,
            }, '<')
            .fromTo('.area-5 .list-area', {
              opacity: 1,
            }, {
              opacity: 0,
              zIndex: -1
            }, "<")
            .to(".move-container", {
              x: -_distance,
            })
      })
      this.stArr.push(st05)
      /*创建videobangding*/

    },
    createTFooter() {
      const stFooter01 = ScrollTrigger.create({
        trigger: ".page-0 .footer-text-zhanwei",
        start: "top bottom-=20",
        scrub: true,
        onEnter: () => {
          gsap.timeline()
              .to(".page-footer-text", {
                opacity: 1
              })
              .set('.footer-text-zhanwei', {
                height: '101vh'
              })
        },
        onLeaveBack: () => {
          gsap.timeline()
              .to(".page-footer-text", {
                opacity: 0
              })
              .set('.footer-text-zhanwei', {
                height: 30
              })
        }
      })
      this.stArr.push(stFooter01)
      const stFooter02 = ScrollTrigger.create({
        trigger: ".page-0 .footer-text-zhanwei",
        start: "top top",
        scrub: true,
        onEnter: () => {
          gsap.to(".page-footer-text", {
            opacity: 0, onComplete: () => {
              this.jumpPage(1)
            }
          })
        },
      })
      this.stArr.push(stFooter02)
    },
    handleMouseEnter(e) {
      e.srcElement.play()
    },
    handleMouseLeave(e) {
      e.srcElement.pause()
      e.srcElement.currentTime = 0
    },
    jumpPage(index) {
      this.$emit("setCurrentPage", index)
    },
    getImage(name) {
      const _url = new URL(`./img/${name}`, import.meta.url)
      return _url.pathname
    }
  },
  unmounted() {
    clearTimeout(this.videoTimer)
    this.stArr.forEach(item => {
      item.kill()
    })
    this.stArr = []
  }
}
</script>

<template>
  <div class="page-0" ref="page0">
    <div class="zhanwei-blank"></div>
    <div class="page-header" v-if="hasInit">
      <span>CeL24</span>
    </div>
    <section class="page-0-area-0" :class="{'hidden-status':hasInit}">
      <div class="init-container">
        <div class="ru-chang">
          <div class="in-sce">
            <video class="area-1-video-1"
                   autoplay
                   muted
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
                     style="padding:10px 24px 0px 24px;align-items: flex-start;justify-content: space-between;">
                  <div class="date-time">2019/2020</div>
                  <div class="text-label" :class="{'en':language=='en'}">
                    {{ $t('page0.textArea') }}
                  </div>
                  <div class="toggleLanguage">
                    <a style="text-decoration: underline;cursor: pointer"
                       @click="toggleLanguage">{{ language == 'en' ? '切换成中文' : 'English version' }}</a>
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
    <section class="page-0-area-1" :class="{'has-init':hasInit}">
      <div class="deep-second">
        <div class="move-area">
          <img class="deep-second-img" src="./img/area3Img1.webp" alt="">
          <div class="flex" style="justify-content: flex-end;margin-top: 12px;font-size: 12px;">
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
    <section class="area-2">
      <div class="area-2-footer-text">
        <div class="text-item">
          <span>{{ $t('page0.area2.fixed1') }}</span>
        </div>
        <div class="text-item">
          <span>{{ $t('page0.area2.fixed2') }}</span>
        </div>
        <div class="bg-img">
          <img src="./img/area-2-2.webp" width="100%" alt="">
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
      <div class="area-2-1 area-2-item">
        <img src="./img/area-2-1.webp" width="90%" alt="">
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
      <div class="beizhu">{{ $t('page0.area2.beizhu') }}</div>

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
      <img class="base-img" width="100%" src="./img/area3/Pic1.webp" alt="">
      <img v-for="item in 154" class="area3-photo-item" :src="getImage('area3/Pic'+item+'.webp')">
    </section>
    <section class="area-4">
      <div class="area-4-title">
        <span>Island is land</span>
      </div>
      <div class="area-4-cao-imgs">
        <img v-for="item in 4"
             class="cao-img-item"
             :class="'cao-img-item'+item"
             :src="getImage(`area4-${item}-${language}.webp`)" alt="">
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
          <img src="./img/area-5-2.webp" width="100%" alt="">
        </div>
        <div class="area-5-3">
          <div class="move-container">
            <img class="movies-index movies-item" src="./img/area-5-movies-index.webp" alt="">
            <div class="gifs-arr">
              <video @mouseenter="handleMouseEnter"
                     @mouseleave="handleMouseLeave"
                     @click="jumpPage(1)"
                     class="look1-video"
                     src="./img/Look1.webm"></video>
              <video @mouseenter="handleMouseEnter"
                     @mouseleave="handleMouseLeave"
                     @click="jumpPage(2)"
                     class="look2-video" src="./img/Look2.webm"></video>
              <video @mouseenter="handleMouseEnter"
                     @mouseleave="handleMouseLeave"
                     @click="jumpPage(3)"
                     class="look4-video" src="./img/Look4.webm"></video>
              <video @mouseenter="handleMouseEnter"
                     @mouseleave="handleMouseLeave"
                     @click="jumpPage(4)"
                     class="look3-video" src="./img/Look3.webm"></video>
            </div>
          </div>
        </div>
        <div class="list-area">
          <div>
            <div class="flex first-flex">
              <div class="label">{{ $t('page0.area5.label1') }}</div>
              <div class="content">{{ $t('page0.area5.content1') }}</div>
            </div>
            <div class="flex second-flex" style="margin-bottom: 80px">
              <div class="label">{{ $t('page0.area5.label2') }}</div>
              <div class="content">{{ $t('page0.area5.content2') }}</div>
            </div>
            <div class="flex">
              <div class="label">{{ $t('page0.area5.label3') }}</div>
              <div class="content">{{ $t('page0.area5.content3') }}</div>
            </div>
            <div class="flex">
              <div class="label">{{ $t('page0.area5.label4') }}</div>
              <div class="content">{{ $t('page0.area5.content4') }}</div>
            </div>
            <div class="flex" style="margin-bottom: 50px;">
              <div class="label">{{ $t('page0.area5.label5') }}</div>
              <div class="content">{{ $t('page0.area5.content5') }}</div>
            </div>
            <div class="flex" style="align-items: flex-start;">
              <div class="label">{{ $t('page0.area5.label6') }}</div>
              <div class="content" style="padding-top: 20px">
                <div>{{ $t('page0.area5.content61') }}</div>
                <div>{{ $t('page0.area5.content62') }}</div>
                <div>{{ $t('page0.area5.content63') }}</div>
              </div>
            </div>
            <div class="flex" style="margin-bottom: 50px;">
              <div class="label">{{ $t('page0.area5.label7') }}</div>
              <div class="content">{{ $t('page0.area5.content7') }}</div>
            </div>
            <div class="flex">
              <div class="label">{{ $t('page0.area5.label8') }}</div>
              <div class="content">{{ $t('page0.area5.content8') }}</div>
            </div>
            <div class="flex">
              <div class="label">{{ $t('page0.area5.label9') }}</div>
            </div>
            <div class="flex">
              <div class="label">{{ $t('page0.area5.label10') }}</div>
            </div>
            <div class="flex">
              <div class="label">{{ $t('page0.area5.label11') }}</div>
            </div>
            <div class="flex">
              <div class="label">{{ $t('page0.area5.label12') }}</div>
            </div>
            <div class="flex">
              <div class="label">{{ $t('page0.area5.label13') }}</div>
              <div class="content">{{ $t('page0.area5.content13') }}</div>
            </div>
            <div class="flex">
              <div class="label">{{ $t('page0.area5.label14') }}</div>
            </div>
            <div class="flex">
              <div class="label">{{ $t('page0.area5.label15') }}</div>
            </div>

          </div>
        </div>
      </div>
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
                 :class="{
                  'link-item-song':index>5
                 }"
                 target="_blank">{{ item }}</a>
            <span v-if="index<httpLinks.length-1">/</span>
            </span>
          </span>
          <span v-else>
            <span v-for="(item,index) in linksZh.split('/')">
              <a :href="httpLinks[index]"
                 class="link-item"
                 target="_blank">{{ item }}</a>
            <span v-if="index<httpLinks.length-1">/</span>
            </span>
          </span>
        </div>
      </div>
      <div class="introduce">
        <div class="first-intro">
          <div class="flex">
            <div class="label">{{ $t('page0.footer.fashionDesign') }}</div>
            <div class="content">Cellphone24</div>
          </div>
          <div class="flex">
            <div class="label">{{ $t('page0.footer.fashionTutor') }}</div>
            <div class="content">Meng Siyang</div>
          </div>
          <div class="flex">
            <div class="label">{{ $t('page0.footer.Director') }}</div>
            <div class="content">Cellphone24</div>
          </div>
          <div class="flex">
            <div class="label">{{ $t('page0.footer.Photographer') }}</div>
            <div class="content">Tan Yuxi</div>
          </div>
          <div class="flex">
            <div class="label">{{ $t('page0.footer.MakeupArtist') }}</div>
            <div class="content">Tong Tong</div>
          </div>
          <div class="flex">
            <div class="label">{{ $t('page0.footer.Model') }}</div>
            <div class="content">Hik</div>
          </div>
        </div>
        <div class="second-intro">
          <div class="flex">
            <div class="label">{{ $t('page0.footer.WebDesign') }}</div>
            <div class="content">Cellphone24</div>
          </div>
          <div class="flex">
            <div class="label">{{ $t('page0.footer.WebTechnology') }}</div>
            <div class="content">Ding Shiba</div>
          </div>
        </div>
        <div class="third-intro">
          <div class="flex">
            <div class="label">{{ $t('page0.footer.ChineseEditing') }}</div>
            <div class="content">Cellphone24</div>
          </div>
          <div class="flex">
            <div class="label">{{ $t('page0.footer.Proofreading') }}</div>
            <div class="content">Hailey G</div>
          </div>
        </div>
      </div>
      <div class="copyright">琼ICP备2024018151号-1</div>
    </section>
    <section class="footer-text-zhanwei"></section>
  </div>
</template>

<style scoped>
/*.page-0::-webkit-scrollbar{
  display: none;
}*/
.zhanwei-blank {
  position: absolute;
  z-index: -10;
  width: 1px;
  height: 1px;
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
  opacity: 1;
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

            .toggleLanguage, .date-time {
              width: 200px;
            }

            .toggleLanguage {
              text-align: right;
            }

            .text-label {
              width: 505px;
            }

            .text-label.en {
              width: 685px;
            }
          }

          .descripe {
            width: 505px;
            text-align: center;
            margin: auto;
          }
        }
      }
    }


  }

  .page-0-area-0.hidden-status {
    z-index: -1;
  }

  .page-0-area-0::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  .page-0-area-1 {
    width: 100vw;
  //height: 100vh; position: relative;

    .deep-second {
    //height: 100vh; width: 90%; margin: auto;
      transform: scale(0.8);

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
        line-height: 1.5;
        text-align: right;
      }

      .left-area {
        width: 702px;
        margin-bottom: 62px;
      }
    }
  }

  .page-0-area-1.has-init {
    .deep-second {
      transform: scale(1);

      .move-area {
        padding-top: 66px;
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
  //height: 100vh; position: relative; width: 100vw;
    border-top: 1px solid #171717;

    .area-2-footer-text {
      position: absolute;
      z-index: 11;
      width: 600px;
      height: 250px;
      left: 5vw;
      overflow: hidden;
      bottom: 62px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .bg-img {
        width: 100vw;
      //height: 100vh; position: absolute; z-index: -1;
        left: 0;
        bottom: 0;
      }

      .text-item {
        margin: 0px 20px;
        color: #fafafa;
      }

      .text-item:nth-child(2) {
        margin: 40px 20px 0px 20px;
      }
    }


    .area-2-copy-text {
      position: absolute;
      z-index: 4;
      width: 600px;
      height: 250px;
      left: 5vw;
      bottom: 62px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .text-item {
        color: #232323;
        margin: 0px 20px;
      }

      .text-item:nth-child(2) {
        margin: 40px 20px 0px 20px;
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
      position: absolute;
      display: flex;
      justify-content: flex-end;
      left: 0;
      top: 0;

      img {
        margin: auto;
      }
    }

    .beizhu {
      width: 90%;
      position: absolute;
      left: 5%;
      top: 90px;
      text-align: right;
      font-size: 12px;
      z-index: 9;
      opacity: 0;
    }

    .area-2-2 {
      z-index: 9;
      width: 100%;
      background-color: #f0f0f0;

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


      .ba-img {
        width: 90%;
        margin: auto;

      }
    }

    .area-2-4 {
      position: relative;
      margin-top: 110px;
      z-index: 7;

      overflow: hidden;


      .ba-img {
        width: 90%;
        margin: auto;

      }
    }
  }

  .area-3 {
    width: 100vw;
    background-color: #171717;
    opacity: 1;
    position: relative;
    overflow: hidden;

    .area3-photo-item {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      width: 100%;
      /*      display: none;*/
      opacity: 0;
    }

  }

  .area-4 {
    .area-4-title {
      height: 46px;
      line-height: 46px;
      text-align: center;
      width: 100vw;
      border-bottom: 1px solid #232323;
      font-size: 20px;
      font-family: var(--list-label-big);
    }

    .area-4-cao-imgs {
      width: 70%;
      margin: 40px auto;
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
    background-color: #f0f0f0;

    .area-5-title {
      width: 90vw;
      margin: auto;
      padding: 15px 0px;
      font-family: MS-Bold;
      font-size: 30px;

    }

    .area-5-describe {
      width: 80vw;
      margin: 5px auto 20px;
    }

    .area-5-movies {
      width: 100vw;
      position: relative;
    }


    .area-5-2 {
      width: 80vw;
      margin: auto;
      position: relative;
      z-index: 10;
    }

    .list-area {
      width: 80vw;
      position: absolute;
      z-index: 15;
      left: 10vw;
      top: -100px;
      display: flex;
      justify-content: right;
      padding-right: 80px;

      .flex {
        align-items: flex-end;
        margin-bottom: 10px;
        transform: translateY(80vh);
        color: #F5F5F5;
      }

      .label {
        font-family: var(--list-label-big);
        font-size: 24px;

      //color: #232323; width: 330px; white-space: nowrap;
      }

      .content {
        font-family: var(--list-label-littile);
        font-size: 12px;
      }
    }

    .area-5-3 {
      width: 100vw;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;

      .move-container {
        width: max-content;
        display: flex;
        height: 100%;
        transform: translateX(10vw);

        .gifs-arr {
          opacity: 0;
          display: flex;
          height: 100%;
          width: max-content;

          video {
            height: 744px;

          }
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
    margin-top: 50px;
    position: relative;

    .lianxi {
      padding: 80px 0px;
      text-align: center;
    }

    .lianjie {
      text-align: center;

      .links {
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

        .link-item.link-item-song {
          font-family: 思源宋EL;
        }

        .link-item:hover {
          text-decoration: underline;
          transition: all 0.5s linear;
        }
      }

    }

    .introduce {
      width: 70vw;
      margin: 80px auto;
      word-break: break-all;
      line-height: 1.6;
      text-align: left;
      display: flex;
      justify-content: space-between;

      .flex {
        display: flex;

        .label {
          width: 150px;
        }
      }
    }

    .copyright {
      text-align: center;
      padding-bottom: 20px;
    }

  }

  .footer-text-zhanwei {
    height: 30px;
    width: 100vw;
    background-color: #232323;
  }



}
</style>