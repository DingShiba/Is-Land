import { createI18n } from 'vue-i18n'; //引入vue-i18n组件
import zh from './zh';
import en from './en';
//注册i18n实例并引入语言文件
const i18n = createI18n({
    legacy:false,
    locale: 'en', // 语言标识（缓存里面没有就用中文）
    fallbackLocale:'en' , //没有英文的时候默认中文语言
    messages: {
        zh,
        en
    }
});
export default i18n