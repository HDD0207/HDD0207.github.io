(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-230d9597"],{"053b":function(n,t,e){var a=e("1e2c"),i=e("d910").f,r=Function.prototype,c=r.toString,o=/^\s*function ([^ (]*)/,u="name";a&&!(u in r)&&i(r,u,{configurable:!0,get:function(){try{return c.call(this).match(o)[1]}catch(n){return""}}})},cd56:function(n,t,e){"use strict";e.r(t);var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"main"},[e("van-tabbar",{attrs:{"active-color":"slateblue","inactive-color":"#888"},on:{change:n.goPage},model:{value:n.index,callback:function(t){n.index=t},expression:"index"}},n._l(n.msg,(function(t,a){return e("van-tabbar-item",{key:a,attrs:{icon:t.icon}},[n._v(n._s(t.title))])})),1),e("router-view")],1)},i=[],r=(e("77ad"),e("053b"),{data:function(){return{index:0,msg:[{icon:"wap-nav",title:"商品",name:"Menu",url:"/main/menu"},{icon:"column",title:"订单",name:"Order",url:"/main/order"},{icon:"cart",title:"购物车",name:"Shopcart",url:"/main/shopcart"},{icon:"manager",title:"我的",name:"My",url:"/main/my"}]}},created:function(){for(var n=location.hash.slice(1),t=0;t<this.msg.length;t++)if(this.msg[t].url==n){this.index=t;break}},methods:{goPage:function(n){this.$router.push({name:this.msg[n].name})}}}),c=r,o=e("9ca4"),u=Object(o["a"])(c,a,i,!1,null,"52cedd14",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-230d9597.d58c1d55.js.map