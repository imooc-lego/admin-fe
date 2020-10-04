/**
 * @description mock user API
 * @author 双越
 */

export default {
    'GET /api/users/getUserInfo': {
        errno: 0,
        data: {
            username: '啦啦啦',
        },
        // errno: 1,
        // message: '未登录',
    },

    'POST /api/users/login': {
        errno: 0,
        data: {
            token: 'xxxxxx',
        },
    },
}
