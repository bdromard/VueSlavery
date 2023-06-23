import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/slaves",
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
        path: "/slaves/add",
        name: "add-slaves",
        component: () => import("./components/AddSlave")
    },
    {
        path: "/owners",
        alias: "/owners",
        name: "owners",
        component: () => import("./components/")
    },
    {
        path: "/owners/:id",
        name: "owners-details",
        // Route to fill
        component: () => import("./components/")
    },
    {
        path: "/owners/add",
        name: "add-owners",
        component: () => import("./components/AddSlave")
    },
    {
        path: "/texts",
        alias: "/texts",
        name: "texts",
        component: () => import("./components/")   
    },
    {   
        path: "/cities",
        alias: "/cities",
        name: "cities",
        component: () => import("./components/")  
    },
    {
        path: "/archives",
        alias: "/archives",
        name: "archives",
        component: () => import("./components/") 
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
