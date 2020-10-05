/**
 * @description mock admin API
 * @author 双越
 */

export default {
    'GET /api/admin/getUserInfo': {
        errno: 0,
        data: {
            username: '啦啦啦',
        },
        // errno: 1,
        // message: '未登录',
    },

    'POST /api/admin/login': {
        errno: 0,
        data: {
            token: 'xxxxxx',
        },
    },
}
