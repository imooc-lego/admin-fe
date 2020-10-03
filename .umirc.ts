import { defineConfig } from 'umi'

export default defineConfig({
    publicPath: '/public/',
    favicon: '/logo.png',
    hash: true,
    history: {
        type: 'hash',
    },
    layout: {
        // 需要提前安装 @ant-design/pro-layout
        title: 'Lego 后台管理',
        logo: '/logo.png',
    },
    routes: [
        {
            path: '/',
            name: '首页',
            icon: 'dashboard',
            component: '@/pages/dashboard/index',
        },
        {
            path: '/users',
            name: '用户管理',
            icon: 'UserOutlined',
            component: '@/pages/users/index',
        },
        {
            path: '/works',
            name: '作品管理',
            icon: 'FileOutlined',
            component: '@/pages/works/index',
        },
        {
            path: '/templates',
            name: '模板管理',
            icon: 'FileTextOutlined',
            component: '@/pages/templates/index',
        },
        { component: '@/pages/404/index' }, // 最后注册 404
    ],
})
