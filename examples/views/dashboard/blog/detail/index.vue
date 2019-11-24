<template>
<div>
    <u-tabs router>
        <u-tab title="详细信息" :to="{ path: '/blog/detail/info', query: $route.query }"></u-tab>
        <u-tab title="性能监控" :to="{ path: '/blog/detail/monitor', query: $route.query }"></u-tab>
        <!-- <u-tab title="操作日志" :to="{ path: '/blog/detail/logs', query: $route.query }"></u-tab> -->
    </u-tabs>
    <div>
        <!-- <router-view></router-view> -->
        <!-- <navigation><router-view></router-view></navigation> -->
    </div>
</div>
</template>

<script>
export default {

};
</script>
