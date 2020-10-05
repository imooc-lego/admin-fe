import React, { useEffect, useState } from 'react'
import { Row, Col, Typography } from 'antd'
import styles from '../index.less'
import Chart from '@/components/chart'
import {
    getCount,
    getCreatedCountMonthly,
    getActiveCountMonthly,
} from '@/service/users'

const { Title } = Typography

export default () => {
    const [createdCount, setCreatedCount] = useState(0)
    const [createdChartData, setCreatedChartData] = useState({})
    const [activeChartData, setActiveChartData] = useState({})

    useEffect(() => {
        // 总数
        getCount().then(data => setCreatedCount(data.count))

        // 报表
        getCreatedCountMonthly().then((data: Array<object>) => {
            const chartData = parseCreatedChartData(data)
            setCreatedChartData(chartData)
        })
        getActiveCountMonthly().then((data: Array<object>) => {
            const chartData = parseActiveChartData(data)
            setActiveChartData(chartData)
        })
    }, [])

    function parseCreatedChartData(data: Array<any>) {
        const xArr = data.map(item => item.month)
        const seriesArr = data.map(item => item.data.count)

        return {
            tooltip: {},
            xAxis: {
                data: xArr,
            },
            yAxis: {},
            series: [
                {
                    name: '新增用户',
                    type: 'bar',
                    data: seriesArr,
                },
            ],
        }
    }

    function parseActiveChartData(data: Array<any>) {
        const xArr = data.map(item => item.month)
        const seriesArr = data.map(item => item.data.count)

        return {
            tooltip: {},
            xAxis: {
                data: xArr,
            },
            yAxis: {},
            series: [
                {
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
                    <Title level={2}>用户总数 {createdCount}</Title>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Title level={3} className={styles.center}>
                        每月新增用户
                    </Title>
                    <Chart opt={createdChartData}></Chart>
                </Col>
                <Col span={12}>
                    <Title level={3} className={styles.center}>
                        每月活跃用户
                    </Title>
                    <Chart opt={activeChartData}></Chart>
                </Col>
            </Row>
        </>
    )
}
