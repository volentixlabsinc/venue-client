import Vue from 'vue';
import Router from 'vue-router';

import landingPage from './../views/landingPage';
import Dashboard from './../views/dashboard';
import Campaign from './../views/campaigns';
import Account from './../views/account';
import Signature from './../views/signature';
import OnboardingBitcointalk from './../views/signature/onboarding/bitcointalk/';

import { readFromCookie } from '../service/utils/browser-storage';


Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'landingPage',
        component: landingPage
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        beforeEnter: requireAuth
    },
    {
        path: '/campaign',
        name: 'Campaign',
        component: Campaign,
        beforeEnter: requireAuth

    },
    {
        path: '/referrals',
        name: 'Referral',
        component: Referral
    },
    {
        path: '/signatures',
        name: 'Signatures',
        component: Signature,
        beforeEnter: requireAuth

    },

    {
        path: '/onboarding/bitcointalk',
        component: OnboardingBitcointalk,
        beforeEnter: requireAuth

    },
    {
        path: '/account',
        name: 'Account',
        component: Account,
        beforeEnter: requireAuth
    }
];



const router = new Router({
    routes,
    mode: 'history'
});

function requireAuth (to, from, next) {
    var authenticated = readFromCookie(); 
    if (!authenticated) {
        console.log('NOT AUTHETNICATED')
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
        console.log('AUTHENTIACAED WITH', authenticated)
      next()
    }
  }



export default router;