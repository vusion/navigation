import Blog from './index.vue';
import List from './list.vue';
import Detail from './detail/index.vue';
import Info from './detail/info.vue';
import Monitor from './detail/monitor.vue';

export default {
    path: 'blog',
    component: Blog,
    children: [
        { path: '', redirect: 'list' },
        { path: 'list', component: List },
        { path: 'detail', component: Detail, children: [
            { path: '', redirect: 'info' },
            { path: 'info', component: Info },
            { path: 'monitor', component: Monitor },
        ] },
    ],
};
