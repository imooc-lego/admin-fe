import React, { useEffect, useState } from 'react'
import { Row, Col, Typography } from 'antd'
import styles from '../index.less'
import Chart from '@/components/chart'
import { getPV } from '@/service/stat'
import { formatDay } from '@/utils/date'

const { Title } = Typography

export default () => {
    const [pv, setPV] = useState(0)
    const [pvChartData, setPvChartData] = useState({})

    useEffect(() => {
        // 一年的时间范围
        const d = new Date()
        const startTime = new Date(d.getTime() - 365 * 24 * 60 * 60 * 1000) // 一年之前
        const endTime = d
        // 获取 pv
        getPV(startTime, endTime).then(data => {
            // 计算总数
            let pvSum = 0
            data.forEach((item: any) => (pvSum += item.eventData.pv))
            setPV(pvSum)

            // 报表数据
            const sourceData = data.map((item: any) => {
                return {
                    day: formatDay(item.eventDate),
                    pv: item.eventData.pv,
                }
            })
            const chartData = parsePvChartData(sourceData)
            setPvChartData(chartData)
        })
    }, [])

    function parsePvChartData(data: Array<any>): any {
        const xArr = data.map(item => item.day)
        const seriesArr = data.map(item => item.pv)

        return {
            tooltip: {},
            xAxis: {
                data: xArr,
            },
            yAxis: {},
            series: [
                {
                    name: 'PV',
                    type: 'line',
                    data: seriesArr,
                },
            ],
        }
    }

    return (
        <>
            <Row>
                <Col span={24}>
                    <Title level={2}>发布作品的总 PV {pv}</Title>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Title level={3} className={styles.center}>
                        每日 PV 走势
                    </Title>
                    <Chart opt={pvChartData} />
                </Col>
            </Row>
        </>
    )
}
