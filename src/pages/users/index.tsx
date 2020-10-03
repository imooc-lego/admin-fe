import React from 'react'
import { Button, Input, Table, Row, Col } from 'antd'
import styles from '../pages.less'

const { Search } = Input

export default () => {
    const dataSource = [
        {
            key: '3', // id
            username: 'zhangsan',
            nickName: '张三',
            phoneNumber: '15500001111',
            gender: '0',
            city: '北京',
            createdAt: '2020-09-23',
            latestLoginAt: '2020-10-02',
            isFrozen: false,
        },
        {
            key: '4', // id
            username: 'lisi',
            nickName: '李四',
            phoneNumber: '15500002222',
            gender: '1',
            city: '杭州',
            createdAt: '2020-09-23',
            latestLoginAt: '2020-10-02',
            isFrozen: false,
        },
        {
            key: '5', // id
            username: 'aaa',
            nickName: 'AAA',
            phoneNumber: '15500003333',
            gender: '2',
            city: '广州',
            createdAt: '2020-09-23',
            latestLoginAt: '2020-10-02',
            isFrozen: true,
        },
    ]

    const columns = [
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: '昵称',
            dataIndex: 'nickName',
            key: 'nickName',
        },
        {
            title: '手机号',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: '性别',
            dataIndex: 'gender',
            key: 'gender',
            render: (text: string) => {
                if (text === '1') return '男'
                if (text === '2') return '女'
                return '保密'
            },
        },
        {
            title: '城市',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: '注册时间', // 需要 format ！！！
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: '最后登录时间', // 需要 format ！！！
            dataIndex: 'latestLoginAt',
            key: 'latestLoginAt',
        },
        {
            title: '冻结',
            dataIndex: 'isFrozen',
            key: 'isFrozen',
            render: (f: boolean) => (f ? '是' : '否'),
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
                        <Button type="danger">冻结用户</Button>
                        <Button>解除冻结</Button>
                    </Col>
                    <Col span={8} style={{ textAlign: 'right' }}>
                        <Search
                            placeholder="输入 用户名/手机号/昵称"
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
