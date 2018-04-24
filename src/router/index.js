import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'landingPage',
        component: LandingPage
    }
];

export default router;