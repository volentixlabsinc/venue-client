<template>
<div class="menu">
     <nav class="sidebar-navigation">
            <ul class="menu">
                <li v-if="isAuthenticated()">
                    <nav-link name="DASHBOARD" route="/dashboard" icon="fas fa-tachometer-alt prefix" />
                </li>
                <li>
                    <nav-link name="LEADERBOARD" route="/leaderboard" icon="fas fa-rocket prefix" />
                </li>
                <li v-if="isAuthenticated()">
                    <nav-link name="PROFILE" route="/account" icon="far fa-user prefix" />
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
</div>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
            methods: {
            // TODO I think this should work as a data member, but I can't get it to work :(
            isAuthenticated () { return this.$store.state.user.isAuthenticated },
        },
        components: {
            NavLink
        }
}
</script>

<style scoped>
nav {
    width: 100%;
}
ul {
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0px;
    border: 0px solid black;
}

.menu {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    font-size: 23px;
    font-weight: 100;
    width: 100%;
    height: 100%;
    color: white;
    /* border-top: 1px solid rgba(0, 0, 0, 0.3); */
}

@media screen and (min-width: 800px) {
    nav {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        text-align: right;
    }
    ul {

        flex-direction: row;
        justify-content: flex-end;
        align-items: flex-end;
        border-top: 0px;
        padding: 0px;
        border: none;
        text-align: right;
    }
    .menu {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        border-top: 0px;
    }
    li {
        width: auto;
        margin-top: 25px;
        margin-bottom: 25px;
        padding: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        text-align: right;
    }
}

@media screen and (min-width: 900px) {
    .prefix{
        width: 50%;
        font-size: 24px;
    }
    .menu-name {
        display: inherit;
        font-size: 14px;
        margin-left: 10px;
        flex-shrink: 0;
    }
}
</style>