"use strict";(self["webpackChunkvuetest"]=self["webpackChunkvuetest"]||[]).push([[443],{5070:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var s=n(3396),a=n(7139);const u={class:"about"},l=(0,s._)("h1",null,"This is an about page",-1);function o(t,e,n,o,r,i){const c=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",u,[l,(0,s._)("h2",null,(0,a.zw)(r.nameList),1)]),(0,s._)("nav",null,[(0,s.Wm)(c,{to:"/update"},{default:(0,s.w5)((()=>[(0,s.Uk)("회원정보수정")])),_:1}),(0,s.Uk)(" | "),(0,s.Wm)(c,{to:"/signOut"},{default:(0,s.w5)((()=>[(0,s.Uk)("회원탈퇴")])),_:1})])],64)}var r=n(4161),i={data(){return{nameList:null}},props:{msg:String},created(){this.getTest()},methods:{getTest(){r.Z.get("/about").then((t=>{console.log(t.data),this.nameList=t.data})).catch((t=>{console.log(t.response)}))}}},c=n(89);const d=(0,c.Z)(i,[["render",o]]);var h=d}}]);
//# sourceMappingURL=about.545644c9.js.map