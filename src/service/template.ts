/**
 * @description 模板相关接口
 * @author 双越
 */

import { ajaxGet, ajaxPatch } from '../utils/ajax'
import { APIHost } from '../config/host'
import { DEFAULT_PAGE_SIZE } from '@/config/constants'

/**
 * 获取总数
 */
export async function getCount() {
    const url = `${APIHost}/api/template/getCount`
    const data = await ajaxGet(url)
    return data
}

/**
 * 获取作品创建和发布的统计
 */
export async function getMonthlyCount() {
    const url = `${APIHost}/api/template/getMonthlyCount`
    const data = await ajaxGet(url)
    return data
}

/**
 * 查询用户列表
 * @param query keyword 搜索查询
 * @param pageIndex pageIndex 从 0 开始
 * @param pageSize pageSize
 */
export async function getTemplateList(
    keyword: string = '',
    pageIndex: number = 0,
    pageSize: number = DEFAULT_PAGE_SIZE,
) {
    const url = `${APIHost}/api/template`
    const data = await ajaxGet(url, { keyword, pageIndex, pageSize })
    return data
}

/**
 * 修改 isPublic
 * @param ids 模板 ids 数组
 * @param isPublic isPublic
 */
export async function setPublic(ids: string[], isPublic: boolean) {
    const url = `${APIHost}/api/template/isPublic`
    const data = await ajaxPatch(url, { ids: ids.join(','), isPublic })
    return data
}

/**
 * 修改 new
 * @param ids 模板 ids 数组
 * @param isNew isNew
 */
export async function setNew(ids: string[], isNew: boolean) {
    const url = `${APIHost}/api/template/isNew`
    const data = await ajaxPatch(url, { ids: ids.join(','), isNew })
    return data
}

/**
 * 修改 hot
 * @param ids 模板 ids 数组
 * @param isHot isHot
 */
export async function setHot(ids: string[], isHot: boolean) {
    const url = `${APIHost}/api/template/isHot`
    const data = await ajaxPatch(url, { ids: ids.join(','), isHot })
    return data
}

/**
 * 修改 orderIndex
 * @param ids 模板 ids 数组
 * @param orderIndex orderIndex
 */
export async function setOrderIndex(ids: string[], orderIndex: number) {
    const url = `${APIHost}/api/template/orderIndex`
    const data = await ajaxPatch(url, { ids: ids.join(','), orderIndex })
    return data
}
