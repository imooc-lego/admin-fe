/**
 * @description 模板相关接口
 * @author 双越
 */

import { ajaxGet } from '../utils/ajax'
import host from '../config/host'

/**
 * 获取总数
 */
export async function getCount() {
    const url = `${host}/api/template/getCount`
    const data = ajaxGet(url)
    return data
}

/**
 * 获取作品创建和发布的统计
 */
export async function getMonthlyCount() {
    const url = `${host}/api/template/getMonthlyCount`
    const data = ajaxGet(url)
    return data
}
