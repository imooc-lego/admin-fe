/**
 * @description localStorage 设置
 * @author 双越
 */

/**
 * 封装 localStorage.setItem
 * @param key key
 * @param val val
 */
export function setItem(key: string, val: string): void {
    // 某些浏览器隐藏模式下，setItem 会报错
    try {
        localStorage.setItem(key, val)
    } catch (ex) {
        const info = 'localStorage.setItem 错误'
        console.error(info, ex)
        throw new Error(info)
    }
}

/**
 * 封装 localStorage.getItem
 * @param key key
 */
export function getItem(key: string): string {
    return localStorage.getItem(key) || ''
}
