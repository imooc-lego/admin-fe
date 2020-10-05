import React, { useEffect, useState } from 'react'
import { Row, Col, Typography } from 'antd'
import styles from '../index.less'
import Chart from '@/components/chart'

const { Title } = Typography

export default () => {
    const [pv, setPV] = useState(0)
    const [uv, setUV] = useState(0)
    const [pvChartData, setPvChartData] = useState({})

    useEffect(() => {
        // 模拟一个请求，异步
        setTimeout(() => {
            // 总数
            setPV(160000)
            setUV(120000)

            // 报表数据
            const chartData = parsePvChartData()
            setPvChartData(chartData)
        })
    }, [])

    function parsePvChartData() {
        return {
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
        }
    }

    return (
        <>
            <Row>
                <Col span={24}>
                    <Title level={2}>
                        发布作品总 PV {pv} ，总 UV {uv}
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Title level={3} className={styles.center}>
                        每月作品总 PV
                    </Title>
                    <Chart opt={pvChartData} />
                </Col>
            </Row>
        </>
    )
}
