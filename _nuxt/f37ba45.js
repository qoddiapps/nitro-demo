(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(t,e,n){var content=n(154);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("932a8f60",content,!0,{sourceMap:!1})},102:function(t,e,n){var content=n(156);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("0acf6699",content,!0,{sourceMap:!1})},109:function(t,e,n){"use strict";var o=n(108),r={head:{title:"Nuxt Serverless Demo",meta:[{name:"viewport",content:"width=device-width, initial-scale=1"}]},data:function(){return{t:0,ssr:!1,diff:0}},mounted:function(){var t=this;this._timer=setInterval((function(){return t.update()}),1e3),this.t=window.__NUXT__.renderedOn,this.ssr=window.__NUXT__.serverRendered,this.$router.beforeEach((function(e,n,o){t.ssr=!1,clearInterval(t._timer),o()}))},computed:{generated:function(){return this.t.toUTCString()}},methods:{update:function(){var t=new Date-this.t;this.diff=t<1e4?"".concat(Math.round(t/1e3)," seconds ago"):Object(o.a)(this.t)}}},c=(n(153),n(155),n(19)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"nav"},[n("nLink",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("nLink",{attrs:{to:"/about"}},[t._v("About")]),t._v(" "),n("nLink",{attrs:{to:"/perf"}},[t._v("Perf")]),t._v(" "),n("nLink",{attrs:{to:"/dynamic/1"}},[t._v("Dynamic")])],1),t._v(" "),n("nuxt",{staticClass:"main"}),t._v(" "),n("client-only",[n("span",{staticClass:"text-muted"},[t.ssr?[t._v("Server Side Rendered "+t._s(t.diff)+" ("+t._s(t.generated)+")")]:[t._v("Client Side Rendered")]],2)])],1)}),[],!1,null,"546f900a",null);e.a=component.exports},110:function(t,e,n){t.exports=n(111)},153:function(t,e,n){"use strict";n(101)},154:function(t,e,n){(e=n(54)(!1)).push([t.i,'body{margin:0;background:#2f495e;color:#fff;font-family:Quicksand,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}.page-enter-active,.page-leave-active{transition:opacity .1s}.page-enter,.page-leave-to{opacity:0}a{color:#fff}.text-muted{color:grey}',""]),t.exports=e},155:function(t,e,n){"use strict";n(102)},156:function(t,e,n){(e=n(54)(!1)).push([t.i,".container[data-v-546f900a]{display:flex;align-items:center;flex-direction:column;min-height:90vh;height:90vh;justify-content:center}.nav a[data-v-546f900a]{padding:10px}.nav[data-v-546f900a]{margin-top:10px}.main[data-v-546f900a]{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center}",""]),t.exports=e}},[[110,7,1,8]]]);