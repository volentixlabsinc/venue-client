<template>
    <h2 style="color:white;">Logging out... </h2>
</template>


<script>
    import {logout } from '~/services/auth';

    export default{
        mounted(){
            this.logout();            
        },
         methods: { 
             logout: async function(){
                logout(); 
                await this.$store.commit('user/unauthenticated')
                this.$router.push('/')
            }
         }
    }
</script>