<script>
import Page0 from "@/views/page0/index.vue";
import Page1 from "@/views/page1/index.vue";
import Page2 from "@/views/page2/index.vue";
import Page3 from "@/views/page3/index.vue";
import Page4 from "@/views/page4/index.vue";
export default {
  name: "isLand",
  methods: {
    selectCurrent(item){
      this.current=item-1
    },
    goToHeader(){
      window.scroll(0,0)
    },
    handleToggleLanguage(){
      if(this.language=='en'){
        this.language='zh'
        document.querySelector('.is-land').classList.add("zh")
      }else {
        this.language='en'
        document.querySelector('.is-land').classList.remove("zh")
      }
      this.$i18n.locale=this.language
    },
  },
  data(){
    return{
      current:1,
      language:"en"
    }
  },
  watch:{
    current(val){
      window.scroll(0, 0)
    }
  },
  components:{
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
  <div class="menu-nav">
    <div class="first">
      <div class="number-page">
        <div class="number-item"
             :class="{active:item-1==current}"
             v-for="item in 5" @click="selectCurrent(item)">
          {{item-1}}
        </div>
      </div>
      <div class="vertical-line"></div>
      <div class="zhi-ding" @click="goToHeader">
        <img src="@/assets/images/zhidingSwot.png" height="60" alt="">
      </div>
    </div>
    <div class="second">
      <div class="is-land-menu">
        <span>is land</span>
      </div>
      <div class="toggle-language" @click="handleToggleLanguage">
        <span>{{ language=='en'?'汉':'En' }}</span>
      </div>
    </div>
  </div>
  <page0 v-if="current==0" :language="language"></page0>
  <page1 v-if="current==1" :language="language"></page1>
  <page2 v-if="current==2" :language="language"></page2>
  <page3 v-if="current==3" :language="language"></page3>
  <page4 v-if="current==4" :language="language"></page4>
</div>
</template>

<style lang="less">
.is-land{
  overflow: hidden;
}
.menu-nav{
  width: 300px;
  height: 100px;
  position: fixed;
  left: 150px;
  top:calc(50vh - 100px);
  z-index: 999999999;
  background-color: #fafafa;
  border: 2px solid #232323;
  font-family: MS-Regular;
  opacity: 1;
  .first{
    display: flex;
    justify-content: space-between;
    height: 60px;
    border-bottom: 2px solid #232323;
    .number-page{
      //gap: 20px;
      width: 256px;
      padding: 0px 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .number-item{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-size: 100% 100%;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
      }
      .number-item.active{
        background-image: url("@/assets/images/circle-bg.png");

      }
    }
    .zhi-ding{
      width: 44px;
      text-align: center;
      cursor: pointer;
    }
    .vertical-line{
      width: 2px;
      height: 98px;
      background-color: #232323;
    }
  }
  .second{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .is-land-menu{
      padding: 10px;
      width: 256px;
      display: flex;
      align-items: center;
    }
    .toggle-language{
      cursor: pointer;
      width: 30px;
    }
  }
}
</style>