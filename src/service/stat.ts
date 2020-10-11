/**
 * @description 统计
 * @author 双越
 */

import { StatHost } from '@/config/host'
import { formatDate } from '@/utils/date'
import { ajaxGet } from '../utils/ajax'

/**
 * 获取 pv
 * @param startTime 开始时间
 * @param endTime 结束时间
 */
export async function getPV(startTime?: Date, endTime?: Date) {
    const url = `${StatHost}/api/event`
    const params = {
        category: 'h5',
        action: 'pv',
        startDate: formatDate(startTime),
        endDate: formatDate(endTime),
    }
    const data = await ajaxGet(url, params)
    return data
}
