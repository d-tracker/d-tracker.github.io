(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],A=0,l=[];A<c.length;A++)a=c[A],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&l.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(l.length)l.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},i={app:0},o=[];function c(e){return u.p+"js/"+({login:"login",settings:"settings",stats:"stats"}[e]||e)+"."+{login:"e4ce177c",settings:"9b710e1c",stats:"461bb399"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={settings:1,stats:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({login:"login",settings:"settings",stats:"stats"}[e]||e)+"."+{login:"31d6cfe0",settings:"9357cc44",stats:"225d4c3a"}[e]+".css",i=u.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var s=o[c],A=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(A===r||A===i))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){s=l[c],A=s.getAttribute("data-href");if(A===r||A===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],p.parentNode.removeChild(p),n(o)},p.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=o);var s,A=document.createElement("script");A.charset="utf-8",A.timeout=120,u.nc&&A.setAttribute("nonce",u.nc),A.src=c(e);var l=new Error;s=function(t){A.onerror=A.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}i[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:A})}),12e4);A.onerror=A.onload=s,document.head.appendChild(A)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],A=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=A;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"26f7":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));n("99af"),n("d3b7");var r=n("5530"),a=(n("96cf"),n("1da1")),i=n("8f2d");function o(e,t){return c.apply(this,arguments)}function c(){return c=Object(a["a"])(regeneratorRuntime.mark((function e(t,n){var a,o,c,u=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=!(u.length>2&&void 0!==u[2])||u[2],o=u.length>3&&void 0!==u[3]&&u[3],e.next=4,fetch("".concat(i["a"].apiURL,"/api").concat(t),Object(r["a"])({credentials:"include",headers:Object(r["a"])(Object(r["a"])({},a&&{Accept:"application/json"}),{},{"Content-Type":"application/json"})},n));case 4:if(c=e.sent,!a||o){e.next=9;break}return e.next=8,c.json();case 8:return e.abrupt("return",e.sent);case 9:return e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function u(e,t){return s.apply(this,arguments)}function s(){return s=Object(a["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i["a"].apiURL,"/auth/").concat(t),Object(r["a"])({credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"}},n));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}},"315f":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n("96cf");var r=n("1da1"),a=n("2b0e"),i=n("a6f4"),o=n("26f7");a["a"].use(i["b"]);var c=Object(i["g"])([]),u=Object(i["g"])([]),s=Object(i["g"])(!1),A=Object(i["g"])(-1),l=Object(i["g"])(0),p=Object(i["g"])(0);function d(){var e=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["a"])("/user/disruptions");case 2:c.value=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["a"])("/user/tags");case 2:u.value=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["a"])("/user/nonce");case 2:l.value=e.sent.nonce;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["a"])("/user/threshold");case 2:p.value=e.sent.threshold;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{disruptions:c,loadDisruptions:e,tags:u,loadTags:t,disrupted:s,lastStartTime:A,nonce:l,loadNonce:n,threshold:p,loadThreshold:a}}},"5c13":function(e,t){e.exports="data:audio/mpeg;base64,//uQZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAGAAAJXgA1NTU1NTU1NTU1NTU1NTU1ZWVlZWVlZWVlZWVlZWVlZWWUlJSUlJSUlJSUlJSUlJSUvLy8vLy8vLy8vLy8vLy8vLzr6+vr6+vr6+vr6+vr6+vr6/////////////////////8AAAA8TEFNRTMuOThyBK8AAAAAAAAAADQgJARVTQABzAAACV5qzv9nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uQZAAAATMQ1O0EQAgPYAm9oAABG805T/mtgADqguh/BAABEEAjFAAADHGAGD5jHGP6nzuhAAABDLg+H3f4IBg5//4IBj//+sPgAAAAccfgAD//P9P+n/B+3qFswUAAAAAAFAApABz4A4UQ9mA3DcaLg0Ep2NPDVAjYMwwqYEkuhsSPiE5ONw00090HxAFgYIljft+YgKCEVMtTTOrUmgQABGYKoCQTFwEBDjTZ4xgkMiIQIDhgq3RmE2/RfBYkUhuXpMwpgNGuKGovKa0tzd9w7YOB32LcJ7BwgYKAAkODAZeUM3m5uxTvwwd+6epzNx2nWnilC6ZbANXGGq+6XVjkvt9p5XPuFG7j9SyHqGQu9rL5m9v86XdPbhyKTl6n7rjvvK7sM1WsxKerVeR2mh7u8a1qVNo2AwMzs0Qrqrqy673fbagAAaJu5nHFpYVDDhvCZbttbmm7/H3kgfTrfDf1uX+A733ksZpTcv//LM8a/mkImrchAAAAAA+/xaA5j3FqOhNFzUy5qq2imZd8Sp3+lbhMCLvI9LVAnpEikRD8//uAZBcCBIY/UX8/IAgj4Aov4AABD8j1R+y9FSC7AGi8AAAECuS0pUtK0llKmMFtNaq/j8UUNuksx94YgvL6suo7Mst4TsuqfepbsJbxOhk6KBECj9W7Uq73nz+ZaxpJRnjq7+OpVrWGd7X5d/Wst54dtb592hwpqa0GUf20LQ/lE4Q/9/e4IiZAAAHwwEc4iU4Eg5/rsn/1iq2///2q9n+r/XFxQ23IFSFABeTKkAAAP///jKS5fgQDN6mI2rZoq1mQUkiv50Vm9MzMZpIBXSiec7AOCA+OTCU2lEm59rqZYwZSAYrI2V+4QT+zdubfM6cpq189HM6NnmUqvN5uSvbn2f4VCJOJNQi/xzRdRxr1aLx1NRYVFoZLf7yrXwPi3erzCd+5IhqUETIBAO4a3iS/Flh1+vUtj8iL7KKK63Magh//fzy3Xaqdn9rFMXUfIJNi7Vbl/1IAq5hVEAAAAL////B3XxLiNDaO9TP/+4BkCoID50HR+wwtuCjAGi8AAAEN6P9H7DBW4J8C6LwAjAypNEo5Fn6l1LnUlEqz+dgp5hgYjk3RbENsjiVHQYVK0hHtkSIYFnuJXTg+crRxWiVK2fn6rjg6qYgdOxHLp78J7nuc6reiJUpxBqTSyxEs8w2HDgQYHUYgk4qSlP8VeR2a0+pO/0MTIhETIAAM/1oonCUGgoz6VSNayD1IX1im1dn/fs2f/f/03iI22cHjVldABdZKoQASv///qX8GiLApaQ802im3Yo6CplWqWqa1+MkdkcGkKiiXxZM5TOoVDPr4tTshy5C6an8C66yuzBHZq7dfmrrlVilpU2TapvmZ9tTmM5QqUdSt/NrZ8zhWEiSBmPJ/wWS9Ax5reN0f2/VSEBNSwPIAAUC8F0GAQtMc0sY////Fk1q///9Kn07Dcje1rzZIipWdXQAKmFZSAAkSb9qH6JqyrlGysKty1MMZnULXBiw2OEpxgP/7cGQQgANbP1H4D0F4LOCKLwAjAwu8+0XnoLUgw4LovACIHBWvweEIcUcNEjuZfklIUWTA81buLzFj+FJGuDUxkB4RiG/9YopFmxbgTzyQSJq/////jFjiBCNEdHKJNnUzhvh5ehqRY67xbsf9ARNxExAAKBBdwehFaMHyBhH/s//q7v+eduYm9bRYWQsVY5o/OK4utBIXLrEqQAJqncgAAIK37///FpY1bSqxILqNufLLifWGxs2GMEiVhJNJ0JVKVxDKKPLQsdvUXsdKfMRE25BIOCxx+x9f5+qshtpTB3+v/4wDhgvlzO/TFVBh6LUsTNK/eS99NQPMzcBABhsLtxANiTg3PoCjPmP76Er//Go3c0GWWLisS4DIRbHGFWF5hbiTDbSZQ0oAAAqIMABBDf+/9VUQYpD/+4BkB4AC/j7RfSmgCDxgCi+gAAEPhLtB+QyAAO6OJ/8GMAAsFI8YmmikWOJLPlgJscI9x6HC7SQPop2WgszQNz1aaamo7KZBKgkgZl0mImpyttTdk0VHmbVfpf//2MkyRMH62rACWREsm6HSzMXb+v9atqwiKmpgGkAabf+wi0NJNNdt7P/79p/T0aMwI4s8SjBjTodSDRp4yUIoHRwbNOBB54OsteJbEGPktSNzU8kAMARE0b2gEwy97dvwMAAB6RMeTguQkQShIyABYQF6ILnIJhkOJPDeXmUOsilUegeLDgT6pDKHMCycyDY5SA4tH0SRREm3dhyW0sHvBTx24/DFpGzzkP1pc3s1lL6ahglyuwZPuGzht2Kudy1S5/8DUU7TVP+TAsCv/xeH1VWdnd1aEWEV7fX9sLQAACI16RjEyk5Bu1yQYNxtFJWPnE0UmY76JD4OKGGDjm04mkwFUDyixVxb7J3WN3qqqf/7MGQCD/LPJNB/MGAKFyAJneAAAQAAAaQAAAAgAAA0gAAABFIUV7v+MsfLv0kg1BEGxOjORBBqTT2BQEBAVXZlUtVVV1VVUuKqqq/4ldmZuMzeqgLBQUFPChuIKDHdBXYgorgSC+FBX5BQV8IK///zf6CgrugruBIKAAAAB/hRgAP/57iLr/iUFf/KgqCoKh1MQU1FMy45OC40qg=="},"8f2d":function(e,t,n){"use strict";t["a"]={apiURL:"https://api.habbit-beta.ml"}},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[e.loggedRoutes.some((function(t){return t==e.$route.name}))?n("v-app-bar",{attrs:{app:"",elevation:"0",color:"white"}},[n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(t){e.$router.replace("/").catch((function(){}))}}},[n("v-icon",[e._v("mdi-home")])],1),n("v-btn",{attrs:{icon:""},on:{click:function(t){e.$router.replace("/stats").catch((function(){}))}}},[n("v-icon",[e._v("mdi-finance")])],1),n("v-btn",{attrs:{icon:""},on:{click:function(t){e.$router.replace("/settings").catch((function(){}))}}},[n("v-icon",[e._v("mdi-cog")])],1)],1):e._e(),n("v-main",[n("v-slide-x-transition",{attrs:{mode:"out-in","hide-on-leave":!0}},[n("router-view")],1)],1)],1)},i=[],o=(n("caad"),n("2532"),n("a6f4")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-row",{staticClass:"text-center justify-center"},[n("v-col",[e.loading?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):n("v-btn",{attrs:{color:e.color},on:{click:e.toggle}},[e._v(" "+e._s(e.content)+" "),n("v-icon",{staticClass:"ml-2"},[e._v("mdi-timer")])],1),e.disrupted?n("time-elapsed",{attrs:{"start-time":e.lastStartTime}}):e._e(),n("v-dialog",{attrs:{"max-width":"360"},model:{value:e.showTagMenu,callback:function(t){e.showTagMenu=t},expression:"showTagMenu"}},[n("tag-selector",{attrs:{open:e.showTagMenu},on:{select:e.submitTag,discard:e.discard}})],1),e.snackbar?n("v-snackbar",{attrs:{timeout:"3000"},scopedSlots:e._u([{key:"action",fn:function(t){var r=t.attrs;return[n("v-btn",e._b({attrs:{color:"blue",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",r,!1),[e._v(" Close ")])]}}],null,!1,986649548),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.errorMessage)+" ")]):e._e()],1)],1)],1)},u=[],s=n("5530"),A=(n("96cf"),n("1da1")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v(e._s(e.formattedTime))])},p=[],d=(n("a9e3"),n("cf0c")),f=Object(o["c"])({name:"TimeElapsed",props:{startTime:{type:Number,required:!0}},setup:function(e){var t,r=Object(o["g"])(Date.now()-e.startTime),a=Object(d["a"])(),i=a.settings,c=Object(o["a"])((function(){var e=new Date(r.value);return e.getMinutes().toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})+":"+e.getSeconds().toLocaleString("en-US",{minimumIntegerDigits:2})})),u=new Audio(n("5c13"));return Object(o["d"])((function(){i.tickSound&&u.play(),t=setInterval((function(){r.value=Date.now()-e.startTime,i.tickSound&&u.play()}),1e3)})),Object(o["e"])((function(){return clearInterval(t)})),{formattedTime:c}}}),g=f,v=n("2877"),m=Object(v["a"])(g,l,p,!1,null,"5bef1f80",null),h=m.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"pa-3"},[n("v-card-title",{staticClass:"heading"},[e._v("Tag the disruption")]),n("v-row",{staticClass:"text-center justify-center"},[n("v-container",[n("v-form",{ref:"form"},[n("v-card-text",[n("v-combobox",{attrs:{loading:e.loading,"search-input":e.search,items:e.tags,rules:[function(e){return!!e||"Required"},function(t){return t&&e.userTags.some((function(e){return t.text==e.name}))||"Save your edit!"}],label:"Search for an option","small-chips":"",solo:""},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t}},scopedSlots:e._u([{key:"no-data",fn:function(){return[e.search&&e.search.length>e.nameLimit?n("v-list-item",[n("span",{staticClass:"subheading",staticStyle:{color:"red"}},[e._v("Your tag is too long")])]):0==e.tags.length&&(!e.search||e.search.length<1)?n("v-list-item",[n("span",{staticClass:"subheading",staticStyle:{"margin-right":"7px"}},[e._v(" Type to create a new tag ")])]):e.tags.length<e.tagLimit?n("v-list-item",{on:{click:function(t){return t.stopPropagation(),e.create(e.search)}}},[n("span",{staticClass:"subheading",staticStyle:{"margin-right":"7px"}},[e._v("Create")]),n("v-chip",{attrs:{color:e.colors[e.nonce]+" lighten-2",label:"",small:""}},[e._v(" "+e._s(e.search)+" ")])],1):n("v-list-item",[n("span",{staticClass:"subheading",staticStyle:{color:"red"}},[e._v("Tag limit reached ("+e._s(e.tagLimit)+")")])])]},proxy:!0},{key:"selection",fn:function(t){var r=t.attrs,a=t.item,i=t.selected;return[a===Object(a)?n("v-chip",e._b({attrs:{color:e.colors[a.value.color]+" lighten-2","input-value":i,label:"",small:""}},"v-chip",r,!1),[n("span",{staticClass:"pr-2"},[e._v(" "+e._s(a.text)+" ")]),n("v-icon",{attrs:{small:""},on:{click:e.resetSelection}},[e._v("mdi-close")])],1):e._e()]}},{key:"item",fn:function(t){var r=t.index,a=t.item;return[e.editing===a?n("v-text-field",{attrs:{rules:[function(t){return t&&t.length<=e.nameLimit||"Too long"}],autofocus:"",flat:"","background-color":"transparent","hide-details":"auto",solo:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.edit(r,a)}},model:{value:e.editing.text,callback:function(t){e.$set(e.editing,"text",t)},expression:"editing.text"}}):n("v-chip",{attrs:{color:e.colors[a.value.color]+" lighten-2",dark:"",label:"",small:""}},[e._v(" "+e._s(a.value.name)+" ")]),n("v-spacer"),n("v-list-item-action",{on:{click:function(e){e.stopPropagation()}}},[n("v-btn",{attrs:{icon:""},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.edit(r,a)}}},[e.editLoading.includes(a.value.id)?n("v-progress-circular",{attrs:{indeterminate:""}}):n("v-icon",[e._v(e._s(e.editing!==a?"mdi-pencil":"mdi-check"))])],1)],1)]}}]),model:{value:e.tag,callback:function(t){e.tag=t},expression:"tag"}})],1),n("v-card-actions",[n("v-btn",{attrs:{disabled:e.disabled,color:"primary"},on:{click:e.select}},[e._v("Select")]),n("v-spacer"),n("v-btn",{attrs:{color:"error"},on:{click:function(t){return e.$emit("discard")}}},[e._v("Discard")])],1)],1)],1)],1)],1)},w=[],x=(n("4de4"),n("7db0"),n("c740"),n("d81d"),n("45fc"),n("b0c0"),n("26f7")),j=n("dad5"),y=n("315f"),O=Object(o["c"])({name:"TagSelector",props:{open:{type:Boolean,required:!0}},components:{},setup:function(e,t){var n=Object(o["g"])(null),r=Object(o["g"])(!0),a=Object(o["g"])(!1),i=Object(o["g"])([]),c=Object(o["g"])(null),u=Object(o["g"])(null),s=Object(o["g"])(null),l=(Object(o["g"])(-1),Object(o["g"])([])),p=50,d=Object(y["a"])(),f=d.loadTags,g=d.tags,v=d.nonce;function m(){return h.apply(this,arguments)}function h(){return h=Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.value=!0,e.next=3,f();case 3:null==g||g.value.length<1?a.value=!0:a.value=!1,i.value=g.value.map((function(e){return{value:e,text:e.name}})),r.value=!1;case 6:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}Object(o["d"])(m);var b=function(){var e;c.value.validate()&&t.emit("select",null===(e=n.value)||void 0===e?void 0:e.value)};function w(e,t){return O.apply(this,arguments)}function O(){return O=Object(A["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(u.value){e.next=4;break}u.value=n,e.next=17;break;case 4:if(!(u.value.text.length>j["c"])){e.next=6;break}return e.abrupt("return");case 6:if(!(u.value.text.length<1||u.value.text!=n.value.name&&g.value.some((function(e){return e.name==u.value.text})))){e.next=8;break}return e.abrupt("return");case 8:return l.value.push(n.value.id),e.next=11,Object(x["a"])("/user/tags",{method:"PATCH",body:JSON.stringify({tagId:n.value.id,name:u.value.text})});case 11:r=g.value.findIndex((function(e){return e.name==n.value.name})),g.value[r].name=u.value.text,l.value=l.value.filter((function(e){return e!==n.value.id})),n.value.name=u.value.text,u.value=null,c.value.validate();case 17:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function k(){n.value=null}function T(e){return S.apply(this,arguments)}function S(){return S=Object(A["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r.value){e.next=2;break}return e.abrupt("return");case 2:if(!(t.length>j["c"])){e.next=4;break}return e.abrupt("return");case 4:if(!g.value.some((function(e){return e.name==t}))){e.next=6;break}return e.abrupt("return");case 6:return r.value=!0,e.next=9,Object(x["a"])("/user/tags",{method:"POST",body:JSON.stringify({name:t,color:v.value})});case 9:return e.next=11,m();case 11:return v.value++,v.value>=j["a"].length&&(v.value=0),e.next=15,Object(x["a"])("/user/nonce",{method:"PUT",body:JSON.stringify({nonce:v.value})});case 15:r.value=!1,n.value=i.value.find((function(e){return e.text==t}));case 17:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}return Object(o["i"])((function(){return e.open}),(function(t,n){e.open?r.value||m():(c.value.reset(),r.value=!1,u.value=null)})),Object(o["i"])(n,(function(e,t){!u.value&&e&&"string"===typeof e&&e.length>0&&g.value.length<p&&T(e)})),{tag:n,loading:r,tags:i,select:b,disabled:a,form:c,colors:j["a"],edit:w,editing:u,search:s,nonce:v,create:T,resetSelection:k,tagLimit:p,nameLimit:j["c"],editLoading:l,userTags:g}}}),k=O,T=n("6544"),S=n.n(T),B=n("8336"),V=n("b0af"),C=n("99d9"),L=n("cc20"),R=n("2b5d"),E=n("a523"),U=n("4bd4"),q=n("132d"),D=n("da13"),N=n("1800"),I=n("490a"),M=n("0fd9"),F=n("2fa4"),P=n("8654"),_=Object(v["a"])(k,b,w,!1,null,null,null),Q=_.exports;S()(_,{VBtn:B["a"],VCard:V["a"],VCardActions:C["a"],VCardText:C["b"],VCardTitle:C["c"],VChip:L["a"],VCombobox:R["a"],VContainer:E["a"],VForm:U["a"],VIcon:q["a"],VListItem:D["a"],VListItemAction:N["a"],VProgressCircular:I["a"],VRow:M["a"],VSpacer:F["a"],VTextField:P["a"]});var K=Object(o["c"])({name:"Home",components:{TimeElapsed:h,TagSelector:Q},setup:function(e,t){var n=Object(o["g"])(!1),r=Object(o["g"])(!1),a=Object(y["a"])(),i=a.disruptions,c=a.loadDisruptions,u=a.disrupted,l=a.lastStartTime,p=a.loadNonce,f=Object(d["a"])(),g=f.loadSettings,v=Object(o["f"])({content:u.value?"Back to work!":"Disrupt",color:u.value?"success":"error"}),m=Object(o["g"])(""),h=Object(o["g"])(!1),b=function(){var e=Object(A["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n={tagID:t.id,startTime:l.value,endTime:Date.now()},i.value.push(n),v.content="Disrupt",v.color="error",u.value=!1,r.value=!1,Object(x["a"])("/user/disruptions",{method:"post",body:JSON.stringify(n)},!0,!0).then((function(e){e.ok||(m.value="There's a time conflict!",h.value=!0)}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){u.value?r.value=!0:(l.value=Date.now(),v.content="Back to work!",v.color="success",u.value=!0)},j=function(){v.content="Disrupt",v.color="error",u.value=!1,r.value=!1};return Object(o["d"])(Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:c(),p(),g();case 3:case"end":return e.stop()}}),e)})))),Object(s["a"])({loading:n,disrupted:u,lastStartTime:l,showTagMenu:r,toggle:w,submitTag:b,errorMessage:m,snackbar:h,discard:j},Object(o["h"])(v))}}),J=K,G=n("62ad"),H=n("169a"),Z=n("2db4"),Y=Object(v["a"])(J,c,u,!1,null,null,null),W=Y.exports;S()(Y,{VBtn:B["a"],VCol:G["a"],VContainer:E["a"],VDialog:H["a"],VIcon:q["a"],VProgressCircular:I["a"],VRow:M["a"],VSnackbar:Z["a"]});var z=r["a"].extend({name:"App",components:{Home:W},setup:function(){window.location.href.includes("www")||(window.location.href="https://www.habbit-beta.ml/");var e=Object(o["g"])(["Home","Statistics","Settings"]);return{loggedRoutes:e}}}),X=z,$=n("7496"),ee=n("40dc"),te=n("f6c4"),ne=n("0789"),re=Object(v["a"])(X,a,i,!1,null,null,null),ae=re.exports;S()(re,{VApp:$["a"],VAppBar:ee["a"],VBtn:B["a"],VIcon:q["a"],VMain:te["a"],VSlideXTransition:ne["f"],VSpacer:F["a"]});var ie=n("9483");Object(ie["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var oe=n("8c4f");function ce(){return ue.apply(this,arguments)}function ue(){return ue=Object(A["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(x["a"])("/status",{credentials:"include"});case 3:return t=e.sent,e.abrupt("return",t.authenticated);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),ue.apply(this,arguments)}r["a"].use(oe["a"]);var se=[{path:"/",name:"Home",component:W},{path:"/settings",name:"Settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))}},{path:"/stats",name:"Statistics",component:function(){return n.e("stats").then(n.bind(null,"fcd1"))}},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}}],Ae=new oe["a"]({mode:"history",routes:se});Ae.beforeEach(function(){var e=Object(A["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.t0="Login"!==t.name,!e.t0){e.next=5;break}return e.next=4,ce();case 4:e.t0=!e.sent;case 5:if(!e.t0){e.next=9;break}r({name:"Login"}),e.next=10;break;case 9:r();case 10:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}());var le=Ae,pe=n("f309");r["a"].use(pe["a"]);var de=new pe["a"]({}),fe=n("1321"),ge=n.n(fe);r["a"].use(o["b"]),r["a"].use(ge.a),r["a"].component("apexchart",ge.a),r["a"].config.productionTip=!1,new r["a"]({router:le,vuetify:de,render:function(e){return e(ae)}}).$mount("#app")},cf0c:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("96cf");var r=n("1da1"),a=n("a6f4"),i=n("2b0e"),o=n("26f7");i["a"].use(a["b"]);var c=Object(a["f"])({dark:!1,tickSound:!0});function u(){function e(){return t.apply(this,arguments)}function t(){return t=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=a["f"],e.next=3,Object(o["a"])("/user/settings");case 3:e.t1=e.sent,c=(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),t.apply(this,arguments)}return{settings:c,loadSettings:e}}},dad5:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i}));var r=["green","purple","indigo","cyan","teal","orange"],a=["#2ECC71","#b19cd9","#2B36DE","#00FFFF","#008080","#FF5733"],i=18}});
//# sourceMappingURL=app.60c8be30.js.map