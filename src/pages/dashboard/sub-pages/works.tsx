import React, { useEffect } from 'react'
import { Row, Col, Typography } from 'antd'
import echarts from 'echarts'
import styles from '../index.less'

const { Title } = Typography

export default () => {
    useEffect(() => {
        // 饼图
        const workPieChart = echarts.init(
            document.getElementById('chart-work-pie'),
        )
        workPieChart.setOption({
            legend: {
                data: ['未发布', '发布'],
            },
            series: [
                {
                    type: 'pie',
                    data: [
                        { value: 3400, name: '未发布' },
                        { value: 8600, name: '发布' },
                    ],
                },
            ],
        })

        // 每月创建和发布
        const workCreatePublishChart = echarts.init(
            document.getElementById('chart-work-create-publish'),
        )
        workCreatePublishChart.setOption({
            legend: {},
            tooltip: {},
            dataset: {
                source: [
                    ['月', '创建', '发布'],
                    ['2020-08', 1200, 800],
                    ['2020-09', 1300, 830],
                    ['2020-10', 1440, 900],
                    ['2020-11', 2100, 1600],
                ],
            },
            xAxis: { type: 'category' },
            yAxis: {},
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.
            series: [{ type: 'bar' }, { type: 'bar' }],
        })
    }, [])

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
                    <div
                        id="chart-work-pie"
                        className={styles.chartContainer}
                    ></div>
                </Col>
                <Col span={16}>
                    <Title level={3} className={styles.center}>
                        每月作品创建和发布
                    </Title>
                    <div
                        id="chart-work-create-publish"
                        className={styles.chartContainer}
                    ></div>
                </Col>
            </Row>
        </>
    )
}
