import Dashboard from './index.vue';
import blogRoutes from './blog/routes';

export default [
    { path: '/', component: Dashboard, children: [
        { path: '', redirect: 'blog' },
        blogRoutes,
    ] },
];
