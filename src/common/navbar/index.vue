<template>
<div class="menu">
    <router-link :to="'/dashboard'">
    <a class="button"><i class="far fa-chart-bar prefix"></i><label class="menu-name">DASHBOARD</label></a>
    </router-link>
    <router-link :to="'/campaign'">
    <a class="button"><i class="fas fa-rocket prefix"></i><label class="menu-name">CAMPAIGNS</label></a>
    </router-link>
    <router-link :to="'/signatures'">
    <a class="button">  <i class="far fa-address-card"></i>
    <label class="menu-name">SIGNATURES</label></a>
    </router-link>
    <router-link :to="'/account'">
    <a class="button"><i class="far fa-user prefix"></i><label class="menu-name">MY PROFILE</label></a>
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
    font-size: 23px;
    font-weight: 100;
    width: 100%;
    height: 100%;
    color: #92A5C1;
     border-top: 1px solid rgba(0, 0, 0, 0.3);
}
a { color: inherit; }

a:hover {
    color: #85449A;
    border-top: #85449A 1px solid;
}

.menu-name {display: none;}
@media screen and (min-width: 800px) {
.menu {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
     border-top: 0px;
}
a {
    width: 80%;
    padding-left: 15%;
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
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


@media screen and (min-width: 900px) {
.prefix{
    font-size: 18px;
}
.menu-name {
    display: inherit;
    font-size: 10px;
    margin-left: 10px;
    flex-shrink: 0;
}


}
</style>