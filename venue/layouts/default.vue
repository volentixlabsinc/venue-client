<template>
  <div>
    <div class="columns is-gapless is-fullheight is-hidden-mobile">
      <aside class="navbar column is-one-fifth-desktop is-one-fifth-tablet">
        <MainLogo class="p-lg"/>
        <Navigation />
        <hr>
        <div class="navfooter">
          <div class="navheader is-size-6 m-l-md m-b-xs">{{ $t("nav.volentix_project_links") }}</div>
          <VolentixLinks class="m-b-md"/>
          <SocialMediaLinks class="m-l-md"/>
          <div class="volentix is-fullwidth">
            <a target="_blank" href="https://www.volentix.io">        
              <img :height="35" :width="35" src="~/assets/spinning-volentix-logo-white.gif" class="p-b-md m-l-md">
            </a>            
          </div>
        </div>
      </aside>
      <div class="column">
        <nav class="navbar desktop-navbar is-transparent is-fixed-top">
          <div class="navbar-brand">
            <a target="_blank" href="https://www.volentix.io">
              <img :height="64" :width="64" src="~/assets/spinning-volentix-logo.gif">
            </a>
          </div>  
          <div class="navbar-menu is-active">
            <div class="navbar-end m-r-xl">
              <a v-if="!isAuthenticated()" href="/login" class="navbar-item">
                <span class="button is-rounded is-outlined is-info">Log in</span>
              </a>
              <a v-if="!isAuthenticated()" href="/signup" class="navbar-item is-paddingless">
                <span class="button is-rounded is-outlined is-info m-r-xxl">Sign up</span>
              </a>
              <a v-if="isAuthenticated()" href="/logout" class="navbar-item is-paddingless">
                <span class="button is-rounded is-outlined is-info m-r-xxl">Log out</span>
              </a>
              <PillarLink :new-tab="false" class="navbar-item" name="Venue" link="" highlight="#84429a" />
              <PillarLink class="navbar-item" name="Verto" link="https://verto.vdex.io" highlight="#08959f" />
              <PillarLink class="navbar-item" name="VDex" link="https://vdex.io" highlight="#2fa268" />
              <PillarLink class="navbar-item" name="Vespucci" link="https://vespucci.app" highlight="#fad100" />
            </div>
          </div>
        </nav>
        <nuxt class="p-xl"/>
      </div>
    </div>
    <div class="is-hidden-tablet">
      <nav class="navbar mobile-navbar" role="navigation" aria-label="dropdown navigation">
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
          <hr>
          <div class="navbar-item has-dropdown">
            <a class="navbar-link" @click="togglePageLinks">
              <span>{{ $t("nav.volentix_project_links") }}</span>
              <span class="icon is-pulled-right">
                <i v-if="showPageLinks" class="fas fa-chevron-up"/>
                <i v-else class="fas fa-chevron-down"/>
              </span>
            </a>
            <div v-if="showPageLinks" class="navbar-dropdown">
              <VolentixLinks class="m-b-md"/>
              <SocialMediaLinks class="m-l-md"/>
            </div>
          </div>
          <div class="navbar-item has-dropdown">
            <a class="navbar-link" @click="togglePillarLinks">
              <span>{{ $t("nav.volentix_pillars") }}</span>
              <span class="icon is-pulled-right">
                <i v-if="showPillarLinks" class="fas fa-chevron-up"/>
                <i v-else class="fas fa-chevron-down"/>
              </span>
            </a>
            <div v-if="showPillarLinks" class="navbar-dropdown">
              <PillarLink :image="require('@/assets/logo-verto.png')" class="navbar-item" link="https://verto.vdex.io" highlight="#08959f" />
              <PillarLink :image="require('@/assets/logo-vdex.png')" class="navbar-item" link="https://vdex.io" highlight="#2fa268" />
              <PillarLink :image="require('@/assets/logo-vespucci.png')" class="navbar-item" link="https://vespucci.app" highlight="#fad100" />
            </div>
          </div>
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
import PillarLink from "~/components/PillarLink.vue";

export default {
  components: {
    Navigation,
    MainLogo,
    NavigationLink,
    SocialMediaLinks,
    VolentixLinks,
    PillarLink
  },
  data() {
    return {
      showMenu: false,
      showPageLinks: false,
      showPillarLinks: false
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    togglePageLinks() {
      this.showPageLinks = !this.showPageLinks;
    },
    togglePillarLinks() {
      this.showPillarLinks = !this.showPillarLinks;
    },
    isAuthenticated() {
      return this.$store.state.user.isAuthenticated;
    }
  }
};
</script>

<style lang="scss" scoped>
div.is-hidden-tablet nav.navbar {
  background: linear-gradient(rgb(74, 91, 107), rgb(60, 78, 92));
  padding-right: 0px;
  border-right: 8px #e0e5e9 solid;
}

.navbar.is-fixed-top {
  left: 20vw; // one-fifth of the screen (i.e. the column size)
}

.navheader {
  color: #98a5ae;
}

// TODO Understand why $navbar-burger-color isn't working
.navbar-burger {
  color: #98a5ae;
}

.navbar-burger:hover {
  color: white;
}

.navbar-item.button {
  margin-top: auto;
  margin-bottom: auto;
}

a.navbar-item:hover {
  background-color: transparent;
}

.navfooter {
  position: absolute;
  bottom: 0;
  width: calc(100% - 12px);
}

.navbar-link {
  background-color: inherit;
}

.volentix img {
  max-width: 5rem;
}

.desktop-navbar {
  background-color: hsl(0, 0%, 96%); /* Same as background colour */
  border-bottom: 1px solid #98a5ae;
}

.desktop-navbar .navbar-item:hover {
  color: inherit;
}

/* TODO understand why it is ignored if I add to main.scss  */
hr {
  background-color: #98a5ae;
  margin: 0.3rem 1rem;
  height: 1px;
}
</style>
