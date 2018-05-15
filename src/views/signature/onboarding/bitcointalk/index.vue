<template>
  <section class="section">
    <div class="container">

            <div class="stepper">
                <horizontal-stepper :steps="demoSteps" @completed-step="completeStep"
                                    @active-step="isStepActive" @stepper-finished="alert"
                                    @userIdAndForum="changeActiveForm">                     
                </horizontal-stepper>
            </div>
    </div>
</section>
</template>


<script>
    import HorizontalStepper from 'vue-stepper';
       // This components will have the content for each stepper step.
    import StepOne from './StepOne.vue';
    import StepTwo from './StepTwo.vue';
    import StepThree from './StepThree.vue';
     import StepFour from './StepFour.vue';


        export default {
        components: {
            HorizontalStepper
        },
        data(){
            return {
                activeProfile: '',
                activeForum:'', 
                demoSteps: [
                    {
                        icon: 'mail',
                        name: 'first',
                        title: 'Step 1',
                        subtitle: 'Find your user ID',
                        component: StepOne,
                        completed: false

                    },
                    {
                        icon: 'report_problem',
                        name: 'second',
                        title: 'Step 2',
                        subtitle: 'Show Stats',
                        component: StepTwo,
                        completed: false
                    },
                        {
                        icon: 'report_problem',
                        name: 'third',
                        title: 'Step 3',
                        subtitle: 'Choose Signature',
                        component: StepThree,
                        completed: false
                    },
                     {
                        icon: 'report_problem',
                        name: 'fourth',
                        title: 'Step 4',
                        subtitle: 'Verify Signature',
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

</style>
