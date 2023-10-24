<template>
  <div class="container">
    <div class="screen">
      <div class="screen__content">
        <form class="login" @submit.prevent="Loginform">
          <div class="login__field">
            <i class="login__icon fas fa-user"></i>
            <input type="text" class="login__input" name="id" placeholder="Enter your ID" v-model="id">
          </div>
          <div class="login__field">
            <i class="login__icon fas fa-lock"></i>
            <input name="password" class="login__input" placeholder="Enter your password" v-model="password" type="password">
          </div>
          <button type="submit" class="button login__submit">
            <span class="button__text">Log In Now</span>
            <i class="button__icon fas fa-chevron-right"></i>
          </button>				
        </form>
        <div class="social-login">
          <h3>log in vue.js App</h3>
          <div class="social-icons">
            <a href="#" class="social-login__icon fab fa-instagram"></a>
            <a href="#" class="social-login__icon fab fa-facebook"></a>
            <a href="#" class="social-login__icon fab fa-twitter"></a>
          </div>
        </div>
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
//import storage from "../store/storage"

export default {
  data() {
    return {
        loginSuccess: false,
        loginError: false,
        id: '',
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
        let loginData = {};
            loginData.id = this.id;
			loginData.password = this.password;
        try {
				axios.post('/member/login', JSON.stringify(loginData), {
				headers: {
					"Content-Type": `application/json`,
					},
					})
				.then((response) => {
					console.log(response)
            //let token = response.data.token
            //localStorage.setItem("access_token", token)
            this.$store.commit("login",response.data);
						alert("로그인 되었습니다. 홈 화면으로 돌아갑니다");
						this.$router.push({path: '/home'});
					})
				.catch(error =>{
				console.log(error.response);
          alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.")
                //this.$router.push({path: '/login'});
                return
				});
		} catch (error) {
			console.error(error);
		}
      
    }
  }
}
</script>

<style>
@import url("../css/new.css");
</style>