import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Users from '../views/Users.vue'
import Products from '../views/Products.vue'

const routes = [
    { path: '/', component: Dashboard },
    { path: '/users', component: Users },
    { path: '/products', component: Products },
    // Add more routes as needed
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
