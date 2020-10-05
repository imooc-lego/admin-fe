import React, { useEffect, useState } from 'react'
import { Row, Col, Typography } from 'antd'
import styles from '../index.less'
import Chart from '@/components/chart'
import { getMonthlyCount, getCount } from '@/service/template'

const { Title } = Typography

export default () => {
    // 初始化 state
    const [createdCount, setCreatedCount] = useState(0)
    const [useCount, setUseCount] = useState(0)
    const [monthlyOpt, setMonthlyOpt] = useState({})

    useEffect(() => {
        // 获取总数
        getCount().then(data => {
            const { count, use } = data
            setCreatedCount(count)
            setUseCount(use)
        })

        // 获取报表数据
        getMonthlyCount().then(data => {
            const barData = parseMonthlyOpt(data)
            setMonthlyOpt(barData)
        })
    }, [])

    // 处理报表数据
    function parseMonthlyOpt(data: Array<any>): any {
        const arr = data.map(item => {
            const { month, data: monthData } = item
            return [month, monthData.count, monthData.use]
        })

        return {
            legend: {},
            tooltip: {},
            dataset: {
                source: [['月', '发布', '被使用'], ...arr],
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
                    <Title level={2}>
                        模板总数 {createdCount} ，使用次数 {useCount}
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Title level={3} className={styles.center}>
                        每月模板创建
                    </Title>
                    <Chart opt={monthlyOpt}></Chart>
                </Col>
            </Row>
        </>
    )
}
