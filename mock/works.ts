/**
 * @description mock user API
 * @author 双越
 */

export default {
    // 每月作品创建和发布的统计
    'GET /api/works/getCreatedStat': {
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
}
