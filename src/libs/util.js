import { message } from 'ant-design-vue';
import Cookies from 'js-cookie';
/**
 * cookie写入
 * @param key
 * @param value
 * @constructor
 */
export const WriteCookie = (key, value, time) => {
    Cookies.set(key, value, { expires: time || 1 })
};
/**
 * cookie读取
 * @param key
 * @returns {T | ActiveX.IXMLDOMNode | Promise<any> | V | string | IDBRequest | any | FormDataEntryValue | MediaKeyStatus}
 * @constructor
 */
export const ReadCookie = (key) => {
    return Cookies.get(key)
};
/**
 * 删除cookie
 * @param key
 * @constructor
 */
export const DelCookie = (key) => {
    Cookies.remove(key);
};
/**
 * LocalStorage操作
 * @param {*} key
 * @returns
 */
export const ReadLocalStorage = (key) => {
    return localStorage.getItem(key);
};
export const WriteLocalStorage = (key,value) => {
    localStorage.setItem(key,value);
};
export const DelLocalStorage = (key) => {
    localStorage.removeItem(key);
}
/**
 * url参数部分转化成json对象
 * @param url
 */
export const parseQueryString = (url) => {
    let reg_url = /^[^\?]+\?([\w\W]+)$/,
        reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
        arr_url = reg_url.exec(url),
        ret = {};
    if (arr_url && arr_url[1]) {
        let str_para = arr_url[1],
            result;
        while ((result = reg_para.exec(str_para)) != null) {
            ret[result[1]] = result[2];
        }
    }
    return ret;
};
/**
 * 获取href
 * @returns {string}
 */
export const getLocationHash = () => {
    return window.location.href;
};
/**
 * 前缀补充0
 * @param num 传入的数字
 * @param n  需要的字符长度
 * @returns {string}
 * @constructor
 */
export const PrefixInteger = function(num, n) {
    return (Array(n).join(0) + num).slice(-n)
};

/**
 *生成guid
 *
 */
export const GetGuid = function guid() {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
};

/**
 * 如果此条数据为当前页面最后一条数据,则删除成功后当前页码减一
 * @param page 当前页码
 * @param length table绑定的data长度
 * @param del 删除数据的长度 删除单个填1 删除多个填勾选的数组长度
 * @return {number}
 */
export const GetPageByDelete = function(page, length, del) {
    if (length === del && page > 0) {
        return page - 1
    }
    return page
}
/**
 *
 * @param {*} a 默认数据
 * @param {*} b 覆盖数据
 */
export const ExtendJson = function(a,b){
    a = a || {};
    b = b || {};
    for(let i in b){
        a[i] = b[i];
    }
    return a;
}
/**
 * JSON to Array
 */
 export const JsonToArray =  function (a){
  a = a || {};
  let res = [];
  for(let i in a){
    res.push({
      "key":i,
      "value": a[i]
    })
  }
  return res;
}
//地图相关函数----Start----
/**
 * wgs84_to_gcj02
 */

 export const  wgs84_to_gcj02 = function(lon, lat) {
    let pi = 3.1415926535897932384626;
    let a = 6378245.0;
    let ee = 0.00669342162296594323;
    if (outOfChina(lat, lon)) {
      return null;
    }
    let dLat = transformLat(lon - 105.0, lat - 35.0);
    let dLon = transformLon(lon - 105.0, lat - 35.0);
    let radLat = lat / 180.0 * pi;
    let magic = Math.sin(radLat);
    magic = 1 - ee * magic * magic;
    let sqrtMagic = Math.sqrt(magic);
    dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi);
    dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * pi);
    let mgLat = parseFloat(lat) + parseFloat(dLat);
    let mgLon = parseFloat(lon) + parseFloat(dLon);
    return [mgLon,mgLat];
  }
  function transformLat(x, y) {
    let pi = 3.1415926535897932384626;
    let ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(y * pi) + 40.0 * Math.sin(y / 3.0 * pi)) * 2.0 / 3.0;
    ret += (160.0 * Math.sin(y / 12.0 * pi) + 320 * Math.sin(y * pi / 30.0)) * 2.0 / 3.0;
    return ret;
  }
  function transformLon(x, y) {
    let pi = 3.1415926535897932384626;
    let ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(x * pi) + 40.0 * Math.sin(x / 3.0 * pi)) * 2.0 / 3.0;
    ret += (150.0 * Math.sin(x / 12.0 * pi) + 300.0 * Math.sin(x / 30.0 * pi)) * 2.0 / 3.0;
    return ret;
  }
  function outOfChina(lat, lon){
    if (lon < 72.004 || lon > 137.8347) {
      return true;
    }
    if (lat < 0.8293 || lat > 55.8271) {
      return true;
    }
    return false;
  }

  //地图相关函数----End----
//复制剪切板
export const onCopy = function(info) {
  navigator.clipboard.writeText(info).then(() => {
    message.success({
      content:'复制成功',
      duration:.5
    })
  })
}

/**  水印添加方法  */

let setWatermark = (str1, str2,str3) => {
  let id = '1.23452384164.123412415'

  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id))
  }

  let can = document.createElement('canvas')
  // 设置canvas画布大小
  can.width = 300
  can.height = 200

  let cans = can.getContext('2d')
  cans.rotate(-20 * Math.PI / 180) // 水印旋转角度
  cans.font = '15px Vedana'
  cans.fillStyle = '#666666'
  cans.textAlign = 'center'
  cans.textBaseline = 'Middle'
  cans.fillText(str1, can.width / 2, can.height) // 水印在画布的位置x，y轴
  cans.fillText(str2, can.width / 2, can.height + 22)
  cans.fillText(str3, can.width / 2, can.height + 44)

  let div = document.createElement('div')
  div.id = id
  div.style.pointerEvents = 'none'
  div.style.top = '40px'
  div.style.left = '0px'
  div.style.opacity = '0.15'
  div.style.position = 'fixed'
  div.style.zIndex = '100000'
  div.style.width = document.documentElement.clientWidth + 'px'
  div.style.height = document.documentElement.clientHeight  + 'px'
  div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
  document.body.appendChild(div)
  return id
}

// 添加水印方法
export const setWaterMark = (str1, str2,str3) => {
  let id = setWatermark(str1, str2,str3)
  if (document.getElementById(id) === null) {
    id = setWatermark(str1, str2,str3)
  }
}

// 移除水印方法
export const removeWatermark = () => {
  let id = '1.23452384164.123412415'
  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id))
  }
}

export const formatDate = function (date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + ''
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
        }
    }
    return fmt
}

