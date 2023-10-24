<template>
<div class="container">
  <div class="screen">
    <div class="screen__content">
  <form class="login" @submit.prevent="Loginform">
      <div class="login__field">
          <i class="login__icon fas fa-user"></i>
          <input type="text" class="login__input" id="id" name="id" v-model="this.$route.params.upId" readonly>
      </div>
      <div class="login__field">
          <i class="login__icon fas fa-lock"></i>
          <input id="password"  name="password" class="login__input" placeholder="Enter your password" v-model="password" type="password">
      </div>
  <div class="login__field">
          <i class="login__icon fas fa-user"></i>
          <input type="text" class="login__input" name="email" id="email" placeholder="Email is optional" v-model="email">
      </div>
      <button type="submit" class="button login__submit">
          <span class="button__text">수정</span>
          <i class="button__icon fas fa-chevron-right"></i>
      </button>
      <button @click="goBack" type="button" class="back_button"><span class="button__text">뒤로가기</span></button>			
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
        id: this.$route.params.upId,
        password: ''
    }
  },
  methods: {
    async Loginform() {
      if (this.id === '') {
        alert('ID를 입력하세요.')
        return
      }

      if (this.password === '') {
        alert('비밀번호를 입력하세요.')
        return
      }

      if (this.email === '') {
        alert('변경할 이메일을 입력하세요.')
        return
      }
        let loginData = {};
            loginData.id = this.id;
			loginData.password = this.password;
            loginData.email = this.email;
        try {
				axios.post('/member/update', JSON.stringify(loginData), {
				headers: {
					"Content-Type": `application/json`,
					},
					})
				.then((response) => {
					console.log(response)
          if(this.$store.state.loginStorage.id=='admin'){
						alert("회원정보가 변경 되었습니다. 회원목록으로 돌아갑니다")
						this.$router.push({path: '/about'});
          }else{
            alert("회원정보가 변경 되었습니다. 회원정보로 돌아갑니다")
            this.$router.push({path: '/info'});
          }
					})
				.catch(error =>{
				console.log(error.response);
          alert("회원정보 수정에 실패했습니다. 아이디와 비밀번호를 확인해주세요.")
                //this.$router.push({path: '/update'});
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