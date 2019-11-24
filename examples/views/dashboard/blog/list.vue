<template>
<u-form gap="large" layout="inline">
    <u-form-item label="计费方式" required>
        <u-select v-model="model.type">
            <u-select-item value="0">包年包月</u-select-item>
            <u-select-item value="1">按量付费</u-select-item>
        </u-select>
    </u-form-item>
    <u-form-item label="名称" required>
        <u-input v-model="model.name" size="huge" maxlength="32" placeholder="1-32位小写字母、数字、或中划线组成，以字母开头，字母或数字结尾"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" @click="toDetail">详情</u-button>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            model: {
                type: '0',
                name: '',
            },
        };
    },
    methods: {
        toDetail() {
            this.$router.push({ path: 'detail', query: this.model });
        },
    },
};
</script>

<style scoped>
.test {}
</style>
