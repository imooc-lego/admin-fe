/**
 * @description mock works API
 * @author 双越
 */

export default {
    // 获取作品总数
    'GET /api/works/getCount': {
        errno: 0,
        data: {
            created: 12001,
            published: 8001,
        },
    },

    // 每月作品创建和发布的统计
    'GET /api/works/getMonthlyCount': {
        errno: 0,
        data: [
            {
                month: '2020-08',
                data: {
                    created: 1200,
                    published: 800,
                },
            },
            {
                month: '2020-09',
                data: {
                    created: 1300,
                    published: 830,
                },
            },
            {
                month: '2020-10',
                data: {
                    created: 1440,
                    published: 900,
                },
            },
            {
                month: '2020-11',
                data: {
                    created: 2100,
                    published: 1600,
                },
            },
        ],
    },

    // 获取作品列表
    'GET /api/works/': {
        errno: 0,
        data: {
            count: 30,
            list: [
                {
                    id: '1',
                    uuid: 'xxx',
                    title: '作品1',
                    coverImg: 'xxx',
                    author: '15500001111',
                    isTemplate: false,
                    status: '1',
                    createdAt: '2020-09-30',
                    latestPublishAt: '2020-10-03',
                },
                {
                    id: '2',
                    uuid: 'yyy',
                    title: '作品2',
                    coverImg: 'yyy',
                    author: '15500001112',
                    isTemplate: false,
                    status: '2',
                    createdAt: '2020-09-30',
                    latestPublishAt: '2020-10-03',
                },
                {
                    id: '3',
                    uuid: 'zzz',
                    title: '作品3',
                    coverImg: 'zzz',
                    author: '15500001112',
                    isTemplate: true,
                    status: '3',
                    createdAt: '2020-09-30',
                    latestPublishAt: '2020-10-03',
                },
            ],
        },
    },

    // 强制下线
    'POST /api/works/forceOffline': {
        errno: 0,
    },

    // 恢复（强制下线）
    'POST /api/works/undoForceOffline': {
        errno: 0,
    },
}
