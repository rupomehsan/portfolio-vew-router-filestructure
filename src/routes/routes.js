import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Aboute from '../pages/Aboute.vue'
import Service from '../pages/Service.vue'
import WhyUs from '../pages/Whyus.vue'
import Team from '../pages/Team.vue'


const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "Home",
            path: '/',
            component: Home,
        },
        {
            name: "About",
            path: '/about',
            component: Aboute,
        },
        {
            name: "Service",
            path: '/service',
            component: Service,
        },
        {
            name: "WhyUs",
            path: '/whyus',
            component: WhyUs,
        },
        {
            name: "Team",
            path: '/team',
            component: Team,
        },
    ]
});

export default routes;