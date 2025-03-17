import { createApp } from 'vue'; // 使用 Vue 3 的 createApp
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import IndexPage from "@/views/index/IndexPage.vue";
import App from "@/App.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/index', // 修改路径以避免冲突
        name: 'IndexPage',
        component: IndexPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App); // 创建 Vue 应用实例
app.use(router); // 使用路由
app.mount('#app'); // 挂载到 #app

export default router; // 导出路由