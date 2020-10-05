import React, { useEffect } from 'react'
import echarts from 'echarts'
import { v4 as uuidV4 } from 'uuid'

export default ({ opt = {} }) => {
    const id = uuidV4()

    useEffect(() => {
        const workPieChart = echarts.init(document.getElementById(id))
        workPieChart.setOption(opt)
    }) // 此处不能加第二个参数 [] ，因为需要在 update 时也要触发

    return <div id={id} style={{ height: '350px' }}></div>
}
