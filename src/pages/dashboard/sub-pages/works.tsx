import React, { useEffect, useState } from 'react'
import { Row, Col, Typography } from 'antd'
import styles from '../index.less'
import Chart from '@/components/chart'
import { getWorksCreatedStat } from '@/service/works'

const { Title } = Typography

export default () => {
    // 初始化 state
    const [pieOpt, setPieOpt] = useState({})
    const [monthlyOpt, setMonthlyOpt] = useState({})

    // 获取数据并修改 state
    useEffect(() => {
        getWorksCreatedStat().then((data: Array<any>) => {
            // 饼图
            const pieData = parsePieOpt(data)
            setPieOpt(pieData)

            // 每月创建和发布
            const barData = parseMonthlyOpt(data)
            setMonthlyOpt(barData)
        })
    }, [])

    // 处理饼图的数据
    function parsePieOpt(data: Array<any>): any {
        let createdCount = 0
        let publishedCount = 0
        data.forEach((item: any) => {
            const itemData = item.data || {}
            createdCount += itemData.created || 0
            publishedCount += itemData.published || 0
        })
        return {
            legend: {
                data: ['创建', '发布'],
            },
            series: [
                {
                    type: 'pie',
                    data: [
                        { value: createdCount, name: '创建' },
                        { value: publishedCount, name: '发布' },
                    ],
                },
            ],
        }
    }

    // 处理每月创建和发布的数据
    function parseMonthlyOpt(data: Array<any>): any {
        const arr = data.map(item => {
            const { month, data: monthData } = item
            return [month, monthData.created, monthData.published]
        })

        return {
            legend: {},
            tooltip: {},
            dataset: {
                source: [['月', '创建', '发布'], ...arr],
            },
            xAxis: { type: 'category' },
            yAxis: {},
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.
            series: [{ type: 'bar' }, { type: 'bar' }],
        }
    }

    return (
        <>
            <Row>
                <Col span={24}>
                    <Title level={2}>作品总数 12000 ，发布 8600</Title>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <Title level={3} className={styles.center}>
                        发布占比
                    </Title>
                    <Chart opt={pieOpt}></Chart>
                </Col>
                <Col span={16}>
                    <Title level={3} className={styles.center}>
                        每月作品创建和发布
                    </Title>
                    <Chart opt={monthlyOpt}></Chart>
                </Col>
            </Row>
        </>
    )
}
