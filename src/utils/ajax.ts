/**
 * @description 封装 ajax
 * @author 双越
 */

import _ from 'lodash'
import { message } from 'antd'
import axios, { AxiosRequestConfig, Method } from 'axios'
import { getItem, setItem } from './localStorage'
import { TOKEN_KEY_LOCAL_STORAGE } from '../config/constants'

// 防抖处理
const messageError = _.debounce(message.error, 500)

/**
 * 设置 jwt token 到 localStorage
 * @param token jwt token
 */
export function setAuthorizationToken(token: string): void {
    setItem(TOKEN_KEY_LOCAL_STORAGE, token)
}

// 统一的 ajax 方法
async function ajax(
    method: Method = 'get',
    url: string = '',
    dataOrParams: object = {},
    headers: object = {},
): Promise<any> {
    if (!url) throw new Error('ajax url 为空')

    // 拼接 axios 配置
    const conf: AxiosRequestConfig = {
        method,
        url,
        headers,
    }
    if (method === 'get') conf.params = dataOrParams
    else conf.data = dataOrParams

    // 登录校验的 token
    const token = getItem(TOKEN_KEY_LOCAL_STORAGE)
    if (token) {
        // header 拼接 token - jwt
        conf.headers.authorization = `Bearer ${token}`
    }

    // 发送请求
    const res = await axios(conf)
    if (res.status !== 200) {
        console.error(res)
        messageError('请求状态码错误') // 弹出错误
    }

    // 处理结果
    const { data: resData } = res
    if (resData.errno === 0) return resData.data || {}
    console.error('请求错误', resData.errno, resData.message)
    messageError(resData.message) // 弹出错误
    return null

    // throw new Error(resData.message) // 抛出错误，以便使用方能通过 catch 截获
}

/**
 * get 请求
 * @param url url
 * @param params query 对象
 */
export async function ajaxGet(
    url: string = '',
    params: object = {},
): Promise<any> {
    const data = await ajax('get', url, params)
    return data
}

/**
 * post 请求
 * @param url url
 * @param body body
 */
export async function ajaxPost(
    url: string = '',
    body: object = {},
): Promise<any> {
    const data = await ajax('post', url, body)
    return data
}

/**
 * patch 请求
 * @param url url
 * @param body body
 */
export async function ajaxPatch(
    url: string = '',
    body: object = {},
): Promise<any> {
    const data = await ajax('patch', url, body)
    return data
}

/**
 * put 请求
 * @param url url
 * @param body body
 */
export async function ajaxPut(
    url: string = '',
    body: object = {},
): Promise<any> {
    const data = await ajax('put', url, body)
    return data
}

/**
 * delete 请求
 * @param url url
 * @param body body
 */
export async function ajaxDelete(
    url: string = '',
    body: object = {},
): Promise<any> {
    const data = await ajax('delete', url, body)
    return data
}
