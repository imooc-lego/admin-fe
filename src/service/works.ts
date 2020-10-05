/**
 * @description 作品相关接口
 * @author 双越
 */

import { ajaxGet } from '../utils/ajax'
import host from '../config/host'

/**
 * 获取作品创建和发布的统计
 */
export async function getWorksCreatedStat() {
    const url = `${host}/api/works/getCreatedStat`
    const data = ajaxGet(url)
    return data
}
