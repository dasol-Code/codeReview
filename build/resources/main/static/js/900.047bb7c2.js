"use strict";(self["webpackChunkvuetest"]=self["webpackChunkvuetest"]||[]).push([[900],{5900:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(3396),o=t(9242);const s={class:"login"},l=(0,r._)("h2",null,"Log In",-1),i={id:"loginPage"},u=(0,r._)("br",null,null,-1),a=(0,r._)("p",null,[(0,r._)("button",{type:"submit",class:"w3-button w3-green w3-round"},"회원탈퇴")],-1);function d(e,n,t,d,p,c){return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",null,[l,(0,r._)("div",i,[(0,r._)("form",{onSubmit:n[2]||(n[2]=(0,o.iM)(((...e)=>c.Loginform&&c.Loginform(...e)),["prevent"]))},[(0,r._)("p",null,[(0,r.wy)((0,r._)("input",{class:"w3-input",name:"id",placeholder:"Enter your ID","onUpdate:modelValue":n[0]||(n[0]=e=>p.id=e)},null,512),[[o.nr,p.id]]),u]),(0,r._)("p",null,[(0,r.wy)((0,r._)("input",{name:"password",class:"w3-input",placeholder:"Enter your password","onUpdate:modelValue":n[1]||(n[1]=e=>p.password=e),type:"password"},null,512),[[o.nr,p.password]])]),a],32)])])])}t(7658);var p=t(4161),c={data(){return{loginSuccess:!1,loginError:!1,id:"",password:""}},methods:{async Loginform(){if(""===this.id)return void alert("ID를 입력하세요.");if(""===this.password)return void alert("비밀번호를 입력하세요.");let e={};e.id=this.id,e.password=this.password;try{p.Z.post("/member/delete",JSON.stringify(e),{headers:{"Content-Type":"application/json"}}).then((e=>{console.log(e),alert("회원탈퇴가 되었습니다. 홈 화면으로 이동합니다"),this.$router.push({path:"/"})})).catch((e=>{console.log(e.response),alert("회원확인에 실패했습니다. 아이디와 비밀번호를 확인해주세요."),this.$router.push({path:"/signOut"})}))}catch(n){console.error(n)}}}},h=t(89);const w=(0,h.Z)(c,[["render",d]]);var g=w}}]);
//# sourceMappingURL=900.047bb7c2.js.map