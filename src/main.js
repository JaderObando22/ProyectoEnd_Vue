
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Especialidad from "./pages/Especialidad.vue";
import Popular from "./pages/Popular.vue";
import Galerias from "./pages/Galerias.vue";
import Revicion from "./pages/Revicion.vue";
import Ordenar from "./pages/Ordenar.vue";

const routes = [
  { path: "/home", component: Home },
  { path: "/especialidad", component: Especialidad },
  { path: "/popular", component: Popular },
  { path: "/galerias", component: Galerias },
  { path: "/revicion", component: Revicion },
  { path: "/ordenar", component: Ordenar },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");

