/**
 * @description 管理员相关接口
 * @author 双越
 */

import { ajaxGet, ajaxPost } from '../utils/ajax'
import { APIHost } from '../config/host'

// 缓存用户信息，防止重复获取
let USER_INFO: any

/**
 * 获取用户信息
 */
export async function getAdminInfo(): Promise<any> {
    if (USER_INFO != null) return USER_INFO // 使用缓存

    const url = `${APIHost}/api/admin/getUserInfo`

    const data = await ajaxGet(url)
    USER_INFO = data // 缓存
    return data
}

/**
 * 登录
 * @param username username
 * @param password password
 */
export async function login(username: string, password: string): Promise<any> {
    const url = `${APIHost}/api/admin/login`
    const data = await ajaxPost(url, { username, password })
    return data
}
