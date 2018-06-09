<template>
<div class="menu">
    
     <nav class="sidebar-navigation">
            <ul class="menu">
                <li v-for="link in sideLinks"
                    :key="link.name"
                    class="button menu-item"
                    @click="isActive = link.name"
                    :class="{ active: link.name === isActive }"
                    :title="link.tooltip">

                    <router-link v-if="link.routerLink"
                                 :to="link.routerLink"
                                 class="menu-item menu-link">
                        <div class="icons-align">
                            <span :class="link.icon"></span>
                            <span class="title menu-name">{{link.name}}</span>
                        </div>
                    </router-link>
                    <a v-else-if="link.link"
                       class="button menu-item menu-link"
                       :href="link.link">
                        <div class="icons-align">
                            <span :class="link.icon"></span>
                            <span class="title menu-name">{{link.name}}</span>
                        </div>
                    </a>
                </li>

            </ul>
        </nav>

</div>
</template>

<script>
import {logout } from '~/services/auth'
    export default {
        name: 'navbar',
        data(){
            return {
                isActive: 'DASHBOARD',
                sideLinks: [
                    {
                        name: 'DASHBOARD',
                        routerLink: '/dashboard',
                        icon: 'far fa-chart-bar prefix',
                    },
                    {
                        name: 'LEADERBOARD',
                        routerLink: '/leaderboard',
                        icon: 'fas fa-rocket prefix',
                    },
                    {
                        name: 'MY PROFILE',
                        routerLink: '/account',
                        icon: 'far fa-user prefix',
                    },
                    {
                        name: 'LOG OUT',
                        link: '/logout',
                        icon: 'fas fa-power-off prefix',
                    }
                ]
            };
        },
        methods: {
            logout: function(){
                logout(); 
            },

            highlightSelectedButton() {

            }
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
a { color: inherit; }

a:hover {
    color: #85449A;
    border-top: #85449A 1px solid;
}

.menu-name {display: none;}

li.menu-item.active {
    color: #85449A;
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
a {
    width: 100%;
}

.prefix{
    text-align: right;
}

.icons-align {
    display: flex;
    text-align: right;
    align-items: center;
}
a:hover {
    border-top: #85449A 0px solid;
    border-right: #85449A 1px solid;
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