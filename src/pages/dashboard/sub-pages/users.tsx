import React, { useEffect } from 'react'
import { Row, Col, Typography } from 'antd'
import echarts from 'echarts'
import styles from '../index.less'

const { Title } = Typography

export default () => {
    useEffect(() => {
        // 每月新增用户
        const newUserChart = echarts.init(
            document.getElementById('chart-new-user'),
        )
        newUserChart.setOption({
            tooltip: {},
            xAxis: {
                data: ['2020-08', '2020-09', '2020-10', '2020-11'],
            },
            yAxis: {},
            series: [
                {
                    name: '新增用户',
                    type: 'bar',
                    data: [100, 300, 350, 300],
                },
            ],
        })

        // 每月活跃用户
        const activeUserChart = echarts.init(
            document.getElementById('chart-active-user'),
        )
        activeUserChart.setOption({
            tooltip: {},
            xAxis: {
                data: ['2020-08', '2020-09', '2020-10', '2020-11'],
            },
            yAxis: {},
            series: [
                {
                    type: 'line',
                    data: [100, 300, 350, 300],
                },
            ],
        })
    }, [])

    return (
        <>
            <Row>
                <Col span={24}>
                    <Title level={2}>用户总数 3000</Title>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Title level={3} className={styles.center}>
                        每月新增用户
                    </Title>
                    <div
                        id="chart-new-user"
                        className={styles.chartContainer}
                    ></div>
                </Col>
                <Col span={12}>
                    <Title level={3} className={styles.center}>
                        每月活跃用户
                    </Title>
                    <div
                        id="chart-active-user"
                        className={styles.chartContainer}
                    ></div>
                </Col>
            </Row>
        </>
    )
}
