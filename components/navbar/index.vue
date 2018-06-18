<template>
  <nav class="menu p-md">
    <ul>
      <li v-if="isAuthenticated()">
        <nav-link name="DASHBOARD" route="/dashboard" icon="fas fa-tachometer-alt prefix" />
      </li>
      <li>
        <nav-link name="LEADERBOARD" route="/leaderboard" icon="fas fa-rocket prefix" />
      </li>
      <li v-if="isAuthenticated()">
        <nav-link name="MY PROFILE" route="/profile" icon="far fa-user prefix" />
      </li>
      <li v-if="!isAuthenticated()">
        <nav-link name="LOG IN" route="/login" icon="fas fa-sign-in-alt prefix" />
      </li>
      <li v-if="!isAuthenticated()">
        <nav-link name="SIGN UP" route="/signup" icon="fas fa-user-plus prefix" />
      </li>
      <li v-if="isAuthenticated()">
        <nav-link name="LOG OUT" route="/logout" icon="fas fa-sign-out-alt prefix" />
      </li>
    </ul>
  </nav>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
  components: {
    NavLink
  },
  methods: {
    // TODO I think this should work as a data member, but I can't get it to work :(
    isAuthenticated() {
      return this.$store.state.user.isAuthenticated;
    }
  }
};
</script>
