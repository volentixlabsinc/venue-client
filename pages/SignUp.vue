<template>
  <div class="main-section">
    <div class="login-section-large">
        <Signup />
    </div>
  </div>
</template>


<script>
import Signup from '~/components/Signup'

export default {
  components: {
    Signup
  }
}
</script>

<style scoped>
.main-section {
    height: 100%;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
   }

.card {
    box-shadow: none;
    width: 100%;
}

.login-section{
    background-image: linear-gradient(to top,  rgb(48, 49, 64, 0), #303140);
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    flex-grow: 0;
    padding: 30px;
    min-height: 40%;
}

.login-section-large{
    background-image: linear-gradient(to top,  rgb(48, 49, 64, 0), #303140);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:flex-start;
    height: auto; 
    padding: 30px;
}

button {
  width: 70%;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid #9B68CD;
  color: rgb(176, 176, 176);
}

@media only screen and (min-width: 800px) {
.main-section {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap; 
    width: 90%;
}

}

</style>
