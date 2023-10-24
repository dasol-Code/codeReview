<template>
  <div id = "app">
  <sideBar></sideBar>
  <div id = "nav" class = "linkfrom">
  <router-link class="col" to="/home">Home</router-link>
  <span v-if="this.$store.state.loginStorage.id=='admin'">
  <router-link class="col" to="/about">About</router-link>
  </span>
  <span v-else>
  <router-link class="col" to="/info">Info</router-link>
  </span>
  <span v-if="this.$store.state.loginStorage.name==''">
  <router-link class="col" to="/member">SignUp</router-link>
  <router-link class="col" to="/login">Login</router-link>
  </span>
  <span v-else>
    <div class="outbutton">
      <button class="logoutButton" @click="logout"><span class ="logOutB">LogOut</span></button>
    </div>
  </span>
  <router-view/> 
  </div>
</div>

</template>

<script>
import sideBar from './components/left_side.vue'

export default{
  name: 'app',
  components:{
    sideBar
  },
  methods: {
    logout(){
      this.$store.dispatch("logout")
      alert("로그아웃했습니다. 메인 화면으로 이동합니다")
      this.$router.push({path: '/home'});
    }
  }
  
}
 
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  display: flex;
}

body {
	background: linear-gradient(90deg, #C7C5F4, #776BCC);		
}

nav {
  margin: auto;
  padding: 30px;
}

.col {
    display: inline-block;
    padding: 10px 20px;
    cursor:pointer;
    background-color:#eee;
    text-decoration: none;
    color:#7B8585;
    transition:0.3s;
    font: bold 14px Arial;
}
.col:hover{
  background-color:#41c7c2;
}
.col.router-link-active{
  background-color:#41c7c2;
}
.logoutButton{
  display: inline-block; 
  width: 60px;
  height: 30px;
  padding: 1px;
  background-color: #41c7c2;
  color: #f8f8f2;
  border-radius: 6px;
  margin-top: 10px;
  margin-left: 90%;
  margin-bottom: 10px;
  border : none;
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
  transition: top .01s linear;
  text-shadow: 0 1px 0 rgba(0,0,0,0.15);
  box-shadow: 0 0 0 1px #ace4e2 inset,
              0 0 0 2px rgba(255,255,255,0.15) inset,
              0 3px 0 0 rgba(139, 247, 241, 0.7),
              0 3px 0 1px rgba(0,0,0,.4),
              0 3px 3px 1px rgba(0,0,0,0.5);
}
.logoutButton:hover{
  background-color:#c5f0ee
}
.logoutButton:active{
  box-shadow: 0 0 0 1px #ace4e2 inset,
              0 0 0 2px rgba(255,255,255,0.15) inset,
              0 0 0 1px rgba(0,0,0,0.4);
}
.logOutB{
  font-size: 12px;
}
</style>
