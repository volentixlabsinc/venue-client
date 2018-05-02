<template>
    <div class=" leaderboard">
        
        <ul>
            <li v-for="(elements, key) in rankings" :key="key">
                <div class="top-elements">
                    <p class="element top-el el-rank">{{elements.rank}}</p>
                    <p class="element top-el el-username">{{elements.username}}</p>
                    <p class="element top-el el-tokens">{{elements.total_tokens}} vtx</p>
                    <p class="element top-el el-total-points">{{elements.total_points}}</p>
                </div>
                <div class="bottom-elements">
                     <p class="empty-element"></p>
                    <p class="element top-el el-total-posts">{{elements.total_posts}} posts</p>
                </div>
                </li>
        </ul>
    </div>
</template>

<script>

export default {
    props: {
        rankings: {
            type: Array,
            default: null
        }
    },
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
    align-items: flex-start;
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
}
li {
    width: 100%;
    height: 10%;
    padding-top: 5px;
    padding-bottom: 5px;
    border-top: white 1px solid;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
}

.top-elements {
    width: 100%;
    display: flex;
    justify-content: flex-start;
     font-size: 14px
}
.el-rank {
    width: 3%;
}
.el-username {
     width: 40%;
    display: flex;
    justify-content: flex-start;
    padding-left: 3%;
}
.el-tokens {
    width: 30%;
}
.el-total-points {
     width: 20%;
}
.bottom-elements {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 11px;
}
.empty-element{
     width: 3%;
}
.el-total-posts {
   width: 97%;
    padding-left: 3%;
    display: flex;
    flex-direction: row !important;
    flex-wrap: nowrap;
    color: gray;
}

@media only screen and (max-width: 400px) and (min-width:300px) {
    .top-elements{
        font-size: 11px
    }
    .bottom-elements{
        font-size: 10px
    }
}

@media only screen and (min-width: 900px) {
    .top-elements{
        font-size: 16px
    }
    .bottom-elements{
        font-size: 12px
    }
}
</style>