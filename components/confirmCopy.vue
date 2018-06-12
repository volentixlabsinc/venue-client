<template>
    <div class="main-modal">
        <div class="steps-section">
           <h1>Signature Code Copied!</h1>
        </div>
        <div class="tips-section">
            <div class="loader"></div>
            <div class="text-modal">
                <h2>Simply paste the copied code to your Bitcointalk profile</h2>
                <h3 style="text-align:left">We will attempt to auto-verify placement for the next : {{timer}} minutes </h3>
                <div class="flex-row-80"><label>click for help</label> <button>Verify Now</button></div>
            </div>
        </div>

        
    </div>
</template>

<script>
export default {
    data() {
        return{
            timer: 240
        }
    },
    // mounted() {
    //     this.delay = setInterval(function() {
    //         this.timerCalc()
    //     }, 1000);
    // },
    // methods: {
    //     timerCalc(){
    //     this.timer = 240 - 1;
    //     }
    // }
}
</script>

<style scoped>
hr {
    border: 1px solid gray;
}

button:focus {outline:0;}
.steps-section {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}


.steps-buttons {
    font-weight: bold;
    font-size: 14px;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    background-color: #DD9C3F;
    border: 1px solid #DD9C3F;
    color: white;
    box-shadow: 1px 0.5px 8px rgba(0, 0, 0, 0.312);
}

.main-modal{
    color: white;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.tips-section{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 70%;
}

img {
    max-height: 90%;
    border-radius: 5px;
}

.userId-form{
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.md-form{
    width: 100%;
    margin:0px;
    display: flex;
    justify-content: center;
    align-items: center;
}


.form-control{
  width: 50% !important;
  height: 25px;
  border-radius: 0px;
  background-color: rgba(255, 254, 254, 0.1);
  border: none;
  border-bottom: 1px solid white;
  color: white;
  font-size: 14px;
  margin: 5px !important;
}

::placeholder{
    color: white;
    padding-left: 5px;
}
.form-control:focus {outline:0;}

.loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid gray; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 3s linear infinite;
}
.text-modal{
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.flex-row-80{
    width: 80%;
    display: flex;
    justify-content: space-around;}
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
@media only screen and (max-width: 800px) {
    .img {
        width: 95%;
    }
}
</style>