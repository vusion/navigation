<template>
<div>
    <u-list title="基本信息" column="3">
        <u-list-item label="状态">
            <u-link @click="goToList">新入列表</u-link>
        </u-list-item>
        <u-list-item label="状态">
            <u-link @click="backToList">返回列表</u-link>
        </u-list-item>
        <u-list-item label="名称">instance.Name</u-list-item>
        <u-list-item label="UUID">
            <u-input v-model="model.uuid"></u-input>
        </u-list-item>
        <u-list-item label="可用区">AzText[instance.AzName]</u-list-item>
        <u-list-item label="创建时间">instance.CreateAt</u-list-item>
        <u-list-item label="实例类型">NetworkText</u-list-item>
        <u-list-item label="描述" column="1">instance.Description</u-list-item>
    </u-list>
</div>
</template>

<script>
export default {
    data() {
        return {
            model: {
                uuid: '',
            },
            instance: {
                StatusInfo: {},
            },
            AzText: {
                a: '可用区 A',
                b: '可用区 B',
            },
            NetworkText: {
                public: '公网',
                private: '私有网',
            },
        };
    },
    methods: {
        goToList() {
            this.$router.push({ path: '/blog' });
        },
        backToList() {
            this.$router.back();
        },
    },
};
</script>
