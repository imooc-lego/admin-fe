import React from 'react'
import { Button, Input, Table, Row, Col } from 'antd'
import styles from '../pages.less'

const { Search } = Input

export default () => {
    const dataSource = [
        {
            key: '1', // id
            id: '1',
            uuid: 'xxx',
            title: '作品1',
            coverImg: 'xxx',
            author: '15500001111',
            isTemplate: false,
            status: '1',
            createdAt: '2020-09-30',
            latestPublishAt: '2020-10-03',
        },
        {
            key: '2', // id
            id: '2',
            uuid: 'yyy',
            title: '作品2',
            coverImg: 'yyy',
            author: '15500001112',
            isTemplate: false,
            status: '2',
            createdAt: '2020-09-30',
            latestPublishAt: '2020-10-03',
        },
    ]

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'uuid',
            dataIndex: 'uuid',
            key: 'uuid',
        },
        {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: '缩略图',
            dataIndex: 'coverImg',
            key: 'coverImg',
            render: (src: string) => {
                if (!src) return ''
                return (
                    <a href={src} target="_blank">
                        缩略图
                    </a>
                )
            },
        },
        {
            title: '作者用户名',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: '是否模板',
            dataIndex: 'isTemplate',
            key: 'isTemplate',
            render: (t: boolean) => (t ? '是' : '否'),
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render: (s: string) => {
                const status = parseInt(s, 10)
                if (status === 0) return '删除'
                if (status === 1) return '未发布'
                if (status === 2) return '发布'
            },
        },
        {
            title: '预览', // 发布的可以查看线上 url ？？
            dataIndex: 'id',
            key: 'id',
            render: (id: string) => (
                <a href={id} target="_blank">
                    拼接 url {id}
                </a>
            ),
        },
        {
            title: '创建时间', // 需要 format ！！！
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: '最后发布时间', // 需要 format ！！！
            dataIndex: 'latestPublishAt',
            key: 'latestPublishAt',
        },
    ]

    // 选择行
    const rowSelection = {
        onChange: (selectedRowKeys: string, selectedRows: Array<any>) => {
            console.log(
                `selectedRowKeys: ${selectedRowKeys}`,
                'selectedRows: ',
                selectedRows,
            )
        },
    }

    // 分页
    const pageData = {
        defaultCurrent: 1,
        pageSize: 10,
        total: 60,
        showSizeChanger: false,
        onChange: (page: number, pageSize: number): void => {
            console.log('page', page, 'pageSize', pageSize)
        },
    }

    return (
        <div>
            <div className={styles.tableButtonContainer}>
                <Row>
                    <Col span={16}>
                        <Button type="danger">强制下线</Button>
                        <Button>恢复</Button>
                    </Col>
                    <Col span={8} style={{ textAlign: 'right' }}>
                        <Search
                            placeholder="输入 id/标题"
                            onSearch={value => console.log(value)}
                            enterButton
                            // style={{ width: 300 }}
                        />
                    </Col>
                </Row>
            </div>
            <Table
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                dataSource={dataSource}
                columns={columns}
                pagination={pageData}
            />
        </div>
    )
}
