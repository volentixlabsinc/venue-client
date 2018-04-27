<template>
<div class="menu">
    <router-link :to="'/'">
    <a class="button"><i class="fas fa-tachometer-alt"></i></a>
    </router-link>
    <router-link :to="'/campaign'">
    <a class="button"><i class="fas fa-bolt"></i></a>
    </router-link>
    <router-link :to="'/referrals'">
    <a class="button"><i class="fas fa-comments"></i></a>
    </router-link>
    <router-link :to="'/account'">
    <a class="button"><i class="fas fa-user-circle"></i></a>
    </router-link>
</div>
</template>

<script>
    export default {
        name: 'navbar',
    }
</script>

<style scoped>
.menu {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    font-size: 26px;
    width: 100%;
    height: 100%;
    color: #94A8B6;
}
a { color: inherit; }

a:hover {
    color: #85449A;
    border-top: #85449A 1px solid;
}
@media screen and (min-width: 500px) {
.menu {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
}
a:hover {
    border-top: #85449A 0px solid;
    border-right: #85449A 1px solid;
}
.button {
    padding-bottom: 20px;
    padding-right: 20px;
}
}
</style>