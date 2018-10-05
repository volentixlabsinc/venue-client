<template>
  <div>
    <div class="columns is-fullheight is-hidden-mobile">
      <aside class="navbar column is-one-fifth-desktop is-one-fifth-tablet">
        <MainLogo class="p-lg"/>
        <Navigation />
        <hr>
        <div class="navfooter">
          <VolentixLinks class="m-b-md"/>
          <SocialMediaLinks class="m-l-md"/>
          <div class="volentix is-fullwidth has-text-centered">
            <a target="_blank" href="https://www.volentix.io">        
              <img src="~/assets/spinning-volentix-logo.gif">
            </a>            
          </div>
        </div>
      </aside>
      <div class="column">
        <nuxt />
      </div>
    </div>
    <div class="is-hidden-tablet">
      <nav class="navbar" role="navigation">
        <div class="navbar-brand">
          <MainLogo class="navbar-item" />
          <a :class="{ 'is-active': showMenu }" role="button" class="navbar-burger" 
             aria-label="menu" aria-expanded="false" @click="toggleMenu">
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
          </a>    
        </div>
        <div :class="{ 'is-active': showMenu }" class="navbar-menu">
          <Navigation @click="toggleMenu()"/>
        </div>
      </nav>
      <nuxt />
    </div>
  </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import MainLogo from "~/components/MainLogo.vue";
import VolentixLinks from "~/components/VolentixLinks";
import SocialMediaLinks from "~/components/SocialMediaLinks.vue";
import NavigationLink from "~/components/NavigationLink.vue";

export default {
  components: {
    Navigation,
    MainLogo,
    NavigationLink,
    SocialMediaLinks,
    VolentixLinks
  },
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  background: linear-gradient(rgb(74, 91, 107), rgb(60, 78, 92));
  padding-right: 0px;
  border-right: 8px #e0e5e9 solid;
}

// TODO Understand why $navbar-burger-color isn't working
.navbar-burger {
  color: #98a5ae;
}
.navbar-burger:hover {
  color: white;
}
</style>

<style scoped>
.navfooter {
  position: absolute;
  bottom: 0;
  width: calc(100% - 12px);
}

.volentix img {
  max-width: 5rem;
}

/* TODO understand why it is ignored if I add to main.scss  */
hr {
  background-color: #98a5ae;
  margin-left: 1rem;
  margin-right: 1rem;
  height: 1px;
}
</style>
