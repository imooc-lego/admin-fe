/**
 * @description 用户相关接口
 * @author 双越
 */

import { ajaxGet } from '../utils/ajax'
import host from '../config/host'

/**
 * 获取用户总数
 */
export async function getCount() {
    const url = `${host}/api/users/getCount`
    const data = ajaxGet(url)
    return data
}

/**
 * 获取每月新用户
 */
export async function getCreatedCountMonthly() {
    const url = `${host}/api/users/getCreatedCountMonthly`
    const data = ajaxGet(url)
    return data
}

/**
 * 获取每月活跃用户
 */
export async function getActiveCountMonthly() {
    const url = `${host}/api/users/getActiveCountMonthly`
    const data = ajaxGet(url)
    return data
}
