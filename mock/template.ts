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
}
