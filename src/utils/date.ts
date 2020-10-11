/**
 * @description 日期相关工具函数
 * @author 双越
 */

import { format } from 'date-fns'

/**
 * 格式化时间 yyyy-MM-dd HH:mm:ss
 * @param d 时间
 */
export function formatTime(d: any): string {
    const date = new Date(d)
    return format(date, 'yyyy-MM-dd HH:mm:ss')
}

/**
 * 格式化时间 yyyy-MM-dd
 * @param d 时间
 */
export function formatDate(d: any): string {
    const date = new Date(d)
    return format(date, 'yyyy-MM-dd')
}

/**
 * 格式化时间 MM-dd
 * @param d 时间
 */
export function formatDay(d: any): string {
    const date = new Date(d)
    return format(date, 'MM-dd')
}
