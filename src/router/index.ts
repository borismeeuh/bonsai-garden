import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import BonsaiDetail from "../views/BonsaiDetail.vue";

const routes = [
	{
		path: "/bonsai-garden",
		component: Home,
	},
	{
		path: "/bonsai-detail",
		component: BonsaiDetail,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
