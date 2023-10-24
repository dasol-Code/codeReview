<template>
	<div class="container" id="app">
    <div class="screen">
      <div class="screen__content">
    <form class="login" @submit.prevent="Loginform">
        <div class="login__field">
            <i class="login__icon fas fa-user"></i>
            <input type="text" class="login__input" id="id" name="id" v-model="this.$route.params.delId" readonly>
        </div>
        <div class="login__field">
            <i class="login__icon fas fa-lock"></i>
            <input id="password"  name="password" class="login__input" placeholder="Enter your password" v-model="password" type="password">
        </div>
        <button type="submit" class="button login__submit">
            <span class="button__text">회원탈퇴</span>
            <i class="button__icon fas fa-chevron-right"></i>
        </button>
        <button @click="goBack" type="button"  class="back_button"><span class="button__text">뒤로가기</span></button>				
    </form>	
    </div>
    <div class="screen__background">
      <span class="screen__background__shape screen__background__shape4"></span>
      <span class="screen__background__shape screen__background__shape3"></span>		
      <span class="screen__background__shape screen__background__shape2"></span>
      <span class="screen__background__shape screen__background__shape1"></span>
    </div>
  </div>
  </div>
  </template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
        loginSuccess: false,
        loginError: false,
        id: this.$route.params.delId,
        password: ''
    }
  },
  methods: {
    async Loginform() {
      if (this.id === '') {
        alert('ID를 입력하세요.')
        return
      }

      if (this.id === 'admin') {
        alert('관리자계정은 탈퇴할수없습니다.')
        return
      }

      if (this.password === '') {
        alert('비밀번호를 입력하세요.')
        return
      }
        let loginData = {};
            loginData.id = this.id;
			loginData.password = this.password;
        try {
				axios.post('/member/delete', JSON.stringify(loginData), {
				headers: {
					"Content-Type": `application/json`,
					},
					})
				.then((response) => {
					console.log(response)
						alert("회원탈퇴가 되었습니다. 홈 화면으로 이동합니다")
            if(this.$store.state.loginStorage.id!='admin'){
              this.$store.dispatch("logout")
            }
						this.$router.push({path: '/home'});
					})
				.catch(error =>{
				console.log(error.response);
          alert("회원확인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.")
                //this.$router.push({path: '/signOut'});
                return;
				});
		} catch (error) {
			console.error(error);
		}
      
    },
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>

<style>
#loginForm {
  width: 500px;
  margin: auto;
}
</style>