<script>
import gsap from 'gsap';
import Page0 from "@/views/page0/index.vue";

import Page1 from "@/views/page1/index.vue";
import Page2 from "@/views/page2/index.vue";
import Page3 from "@/views/page3/index.vue";
import Page4 from "@/views/page4/index.vue";

export default {
  name: "isLand",
  data() {
    return {
      current: -1,
      language: "zh",
      hasInit: false,
      loading: true,
      loadedNum:0,
      allMediaNum:0
    }
  },
  watch: {
    current(val) {
      this.loading = true
      window.scroll(0, 0)
      document.body.style.overflow = 'hidden';
      this.$nextTick(()=>{
        this.listenLoading()
      })
    },
  },
  mounted() {
    this.current = 0
  },
  methods: {
    listenLoading(){
      this.loadedNum=0
      const _imgDoms=document.querySelectorAll(".page-component-area img"),
          _videoDoms=document.querySelectorAll(".page-component-area video");
      this.allMediaNum=_imgDoms.length+_videoDoms.length;
      for(let i=0;i<_imgDoms.length;i++){
        _imgDoms[i].onload=this.addLoadedNum
      }
      for(let i=0;i<_videoDoms.length;i++){
        _videoDoms[i].onloadedmetadata=this.addLoadedNum
      }
    },
    addLoadedNum(){
      this.loadedNum++;
      if(this.loadedNum==this.allMediaNum){
        this.setLoadingFalse()
      }
    },
    selectCurrent(item) {
      this.current = item - 1
    },
    setLoadingFalse(){
      gsap.to(".loading-page", {
        opacity: 0,
        onComplete: () => {
          this.loading = false
          document.body.style.overflow = 'auto';
        }
      })
    },
    handleSetCurrentPage(current) {
      this.current = current
    },
    setHasInit(val) {
      this.hasInit = val
    },
    goToHeader() {
      window.scroll(0, 0)
    },
    handleToggleLanguage() {
      if (this.language == 'en') {
        this.language = 'zh'
      } else {
        this.language = 'en'
      }
      this.$i18n.locale = this.language
    },
    refreshPage() {
      location.reload(true)
    }
  },
  components: {
    Page0,
    Page1,
    Page2,
    Page3,
    Page4
  },

}
</script>

<template>
  <div class="is-land" :class="{'zh':language=='zh'}">
    <div class="menu-nav" v-if="hasInit">
      <div class="first">
        <div class="number-page">
          <div class="number-item"
               :class="{active:item-1==current}"
               v-for="item in 5" @click="selectCurrent(item)">
            {{ item - 1 }}
          </div>
        </div>
        <div class="vertical-line"></div>
        <div class="zhi-ding" @click="goToHeader">
          <img src="@/assets/images/zhidingSwot.png" height="80" alt="">
        </div>
      </div>
      <div class="second">
        <div class="is-land-menu" @click="refreshPage">
          <span>is land</span>
        </div>
        <div class="toggle-language" :class="{'zh-lag':language=='en'}" @click="handleToggleLanguage">
          <img v-if="language=='en'" width="26" src="./img/zh-han.png" alt="">
          <span v-else>En</span>
        </div>
      </div>
    </div>
    <div class="loading-page" v-if="loading">
      <div class="loading-container">
<!--        <svg class="loading-item" viewBox="0 0 1024 1024" width="64" height="64">
          <path
              d="M384 128A64 64 13680 1 0 640 128 64 64 13680 1 0 384 128zM655.53 240.47A64 64 13680 1 0 911.53 240.47 64 64 13680 1 0 655.53 240.47zM832 512A32 32 13680 1 0 960 512 32 32 13680 1 0 832 512zM719.53 783.53A32 32 13680 1 0 847.53 783.53 32 32 13680 1 0 719.53 783.53zM448.002 896A32 32 13680 1 0 576.002 896 32 32 13680 1 0 448.002 896zM176.472 783.53A32 32 13680 1 0 304.472 783.53 32 32 13680 1 0 176.472 783.53zM144.472 240.47A48 48 13680 1 0 336.472 240.47 48 48 13680 1 0 144.472 240.47zM56 512A36 36 13680 1 0 200 512 36 36 13680 1 0 56 512z"
              fill="#fff" p-id="4260"></path>
        </svg>-->
        <span class="loading-item">C</span>
        <span class="loading-item">e</span>
        <span class="loading-item">L</span>
        <span class="loading-item">24</span>
      </div>
    </div>
    <div class="page-component-area">
      <page0 v-if="current==0"
             :language="language"
             :has-init="hasInit"
             :loading="loading"
             @handleLoadingFalse="setLoadingFalse"
             @setCurrentPage="handleSetCurrentPage"
             @handleSetInit="setHasInit"
             @toggleLanguage="handleToggleLanguage"></page0>
      <page1 v-if="current==1"
             :language="language"
             :loading="loading"
             @handleLoadingFalse="setLoadingFalse"
             @setCurrentPage="handleSetCurrentPage"></page1>
      <page2 v-if="current==2"
             :language="language"
             :loading="loading"
             @handleLoadingFalse="setLoadingFalse"
             @setCurrentPage="handleSetCurrentPage"></page2>
      <page3 v-if="current==3" :language="language"
             :loading="loading"
             @handleLoadingFalse="setLoadingFalse"
             @setCurrentPage="handleSetCurrentPage"></page3>
      <page4 v-if="current==4" :language="language"
             :loading="loading"
             @handleLoadingFalse="setLoadingFalse"
             @setCurrentPage="handleSetCurrentPage"></page4>
    </div>
    <section class="page-footer-text">
      {{ $t('page1.area7.text') }}
    </section>
  </div>
</template>

<style lang="less">
.is-land {
  overflow: hidden;
}

@keyframes rotateLoading {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

.loading-page {
  position: fixed;
  left: 0;
  top: 0px;
  z-index: 9999999999999999999999999;
  background-color: #232323;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .loading-item {
    animation: rotateLoading 1s linear infinite;
  }
  .loading-container{
    font-family: var(--base-title-fontfamilly);
    font-size: 26px;
    color: var(--title-bkcolor);
  }
  @keyframes loading1{
    0%{
      opacity: 1;
    }
    40%{
      opacity: 1;
    }
    50%{
      opacity: 0;
    }
    60%{
      opacity: 1;
    }
    70%{
      opacity: 0;
    }
    100%{
      opacity: 0;
    }

  }
  @keyframes loading2{
    0%{
      opacity: 1;
    }
    40%{
      opacity: 1;
    }
    50%{
      opacity: 0;
    }
    60%{
      opacity: 0;
    }
    70%{
      opacity: 1;
    }
    80%{
      opacity: 0;
    }
    100%{
      opacity: 0;
    }

  }
  @keyframes loading3{
    0%{
      opacity: 1;
    }
    40%{
      opacity: 1;
    }
    50%{
      opacity: 0;
    }

    70%{
      opacity: 0;
    }
    80%{
      opacity: 1;
    }
    90%{
      opacity: 0;
    }
    100%{
      opacity: 0;
    }

  }
  @keyframes loading4{
    0%{
      opacity: 1;
    }
    40%{
      opacity: 1;
    }
    50%{
      opacity: 0;
    }
    80%{
      opacity: 0;
    }
    90%{
      opacity: 1;
    }
    100%{
      opacity: 1;
    }

  }
  .loading-item:nth-child(1){
    animation: loading1 2s linear infinite;
  }
  .loading-item:nth-child(2){
    animation: loading2 2s linear infinite;
  }
  .loading-item:nth-child(3){
    animation: loading3 2s linear infinite;
  }
  .loading-item:nth-child(4){
    animation: loading4 2s linear infinite;
  }
}

@keyframes navFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.menu-nav {
  height: 120px;
  position: fixed;
  left: 6vw;
  top: calc(50vh - 100px);
  z-index: 999999999;
  background-color: #fafafa;
  border: 2px solid #232323;
  font-family: MS-Regular;
  opacity: 1;
  animation: navFadeIn 1s ease-in-out;

  .first {
    display: flex;
    justify-content: space-between;
    height: 71%;
    border-bottom: 2px solid #232323;

    .number-page {
      //gap: 20px;
      width: 236px;
      padding: 0px 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .number-item {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        background-size: 100% 100%;
        line-height: 46px;
        text-align: center;
        cursor: pointer;
        font-size: 20px;
      }

      .number-item.active {
        background-image: url("@/assets/images/circle-bg.png");

      }
    }

    .zhi-ding {
      width: 37px;
      text-align: center;
      cursor: pointer;
      overflow: hidden;
    }

    .zhi-ding:hover {
      background-image: url("./img/nav-1.png");
      background-size: 100% 100%;
      background-position: center center;
    }

    .vertical-line {
      width: 2px;
      height: 118px;
      background-color: #232323;
    }
  }

  .second {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 29%;

    .is-land-menu {
      width: 236px;
      height: 100%;
      padding: 0px 12px;
      display: flex;
      overflow: hidden;
      align-items: center;
      cursor: pointer;

    }

    .is-land-menu:hover {
      background-image: url("./img/nav-2.png");
      background-size: 100% 100%;
      background-position: center center;
    }

    .toggle-language {
      cursor: pointer;
      width: 37px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .toggle-language.zh-lag {
      font-family: 楷体;
      font-size: 20px;
      font-weight: 600;
    }

    .toggle-language:hover {
      background-image: url("./img/nav-3.png");
      background-size: 100% 100%;
      background-position: center center;
    }
  }
}
.page-footer-text {
  position: fixed;
  bottom: 12px;
  left: 0;
  width: 100vw;
  color: #fafafa;
  text-align: center;
  opacity: 0;
}
</style>