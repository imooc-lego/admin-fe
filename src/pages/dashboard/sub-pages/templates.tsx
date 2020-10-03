import React, { useEffect } from 'react'
import { Row, Col, Typography } from 'antd'
import echarts from 'echarts'
import styles from '../index.less'

const { Title } = Typography

export default () => {
    useEffect(() => {
        // 每月模板创建
        const templatesChart = echarts.init(
            document.getElementById('chart-templates'),
        )
        templatesChart.setOption({
            tooltip: {},
            xAxis: {
                data: ['2020-08', '2020-09', '2020-10', '2020-11'],
            },
            yAxis: {},
            series: [
                {
                    type: 'bar',
                    data: [100, 300, 350, 300],
                },
            ],
        })
    }, [])

    return (
        <>
            <Row>
                <Col span={24}>
                    <Title level={2}>模板总数 2600 ，使用次数 10500</Title>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Title level={3} className={styles.center}>
                        每月模板创建
                    </Title>
                    <div
                        id="chart-templates"
                        className={styles.chartContainer}
                    ></div>
                </Col>
            </Row>
        </>
    )
}
