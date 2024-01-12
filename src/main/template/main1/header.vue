<template>
   <div class="main-header">
     <div class="header-title">
       <img :src="appInfo.avatar" alt="">
<!--       <les-lang filed="title" class="header-text"></les-lang>-->
       <span class="header-text">{{title}}</span>
       <div class="header-menu-list">
         <breadcrumb-z></breadcrumb-z>
       </div>
     </div>
     <div class="header-icon">
       <div class="header-link" v-show="visualLink.length>0">
         <!-- <a href="https://workspace.easyv.cloud/shareScreen/eyJzY3JlZW5JZCI6NjYxNDUzfQ==?timeStamp=17dc748950a" target="_blank">可视化驾驶舱</a> -->
        <a v-if="visualLink.length==1" :href="visualLink[0]['url']" target="_blank">{{visualLink[0]['name']}}</a>
         <a-dropdown v-else-if="visualLink.length>1">
            <a class="ant-dropdown-link">
              可视化驾驶舱
              <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item v-for="(v,index) in visualLink" :key="'visual-'+index">
                <a :href="v.url" target="_blank">{{v.name}}</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
       </div>
       <!-- <a-icon type="skin" style="font-size: 24px;" /> -->
       <a-dropdown>
         <a class="ant-dropdown-link left" @click="e => e.preventDefault()">
           <img :src="userInfo.avatar" alt="">{{userInfo.userName}}
           <a-icon type="down"/>
         </a>
         <a-menu slot="overlay">
           <a-menu-item>
             <a href="javascript:;"  @click="exitSys">
               <a-icon type="login"/>&nbsp;退出登录</a>
           </a-menu-item>
         </a-menu>
       </a-dropdown>
       <a-dropdown>
      <a class="ant-dropdown-link" @click="e => e.preventDefault()">
        <i class="iconfont icon-theme les-theme-icon" :style="'font-size:30px;color:'+currentTheme.color"></i>
      </a>
      <a-menu slot="overlay">
        <a-menu-item v-for="(t,index) in skinTheme" :key="t.label"  @click.native="changeTheme(t,index)">
          <!--<i class="iconfont icon-theme les-theme-icon les-theme-icon2" :style="'color:'+t.color"></i>-->
          {{t.label}}
        </a-menu-item>
      </a-menu>
    </a-dropdown>
     </div>
   </div>
</template>

<script>
import {DelCookie, DelLocalStorage, ReadCookie, WriteCookie} from "@/libs/util";
import breadcrumbZ from "./breadcrumb.vue";
export default {
  name: "main-header",
  data(){
    return{
       visualLink: GlobalConfig.visualLink || [],
       title: GlobalConfig.title
    }
  },
  components:{
    breadcrumbZ
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
    appInfo() {
      return this.$store.state.app;
    },
    hideHeaderMenu() {
      return this.$store.state.app.hideHeaderMenu;
    },
    themeIndex(){
       return this.$store.state.app.themeIndex;
    },
    skinTheme(){
       return this.$store.state.app.theme;
    },
    currentTheme(){
     return this.$store.state.app.currentTheme;
    }
  },
  methods:{
    exitSys(){
      let self = this;
      this.$store.commit('resetState',()=>{
        setTimeout(()=>{
          self.$destroyAll();
          DelLocalStorage('menuCache');
          DelCookie('LESITSID');
          this.$router.replace({
            path:'/login'
          });
        },500);
      });

      // location.reload();
    },
    changeTheme(theme,index){
      if(this.themeIndex != index){
          this.changeThemeHref(theme.href);
          this.$store.commit('changeThemeIndex',index);
        }
      },
    changeThemeHref(href){
         if(!href){
          href = this.skinTheme[this.themeIndex]["href"];
        }
        let antLink = document.getElementById('link-antd');
        antLink.setAttribute("href","./"+href);
      }
  },
  mounted(){
    //  setTimeout(()=>{
    //     this.changeThemeHref();
    //   },0);
  }
}
</script>

<style scoped>
 .main-header{
   height: 48px;
   line-height: 48px;
   background-color: var(--main-header-color);
   display: flex;
   padding: 0 10px;
   justify-content: space-between;
   box-shadow: 0 2px 12px 0 var(--main-bg-color);
   margin-bottom: 4px;
 }
 .main-header .header-title{
   display: flex;

   align-items: center;
 }
 .main-header .header-title img{
   height: 76%;
 }
  .header-icon a{
     color: var(--main-text-color);
  }
 .main-header .header-text{
   line-height: 48px;
   font-size: 22px;
   height: 100%;
   font-weight: 500;
   color: var(--main-text-color);
   padding-left: 10px;
 }
 .header-icon{
   display: flex;
   align-items: center;
   justify-content: flex-end;
 }
 .header-icon a{
   height: 100%;
 }
 .header-icon a img{
   height: 32px;
   border-radius: 50%;
   margin: 0px 12px;
 }
 .header-menu-list{
   font-size: 17px;
   margin-left: 24px;
 }
 .header-link a{
   background-color: #178FFF;
   border-radius: 10px;
   padding: 4px 10px;
   color: #fff !important;
 }
</style>
