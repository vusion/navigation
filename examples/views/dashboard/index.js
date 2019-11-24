import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import { install } from 'vusion-utils';
import * as Components from '@/components';
install(Vue, Components);

import 'themeCSS';
import 'baseCSS';

import routes from './routes';
const router = new VueRouter({
    routes,
});

import VusionNavigation from '../../../src';
Vue.use(VusionNavigation, { router });

new Vue({
    el: '#app',
    router,
});
