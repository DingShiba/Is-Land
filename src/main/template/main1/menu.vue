<template>
    <div class="main-menu" id="main-menu" :style="'width:'+menuWidth+'px;'">
        <vue-scroll>
            <a-menu
                mode="inline"
                style="height: 100%;"
                :inline-collapsed="collapsed"
                @click="changeMenu"
                :selectedKeys="[currentRoute]"
            >
                <a-menu-item disabled @click.native="toggleCollapsed">
                    <span v-if="!collapsed"><a-icon type="menu-fold"/><span>功能列表</span></span>
                    <span v-else><a-icon type="menu-unfold"/><span>功能列表</span></span>
                </a-menu-item>
                <template v-for="item in menuData">
                    <template v-if="item.show">
                        <a-menu-item v-if="item.children.length==0" :key="item.name">
                            <a-icon :type="item.icon"/>
                            <span>{{ item.title }}</span>
                        </a-menu-item>
                        <a-sub-menu v-else-if="item.children.length>0 && item.show" :key="item.name">
                            <span slot="title"><a-icon :type="item.icon"/><span>{{ item.title }}</span></span>
                            <template v-for="(child) in item.children" v-if="child.show">
                                <a-menu-item v-if="child.children.length==0" :key="child.name">
                                    {{ child.title }}
                                </a-menu-item>
                                <a-sub-menu v-else-if="child.children.length>0 && child.show" :key="child.name">
                                    <span slot="title"><span>{{ child.title }}</span></span>
                                    <a-menu-item v-for="child1 in child.children" v-if="child1.show" :key="child1.name">
                                        <span>{{ child1.title }}</span>
                                    </a-menu-item>
                                </a-sub-menu>
                            </template>
                        </a-sub-menu>
                    </template>
                </template>
            </a-menu>
        </vue-scroll>
    </div>
</template>
<script>
import TemplateMain from "@/main/template/main/main";
export default {
  name: "main-menu",
  components: {TemplateMain},
  data() {
    return {
      collapsed: false
    };
  },
  computed:{
     currentRoute() {
           return this.$store.state.user.currentRoute;
        },
    menuData(){
      return this.$store.state.user.menuData;
    },
    menuWidth(){
      return this.collapsed?60:200
    },
    routerByName(){
       return this.$store.state.user.routerByName;
    }
  },
  watch: {

  },
  methods: {
    toggleCollapsed(){
      this.collapsed = !this.collapsed;
      this.$emit('on-collapsed',this.collapsed);
    },
    changeMenu(a){
      let p = this.routerByName[a.key];
      if(p.target == 'blank'){
        window.open("/#"+p.path,"_blank");
      }else{
        this.$router.push({
          name: a.key
        });
      }
    }
  },
  mounted(){
    this.collapsed = this.$store.state.app.isCollect;
  }
};
</script>
<style scoped>
#main-menu{
  background-color: var(--main-menu-bg-color);
  border-right: 1px solid var(--main-breadcrumb-bg-color);
}
#main-menu >>> .ant-menu-inline-collapsed{
  width: 60px;
}
.ant-menu-inline-collapsed > .ant-menu-item-disabled{
  padding: 0 20px !important;
}
#main-menu >>> .ant-menu-inline-collapsed .ant-menu-submenu-title{
  padding: 0 20px !important;
}
  #main-menu >>> .ant-menu-item-disabled{
     color: var(--main-text-color) !important;
     height: 40px;
     line-height: 40px;
     font-size: 16px;
     width: 100%;
     /* transition: all 0.3s; */
     cursor: pointer;
  }
  .main-menu-toggle i{
    font-size: 17px;
    padding: 0px 6px;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .main-menu-toggle-small i{
    font-size: 20px;
    cursor: pointer;
  }
  .main-menu >>>.ant-menu-dark,.main-menu >>> .ant-menu-dark .ant-menu-sub{
    background-color: var(--main-bg-color);
    color: var(--main-text-color);
  }
</style>
