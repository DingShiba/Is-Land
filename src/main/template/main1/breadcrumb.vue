<template>
  <div class="main-breadcrumb">
    <a-breadcrumb style="padding: 10px">
      <a-breadcrumb-item class="cursor-point" v-show="homeMenuId!=currentRoute" @click.native="goHome">
        <a-icon type="home" /> 首页</a-breadcrumb-item>
      <a-breadcrumb-item v-for="(bread,index) in breadList" :key="index">
        {{bread}}
      </a-breadcrumb-item>
    </a-breadcrumb>
    <!--<div  class="page-reload" @click="refresh">-->
      <!--<a-icon type="reload" /> 刷新-->
    <!--</div>-->
  </div>
</template>
<script>
export default {
    data(){
        return{
            breadList:[]
        }
    },
    computed: {
        homeMenuId(){
           return this.$store.state.user.homeMenuId;
        },
        currentRoute() {
           return this.$store.state.user.currentRoute;
        },
        menuListName(){
            return this.$store.state.user.menuListName;
        }
    },
    watch:{
        currentRoute: {
        　　handler(val, oldName) {
        　　   this.setBread(val);
        　　},
        　　immediate: true
        }
    },
   methods:{
     setBread(val){
        let r = this.menuListName[val];
        let breadList = [];
        if(!!r){
            let parent = r.parents;
            for(let i in parent){
                if(parent[i]!="null" && !!parent[i]){
                  if(this.menuListName[parent[i]]){
                      this.breadList.push(this.menuListName[parent[i]]?this.menuListName[parent[i]]['title']:"");
                  }
                }
            }
           breadList.push(r['title']);
        }
         this.breadList = breadList;
     },
     refresh(){
       let q = this.$route.query;
       let query = {};
       for(let i in q){
         query[i] = q[i];
       }
       query.t = Date.now();
       this.$router.push({
         name: this.currentRoute,
         query: query,
       });
     },
     goHome(){
       this.$router.push({
        name: this.homeMenuId
       });
     }
   },
    mounted(){
    }
}
</script>
<style scoped>
  .main-breadcrumb{
     position: relative;
  }
  .main-breadcrumb .page-reload{
    position: absolute;
    right: 10px;
    top: 2px;
    cursor: pointer;
  }
</style>
