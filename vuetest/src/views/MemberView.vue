<template>
	<div class="container">
    <div class="screen">
      <div class="screen__content">
    <form class="login" @submit.prevent="submitForm">
        <div class="login__field">
            <i class="login__icon fas fa-user"></i>
            <input type="text" class="login__input" id="id" name="id" placeholder="Enter your ID" v-model="id">
        </div>
		<div class="login__field">
            <i class="login__icon fas fa-user"></i>
            <input type="text" class="login__input" id="name" name="name" placeholder="Enter your Name" v-model="name">
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
            <span class="button__text">회원가입</span>
            <i class="button__icon fas fa-chevron-right"></i>
        </button>				
    </form>
        <div class="social-login">
          <h3>SignUp vue.js App</h3>
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
<!--<div class="member">
	<form @submit.prevent="submitForm">
		<div>
			<label for="name">ID</label>
			<input type="text" id="id" v-model="id" />
		</div>
		<div>
			<label for="name">성함</label>
			<input type="text" id="name" v-model="name" />
		</div>
		<div>
			<label for="password">비밀번호</label>
			<input type="password" id="password" v-model="password" />
		</div>
		<div>
			<label for="email">email</label>
			<input type="text" id="email" v-model="email" />
		</div>
		<button type="submit">회원가입</button>
	</form>
</div>-->
</template>

<script>
import axios from 'axios';

export default {
	name: 'SignupForm',
	data() {
		return {
			id: '',
			name: '',
			password: '',
			email: '',
		};
	},
	methods: {
		async submitForm() {
			//const validate = this.$refs.form.validate()
			//if(validate){
		if (this.id === '') {
			alert('ID를 입력하세요.')
			return
		}
		if (this.name === '') {
			alert('이름을 입력하세요.')
			return
		}
		if (this.password === '') {
			alert('비밀번호를 입력하세요.')
			return
		}
			let saveData = {};
			saveData.id = this.id;
			saveData.name = this.name;
			saveData.password = this.password;
			saveData.email = this.email;
			try {
				axios.post("/member/new", JSON.stringify(saveData), {
				headers: {
					"Content-Type": `application/json`,
					},
					})
				.then((response) => {
					console.log(response)
						alert("회원가입이 완료되었습니다. 로그인 화면으로 이동합니다")
						this.$router.push({path: '/login'});
					})
				.catch(error =>{
					alert("이미 가입된 ID입니다")
				console.log(error.response);
				});
		} catch (error) {
			alert("서버오류. 관리자에게 문의해주세요")
			console.error(error);
		}
			
	//}
	},
			//linkToLogin(){
			//this.$router.push({path:"./login"});
			//}
	}
}
</script>

<style scoped>
@import url("../css/new.css");
</style>