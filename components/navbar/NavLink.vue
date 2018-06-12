<template>
    <div class="menu-item menu-link">
    <router-link :to="route">
        <div class="icons-align">
            <span :class="icon"></span>
            <span class="menu-name">{{name}}</span>
        </div>
    </router-link>
    </div>
</template>

<script>
export default {
  props: {
    name: {
        type: String,
        required: true
    },
    route: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
  }
}
</script>

<style>
.icons-align {
    display: flex;
    text-align: right;
    align-items: center;
}

.menu-name {display: none;}

.nuxt-link-exact-active {
    color: #85449A;
}

a { color: inherit; }

a:hover {
    color: #85449A;
    border-top: #85449A 1px solid;
}


    .prefix{
        text-align: right;
    }


@media screen and (min-width: 800px) {
    a {
        width: 100%;
    }
.prefix{
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