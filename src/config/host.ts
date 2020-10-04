/**
 * @description host 配置
 * @author 双越
 */

import { isDevNoMock, isPrd, isPrdDev } from '../utils/env'

let host = '' // 默认为本地运行 mock

if (isDevNoMock) host = 'http://localhost:3003' // 本地，不用 mock

if (isPrdDev) host = 'xxx'

if (isPrd) host = 'yyy'

export default host
