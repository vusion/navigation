<template>
<div>
    <u-circular-progress :percent="36"></u-circular-progress>
</div>
</template>

<script>
export default {
    data() {
        return {
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
};
</script>
