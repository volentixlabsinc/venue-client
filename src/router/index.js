import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from './../components/dashboard';


Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    }
];

const router = new Router({
    routes,
    mode: 'history'
});
export default router;