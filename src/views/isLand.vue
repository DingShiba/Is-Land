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
      current: 0,
      language: "en",
      hasInit: false,
      loading:false
    }
  },
  watch: {
    current(val) {
      window.scroll(0, 0)
      this.loading=true
      document.body.style.overflow = 'hidden';
      setTimeout(()=>{
        gsap.to(".loading-page",{
          opacity:0,
          onComplete:()=>{
            this.loading=false
            document.body.style.overflow = 'auto';
          }
        })
      },1000)
    },

  },
  methods: {
    selectCurrent(item) {
      this.current = item - 1
    },
    handleSetCurrentPage(current){
      this.current=current
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
        document.querySelector('.is-land').classList.add("zh")
      } else {
        this.language = 'en'
        document.querySelector('.is-land').classList.remove("zh")
      }
      this.$i18n.locale = this.language
    },
  },
  components: {
    Page0,
    Page1,
    Page2,
    Page3,
    Page4
  },
  mounted() {
  },
}
</script>

<template>
  <div class="is-land">
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
        <div class="is-land-menu">
          <span>is land</span>
        </div>
        <div class="toggle-language" :class="{'zh-lag':language=='en'}" @click="handleToggleLanguage">
          <span>{{ language == 'en' ? '汉' : 'En' }}</span>
        </div>
      </div>
    </div>
    <div class="loading-page" v-if="loading">
      <div>
        <svg class="loading-item" viewBox="0 0 1024 1024" width="64" height="64">
          <path
              d="M384 128A64 64 13680 1 0 640 128 64 64 13680 1 0 384 128zM655.53 240.47A64 64 13680 1 0 911.53 240.47 64 64 13680 1 0 655.53 240.47zM832 512A32 32 13680 1 0 960 512 32 32 13680 1 0 832 512zM719.53 783.53A32 32 13680 1 0 847.53 783.53 32 32 13680 1 0 719.53 783.53zM448.002 896A32 32 13680 1 0 576.002 896 32 32 13680 1 0 448.002 896zM176.472 783.53A32 32 13680 1 0 304.472 783.53 32 32 13680 1 0 176.472 783.53zM144.472 240.47A48 48 13680 1 0 336.472 240.47 48 48 13680 1 0 144.472 240.47zM56 512A36 36 13680 1 0 200 512 36 36 13680 1 0 56 512z"
              fill="#fff" p-id="4260"></path>
        </svg>
      </div>
    </div>
    <page0 v-if="current==0" :language="language"
           :has-init="hasInit"
           @setCurrentPage="handleSetCurrentPage"
           @handleSetInit="setHasInit"
           @toggleLanguage="handleToggleLanguage"></page0>
    <page1 v-if="current==1"
           :language="language"
           @setCurrentPage="handleSetCurrentPage"></page1>
    <page2 v-if="current==2" :language="language"
           @setCurrentPage="handleSetCurrentPage"></page2>
    <page3 v-if="current==3" :language="language"
           @setCurrentPage="handleSetCurrentPage"></page3>
    <page4 v-if="current==4" :language="language"
           @setCurrentPage="handleSetCurrentPage"></page4>
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
  z-index: 99999999999999;
  background-color: #232323;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .loading-item {
    animation: rotateLoading 1s linear infinite;
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
  left: 150px;
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
      padding: 0px 12px ;
      display: flex;
      overflow: hidden;
      align-items: center;
    }
    .is-land-menu:hover{
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
    .toggle-language.zh-lag{
      font-family: 楷体;
      font-size: 20px;
      font-weight: 600;
    }
    .toggle-language:hover{
      background-image: url("./img/nav-3.png");
      background-size: 100% 100%;
      background-position: center center;
    }
  }
}
</style>