/**
 * @description 作品相关接口
 * @author 双越
 */

import { ajaxGet, ajaxPost } from '../utils/ajax'
import { APIHost } from '../config/host'
import { DEFAULT_PAGE_SIZE } from '@/config/constants'

/**
 * 获取总数
 */
export async function getCount() {
    const url = `${APIHost}/api/works/getCount`
    const data = await ajaxGet(url)
    return data
}

/**
 * 获取作品创建和发布的统计
 */
export async function getMonthlyCount() {
    const url = `${APIHost}/api/works/getMonthlyCount`
    const data = await ajaxGet(url)
    return data
}

/**
 * 查询用户列表
 * @param query keyword 搜索查询
 * @param pageIndex pageIndex 从 0 开始
 * @param pageSize pageSize
 */
export async function getWorksList(
    keyword: string = '',
    pageIndex: number = 0,
    pageSize: number = DEFAULT_PAGE_SIZE,
) {
    const url = `${APIHost}/api/works`
    const data = await ajaxGet(url, { keyword, pageIndex, pageSize })
    return data
}

/**
 * 强制下线
 * @param ids 作品 ids 数组
 */
export async function forceOffline(ids: string[]) {
    const url = `${APIHost}/api/works/forceOffline`
    const data = await ajaxPost(url, { ids: ids.join(',') })
    return data
}

/**
 * 恢复（强制下线）
 * @param ids 作品 ids 数组
 */
export async function undoForceOffline(ids: string[]) {
    const url = `${APIHost}/api/works/undoForceOffline`
    const data = await ajaxPost(url, { ids: ids.join(',') })
    return data
}
