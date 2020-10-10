/**
 * @description mock works API
 * @author 双越
 */

export default {
    // 获取模板总数
    'GET /api/template/getCount': {
        errno: 0,
        data: {
            count: 2601,
            use: 10501,
        },
    },

    // 获取每月的数据
    'GET /api/template/getMonthlyCount': {
        errno: 0,
        data: [
            {
                month: '2020-08',
                data: {
                    count: 100,
                    use: 530,
                },
            },
            {
                month: '2020-09',
                data: {
                    count: 300,
                    use: 1680,
                },
            },
            {
                month: '2020-10',
                data: {
                    count: 350,
                    use: 1560,
                },
            },
            {
                month: '2020-11',
                data: {
                    count: 300,
                    use: 1200,
                },
            },
        ],
    },

    // 获取模板列表
    'GET /api/template/': {
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
                    isTemplate: true, // 是模板
                    status: '2', // 模板肯定发布了
                    createdAt: '2020-09-30',
                    latestPublishAt: '2020-10-03',
                    isHot: true,
                    isNew: true,
                    orderIndex: 10,
                    copiedCount: 120,
                    isPublic: true,
                },
                {
                    id: '2',
                    uuid: 'yyy',
                    title: '作品2',
                    coverImg: 'yyy',
                    author: '15500001112',
                    isTemplate: true,
                    status: '2',
                    createdAt: '2020-09-30',
                    latestPublishAt: '2020-10-03',
                    isHot: false,
                    isNew: false,
                    orderIndex: 8,
                    copiedCount: 100,
                    isPublic: true,
                },
                {
                    id: '3',
                    uuid: 'zzz',
                    title: '作品3',
                    coverImg: 'zzz',
                    author: '15500001112',
                    isTemplate: true,
                    status: '2',
                    createdAt: '2020-09-30',
                    latestPublishAt: '2020-10-03',
                    isHot: false,
                    isNew: false,
                    orderIndex: 7,
                    copiedCount: 110,
                    isPublic: false,
                },
            ],
        },
    },

    // 修改 public
    'PATCH /api/template/isPublic': {
        errno: 0,
    },

    // 修改 new
    'PATCH /api/template/isNew': {
        errno: 0,
    },

    // 修改 Hot
    'PATCH /api/template/isHot': {
        errno: 0,
    },

    // 修改 orderIndex
    'PATCH /api/template/orderIndex': {
        errno: 0,
    },
}
