import { createWebHistory, createRouter } from "vue-router";
import Chats from "./components/Chats.vue";
import MyProfile from "./components/MyProfile.vue";

const routes = [
  { name: "profile", path: "/", component: MyProfile },
  { name: "chats", path: "/chats", component: Chats },
];
const router = createRouter({ history: createWebHistory(), routes });

export default router;
