import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        alias: "/slaves",
        name: "slaves",
        // Route to fill
        component: () => import("./components/")
    },
    {
        path: "/slaves/:id",
        name: "slaves-details",
        // Route to fill
        component: () => import("./components/")
    },
    {
        path: "/add",
        name: "add",
        component: () => import("./components/AddSlave")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;