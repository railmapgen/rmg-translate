!function(){"use strict";var e,n=JSON.parse('{"Components":"组件","Palette":"调色板","Rail Map Generator":"铁路线路图生成器","RMG Home":"RMG 主页","Seed Project":"种子项目","Templates":"模板","Translate":"翻译"}'),t=JSON.parse('{"Components":"元件","Palette":"調色盤","Rail Map Generator":"鐵路路綫圖產生器","RMG Home":"RMG 主頁","Seed Project":"種子項目","Templates":"範本","Translate":"翻譯"}');!function(e){e.Azerbaijani="az",e.Arabic="ar",e.Catalan="ca",e.Chinese="zh",e.ChineseCN="zh-CN",e.ChineseSimp="zh-Hans",e.ChineseTrad="zh-Hant",e.ChineseHK="zh-HK",e.ChineseTW="zh-TW",e.English="en",e.French="fr",e.Gaelic="ga",e.German="de",e.Hindi="hi",e.Japanese="ja",e.Korean="ko",e.Malay="ms",e.Norwegian="no",e.Spanish="es",e.Persian="fa",e.Portuguese="pt",e.Russian="ru",e.Swedish="sv",e.Turkish="tr"}(e||(e={}));var a,r={resources:{"zh-Hans":{translation:n},"zh-Hant":{translation:t}}},o=function(){return o=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},o.apply(this,arguments)},i=function(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var a,r,o=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(a=o.next()).done;)i.push(a.value)}catch(e){r={error:e}}finally{try{a&&!a.done&&(t=o.return)&&t.call(o)}finally{if(r)throw r.error}}return i},s=document.querySelector.bind(document),c={};Object.entries(r.resources).forEach((function(e){var n=i(e,2),t=n[0],a=n[1];Object.entries(a.translations).forEach((function(e){var n,a=i(e,2),r=a[0],s=a[1];c[r]=o(o({},c[r]),((n={})[t]=s,n))}))}));var l=[e.ChineseSimp,e.ChineseTrad],u=document.createElement("table"),h=document.createElement("tbody");Object.entries(c).forEach((function(e){var n=i(e,2),t=n[0],a=n[1],r=document.createElement("tr"),o=document.createElement("td");o.textContent=t,r.append(o),l.forEach((function(e){var n,t=document.createElement("td");t.textContent=null!==(n=a[e])&&void 0!==n?n:"",r.append(t)})),h.append(r)})),u.append(h),null===(a=s("#root"))||void 0===a||a.append(u)}();