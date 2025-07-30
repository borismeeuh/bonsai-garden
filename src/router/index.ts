import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import BonsaiDetail from "../views/BonsaiDetail.vue";

const routes = [
	{
		path: "/bonsai-garden",
		component: Home,
	},
	{
		path: "/bonsai-detail/:id",
		component: BonsaiDetail,
        props: true,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
