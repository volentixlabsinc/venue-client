<template>
  <div>
    <div class="is-hidden-tablet">
      <nav class="navbar is-primary" role="navigation">
        <div class="navbar-brand">
          <MainLogo class="navbar-item" />
          <a :class="{ 'is-active': showMenu }" role="button" class="navbar-burger burger" 
             aria-label="menu" aria-expanded="false" @click="toggleMenu">
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
          </a>    
        </div>
        <div :class="{ 'is-active': showMenu }" class="navbar-menu">
          <div class="navbar-start">
            <Navigation />
          </div>
        </div>
      </nav>
      <nuxt />
    </div>
    <div class="columns is-fullheight is-hidden-mobile">
      <aside class="menu column is-one-fifth-desktop">
        <MainLogo />
        <div class="menu-list">
          <Navigation />
        </div>
        <SocialMediaLinks class="level" />
      </aside>
      <div class="column">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import MainLogo from "~/components/MainLogo.vue";
import SocialMediaLinks from "~/components/SocialMediaLinks.vue";
import NavigationLink from "~/components/NavigationLink.vue";

export default {
  components: {
    Navigation,
    MainLogo,
    NavigationLink,
    SocialMediaLinks
  },
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleMenu() {
      console.log("click");
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  background-color: #e6d9ea;
}
</style>
