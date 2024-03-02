<script>
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default {
  name: "index",
  props:["language"],
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
    setTimeout(()=>{
      this.$emit("handleLoadingFalse")
      this.createTTS()
    },1000)

  },
  methods: {
    createTTS() {
      this.createT41()
      this.createT43()
      this.createT44()
      this.createT45()
      this.createT46()
      this.createTFooter()
    },
    createT41() {
      const st41 = ScrollTrigger.create({
        trigger: ".page-4-area-1",
        pin: true,
        start: "top top",
        end: "bottom top",
        scrub: true,
        animation: gsap.timeline()
            .to(".page-4-area-1 .float-item", {
              clipPath: "inset(0px 0px 100% 0px)"
            })
      })
      this.stArr.push(st41)
    },
    createT43() {
      const st431 = ScrollTrigger.create({
        trigger: ".page-4-area-3 .trans-move",
        start: "top center",
        scrub: true,
        onEnter: () => {
          const _doms = document.querySelectorAll('.page-4-area-3 .trans-move img')
          _doms.forEach((dom, index) => {
            gsap.fromTo(dom, {
              opacity: 0
            }, {
              opacity: 1,
              duration: 1,
              delay: index * 0.4
            })
          })
        },
        onLeaveBack: () => {
          const _doms = document.querySelectorAll('.page-4-area-3 .trans-move img')
          _doms.forEach((dom, index) => {
            gsap.to(dom, {
              opacity: 0
            })
          })
        }
      })
      this.stArr.push(st431)
      const st432 = ScrollTrigger.create({
        trigger: ".page-4-area-3",
        start: "top top",
        end: "bottom top",
        pin: true,
        onLeave: () => {
          const _dom = document.querySelector('.page-4-area-3')
          _dom.classList.add("move-leave")
        },
        onEnterBack: () => {
          const _dom = document.querySelector('.page-4-area-3')
          _dom.classList.remove("move-leave")
        },
        scrub: true,
        animation: gsap.timeline()
            .to(".page-4-area-3 .trans-move", {
              x: '-60vw'
            })
      })
      this.stArr.push(st432)
    },
    createT44() {
      const st441 = ScrollTrigger.create({
        trigger: ".page-4-area-4 .top-area .text-area",
        pin: true,
        scrub: true,
        start: "center center",
        end: "+=2800",
      })
      this.stArr.push(st441)
      const st442 = ScrollTrigger.create({
        trigger: ".page-4-area-4",
        scrub: true,
        start: "top+=200 bottom",
        end: "top top",
        animation: gsap.timeline()
            .to(".page-4-area-4 .top-area", {
              backgroundColor: "rgba(0,0,0,0)"
            })
            .fromTo(".page-4-area-4 .top-area .text-area", {
              opacity: 0
            }, {
              opacity: 1
            }, "<")
      })
      this.stArr.push(st442)
      let _imgs = document.querySelectorAll('.trans-move-vertical .fade-in-img')
      _imgs.forEach((dom, index) => {
        ScrollTrigger.create({
          trigger: dom,
          start: "top center+=200",
          end: "+=50000",
          toggleClass: "active",
          scrub: true
        })
      })

      const st443 = ScrollTrigger.create({
        trigger: ".trans-move-vertical .end-describe",
        start: "top center+=300",
        end: "+=2000",
        toggleClass: "active",
        scrub: true
      })
      this.stArr.push(st443)
    },
    createT45() {
      const st45 = ScrollTrigger.create({
        trigger: ".page-4-area-5",
        start: 'bottom-=100 bottom',
        scrub: true,
        onEnter: () => {
          gsap.timeline()
              .to(".page-4-area-5 .content-container", {
                width: "100vw",
              })
              .to(".page-4-area-5 .content-container .base-video",{
                opacity:1,
                onStart:()=>{
                  document.querySelector('.page-4-area-5 .content-container .base-video').play()
                }
              })
              .to(".page-4-area-5 .content-container .float-video",{
                opacity:1,
                delay:8
              })
        }
      })
      const st46 = ScrollTrigger.create({
        trigger: ".page-4-area-5",
        start: 'bottom bottom',
        end:"+=300",
        pin:true,
        scrub: true,
        animation:gsap.timeline()
            .to(".page-4-area-5 .zhe-zhao",{
              opacity:1
            })
      })
      this.stArr.push(st45)
      this.stArr.push(st46)
    },
    createT46(){
     const st46=ScrollTrigger.create({
        trigger:".page-4-area-6",
        scrub:true,
        start:"top center",
        end:"+=300",
        pin:true,
        animation:gsap.timeline()
            .to(".page-4-area-6 .describe-item1",{
              opacity:1
            })
            .to(".page-4-area-6 .describe-item2",{
              opacity:1
            })
            .to(".page-4-area-6 .describe-item3",{
              opacity:1
            })
            .to(".page-4-area-6 .describe-item4",{
              opacity:1
            })
      })
      this.stArr.push(st46)
    },
    createTFooter(){
      const stFooter=ScrollTrigger.create({
        trigger:".page4-footer",
        start:"top center",
        onEnter:()=>{
          gsap.to(".page4-footer",{
            opacity:1
          })
        },
        onLeaveBack:()=>{
          gsap.to(".page4-footer",{
            opacity:0
          })
        }

      })
      this.stArr.push(stFooter)
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
  <div class="page-4">
    <div class="page-header">
      <span>CeL24</span>
    </div>
    <section class="page-4-area-1">
      <div class="base-img">
        <img src="./img/area1-2.webp" width="100%" alt="">
      </div>
      <div class="float-item">
        <img src="./img/area1-1.webp" width="100%" alt="">
      </div>
    </section>
    <section class="page-4-area-2">
      <div class="text-area-show">
        <div class="first-describe">{{ $t('page4.describe1') }}</div>
        <div class="second-describe">{{ $t('page4.describe102') }}</div>
        <div class="third-describe">{{ $t('page4.describe2') }}</div>
      </div>
    </section>
    <section class="page-4-area-3">
      <div>
        <div class="trans-move">
          <img src="./img/area3-1.webp" alt="">
          <img src="./img/area3-2.webp" alt="">
          <img src="./img/area3-3.webp" alt="">
          <img src="./img/area3-4.webp" alt="">
        </div>
      </div>

    </section>
    <section class="page-4-area-4">
      <div class="trans-move-vertical">
        <img src="./img/area4-1.webp" alt="">
        <img src="./img/area4-2.webp" alt="">
        <img src="./img/area4-3.webp" class="fade-in-img third" alt="">
        <img src="./img/area4-4.webp" class="fade-in-img forth" alt="">
        <img src="./img/area4-5.webp" class="fade-in-img five" alt="">
        <img src="./img/area4-6.webp" class="fade-in-img six" alt="">
        <img src="./img/area4-7.webp" class="fade-in-img end-fade-in" alt="">
        <div class="zhanwei-fu">

        </div>
        <img src="./img/area4-8.webp" style="margin-top: 50px" alt="">
        <div class="end-describe">
          <div v-for="item in 9"
               class="end-describe-item">{{ $t('page4.cf'+item) }}</div>
        </div>
      </div>
      <div class="top-area">
        <div class="text-area">
          <div class="first-describe">{{ $t('page4.describe3') }}</div>
          <div class="second-describe">{{ $t('page4.describe4') }}</div>
        </div>
      </div>
    </section>
    <section class="page-4-area-5">
      <div class="content-container">
        <img src="./img/area5-1.webp" width="100%" alt="">
        <video preload muted class="base-video" style="opacity: 0">
          <source src="./img/area5-2.mp4">
        </video>
        <video preload autoplay loop muted class="float-video" style="opacity: 0">
          <source src="./img/area5-3.mp4">
        </video>
      </div>
      <div class="zhe-zhao"></div>
    </section>
    <section class="page-4-area-6">
      <div class="bg-dom"></div>
      <div class="content-container">
        <div v-for="item in 4" class="describe-item" :class="'describe-item'+item">{{$t(`page4.score.describe${item}`)}}</div>
      </div>
    </section>
    <section class="page4-footer">
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
      <div class="lianjie">
        <h2>{{ $t('page0.footer.lianjie') }}</h2>
        <div class="links">
          <span v-if="language=='en'">
            <span v-for="(item,index) in linksEn.split('/')">
              <a :href="httpLinks[index]"
                 class="link-item"
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
      <div class="lianxi">
        <h2>{{ $t('page0.footer.lianxi') }}</h2>
        <span>cellphone24@163.com</span>
      </div>
      <div class="footer-score">
        <div class="describe">{{$t('page4.score.describeTitle')}}</div>
        <div class="num-container">
          <div v-for="item in 5" class="num-item">{{item}}</div>
        </div>

        <div class="send-btn">
          发送
        </div>

      </div>
      <div class="footer-message">
        <div class="describe">{{$t('page4.score.message')}}</div>
        <textarea class="message-input" style="width: 800px;" />
      </div>


    </section>
  </div>
</template>

<style scoped lang="less">
.page-4 {
  --base-font-family: MS-EL;
  --title-family: MS-Bold;
  color: #171717;
  background-color: #fafafa;
  font-family: var(--base-font-family);
  text-align: left;
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

.page-4-area-1 {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  .base-img {
    width: 100%;
    height: 100%;

  }

  .float-item {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    clip-path: inset(0% 0% 0% 0%);
  }
}

.page-4-area-2 {
  height: 60vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #171717;

  .text-area-show {
    width: 59vw;
    height: max-content;

    .second-describe {
      margin: 46px 0px;
      //line-height: 20px;
    }
  }
}

.page-4-area-3 {
  display: flex;
  align-items: flex-start;
  height: 100vh;

  .trans-move {
    width: 160vw;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #171717;

    img {
      height: 100vh;
      opacity: 0;
    }
  }
}

.page-4-area-3.move-leave {
  .trans-move {
    img {
      height: 90vh;
      transition: height 0.5s linear;
    }
  }
}

.page-4-area-4 {
  width: 100vw;
  background-color: #fafafa;
  border-top: 1px solid #171717;
  position: relative;

  .trans-move-vertical {
    width: 670px;
    margin: 100px auto;

    img {
      width: 100%;
      display: block;
      margin-bottom: 46px;
    }

    .end-fade-in {
      width: 180%;
      transform: translateX(-20%);
    }

    .fade-in-img {
      opacity: 0;
    }

    .fade-in-img.active {
      opacity: 1;
      transition: opacity 0.5s linear;
    }

    .zhanwei-fu {
      height: 300px;
    }

    .end-describe {
      opacity: 0;
      line-height: 2.5;
      text-align: left;
      .end-describe-item:nth-child(3){
        margin-bottom: 46px;
      }
    }

    .end-describe.active {
      opacity: 1;
      transition: opacity 0.5s linear;
    }
  }

  .top-area {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    background-color: rgba(0, 0, 0, 1);

    justify-content: center;

    .text-area {
      width: 888px;
      margin-top: 100px;
      height: max-content;

      .second-describe {
        margin-top: 24px;
        text-align: right;
      }
    }
  }
}

.page-4-area-5 {
  border-top: 1px solid #232323;
  position: relative;
  overflow: hidden;
  background-color: var(--content-bkcolor);
  z-index: 6;
  .content-container {
    width: 90vw;
    margin: auto;
    position: relative;

    .base-video, .float-video {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      z-index: 5;
    }
  }
  .zhe-zhao{
    width: 100vw;
    height: 100vh;
    background-color: #232323;
    position: absolute;
    left:0;
    bottom: 0px;
    z-index: 5;
    opacity: 0;
  }
}
.page-4-area-6{
  width: 100vw;
  background-color: #232323;
  margin-top: 0px;
  position: relative;
  z-index: 1;
  .bg-dom{
    width: 100vw;
    height: 2000px;
    position: absolute;
    top:-1000px;
    left: 0px;
    z-index: -1;
    background-color: #232323;
  }
  .content-container{
    width: 600px;
    margin: auto;
    color: var(--title-bkcolor);
    line-height: 2;
    text-align: center;
    .describe-item{
      opacity: 0;
    }
  }

}
.page4-footer {
  position: relative;
  z-index: 2;
  opacity: 0;
  color: #fafafa;
  background-color: #232323;
padding-top: 200px;
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
  .footer-score{
    margin: 80px auto 40px;
    width: 800px;
    position: relative;

    text-align: center;
    .num-container{
      margin-top: 30px;
      width: 800px;
      display: flex;
      justify-content: center;
      gap: 30px;
      .num-item{
        width: 40px;
        height: 40px;
        border: 1px solid var(--content-bkcolor);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      .num-item:hover{
        background-image: url("@/assets/images/circle-bg.png");
        background-size: 110% 110%;
        background-position: center center;
      }
    }
    .send-btn{
      width: 150px;
      height: 80px;
      background-color: var(--content-bkcolor);
      color: #232323;
      position: absolute;
      right: -260px;
      top:60px;
      line-height: 80px;
      text-align: center;
    }
  }
  .footer-message{
    width: 800px;
    text-align: center;
    margin: auto;
    .message-input{
      width: 800px;
      vertical-align: top;
      height: 99999px;
      background-color: #232323;
      margin-top: 30px;
      border: 1px solid var(--content-bkcolor);
    }
  }
}
</style>