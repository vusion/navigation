module.exports = {
    pages: {
        index: {
            entry: './examples/views/index/index.js',
            template: './examples/views/index/index.html',
            filename: 'index.html',
            chunks: ['chunk-vendors', 'chunk-common', 'index'],
        },
        dashboard: {
            entry: './examples/views/dashboard/index.js',
            template: './examples/views/dashboard/index.html',
            filename: 'dashboard.html',
            chunks: ['chunk-vendors', 'chunk-common', 'dashboard'],
        },
        login: {
            entry: './examples/views/login/index.js',
            template: './examples/views/login/index.html',
            filename: 'login.html',
            chunks: ['chunk-vendors', 'chunk-common', 'login'],
        },
    },
    runtimeCompiler: true,
};
