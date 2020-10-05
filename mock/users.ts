/**
 * @description mock users API
 */

export default {
    // 获取用户总数
    'GET /api/users/getCount': {
        errno: 0,
        data: {
            count: 3001,
        },
    },

    // 获取每月新增的用户
    'GET /api/users/getCreatedCountMonthly': {
        errno: 0,
        data: [
            {
                month: '2020-08',
                data: {
                    count: 120,
                },
            },
            {
                month: '2020-09',
                data: {
                    count: 300,
                },
            },
            {
                month: '2020-10',
                data: {
                    count: 330,
                },
            },
            {
                month: '2020-11',
                data: {
                    count: 290,
                },
            },
        ],
    },

    // 获取每月活跃的用户
    'GET /api/users/getActiveCountMonthly': {
        errno: 0,
        data: [
            {
                month: '2020-08',
                data: {
                    count: 100,
                },
            },
            {
                month: '2020-09',
                data: {
                    count: 260,
                },
            },
            {
                month: '2020-10',
                data: {
                    count: 290,
                },
            },
            {
                month: '2020-11',
                data: {
                    count: 190,
                },
            },
        ],
    },
}
