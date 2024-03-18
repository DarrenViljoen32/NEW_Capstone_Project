<template>

      <nav v-if="!$route.meta.hideNavbar" class="navbar fixed-top navbar-expand-lg bg-light" ref="navbar">
        <div class="container-fluid">
          <a href="/" class="navbar-brand">UNBOUND</a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="navbar-nav">

              <router-link v-if="!$cookies.get('jwt')" to="/signin" class="nav-link"><span class=""></span> | Sign Up</router-link> 
              <router-link v-if="!$cookies.get('jwt')" to="/login" class="nav-link"><span class=""></span> | Log In</router-link>
              <router-link @click.native="closeNavbar" to="/home" class="nav-link"><span class="bi bi-house"></span> | Home</router-link>
              <router-link @click.native="closeNavbar" to="/about" class="nav-link"><span class="bi bi-person"></span> | About</router-link> 
              <router-link @click.native="closeNavbar" to="/contact" class="nav-link"><span class="bi bi-envelope-at"></span> | Contact Us</router-link> 
              <router-link @click.native="closeNavbar" to="/admin" class="nav-link"><span class="bi bi-file"></span> | Admin</router-link> 
              <router-link @click.native="closeNavbar" to="/profile" class="nav-link"><span class="bi bi-file-person"></span> | Profile</router-link>

            </div>
          </div>

        </div>
    </nav>


    <!-- <router-link to="/"><button v-if="$cookies.get('jwt')" @click="logout">Log Out</button></router-link> -->

</template>

<script>
export default{
  methods: {
    closeNavbar() {
      // Close the offcanvas navbar when a link is clicked
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');
      navbarToggler.classList.add('collapsed');
      navbarCollapse.classList.remove('show');
    },

    handleClickOutside(event){
      const navbar = this.$refs.navbar
      if (navbar && !navbar.contains(event.target)){
        this.closeNavbar()
      }
    }
  },

  mounted(){
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside)
  },
}
</script>

<style>
  .bi{
    color: black;
    font-size: large;
  }
  nav {
    padding: 30px;
    text-align: initial;
    /* position: sticky; */
  }
  nav a {
    font-weight: bold;
    color: #6400C7;
    text-decoration: none;
    padding-left: 0%;
    font-size: larger;
  }
 .navbar-nav a:hover {
    color: #6400C7;
  }
  nav a.router-link-exact-active {
  box-shadow: #5500ff;
  color: #5500ff;
}
  .navbar-nav{
    padding-left: 0%;
    padding-right: 0%;
  }
  @media screen and (min-width: 1080px) {
    .navbar-nav{
    padding-left: 0%;
    }
  }
</style>