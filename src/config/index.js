const debug = process.env.NODE_ENV == "development";
export default {
  hideHeaderMenu: true,
  lang: "zh",
  isCollect: false,
  isBreadcrumb: false,
  isTag: false,
  loginVerifyType: false,
  menuMode: 2,//1.代表全集 2代表同级
  debug: debug,
  defaultThemeIndex: -1, //-1表示无主题切换
  skinTheme: [
    {
      color: "rgb(0 198 255)",
      label: "白天",
      id: "theme-white",
      href: "static/css/white-theme.css"
    }, {
      color: "rgb(50 247 24)",
      label: "黑夜",
      id: "theme-black",
      href: "static/css/dark-theme.css",
    },
  ],

}
