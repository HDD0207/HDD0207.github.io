(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c52ed7e"],{"25f0":function(t,a,o){"use strict";var i=o("6eeb"),s=o("825a"),n=o("d039"),e=o("ad6d"),c="toString",r=RegExp.prototype,l=r[c],d=n((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),u=l.name!=c;(d||u)&&i(RegExp.prototype,c,(function(){var t=s(this),a=String(t.source),o=t.flags,i=String(void 0===o&&t instanceof RegExp&&!("flags"in r)?e.call(t):o);return"/"+a+"/"+i}),{unsafe:!0})},2909:function(t,a,o){"use strict";function i(t,a){(null==a||a>t.length)&&(a=t.length);for(var o=0,i=new Array(a);o<a;o++)i[o]=t[o];return i}function s(t){if(Array.isArray(t))return i(t)}o.d(a,"a",(function(){return r}));o("a4d3"),o("e01a"),o("d28b"),o("a630"),o("d3b7"),o("3ca3"),o("ddb0");function n(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}o("fb6a"),o("b0c0"),o("25f0");function e(t,a){if(t){if("string"===typeof t)return i(t,a);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?i(t,a):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t){return s(t)||n(t)||e(t)||c()}},"3ca3":function(t,a,o){"use strict";var i=o("6547").charAt,s=o("69f3"),n=o("7dd0"),e="String Iterator",c=s.set,r=s.getterFor(e);n(String,"String",(function(t){c(this,{type:e,string:String(t),index:0})}),(function(){var t,a=r(this),o=a.string,s=a.index;return s>=o.length?{value:void 0,done:!0}:(t=i(o,s),a.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,a,o){"use strict";var i=o("0366"),s=o("7b0b"),n=o("9bdd"),e=o("e95a"),c=o("50c4"),r=o("8418"),l=o("35a1");t.exports=function(t){var a,o,d,u,f,g,v=s(t),h="function"==typeof this?this:Array,p=arguments.length,k=p>1?arguments[1]:void 0,b=void 0!==k,m=l(v),C=0;if(b&&(k=i(k,p>2?arguments[2]:void 0,2)),void 0==m||h==Array&&e(m))for(a=c(v.length),o=new h(a);a>C;C++)g=b?k(v[C],C):v[C],r(o,C,g);else for(u=m.call(v),f=u.next,o=new h;!(d=f.call(u)).done;C++)g=b?n(u,k,[d.value,C],!0):d.value,r(o,C,g);return o.length=C,o}},"857a":function(t,a,o){var i=o("1d80"),s=/"/g;t.exports=function(t,a,o,n){var e=String(i(t)),c="<"+a;return""!==o&&(c+=" "+o+'="'+String(n).replace(s,"&quot;")+'"'),c+">"+e+"</"+a+">"}},"8bf3":function(t,a,o){"use strict";o.r(a);var i=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"book"},[o("loading",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}]}),o("van-nav-bar",{attrs:{title:"书籍详情","left-text":"返回","left-arrow":"",fixed:""},on:{"click-left":t.goPage,"click-right":function(a){return t.goPage("Bookrack")}},scopedSlots:t._u([{key:"right",fn:function(){return[o("svg",{staticClass:"icon",attrs:{t:"1594949373600",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"15150",width:"24",height:"24"}},[o("path",{attrs:{d:"M264.154 952.655H64.31V224.11h199.844v728.545h-0.001z m-34.2-691.413H98.816v67.142h131.14v-67.142z m96.516-196.7h198.267v888.045H326.47V64.542z m168.989 34.214H360.143v69.235h135.315V98.756z m459.399 794.012L764.845 954.68 539.126 261.973l190.01-61.912 225.722 692.707zM708.125 245.964L583.438 286.59l20.798 63.834 124.686-40.627-20.797-63.833z m0 0","p-id":"15151",fill:"#B0C4DE"}})]),o("svg",{staticClass:"icon",attrs:{t:"1596588838793",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5289",width:"24",height:"24"},on:{click:function(a){return t.goPage("Bookstore")}}},[o("path",{attrs:{d:"M691.2 691.2m-332.8 0a332.8 332.8 0 1 0 665.6 0 332.8 332.8 0 1 0-665.6 0Z",fill:"#B0C4DE","p-id":"5290"}}),o("path",{attrs:{d:"M730.624 947.712H294.912c-96.768 0-123.392-32.256-123.392-133.12V358.4c0-14.336 11.264-25.6 25.6-25.6s25.6 11.264 25.6 25.6v456.192c0 73.216 3.072 81.92 72.192 81.92h435.712c69.12 0 81.92-8.192 81.92-81.92V358.4c0-14.336 11.264-25.6 25.6-25.6s25.6 11.264 25.6 25.6v456.192c0 100.864-36.352 133.12-133.12 133.12z",fill:"#B0C4DE","p-id":"5291"}}),o("path",{attrs:{d:"M620.032 934.912c-7.168 0-12.8-5.632-12.8-12.8v-243.2c0-25.6-5.12-26.112-33.28-26.112h-122.88c-28.16 0-23.552 0.512-23.552 26.112v243.2c0 7.168-5.632 12.8-12.8 12.8s-12.8-5.632-12.8-12.8v-243.2c0-44.032 11.776-51.712 49.152-51.712h122.88c37.376 0 58.88 7.68 58.88 51.712v243.2c0 7.168-5.632 12.8-12.8 12.8zM90.112 434.688c-7.68 0-15.36-3.584-20.48-10.24-8.704-11.264-6.144-27.136 5.12-35.84l422.912-317.952c11.264-8.704 27.136-6.144 35.84 5.12s6.144 27.136-5.12 35.84L105.472 429.568c-4.608 3.584-9.728 5.12-15.36 5.12z",fill:"#B0C4DE","p-id":"5292"}}),o("path",{attrs:{d:"M935.424 434.688c-5.632 0-10.752-2.048-15.36-5.12L497.664 111.616c-11.264-8.704-13.824-24.576-5.12-35.84s24.576-13.312 35.84-5.12l422.912 317.952c11.264 8.704 13.824 24.576 5.12 35.84-5.632 6.656-13.312 10.24-20.992 10.24zM287.232 550.4c-7.168 0-12.8-5.632-12.8-12.8V392.192c0-4.096-0.512-7.68 2.56-10.24l166.912-129.024c5.632-4.096 12.8-3.072 17.408 2.56 4.096 5.632 5.632 13.824 0 17.92L300.032 398.336V537.6c0 7.168-5.632 12.8-12.8 12.8z m0 64c-7.168 0-12.8-5.632-12.8-12.8V588.8c0-7.168 5.632-12.8 12.8-12.8s12.8 5.632 12.8 12.8v12.8c0 7.168-5.632 12.8-12.8 12.8z",fill:"#B0C4DE","p-id":"5293"}})])]},proxy:!0}])}),o("div",{staticClass:"content"},[o("div",{staticClass:"book-content clearfix"},[o("div",{staticClass:"img-box fl"},[o("img",{staticClass:"auto-img v-img",attrs:{src:t.getImg(t.bookData.cover),alt:"图片未加载..."}})]),o("div",{staticClass:"content-box fl"},[o("div",{staticClass:"text-box clearfix"},[o("div",{staticClass:"book-title"},[t._v(t._s(t.bookData.title))]),o("div",{staticClass:"book-msg clearfix"},[o("span",{staticClass:"book-name fl"},[t._v(t._s(t.bookData.author))]),o("span",{staticClass:"book-num fl"},[t._v(t._s(t._f("num")(t.bookData.wordCount))+"万字")])]),o("div",{staticClass:"moods"},[o("span",[t._v("追人气 "+t._s(t._f("num")(t.bookData.latelyFollower))+"万")]),o("span",[t._v("读者留存率 "+t._s(t.bookData.retentionRatio)+"%")])]),o("div",{staticClass:"text-type clearfix"},[o("span",{staticClass:"fl"},[t._v(t._s(t.bookData.cat))]),o("span",{staticClass:"fr"},[t._v(t._s(t.bookData.majorCate))])])])])]),o("div",{staticClass:"text-content"},[o("div",{staticClass:"text-tit"},[t._v("内容简介")]),o("div",{staticClass:"v-text"},[t._v(t._s(t.bookData.longIntro))])]),o("div",{staticClass:"catalog"},[o("van-cell",{attrs:{title:"目录","is-link":"",value:t.firstCatalog},on:{click:t.isShowFn}})],1),o("div",{staticClass:"discuss"},[o("div",{staticClass:"discuss-box clearfix"},[o("div",{staticClass:"fl"},[t._v("热门书评")]),o("div",{staticClass:"tips-text fr",on:{click:t.tipsFn}},[t._v("写评论")])]),o("div",{staticClass:"discuss-content",on:{click:t.tipsFn}},t._l(t.discussData,(function(a,i){return o("div",{key:i,staticClass:"discuss-item"},[o("div",{staticClass:"nick-name"},[t._v(t._s(a.author.nickname))]),o("div",{staticClass:"text-mini"},[t._v(t._s(a.title))]),o("van-rate",{staticClass:"star",attrs:{readonly:"",color:"steelblue","allow-half":""},model:{value:a.rating,callback:function(o){t.$set(a,"rating",o)},expression:"discuss.rating"}}),o("div",{staticClass:"discuss-text"},[t._v(t._s(a.content))])],1)})),0)])]),o("van-popup",{staticClass:"v-popup",attrs:{round:"",position:"bottom"},model:{value:t.isShow,callback:function(a){t.isShow=a},expression:"isShow"}},[o("div",{staticClass:"popup-text"},[t._v("目录")]),o("van-list",{staticClass:"popup-list",attrs:{finished:t.load.finished,"finished-text":t.load.loadingMsg},on:{load:t.onLoad},model:{value:t.load.loading,callback:function(a){t.$set(t.load,"loading",a)},expression:"load.loading"}},t._l(t.catalog,(function(a,i){return o("div",{key:i,staticClass:"popup-item",on:{click:function(a){return t.goRead(i)}}},[t._v(t._s(a.title))])})),0)],1),o("footer",{staticClass:"foot"},[o("span",{ref:"addBook",staticClass:"addBook",class:[t.isActive?"active":""],on:{click:t.saveBook}},[t._v(t._s(t.isActive?"撤出书架":"加入书架"))]),o("span",{staticClass:"look",on:{click:function(a){return t.goPage("Read")}}},[t._v("开始阅读")])])],1)},s=[],n=(o("4160"),o("c975"),o("fb6a"),o("a434"),o("b0c0"),o("ac1f"),o("1276"),o("9911"),o("159b"),o("2909")),e=o("5530"),c=o("c428"),r=(o("f69b"),o("2f62")),l=Object(r["a"])("saveDataFn"),d=(l.mapState,l.mapMutations),u={components:{loading:c["a"]},data:function(){return{isLoading:!1,bookData:{},isShow:!1,allCatalog:[],catalog:[],firstCatalog:"",loadCount:50,discussData:[],load:{loading:!1,finished:!1,loadingMsg:"已经到底啦"},msg:{id:"",link:"",book:"",name:"",linkIndex:0},isActive:!1,startValue:3.5,bookRackData:[]}},created:function(){var t=this;if(this.msg.id=this.$route.query.id,localStorage.getItem("bookRackData")){var a=localStorage.getItem("bookRackData").split(",");a.length>1?a.forEach((function(a){t.bookRackData.push(a)})):this.bookRackData=[a],this.bookRackData.forEach((function(a){a!=t.msg.id||(t.isActive=!0)}))}this.getCatalog(),this.getDiscuss(this.msg.id),this.getBookData()},methods:Object(e["a"])(Object(e["a"])({},d(["saveData","removeData"])),{},{goPage:function(t){"Bookrack"==t||"Bookstore"==t?this.$router.push({name:t}):"Read"==t?this.$router.push({name:t,query:this.msg}):this.$router.go(-1)},goRead:function(t){this.msg.linkIndex=t,this.msg.link=this.catalog[this.msg.linkIndex].link,this.$router.push({name:"Read",query:this.msg})},getBookData:function(){var t=this;this.isLoading=!0,this.axios({method:"get",url:"http://novel.kele8.cn/book-info/"+this.msg.id}).then((function(a){200==a.status&&(t.bookData=a.data,t.msg.book=t.bookData.title,t.msg.name=t.bookData.author)})).catch((function(a){t.$toast("获取数据出错,请重新加载"),t.isLoading=!1}))},getImg:function(t){return unescape(t).slice(7)},getCatalog:function(){var t=this;this.isLoading=!0,this.axios({method:"get",url:"http://novel.kele8.cn/book-sources",params:{view:"summary",book:this.msg.id}}).then((function(a){if(t.isLoading=!0,200==a.status){var o=a.data[0]._id;t.axios({method:"get",url:"http://novel.kele8.cn/book-chapters/"+o}).then((function(a){200==a.status&&(t.allCatalog=a.data.chapters,t.catalog=t.allCatalog.splice(0,t.loadCount),t.firstCatalog=t.catalog[0].title,t.msg.link=t.catalog[t.msg.linkIndex].link,t.allCatalog.length>0?t.load.loading=!1:(t.load.loading=!0,t.load.finished=!0),0==t.catalog.length&&(t.load.loadingMsg=""),t.isLoading=!1)})).catch((function(a){t.isLoading=!1,t.$toast("目录数据获取失败")}))}})).catch((function(a){t.isLoading=!1,t.$toast("目录数据获取失败")}))},isShowFn:function(){this.isShow=!0},getDiscuss:function(t){var a=this;this.isLoading=!0,this.axios({method:"get",url:"http://novel.kele8.cn/book/reviews",params:{book:t,start:0,limit:3}}).then((function(t){200==t.status&&(a.discussData=t.data.reviews)})).catch((function(t){a.isLoading=!1,a.$toast("获取数据出错,请重新加载")}))},onLoad:function(){var t=this;setTimeout((function(){var a;(a=t.catalog).push.apply(a,Object(n["a"])(t.allCatalog.splice(0,t.loadCount))),t.load.loading=!1,0==t.allCatalog.length&&(t.load.loading=!0,t.load.finished=!0)}),500)},saveBook:function(){var t=this.msg.id;if(this.isActive=!this.isActive,this.isActive){if(this.$toast("已加入书架"),-1!=this.bookRackData.indexOf(t))return;this.bookRackData.push(t)}else{this.$toast("已撤出书架");var a=this.bookRackData.indexOf(t,0);this.bookRackData.splice(a,1)}localStorage.setItem("bookRackData",this.bookRackData),0==localStorage.getItem("bookRackData").length&&localStorage.removeItem("bookRackData")},tipsFn:function(){this.$toast("下载最新版追书神器APP体验更多功能")}})},f=u,g=o("2877"),v=Object(g["a"])(f,i,s,!1,null,null,null);a["default"]=v.exports},9911:function(t,a,o){"use strict";var i=o("23e7"),s=o("857a"),n=o("af03");i({target:"String",proto:!0,forced:n("link")},{link:function(t){return s(this,"a","href",t)}})},a630:function(t,a,o){var i=o("23e7"),s=o("4df4"),n=o("1c7e"),e=!n((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:e},{from:s})},af03:function(t,a,o){var i=o("d039");t.exports=function(t){return i((function(){var a=""[t]('"');return a!==a.toLowerCase()||a.split('"').length>3}))}},b0c0:function(t,a,o){var i=o("83ab"),s=o("9bf2").f,n=Function.prototype,e=n.toString,c=/^\s*function ([^ (]*)/,r="name";i&&!(r in n)&&s(n,r,{configurable:!0,get:function(){try{return e.call(this).match(c)[1]}catch(t){return""}}})},d28b:function(t,a,o){var i=o("746f");i("iterator")},ddb0:function(t,a,o){var i=o("da84"),s=o("fdbc"),n=o("e260"),e=o("9112"),c=o("b622"),r=c("iterator"),l=c("toStringTag"),d=n.values;for(var u in s){var f=i[u],g=f&&f.prototype;if(g){if(g[r]!==d)try{e(g,r,d)}catch(h){g[r]=d}if(g[l]||e(g,l,u),s[u])for(var v in n)if(g[v]!==n[v])try{e(g,v,n[v])}catch(h){g[v]=n[v]}}}},e01a:function(t,a,o){"use strict";var i=o("23e7"),s=o("83ab"),n=o("da84"),e=o("5135"),c=o("861d"),r=o("9bf2").f,l=o("e893"),d=n.Symbol;if(s&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),a=this instanceof f?new d(t):void 0===t?d():d(t);return""===t&&(u[a]=!0),a};l(f,d);var g=f.prototype=d.prototype;g.constructor=f;var v=g.toString,h="Symbol(test)"==String(d("test")),p=/^Symbol\((.*)\)[^)]+$/;r(g,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,a=v.call(t);if(e(u,t))return"";var o=h?a.slice(7,-1):a.replace(p,"$1");return""===o?void 0:o}}),i({global:!0,forced:!0},{Symbol:f})}},f69b:function(t,a,o){}}]);
//# sourceMappingURL=chunk-3c52ed7e.363b6f19.js.map