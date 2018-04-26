<template>
    <div class="main-section">
      <div class="card my-campaign">
        <h1>here goes info from campaign</h1>
      </div>
      <div v-for= "news in newsList" :key="news" class="card my-news">
      <h1>{{news}}</h1>
      </div>
      </div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
      newsList: [
        'news 1', 'news 2', 'news 3', 'news 4', 'news 5'
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

.main-section::-webkit-scrollbar {
    width: 12px;
}

/* Track */
.main-section::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0); 
    -webkit-border-radius: 0px;
    border-radius: 0px;
}
 
/* Handle */
.main-section::-webkit-scrollbar-thumb {
    -webkit-border-radius: 0px;
    border-radius: 0px;
    -webkit-box-shadow: inset 0 0 25px rgba(0,0,0,0); 
}

.card {
  width: 95%;
}
.my-campaign{
  min-height:40%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: rgb(245, 245, 245, 0.1) 1px solid;
}
.my-news {
  background-color: rgb(245, 245, 245, 0.05);
  border: rgb(245, 245, 245, 0.3) 1px solid;
  color: black;
  margin-top: 10px;
}

@media only screen and (min-width: 800px) {
  
}
</style>