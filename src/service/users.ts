/**
 * @description 用户相关接口
 * @author 双越
 */

import { ajaxGet, ajaxPost } from '../utils/ajax'
import { APIHost } from '../config/host'
import { DEFAULT_PAGE_SIZE } from '@/config/constants'

/**
 * 获取用户总数
 */
export async function getCount() {
    const url = `${APIHost}/api/users/getCount`
    const data = await ajaxGet(url)
    return data
}

/**
 * 获取每月新用户
 */
export async function getCreatedCountMonthly() {
    const url = `${APIHost}/api/users/getCreatedCountMonthly`
    const data = await ajaxGet(url)
    return data
}

// /**
//  * 获取每月活跃用户
//  */
// export async function getActiveCountMonthly() {
//     const url = `${APIHost}/api/users/getActiveCountMonthly`
//     const data = await ajaxGet(url)
//     return data
// }

/**
 * 查询用户列表
 * @param query keyword 搜索查询
 * @param pageIndex pageIndex 从 0 开始
 * @param pageSize pageSize
 */
export async function getUsersList(
    keyword: string = '',
    pageIndex: number = 0,
    pageSize: number = DEFAULT_PAGE_SIZE,
) {
    const url = `${APIHost}/api/users`
    const data = await ajaxGet(url, { keyword, pageIndex, pageSize })
    return data
}

/**
 * 冻结用户
 * @param ids 用户 id 数组
 */
export async function frozeUsers(ids: string[]) {
    const url = `${APIHost}/api/users/froze`
    const data = await ajaxPost(url, { ids: ids.join(',') })
    return data
}

/**
 * 解除冻结
 * @param ids 用户 id 数组
 */
export async function unFrozeUsers(ids: string[]) {
    const url = `${APIHost}/api/users/unFroze`
    const data = await ajaxPost(url, { ids: ids.join(',') })
    return data
}
