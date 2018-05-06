<template>
    <div class=" leaderboard">
        
        <ul>
            <li v-for="(elements, key) in rankings" :key="key">
                <leaderboard-entry :elements="elements" :sitewide="sitewide"/>
            </li>
        </ul>
    </div>
</template>

<script>
import leaderboardEntry from "./leaderboardEntry";
export default {
    props: {
        rankings: {
            type: Array,
            default: null
        },
        sitewide: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            toggleDescription: false
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
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
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

.leaderboard * {
width: 100%;
}

.leaderboard::-webkit-scrollbar {
    width: 5px;
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
</style>