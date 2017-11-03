<template>
  <div id="app">
  <section class="hero is-primary">
   <div class="hero-head">
    <header class="nav">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <img src="./assets/gilbert.png">
          </a>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
          <a class="nav-item is-active" v-for="item in items" :value="item.active" :key="item.title" slot="item" :href="item.href" :to="{name: item.href}" exact>
            {{ item.title }}          
          </a>
        </div>
      </div>
    </header>
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
        items: [{
          href: 'Portfolio',
          router: true,
          title: 'Portfolio',
          icon: 'work',
          active: true,
        }, {
          href: 'Resume',
          router: true,
          title: 'Resume',
          icon: 'assignment',
        }, {
          href: 'Contact',
          router: true,
          title: 'Contact',
          icon: 'contact_mail',
        }]
    };
  }
}
</script>

<style lang="scss">
  @import "../node_modules/bulma/bulma.sass";
  @import "./styles/styles.scss";
</style>
