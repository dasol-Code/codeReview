<template>
<div class="about">
    <h1>회원 상세 조회</h1>
<div class="board-contents">
	<div class="board-body">
		<div class="board-field">
			<label for="id">아이디</label>
			<input type="text" class="form-control" id="id" name="id" maxlength="100" v-model="id" readonly>
		</div>
		<div class="board-field">
			<label for="name">이 름</label>
			<input type="text" class="form-control" id="name" name="name" maxlength="100" v-model="name" readonly>
		</div>
		<div class="board-field">
			<label for="email">이메일</label>
			<input type="text" class="form-control" id="email" name="email" maxlength="100" placeholder="등록된 이메일 없음" v-model="email" readonly>
		</div>
	</div>
	<button class="button_form" @click="updateMember"><span class="button_text">정보수정</span></button>
	<button class="button_form" @click="chgPassword"><span class="button_text">암호변경</span></button>
	<button class="button_form" @click="deleteMember"><span class="button_text">회원탈퇴</span></button>
	<span v-if="this.$store.state.loginStorage.id=='admin'">
		<button @click="goBack" type="button" class="button_form"><span class="button_text">뒤로가기</span></button>
	</span>	
</div>
</div>
</template>

<script>
import axios from 'axios';

export default {
	data(){
		return{
			id : "",
			name : "",
			email : "",
		};
	},
	created() {
		this.getInfo();
	},	
	methods:{
		getInfo(){
			if(this.$store.state.loginStorage.name==''||this.$store.state.loginStorage.name=='undefined'){
				alert("로그인 후 조회가 가능합니다. 로그인 페이지로 이동합니다.")
                this.$router.push({path: '/login'});
			}else{
				let index = "";
				if(this.$route.params.conId!=undefined){//관리자페이지에서 접근
					index = this.$route.params.conId;
				}else{
					index = this.$store.state.loginStorage.id;
				}
				axios.post("/info", {id: index})
				.then(response=>{
					console.log(response.data);
					this.id = response.data.id;
					this.name = response.data.name;
					this.email = response.data.email;
				})
				.catch(err=>{
					console.log(err.response);
				});
			}
		},
		updateMember(){
			this.$router.push({
			name: 'update',
			params: {upId: this.id}
			})
		},	
		deleteMember(){
			this.$router.push({
			name: 'signOut',
			params: {delId: this.id}
			})
		},
		chgPassword(){
			this.$router.push({
			name: 'chgPwd',
			params: {chgId: this.id}
			})
		},
		goBack(){
			this.$router.go(-1);
		}
	},
};

</script>
<style>
*{
	box-sizing: border-box;
	margin: 0;
	padding: 0;	
	font-family: Raleway, sans-serif;
}
.board-body{
	z-index: 1;
	position: relative;	
	height: 100%;
}
.board-field{
	padding: 20px 0px;	
	position: relative;	
}
.form-control {
	border: none;
	border-bottom: 2px solid #D1D1D4;
	background: none;
	padding: 10px;
	padding-left: 24px;
	font-weight: 700;
	width: 75%;
	transition: .2s;
}
.button_form{
	width: 130px;
	height: 40px;
	color: #fff;
	border-radius: 5px;
	margin-right: 10px;
	font-family: 'Lato', sans-serif;
	font-weight: 500;
	background: transparent;
	cursor: pointer;
	transition: all 0.3s ease;
	position: relative;
	display: inline-block;
	box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
	7px 7px 20px 0px rgba(0,0,0,.1),
	4px 4px 5px 0px rgba(0,0,0,.1);
	outline: none;
	background-color: #f0ecfc;
	background-image: linear-gradient(315deg, #f0ecfc 0%, #c797eb 74%);
	line-height: 42px;
	padding: 0;
	border: none;
}
.button_text{
	position: relative;
	display: block;
	width: 100%;
	height: 100%;
}
</style>