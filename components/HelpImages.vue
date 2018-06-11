<template>
    <div>
        <transition name="fader">
            <img v-if="showstep" src='/img/onboarding/bitcointalk/step1a_alt.png' />
            <img v-if="!showstep" src='/img/onboarding/bitcointalk/step1b_alt.png' />
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return({
            showstep: true
        })
    },
    methods: {
        swap() {
            this.showstep = !this.showstep;
        }
    },
    mounted() {
        setInterval(this.swap, 4000);
    }
}
</script>

<style scoped>
.fader-enter {
    opacity: 0;
    animation: f 1s;
}
.fader-leave-active {
    opacity: 0;
    animation: f 1s reverse;
}
.fader-enter,
.fader-leave-active {
    opacity: 100;
}
@keyframes f {
    75% {
        opacity: 100%;
    }
}
img {
    max-width: 525px;
    border-radius: 5px;
}
@media only screen and (max-width: 600px) {
    .img {
        width: 95%;
    }
}
</style>