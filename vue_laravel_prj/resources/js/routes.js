import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from '@/js/layouts/Index';

import Login from '@/js/components/Auth/Login';
import Register from '@/js/components/Auth/Register';

import HomePage from '@/js/pages/HomePage';
import LifeStory from '@/js/pages/LifeStory';
import WorkStory from '@/js/pages/WorkStory';
import Japanese from '@/js/pages/Japanese';
import Cooking from '@/js/pages/Cooking';
import Coding from '@/js/pages/Coding';
import Discuss from '@/js/pages/Discuss';

Vue.use(VueRouter);

const router = new VueRouter({
   mode: 'history',
   routes: [
       {
           path: '/',
           component: Index,
           children: [
               {
                   path: '',
                   name: 'home',
                   component: HomePage
               },
               {
                   path: 'life-story',
                   name: 'life_story',
                   component: LifeStory
               },
               {
                   path: 'working-story',
                   name: 'work_story',
                   component: WorkStory
               },
               {
                   path: 'japanese',
                   name: 'japanese',
                   component: Japanese,

               },
               {
                   path: 'cooking',
                   name: 'cooking',
                   component: Cooking,

               },
               {
                   path: 'coding',
                   name: 'coding',
                   component: Coding,

               },
               {
                   path: 'discuss',
                   name: 'discuss',
                   component: Discuss
               },
               {
                   path: 'login',
                   name: 'login',
                   component: Login
               },
               {
                   path: 'register',
                   name: 'register',
                   component: Register
               },
           ],
       }
   ]
});

export default router;
