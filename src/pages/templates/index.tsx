import React from 'react'
import { Button, Input, Table, Row, Col, Tag } from 'antd'
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
            isTemplate: true, // 是模板
            status: '2', // 模板肯定发布了
            createdAt: '2020-09-30',
            latestPublishAt: '2020-10-03',
            isHot: true,
            isNew: true,
            orderIndex: 10,
            copiedCount: 120,
            isPublic: true, // 公开展示，大家都在 B 端首页可见，而不仅仅是自己能看到
        },
        {
            key: '2', // id
            id: '2',
            uuid: 'yyy',
            title: '作品2',
            coverImg: 'yyy',
            author: '15500001112',
            isTemplate: true,
            status: '2',
            createdAt: '2020-09-30',
            latestPublishAt: '2020-10-03',
            isHot: false,
            isNew: false,
            orderIndex: 8,
            copiedCount: 100,
            isPublic: true, // 公开展示，大家都在 B 端首页可见，而不仅仅是自己能看到
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
            title: '网址',
            dataIndex: 'id',
            key: 'id',
            render: (id: string) => (
                <a href={id} target="_blank">
                    拼接 url {id}
                </a>
            ),
        },
        {
            title: '使用次数',
            dataIndex: 'copiedCount',
            key: 'copiedCount',
        },
        {
            title: '公开展示',
            dataIndex: 'isPublic',
            key: 'isPublic',
            render: (isPublic: boolean) => (isPublic ? '是' : '否'),
        },
        {
            title: '标签', // HOT NEW
            dataIndex: 'id',
            key: 'id',
            render: (id, record) => (
                <div>
                    {record.isHot && <Tag color="red">HOT</Tag>}
                    {record.isNew && <Tag color="green">NEW</Tag>}
                </div>
            ),
        },
        {
            title: '排序参数',
            dataIndex: 'orderIndex',
            key: 'orderIndex',
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
            <div>
                <div className={styles.tableButtonContainer}>
                    <Row>
                        <Col span={16}>
                            <Button>设为公开展示</Button>
                            <Button danger>禁止公开展示</Button>
                            <Button>设为 HOT</Button>
                            <Button danger>取消 HOT</Button>
                            <Button>设为 NEW</Button>
                            <Button danger>取消 NEW</Button>
                            <Button>修改排序参数</Button>
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
        </div>
    )
}
