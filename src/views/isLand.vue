<script>
import Page0 from "@/views/page0/index.vue";
import {selector} from "gsap/gsap-core";
export default {
  name: "isLand",
  methods: {
    selectCurrent(item){
      this.current=item-1
    }
  },
  data(){
    return{
      current:0
    }
  },
  components:{
    Page0
  },
  mounted() {

    this.$nextTick(()=>{
    })
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
      <div class="zhi-ding">
        <img src="@/assets/images/zhidingSwot.png"  alt="">
      </div>
    </div>
    <div class="second">
      <div class="is-land-menu">
        <span>is land</span>
      </div>
    </div>
  </div>
  <page0 v-if="current==0"></page0>
</div>
</template>

<style lang="less">
.is-land{
  overflow: hidden;
}
.menu-nav{
  width: 300px;
  height: 120px;
  position: fixed;
  left: 150px;
  top:calc(50vh - 100px);
  z-index: 999999999;
  background-color: #fafafa;
  border: 2px solid #232323;


  .first{
    display: flex;
    justify-content: space-between;
    height: 80px;
    border-bottom: 2px solid #232323;
    .number-page{
      padding: 10px;
      width: 80%;
      border-right: 2px solid #232323;
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
      width: 39px;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }

    }
  }
  .second{
    .is-land-menu{
      padding: 10px;
      width: 80%;
      display: flex;
      align-items: center;
      border-right: 2px solid #232323;
    }
  }
}
</style>