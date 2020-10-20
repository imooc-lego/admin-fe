/**
 * @description host 配置
 * @author 双越
 */

import { isDevNoMock, isPrd, isPrdDev } from '../utils/env'

// API host
let APIHost = '' // 默认为本地运行 mock
if (isDevNoMock) APIHost = 'http://localhost:3003' // 本地，不用 mock
if (isPrdDev) APIHost = 'http://182.92.168.192:8084' // 测试机
if (isPrd) APIHost = '' // 线上环境，用当前域名即可

// h5 host
let H5Host = 'http://182.92.168.192:8082'
if (isPrd) H5Host = 'https://h5.imooc-lego.com'

// 统计接口的 host
let StatHost = 'http://182.92.168.192:8080'
if (isPrd) StatHost = 'https://statistic-res.imooc-lego.com' // 线上环境

export { APIHost, H5Host, StatHost }
