(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5005c31a"],{"0ebc":function(t,s,a){"use strict";a.r(s);var o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"security"},[a("van-nav-bar",{attrs:{title:"安全中心","left-text":"返回"},on:{"click-left":t.goBack}}),a("div",{staticClass:"v-cell"},[a("van-cell-group",[a("van-cell",{staticClass:"v-cell-box",attrs:{title:"修改密码","is-link":""},on:{click:t.changePass}}),a("van-cell",{staticClass:"v-cell-box",attrs:{title:"注销账号","is-link":""},on:{click:t.destroy}})],1)],1),a("div",{staticClass:"btnBox"},[a("van-button",{staticClass:"noLogin-btn",attrs:{round:!0,block:!0,type:"danger"},on:{click:t.noLogin}},[t._v("退出登录")])],1),a("van-popup",{style:{height:"26%"},attrs:{round:"",position:"bottom"},model:{value:t.isShow,callback:function(s){t.isShow=s},expression:"isShow"}},[a("div",{staticClass:"pass-box"},[a("van-form",{on:{submit:t.submitPass}},[a("van-field",{staticClass:"inp",attrs:{label:"旧密码",placeholder:"旧密码"},model:{value:t.passData.oldPass,callback:function(s){t.$set(t.passData,"oldPass",s)},expression:"passData.oldPass"}}),a("van-field",{staticClass:"inp",attrs:{type:"text",label:"新密码",placeholder:"新密码"},model:{value:t.passData.newPass,callback:function(s){t.$set(t.passData,"newPass",s)},expression:"passData.newPass"}}),a("div",{staticClass:"btn-box"},[a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"},on:{submit:t.submitPass}},[t._v("确认修改")])],1)],1)],1)])],1)},e=[],n=(a("2f20"),{data:function(){return{isShow:!1,passData:{oldPass:"",newPass:""},passReg:{reg:/^\w{6,16}$/,msg:"密码格式不正确"}}},methods:{goBack:function(){this.$router.go(-1)},changePass:function(){this.isShow=!0},submitPass:function(){var t=this;if(this.passReg.reg.test(this.passData.newPass)){this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0});var s=localStorage.getItem("__Tk");this.axios({method:"POST",url:"/updatePassword",data:{appkey:this.appkey,tokenString:s,password:this.passData.newPass,oldPassword:this.passData.oldPass}}).then((function(s){t.$toast.clear(),t.isShow=!1,"E001"==s.data.code?(t.$toast(s.data.msg),localStorage.removeItem("__Tk"),t.$router.push({name:"Login"})):t.$toast(s.data.msg)})).catch((function(s){t.$toast.clear()}))}else this.$toast(this.passReg.msg)},destroy:function(){var t=this;this.$dialog.confirm({title:"是否注销账号",message:"此操作不可逆,注销后数据无法恢复"}).then((function(){t.$toast.loading({message:"加载中...",loadingType:"spinner",forbidClick:!0,duration:0});var s=localStorage.getItem("__Tk");t.axios({method:"post",url:"/destroyAccount",data:{appkey:t.appkey,tokenString:s}}).then((function(s){t.$toast.clear(),"G001"==s.data.code?(localStorage.removeItem("__Tk"),t.$router.push({name:"Login"})):t.$toast(s.data.msg)})).catch((function(s){t.$toast.clear()}))})).catch((function(t){}))},noLogin:function(){this.$toast("已登出"),localStorage.removeItem("__Tk"),this.$router.push({name:"Login"})}}}),i=n,l=a("2877"),c=Object(l["a"])(i,o,e,!1,null,null,null);s["default"]=c.exports},"2f20":function(t,s,a){}}]);
//# sourceMappingURL=chunk-5005c31a.b5cb55cf.js.map