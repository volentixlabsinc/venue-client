<template>
    <div class="main-modal">
        <div class="steps-section">
            <button class="steps-buttons" @click="imageNumber=1">1</button>
            <button class="steps-buttons" @click="imageNumber=2">2</button>
            <button class="steps-buttons" @click="imageNumber=2">3</button>
        </div>
        <transition name="fader">
            <img v-if="imageNumber==1" src='/img/onboarding/bitcointalk/step1a_alt.png' />
            
            <img v-if="imageNumber==2" src='/img/onboarding/bitcointalk/step1b_alt.png' />
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return({
            imageNumber: 1,
            showstep: true
        })
    },
    methods: {
        swap() {
            this.showstep = !this.showstep;
        }
    },
    mounted() {
        // setInterval(this.swap, 4000);
    }
}
</script>

<style scoped>
.steps-section {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.steps-buttons {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    background-color: gold;
    border: 1px solid gold;
    color: white;
}

.main-modal{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
img {
    height: 80%;
    border-radius: 5px;
}
@media only screen and (max-width: 800px) {
    .img {
        width: 95%;
    }
}
</style>