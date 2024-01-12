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
  rabbitmq: {
    username: 'admin',
    passowrd: 'admin',
    url: GlobalConfig.rabbitmq.url,
  },

  /* MC 协议 */
  mcRabbmitMq: {
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "adapter-ntcip/adapter.ntcip.area.*", //channel是exchange和routing_key合并在一起的
  },

  //mc协议-控制方式的mq
  mcModeMq: {
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "adapter-ntcip/adapter.ntcip.area.controlmode",
  },
  mcModeMq1: {
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "adapter-ntcip/adapter.ntcip.area.ControlMode",
  },
  mcCrossModeMq: {
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "adapter-ntcip/adapter.ntcip.area.crosscontrolmode",
  },

  //mc协议-周期的mq
  mcCycleMq: {
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "adapter-ntcip/adapter.ntcip.area.crosscycle",
  },
  mcCycleMq1: {
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "adapter-ntcip/adapter.ntcip.area.CrossCycle",
  },

  //mc协议-阶段的mq
  mcStageMq: {
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "adapter-ntcip/adapter.ntcip.area.crossstage",
  },
  mcStageMq1: {
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "adapter-ntcip/adapter.ntcip.area.CrossStage",
  },

  //mc协议-方案的mq
  mcPlanMq: {
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "adapter-ntcip/adapter.ntcip.area.crossplan",
  },
  mcPlanMq1: {
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "adapter-ntcip/adapter.ntcip.area.CrossPlan",
  },

  //mc协议-方案参数调看的mq
  planParamMq: {
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "adapter-ntcip/adapter.ntcip.area.planparam",
  },
  planParamMq1: {
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "adapter-ntcip/adapter.ntcip.area.PlanParam",
  },

  //mc协议-日计划参数调看的mq
  dayPlanParamMq: {
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "adapter-ntcip/adapter.ntcip.area.dayplanparam",
  },
  dayPlanParamMq1: {
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "adapter-ntcip/adapter.ntcip.area.DayPlanParam",
  },

  //mc协议-调度计划参数调看的mq
  ScheduleParamMq: {
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "adapter-ntcip/adapter.ntcip.area.scheduleparam",
  },
  ScheduleParamMq1: {
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "adapter-ntcip/adapter.ntcip.area.ScheduleParam",
  },

  /* LES 协议 */
  lesRabbmitMq: {
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "IP.topic/All.IP.BROADCAST.*"
  },
  lesModeMq: { //les信号机-控制方式的mq
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "IP.topic/All.IP.BROADCAST.MODE"
  },
  lesStageMq: { //les信号机-阶段的mq
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "IP.topic/All.IP.BROADCAST.STAGE"
  },
  lesCycleMq: { //les信号机-周期的mq
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "IP.topic/All.IP.BROADCAST.CYCLE"
  },
  lesInterGreenMq: {  //les信号机-过渡灯色的mq
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "IP.topic/All.IP.BROADCAST.INTERGREEN"
  },
  stageOrderMq: { //les信号机-相序的mq
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "IP.topic/All.IP.COMMAND.ORDER"
  },
  comSegmentMq: { //les信号机-一般时段的mq
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "IP.topic/All.IP.COMMAND.SEGMENT"
  },
  hsegSegmentMq: { //les信号机-节假日时段的mq
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "IP.topic/All.IP.COMMAND.HSEGMENT"
  },
  weekSegmentMq: { //les信号机-星期时段的mq
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "IP.topic/All.IP.COMMAND.WSEGMENT"
  },
  lesCommandMq: {
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "IP.topic/All.IP.COMMAND.*"
  },
  policeGpsRabbmitMq: {
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "TGS.topic/TGS.topic.gps.police"
  },
  gpsRabbmitMq: {
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "TGS.topic/TGS.topic.*"
  },
  carRabbmitMq: {
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,
    channel: "LRT.topic/LRT.topic.streetCar"
  },
  priRabbmitMq:{
    username: "admin",
    password: "admin",
    url: GlobalConfig.rabbitmq.url,//mq地址
    channel: "LRT.topic/LRT.topic.priorityInfo"
  },
  testAccount: {
    userName: "xhgk",
    password: "111111"
  },
}
