<template>
  <section id="app" class="hero is-fullheight is-info">

    <div class="hero-head" v-show="$store.state.player.active">
      <nav class="navbar">
        <div class="container">

          <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>

          <div class="navbar-menu" id="navMenu">
            <div class="navbar-center">
              <router-link class="navbar-item has-text-centered" to="/buscar">Buscar Mesa</router-link>

              <router-link class="navbar-item has-text-centered" to="/mesa">Mesa</router-link>

              <router-link class="navbar-item has-text-centered" to="/cartas">Cartas</router-link>

              <a class="navbar-item has-text-centered" @click="$store.dispatch('logoutAction')">Cerrar Sesión</a>

            </div>
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
  .navbar-center a {
    font-weight: bold !important;
    color: #2c3e50 !important;
  }

  .navbar-center a.router-link-exact-active {
    color: coral !important;
    border-radius: 2px;
  }

  .navbar-center a:hover {
    border-radius: 2px;
  }
</style>