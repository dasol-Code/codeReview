<template>
<div class="about">
    <h1>This is an Members about page</h1>
<table class="w3-table-all">
	<thead>
		<tr>
			<th>ID</th>
			<th>NAME</th>
			<th>PASSWORD</th>
			<th>E-MAIL</th>
		</tr>
	</thead>
	<tbody>
		<tr  v-for="(list, id) in nameList" :key="id">
			<td>{{list.id}}</td>
			<td class="findname"><a v-on:click="fnView(`${list.id}`)">{{list.name}}</a></td>
			<td>{{list.password}}</td>
			<td>{{list.email}}</td>
		</tr>
	</tbody>
</table>
</div>

</template>

<script>
import axios from 'axios';

export default {
	data(){
		return{
			nameList: null,
		};
	},
	props:{
		msg: String,
	},
	created(){
		this.getTest();
	},	
	methods:{
		
		getTest(){
			if(this.$store.state.loginStorage.id!='admin'){
				alert("관리자 페이지입니다.")
                this.$router.push({path: '/login'});
			}else{
				axios.post("/about")
				.then(response=>{
					console.log(response.data);
					this.nameList = response.data;
				})
				.catch(err=>{
					console.log(err.response);
				});
			}
		},
		fnView(id) {
			this.$router.push({
			name: 'uinfo',
			params: {conId: id}
			})
		},
	},
};

</script>
<style>

table{
	
	margin-left:auto; 
    margin-right:auto;
	width: 700px;
}
tr{
	width: 300px;
	border-collapse: collapse;
	border-top: 1px solid black; 
	border-bottom: 1px solid black;
}
th { background-color: #6A679E; }
td { background-color: #f0f7ff; }	

nav{
	margin-left:auto; 
    margin-right:auto;
}
.findname:hover{
	background-color: #b49bca;
}
</style>