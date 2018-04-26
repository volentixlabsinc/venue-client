import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from './../components/dashboard';
import Campaign from './../components/campaigns';
import Referral from './../components/referrals';
import Account from './../components/account';


Vue.use(Router);

const routes = [
    {
        path: '/',
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