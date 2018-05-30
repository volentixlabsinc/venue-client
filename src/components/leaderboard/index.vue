<template>
    <div class=" leaderboard">
        <table v-if="userStats">
             <thead>
                <tr>
                    <th class="RANK"></th>
                    <th class="USERNAME">USERNAME</th>
                    <th class="POSTS">POSTS</th>
                    <th class="VTX">VTX</th>
                </tr>
            </thead>
            <tbody  v-for="(elements, key) in data.rankings" :key="key">
                
                    <leaderboard-entry :elements="elements" :sitewide="data.sitewide" :myRank="myRank"/>
                    <!-- <td>{{elements.rank}}</td>
                    <td class="USERNAME">{{elements.username}}</td>
                    <td>{{elements.total_posts}}</td>
                    <td>{{elements.total_tokens}}</td> -->
            </tbody>
        </table>
       <table v-else>
                    <thead>
                <tr>
                    <th class="RANK"></th>
                    <th class="USERNAME">USERNAME</th>
                    <th class="POSTS">POSTS</th>
                    <th class="VTX">VTX</th>
                </tr>
            </thead>
            <tbody  v-for="(elements, key) in data.rankings" :key="key">
                
                    <leaderboard-entry :elements="elements" :sitewide="data.sitewide" :myRank="myRank"/>
                    <!-- <td>{{elements.rank}}</td>
                    <td class="USERNAME">{{elements.username}}</td>
                    <td>{{elements.total_posts}}</td>
                    <td>{{elements.total_tokens}}</td> -->
            </tbody>
       </table>
        <!-- <ul>
            <li v-for="(elements, key) in data.rankings" :key="key" >
                <leaderboard-entry :elements="elements" :sitewide="data.sitewide" :myRank="data.userstats.overall_rank == Number? data.userstats.overall_rank : 0"/>
            </li>
        </ul> -->
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
                console.log('this.data', this.data)        
                
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


.card {
  width: 95%;
}

ul {
    width: 100%;
    list-style-type: none;
    padding: 0;
    list-style-type: none;
}

li{
    width: 100%;
    max-height: 10%;
    border-top: white 1px solid;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    animation: slideUp 0.5s linear 1 2s;
}

table {
    width: 100%;
    display: table;
    border-collapse: separate;
    border-spacing: 0px;
    border-color: gray;
    text-align: left;
}

table th {
    font-size: 20px;
    color: #94A8B6
}

table tr {
    height: 40px;
}
th, td {
    border-bottom: 1px solid #94A8B6;
}
.USERNAME {
    width: 50%;
}

.POSTS {
    width: auto;
    text-align: center;
}
.VTX{
    width:80px;
}
</style>