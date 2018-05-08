<template>
  <section class="section">
    <div class="container">
        <br />
        <br >
            <div>
                <horizontal-stepper :steps="demoSteps" @completed-step="completeStep"
                                    @active-step="isStepActive" @stepper-finished="alert"
                                    @userIdAndForum="changeActiveForm"
                >                     
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
        overflow: scroll; 
    }

    .stepper-box { 
        border-radius: 10px;
    }

    .stepper-box {
       width: 850px; 
    }
</style>
