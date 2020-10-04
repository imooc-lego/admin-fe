/**
 * @description 用户相关接口
 * @author 双越
 */

import { ajaxGet, ajaxPost } from '../utils/ajax'
import host from '../config/host'

/**
 * 获取用户信息
 */
export async function getUserInfoService(): Promise<any> {
    const url = `${host}/api/users/getUserInfo`
    const data = await ajaxGet(url)
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
