<template>
  <div id="app">
  <section class="hero is-primary">
   <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="./assets/gilbert.png">
          </a>
          <span class="navbar-burger burger">
          <span></span>
          <span></span>
          <span></span>
          </span>
        </div>
        <div class="navbar-end navbar-menu">
          <router-link to="portfolio" class="navbar-item is-active">
            Portfolio          
          </router-link>
          <router-link to="resume" class="navbar-item is-active">
            Resume          
          </router-link>
          <router-link to="contact" class="navbar-item is-active">
            Contact          
          </router-link>
        </div>
      </div>
    </nav>
  </div>
  <div class="hero is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <div>
              <h1 class="title is-1 is-spaced">Jacob Clayman</h1>
              <h2 class="subtitle is-4">Game Developer</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div> 
 </section>
  <transition mode="out-in">
    <router-view></router-view>
  </transition>  
</div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
  @import "../node_modules/bulma/bulma.sass";
  @import "./styles/styles.scss";
</style>
