import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import { install } from 'vusion-utils';
import * as Components from '@/components';
install(Vue, Components);

import 'themeCSS';
import 'baseCSS';

import routes from './routes';

new Vue({
    el: '#app',
    router: new VueRouter({
        routes,
    }),
});
