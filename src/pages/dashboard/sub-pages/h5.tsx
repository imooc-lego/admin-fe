import React, { useEffect } from 'react'
import { Row, Col, Typography } from 'antd'
import echarts from 'echarts'
import styles from '../index.less'

const { Title } = Typography

export default () => {
    useEffect(() => {
        // 每月作品总 PV
        const h5PVChart = echarts.init(document.getElementById('chart-h5-pv'))
        h5PVChart.setOption({
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                data: ['PV', 'UV'],
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2020-08', '2020-09', '2020-10', '2020-11'],
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                    name: 'PV',
                    type: 'line',
                    data: [1220, 1382, 1191, 1234, 1290, 1330, 1310],
                },
                {
                    name: 'UV',
                    type: 'line',
                    data: [920, 932, 801, 934, 790, 900, 910],
                },
            ],
        })
    }, [])

    return (
        <>
            <Row>
                <Col span={24}>
                    <Title level={2}>发布作品总 PV 160000 ，总 UV 120000</Title>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Title level={3} className={styles.center}>
                        每月作品总 PV
                    </Title>
                    <div
                        id="chart-h5-pv"
                        className={styles.chartContainer}
                    ></div>
                </Col>
            </Row>
        </>
    )
}
