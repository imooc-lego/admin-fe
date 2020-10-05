/**
 * @description host 配置
 * @author 双越
 */

import { isDevNoMock, isPrd, isPrdDev } from '../utils/env'

// API host
let APIHost = '' // 默认为本地运行 mock
if (isDevNoMock) APIHost = 'http://localhost:3003' // 本地，不用 mock
if (isPrdDev) APIHost = 'xxx' // TODO 测试机，待补充……
if (isPrd) APIHost = 'yyy' // TODO 线上环境

// h5 host
let H5Host = 'http://182.92.168.192:8082'
if (isPrd) H5Host = 'https://www.imooc-lego.com'

export { APIHost, H5Host }
