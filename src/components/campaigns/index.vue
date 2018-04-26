<template>
  <div class="main-section">
      <div class="card my-campaign">
          <h1>Campaign Name</h1>
          <h2>Current Tokens</h2>
        </div>
        <div class="card leaderboard">
          <ul>
              <li v-for="elements in leaderboardElements" :key="elements">{{elements.name}}</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          leaderboardElements: [
              {
                  name: 'Username 1',
                  tokens: '0000',
                  activity: '5 posts'
              },
              {
                  name: 'Username 2',
                  tokens: '0000',
                  activity: '5 posts'
              },
              {
                  name: 'Username 3',
                  tokens: '0000',
                  activity: '5 posts'
              },
              {
                  name: 'Username 4',
                  tokens: '0000',
                  activity: '5 posts'
              },
              {
                  name: 'Username 5',
                  tokens: '0000',
                  activity: '5 posts'
              }
          ]
      }
  }
}
</script>


<style scoped>
.main-section {
  width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: white;
}    

.card {
  width: 95%;
}
.my-campaign{
  min-height:40%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 0px black;
  flex-direction: column;
}

ul {
    list-style-type: none;
}
li {
    height: 70px;
}

.leaderboard {
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

</style>