import React, { useEffect, useState } from 'react'
import { Row, Col, Typography } from 'antd'
import styles from '../index.less'
import Chart from '@/components/chart'
import { getCount, getCreatedCountMonthly } from '@/service/users'

const { Title } = Typography

export default () => {
    const [createdCount, setCreatedCount] = useState(0)
    const [activeCount, setActiveCount] = useState(0)
    const [createdChartData, setCreatedChartData] = useState({})
    const [pieChartData, setPieChartData] = useState({})

    useEffect(() => {
        // 总数
        getCount().then(data => {
            const { count, active } = data
            setCreatedCount(count)
            setActiveCount(active)

            // 饼图
            const pieData = parsePieOpt(count, active)
            setPieChartData(pieData)
        })

        // 报表
        getCreatedCountMonthly().then((data: Array<object>) => {
            const chartData = parseCreatedChartData(data)
            setCreatedChartData(chartData)
        })
    }, [])

    function parseCreatedChartData(data: Array<any>) {
        const xArr = data.map(item => item.month)
        const seriesArr = data.map(item => item.count)

        return {
            tooltip: {},
            xAxis: {
                data: xArr,
            },
            yAxis: {},
            series: [
                {
                    name: '新增用户',
                    type: 'line',
                    data: seriesArr,
                },
            ],
        }
    }

    // 处理饼图的数据
    function parsePieOpt(count = 0, active = 0): any {
        return {
            legend: {
                data: ['非活跃', '活跃'],
            },
            series: [
                {
                    type: 'pie',
                    data: [
                        { value: active, name: '活跃' },
                        { value: count - active, name: '非活跃' },
                    ],
                },
            ],
        }
    }

    return (
        <>
            <Row>
                <Col span={24}>
                    <Title level={2}>
                        用户总数 {createdCount}，活跃用户 {activeCount}
                    </Title>
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
                        活跃用户占比
                    </Title>
                    <Chart opt={pieChartData}></Chart>
                </Col>
            </Row>
        </>
    )
}
