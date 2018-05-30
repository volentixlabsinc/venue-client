<template>
    <h2 style="color:white;">Logging out... </h2>
</template>


<script>
    import {logout } from '../../service/auth';



    export default{
        mounted(){
            this.logout();
            
        },
         methods: { 
             logout: function(){
                logout(); 
                this.$router.push('/')

            }
         }
    }

</script>