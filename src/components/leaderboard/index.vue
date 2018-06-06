<template>
    <div class=" leaderboard">
        <table v-if="userStats" v-for="(elements, key) in data.rankings" :key="key">
           
            <leaderboard-entry :elements="elements" :sitewide="data.sitewide" :myRank="myRank"/>
                
        </table>
       <table v-else  v-for="(elements, key) in data.rankings" :key="key">

            <leaderboard-entry :elements="elements" :sitewide="data.sitewide" :myRank="myRank"/>
                  
       </table>
     
    </div>
</template>

<script>
import { getLeaderBoardData } from '../../service/leaderboard'; 
import {retrieveStats } from '../../service/dashboard';
import leaderboardEntry from "./leaderboardEntry";
import { readFromCookie } from '../../service/utils/browser-storage.js'
export default {
    data() {
        return {
            toggleDescription: false,
            data: {},
            userStats: null,
            myRank:null
        }
    },
    mounted() {
        var isAuth = readFromCookie(); 

        getLeaderBoardData()
            .then(response => {
                //should be conditional here
                this.data = response;        
                
            })
            .catch(ex => {
                console.error(ex);
            })

        if(isAuth) {
            retrieveStats()
            .then(response => {
               
                this.userStats = response.stats.user_level;
                 if (this.userStats.overall_rank==null) {
                    this.myRank = 0;
                } else {
                    this.myRank = Number(this.userStats.overall_rank);
                }   
            })

        }
  
    },
    components: {
        leaderboardEntry
    }
}
</script>


<style scoped>
p {
    margin: 0px;
    padding: 0px;
}
tbody *{
width: 100% !important;
}
.leaderboard {
    width: 100%;
    /* display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: flex-start; */
    overflow: scroll;
    overflow-x: hidden;
    scrollbar-face-color: #367CD2;
    scrollbar-shadow-color: #FFFFFF;
    scrollbar-highlight-color: #FFFFFF;
    scrollbar-3dlight-color: #FFFFFF;
    scrollbar-darkshadow-color: #FFFFFF;
    scrollbar-track-color: #FFFFFF;
    scrollbar-arrow-color: #FFFFFF;
}

/* .leaderboard * {
width: 100%;
} */

.leaderboard::-webkit-scrollbar {
    width: 0px;
}

/* Track */
.leaderboard::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px rgba(0,0,0,0.2); 
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2); 
    -webkit-border-radius: 0px;
    border-radius: 0px;
    background-clip: content-box;
}
 
/* Handle */
.leaderboard::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 25px rgba(0,0,0,0.3); 
}

table {
    width: 100%;
    display: table;
    border-collapse: separate;
    border-spacing: 0px;
    border-color: gray;
    text-align: left;
}
</style>