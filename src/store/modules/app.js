/*
 * @Author: wou
 * @Date: 2023-06-26 14:47:55
 * @LastEditTime: 2023-08-03 17:00:40
 * @Description: 
 */
import avatar from "@/assets/images/china.png";
import lang from "@/libs/lang/index";
import {DelCookie, ReadLocalStorage, WriteLocalStorage} from '../../libs/util';
let themeIndex = ReadLocalStorage('theme');
if(themeIndex == null){
  themeIndex = GlobalConfig.themeIndex;
}
export default {
  state: {
    avatar: GlobalConfig.logo ||  avatar,
    title: GlobalConfig.title || lang[GlobalConfig.lang || 'zh']["title"],
    theme: themeIndex != -1?GlobalConfig.skinTheme:[],
    themeIndex: themeIndex,
    currentTheme: themeIndex>=0?GlobalConfig.skinTheme[themeIndex]:{},
    lang: GlobalConfig.lang || 'zh',
    isBreadcrumb: !!GlobalConfig.isBreadcrumb,
    breadrumbHeight: 42,
    bodyHeight: window.innerHeight,
    bodyWidth: window.innerWidth,
    innerHeight: '',
    innerWidth: '',
    hideHeaderMenu: !!GlobalConfig.hideHeaderMenu,
    isCollect: !!GlobalConfig.isCollect,
    leftMenuWidth: 0,
    headerHeight: 100,
    isTag: !!GlobalConfig.isTag,
    tagHeight: 40,
    menuMode: GlobalConfig.menuMode,
    tableParams:{

    }
  },
  getters: {},
  mutations: {
    setAppState(state, {key, value}) {
      state[key] = value;
    },
    setTitleByLang(state, langC) {
      state['title'] = lang[langC]["title"];
    },
    changeThemeIndex(state,index){
      state['themeIndex'] = index;
      state['currentTheme'] = state.theme[index];
      if(index != -1){
        GlobalConfig.mapServer.mapColor = GlobalConfig.mapColorType[index];
      }else{
        GlobalConfig.mapServer.mapColor = GlobalConfig.mapColorType[0];
      }
      WriteLocalStorage('theme',index);
    },
    exitSys(){
      DelCookie('DelCookie');
    }
  },
  actions: {}
}

