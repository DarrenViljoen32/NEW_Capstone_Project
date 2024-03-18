<template>
  <Navbar/>
  <br><br><br><br>
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Spinner from './components/Spinner'

export default{
  components:{
    Navbar,
    Footer,
    Spinner
  },
 
  data() {
    return {
      
    }
  },

computed:{
  logout(){
    this.$store.dispatch('logout')
  }
}
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Ubuntu");

#app {
  font-family: "Ubuntu", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
