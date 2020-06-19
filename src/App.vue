<template>
  <section id="app" class="hero is-fullheight is-info">

    <div class="hero-head" v-show="$store.state.player.active">

      <nav class="navbar">
        <div class="navbar-brand">
          <img src="./assets/logo-2.png" alt="Logo Against Humanity Vzla" width="180" height="28">

          <a role="button" class="navbar-burger" aria-label="menu" 
            data-target="navMenu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu" id="navMenu">
          <div class="navbar-end">
            <router-link class="navbar-item has-text-centered" to="/buscar">Buscar Mesa</router-link>

            <router-link class="navbar-item has-text-centered" to="/mesa">Mesa</router-link>

            <router-link class="navbar-item has-text-centered" to="/cartas">Cartas</router-link>

            <a class="navbar-item has-text-centered has-text-danger" 
              @click="cerrarSesion()" v-show="$store.state.player.active">Cerrar Sesión</a>

          </div>
        </div>
      </nav>

    </div>

    <div class="hero-body">
      <router-view />
    </div>

  </section>
</template>

<script>
  $(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });
  });

  export default {
    methods:{
      cerrarSesion(){

        Swal.fire({
          icon: 'info',
          title: 'Cerrar sesión',
          text: '¿Desea cerrar sesión?',
          showCancelButton:true,
          cancelButtonColor:'#d33',
          confirmButtonColor:'#48c774',
          cancelButtonText:'No',
          confirmButtonText:'Sí',

        }).then(result => {
          if (result.value){
            this.$store.dispatch('logoutAction')
          }
        });

      }
    }
  }
</script>

<style>
  @import '../node_modules/bulma/css/bulma.css';
  
  .navbar-center {
    justify-content: center;
    margin: auto;
  }

  .hero-body {
    padding: 10px;
  }

  /*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
*/
  .navbar-end a {
    color: hsl(0, 0%, 40%) !important;
  }

  .navbar-end a.router-link-exact-active {
    font-weight: bold !important;
    color:#6f89a2 !important;
    border-radius: 2px;
  }

  a.navbar-item:focus, a.navbar-item:focus-within, 
  a.navbar-item:hover{
    background-color: #79ceed !important;
    border-radius: 2px;
  }

  /* .navbar-end a:hover {
    background-color: #79ceed;
    border-radius: 2px;
  } */

  .hero.is-info, .hero.is-info .title {
    background-color: #c5e7f1;
    color: hsl(0, 0%, 40%);
    
  }

  .box{
    /* background-color: #c5e7f1; 
    background-color: #60efdb;
    color:#9dc2e5*/
    background-color: #79ceed;
  }

  .is-success-light{
    background-color: #60efdb
  }
</style>