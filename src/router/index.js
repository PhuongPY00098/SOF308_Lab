import { createRouter, createWebHistory } from 'vue-router';

import Lab1 from '../components/Lab1/Lab1Component.vue'
import Bai1 from '../components/Lab1/bai1.vue' 
import Bai2 from '../components/Lab1/bai2.vue'
import Bai3 from '../components/Lab1/bai3.vue' 
import Bai4 from '../components/Lab1/bai4.vue'


import Lab2 from '../components/Lab2/Lab2Component.vue'
import Lab2Bai1 from '../components/Lab2/bai1.vue' 
import Lab2Bai23 from '../components/Lab2/bai23.vue'
import Lab2Bai4 from '../components/Lab2/bai4.vue'

import Lab3 from '../components/Lab3/Lab3Component.vue'
import Lab3Bai1 from '../components/Lab3/bai1.vue'
import Lab3Bai2 from '../components/Lab3/bai2.vue' 
import Lab3Bai3 from '../components/Lab3/bai3.vue'
import Lab3Bai4 from '../components/Lab3/bai4.vue'

import Lab5 from '../components/Lab5/Lab5Component.vue'
import Lab5Bai1 from '../components/Lab5/bai1.vue'
import Lab5Bai2 from '../components/Lab5/bai2.vue' 
import Lab5Bai3 from '../components/Lab5/bai3.vue'
import App4 from '../components/Lab5/bai4/App4.vue'

import Lab6 from '../components/Lab6/Lab6Component.vue'
import Lab6Bai1 from '../components/Lab6/bai1.vue'
import Lab6Bai2 from '../components/Lab6/bai2.vue' 
import Lab6Bai3 from '../components/Lab6/bai3.vue'
import Lab6Bai4 from '../components/Lab6/bai4.vue'


const routes = [
    { path: '/', component: Lab1 },
    { path: '/Lab1/bai1', component: Bai1 },
    { path: '/Lab1/bai2', component: Bai2 },
    { path: '/Lab1/bai3', component: Bai3 },
    { path: '/Lab1/bai4', component: Bai4 },

    { path: '/lab2', component: Lab2 },
    { path: '/Lab2/bai1', component: Lab2Bai1 },
    { path: '/Lab2/bai23', component: Lab2Bai23 },
    { path: '/Lab2/bai4', component: Lab2Bai4 },

    { path: '/lab3', component: Lab3 },
    { path: '/Lab3/bai1', component: Lab3Bai1 },
    { path: '/Lab3/bai2', component: Lab3Bai2 },
    { path: '/Lab3/bai3', component: Lab3Bai3 },
    { path: '/Lab3/bai4', component: Lab3Bai4 },

    { path: '/lab5', component: Lab5 },
    { path: '/Lab5/bai1', component: Lab5Bai1 },
    { path: '/Lab5/bai2', component: Lab5Bai2 },
    { path: '/Lab5/bai3', component: Lab5Bai3 },
    { path: '/Lab5/bai4', component: App4 },

    { path: '/lab6', component: Lab6 },
    { path: '/Lab6/bai1', component: Lab6Bai1 },
    { path: '/Lab6/bai2', component: Lab6Bai2 },
    { path: '/Lab6/bai3', component: Lab6Bai3 },
    { path: '/Lab6/bai4', component: Lab6Bai4 },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;