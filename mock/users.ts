/**
 * @description mock users API
 */

export default {
    // 获取用户总数
    'GET /api/users/getCount': {
        errno: 0,
        data: {
            count: 3001,
            active: 2200,
        },
    },

    // 获取每月新增的用户
    'GET /api/users/getCreatedCountMonthly': {
        errno: 0,
        data: [
            {
                month: '2020-08',
                count: 120,
            },
            {
                month: '2020-09',
                count: 300,
            },
            {
                month: '2020-10',
                count: 330,
            },
            {
                month: '2020-11',
                count: 290,
            },
        ],
    },

    // // 获取每月活跃的用户
    // 'GET /api/users/getActiveCountMonthly': {
    //     errno: 0,
    //     data: [
    //         {
    //             month: '2020-08',
    //             data: {
    //                 count: 100,
    //             },
    //         },
    //         {
    //             month: '2020-09',
    //             data: {
    //                 count: 260,
    //             },
    //         },
    //         {
    //             month: '2020-10',
    //             data: {
    //                 count: 290,
    //             },
    //         },
    //         {
    //             month: '2020-11',
    //             data: {
    //                 count: 190,
    //             },
    //         },
    //     ],
    // },

    // 获取用户列表
    'GET /api/users/': {
        errno: 0,
        data: {
            count: 30,
            list: [
                {
                    id: '1',
                    username: 'zhangsan',
                    nickName: '张三',
                    phoneNumber: '15500001111',
                    gender: '0',
                    city: '北京',
                    createdAt: '2020-09-23',
                    latestLoginAt: '2020-10-02',
                    isFrozen: false,
                },
                {
                    id: '2',
                    username: 'lisi',
                    nickName: '李四',
                    phoneNumber: '15500002222',
                    gender: '1',
                    city: '杭州',
                    createdAt: '2020-09-23',
                    latestLoginAt: '2020-10-02',
                    isFrozen: false,
                },
                {
                    id: '3',
                    username: 'aaa',
                    nickName: 'AAA',
                    phoneNumber: '15500003333',
                    gender: '2',
                    city: '广州',
                    createdAt: '2020-09-23',
                    latestLoginAt: '2020-10-02',
                    isFrozen: true,
                },
            ],
        },
    },

    // 冻结用户
    'POST /api/users/froze': {
        errno: 0,
    },

    // 解除冻结
    'POST /api/users/unFroze': {
        errno: 0,
    },
}
