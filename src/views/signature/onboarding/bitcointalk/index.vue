<template>
  <section class="section">
    <div class="container">

            <div class="stepper">
                <horizontal-stepper :steps="demoSteps" @completed-step="completeStep"
                                    @active-step="isStepActive" @stepper-finished="alert"
                                    @userIdAndForum="changeActiveForm">                     
                </horizontal-stepper>
            </div>
            <div class="lbox">
                <h2>Leaderboard</h2>
                <leaderboard/>
            </div>
    </div>
</section>
</template>


<script>
    import HorizontalStepper from 'vue-stepper';
    import leaderboard from '../../../../components/leaderboard';

    // This components will have the content for each stepper step.
    import StepOne from './StepOne.vue';
    import StepTwo from './StepTwo.vue';
    import StepThree from './StepThree.vue';
     import StepFour from './StepFour.vue';


        export default {
        components: {
            HorizontalStepper,
            leaderboard
        },
        data(){
            return {
                activeProfile: '',
                activeForum:'', 
                demoSteps: [
                    {
                        component: StepOne,
                        completed: false,
                    },
                    {
                        component: StepTwo,
                        completed: false
                    },
                        {
                        component: StepThree,
                        completed: false
                    },
                     {
                        component: StepFour,
                        completed: false
                    }
                ]
            }
        },
        methods: {
            // Executed when @completed-step event is triggered
            completeStep(payload) {
                this.demoSteps.forEach((step) => {
                    if (step.name === payload.name) {
                        step.completed = true;
                    }
                })
            },
            // Executed when @active-step event is triggered
            isStepActive(payload) {
                this.demoSteps.forEach((step) => {
                    if (step.name === payload.name) {
                        if(step.completed === true) {
                            step.completed = false;
                        }
                    }
                })
            },
            // Executed when @stepper-finished event is triggered
            alert(payload) {
                alert('end')
            },
            changeActiveForm(payload) {
                console.log('changeactive forum triggering');
                this.activeProfile = payload.userId; 
                this.changeActiveForum = payload.forumId; 
            }
        }
    }

</script>

<style scoped>
    .section {
        height: 100%;
        width:90%;
        overflow-x: auto;
        overflow-y: auto;
        scrollbar-face-color: #367CD2;
        scrollbar-shadow-color: #FFFFFF;
        scrollbar-highlight-color: #FFFFFF;
        scrollbar-3dlight-color: #FFFFFF;
        scrollbar-darkshadow-color: #FFFFFF;
        scrollbar-track-color: #FFFFFF;
        scrollbar-arrow-color: #FFFFFF;
    }

.section::-webkit-scrollbar {
    width: 5px;
}

/* Track */
.section::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px rgba(0,0,0,0.2); 
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2); 
    -webkit-border-radius: 0px;
    border-radius: 0px;
    background-clip: content-box;
}
 
/* Handle */
.section::-webkit-scrollbar-thumb {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 25px rgba(0,0,0,0.3); 
    box-shadow: inset 0 0 25px rgba(0,0,0,0.3); 
}

.stepper {
    padding-top: 10%;
     padding-bottom: 10%;
}

.stepper-box { 
    border-radius: 10px;
    width: 100%;
    height: 80%; 
    overflow: scroll;
}
/* >>> #68 - add leaderboard on rhs */
.lbox h2 {
    color: #97a5b3;
}
.container {
    display: flex;
    align-items: baseline;
}

.lbox{ /* based off of css in dashboard/allCampaigns.vue */
/*padding-top: 20px;*/
padding: 2rem;
width: inherit; /*90%;*/
max-height: 500px;
display: inherit;
flex-direction: column;
justify-content: flex-start;
align-items: center;
overflow-y: scroll;
overflow-x: hidden;
scrollbar-face-color: #367CD2;
scrollbar-shadow-color: #FFFFFF;
scrollbar-highlight-color: #FFFFFF;
scrollbar-3dlight-color: #FFFFFF;
scrollbar-darkshadow-color: #FFFFFF;
scrollbar-track-color: #FFFFFF;
scrollbar-arrow-color: #FFFFFF;
padding-bottom:50px;
}

.lbox::-webkit-scrollbar {
    width: 0px;
}

.lbox::-webkit-scrollbar-track {
box-shadow: inset 0 0 0px rgba(0,0,0,0.2); 
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0); 
    -webkit-border-radius: 0px;
    border-radius: 0px;
    background-clip: content-box;
}

.lbox::-webkit-scrollbar-thumb {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 25px rgba(0,0,0,0); 
    box-shadow: inset 0 0 25px rgba(0,0,0,0); 
}
/* <<< */
</style>

<style>
/*
#app .main {
    padding-top: 2rem !important;
}
*/
/* #68 - kill the top box in the stepper component, remove white bg, tweak to fit rest of UI */
#app .stepper-box { 
    background: transparent;
    box-shadow: none;
}
#app .stepper-box .top {
    display: none !important;
}
#app .stepper-box .content h2 {
    color: #97a5b3;
}
#app .stepper-box .bottom {
    border: none;
}
#app .stepper-box img.step-image {
    max-width: 525px;
    border-radius: 5px;
}

#app .lbox table tbody td {
    color: white;
}
@media only screen and (max-width: 1300px) {
    #app .lbox th.RANK, 
    #app .lbox th.USERNAME, 
    #app .lbox th.POSTS,
    #app .lbox th.VTX,
    #app .lbox table tbody td {
        font-size: 0.9rem;
    }
}
@media only screen and (max-width: 1100px) {
    #app .lbox {
        display: none;
    }
}
@media only screen and (max-width: 600px) {
    #app .step-image {
        width: 95%;
    }
}
</style>
