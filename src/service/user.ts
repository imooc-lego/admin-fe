/**
 * @description 用户相关接口
 * @author 双越
 */

import { ajaxGet, ajaxPost } from '../utils/ajax'
import host from '../config/host'

// 缓存用户信息，防止重复获取
let USER_INFO: any

/**
 * 获取用户信息
 */
export async function getUserInfoService(): Promise<any> {
    if (USER_INFO != null) return USER_INFO // 使用缓存

    const url = `${host}/api/users/getUserInfo`
    const data = await ajaxGet(url)
    USER_INFO = data // 缓存
    return data
}

/**
 * 登录
 * @param username username
 * @param password password
 */
export async function loginService(
    username: string,
    password: string,
): Promise<any> {
    const url = `${host}/api/users/login`
    const data = await ajaxPost(url, { username, password })
    return data
}
