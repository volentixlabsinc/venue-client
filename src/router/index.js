import Vue from 'vue';
import Router from 'vue-router';

import Home from './../views/home';
import Dashboard from './../views/dashboard';
import Campaign from './../views/campaigns';
import Referral from './../views/referrals';
import Account from './../views/account';


Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/campaign',
        name: 'Campaign',
        component: Campaign
    },
    {
        path: '/referrals',
        name: 'Referral',
        component: Referral
    },
    {
        path: '/account',
        name: 'Account',
        component: Account
    }
];

const router = new Router({
    routes,
    mode: 'history'
});
export default router;