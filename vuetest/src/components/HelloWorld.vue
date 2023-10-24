<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span v-if="this.$store.state.loginStorage.name!='' && this.$store.state.loginStorage.name!=undefined">
      안녕하세요.
      {{this.$store.state.loginStorage.name}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  padding: 0;
  color: #FFF;
  font-size: large;
}
a {
  color: #FFF;
}
h1{
  color: #FFF;
}
</style>
