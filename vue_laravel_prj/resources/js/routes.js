import Vue from "vue";
import VueRouter from "vue-router";

import Index from "@/js/layouts/Index";
import HomePage from "@/js/pages/HomePage";
import About from "@/js/pages/About";

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
                   path: 'about',
                   name: 'about',
                   component: About
               },
           ]
       }
   ]
});

export default router;
