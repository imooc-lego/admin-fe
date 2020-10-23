import React, { useEffect, useState } from 'react'
import { Button, Input, Row, Col, message } from 'antd'
import styles from '../pages.less'
import {
    getUsersList,
    frozeUsers as frozeUsersService,
    unFrozeUsers as unFrozeUsersService,
} from '@/service/users'
import MyTable from '@/components/table'
import columns from './tableColumns'

const { Search } = Input

export default () => {
    const [searchInputValue, setSearchInputValue] = useState('')
    const [keyword, setKeyword] = useState('')
    const [pageIndex, setPageIndex] = useState(0)
    const [dataSource, setDataSource] = useState([])
    const [total, setTotal] = useState(0)
    const [selectedRowIds, setSelectedRowIds] = useState('')

    useEffect(() => {
        getUsersList(keyword, pageIndex).then((data: any) => {
            const { count, list } = data
            setTotal(count)
            setDataSource(list)
        })
    }, [keyword, pageIndex])

    // 搜索
    function onSearch() {
        setKeyword(searchInputValue)
    }

    // 表格 - 分页
    function onPageIndexChange(pageIndex: number) {
        setPageIndex(pageIndex)
    }

    // 表格 - 选择行
    function onRowSelected(
        selectedRowKeys: React.Key[],
        // selectedRows: never[],
    ) {
        setSelectedRowIds(selectedRowKeys.join(','))
    }

    // 获取 ids
    function getSelectedIdsArr(): string[] {
        return selectedRowIds.split(',').filter(i => i)
    }

    // 是否选择了
    function isSelectedEmpty(): boolean {
        const ids = getSelectedIdsArr()
        return ids.length === 0
    }

    // 冻结用户
    function frozeUsers() {
        const ids = getSelectedIdsArr()
        const length = ids.length
        if (length === 0) return

        if (
            !confirm(
                `【危险】是否要冻结 id 为“${selectedRowIds}”的 ${length} 个用户？`,
            )
        )
            return

        frozeUsersService(ids).then(() => {
            message.success('冻结成功')

            // 修改表格数据
            changeFrozenState(ids, true)
        })
    }

    // 解除冻结
    function unFrozeUsers() {
        const ids = getSelectedIdsArr()
        const length = ids.length
        if (length === 0) return

        if (
            !confirm(
                `是否要解除冻结，id 为“${selectedRowIds}”的 ${length} 个用户？`,
            )
        )
            return

        unFrozeUsersService(ids).then(() => {
            message.success('已解除冻结')

            // 修改表格数据
            changeFrozenState(ids, false)
        })
    }

    // 修改表格冻结数据
    function changeFrozenState(ids: string[], isFrozen: boolean) {
        const newDataSource = dataSource.map((item: any) => {
            const curId = item.id.toString()
            if (!ids.includes(curId)) return item
            return {
                ...item,
                isFrozen,
            }
        })
        setDataSource(newDataSource as never[])
    }

    return (
        <div>
            <div className={styles.tableButtonContainer}>
                <Row>
                    <Col span={16}>
                        <Button
                            type="primary"
                            danger
                            onClick={frozeUsers}
                            disabled={isSelectedEmpty()}
                        >
                            冻结用户
                        </Button>
                        <Button
                            onClick={unFrozeUsers}
                            disabled={isSelectedEmpty()}
                        >
                            解除冻结
                        </Button>
                    </Col>
                    <Col span={8} style={{ textAlign: 'right' }}>
                        <Search
                            value={searchInputValue}
                            placeholder="输入 id/用户名/手机号/昵称"
                            onSearch={onSearch}
                            onChange={e => setSearchInputValue(e.target.value)}
                            enterButton
                            style={{ width: 400 }}
                        />
                    </Col>
                </Row>
            </div>
            <MyTable
                dataSource={dataSource}
                columns={columns}
                pageData={{ pageIndex, total }}
                onRowSelected={onRowSelected}
                onPageIndexChange={onPageIndexChange}
            />
        </div>
    )
}
