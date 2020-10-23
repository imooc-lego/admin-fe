import React, { useState, useEffect } from 'react'
import { Button, Input, Row, Col, message } from 'antd'
import styles from '../pages.less'
import { ColumnsType } from 'antd/es/table'
import MyTable from '@/components/table'
import columns from './tableColumns'
import {
    getWorksList,
    forceOffline as forceOfflineService,
    undoForceOffline as undoForceOfflineService,
} from '@/service/works'
import { H5Host } from '@/config/host'

const { Search } = Input

// 处理 columns 配置，有些字段需要宣传出链接
function parseColumns(columns: ColumnsType): ColumnsType<never> {
    return columns.map((item: any) => {
        if (item.title === '查看网页') {
            return {
                ...item,
                render: (id: string, row: any) => {
                    const { uuid, status } = row
                    let url = ''
                    let text = ''
                    switch (status) {
                        case '0':
                            break // 已删除
                        case '3':
                            break // 强制下线
                        case '2':
                            url = `${H5Host}/p/${id}-${uuid}?channel=0` // 发布了，线上链接
                            text = '线上链接'
                            break
                        default:
                            url = `${H5Host}/p/preview/${id}-${uuid}` // 未发布，预览
                            text = '预览'
                            break
                    }

                    if (url)
                        return (
                            <a href={url} target="_blank">
                                {text}
                            </a>
                        )
                    return ''
                },
            }
        }
        if (item.title === '缩略图') {
            return {
                ...item,
                render: (src: string) => {
                    if (!src) return ''
                    return (
                        <a href={src} target="_blank">
                            查看缩略图
                        </a>
                    )
                },
            }
        }
        return item
    }) as ColumnsType<never>
}

export default () => {
    // 修改 columns 配置
    const formatColumns = parseColumns(columns)

    const [searchInputValue, setSearchInputValue] = useState('')
    const [keyword, setKeyword] = useState('')
    const [pageIndex, setPageIndex] = useState(0)
    const [dataSource, setDataSource] = useState([])
    const [total, setTotal] = useState(0)
    const [selectedRowIds, setSelectedRowIds] = useState('')

    useEffect(() => {
        // 获取列表
        getWorksList(keyword, pageIndex).then((data: any) => {
            const { count, list } = data
            setTotal(count)
            setDataSource(list)
        })
    }, [keyword, pageIndex])

    // 搜索
    function onSearch() {
        setKeyword(searchInputValue)
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

    // 强制下线
    function forceOffline() {
        const ids = getSelectedIdsArr()
        const length = ids.length
        if (length === 0) return

        // 检查，只有 status===2 发布状态，才能执行强制下线
        const works = getWorksByIds(ids)
        const flag = works.every((item: any) => item.status === '2')
        if (!flag) {
            message.error('操作失败，必须选择【发布】状态的作品')
            return
        }

        // confirm
        if (
            !confirm(
                `【危险】是否强制下线，id 为“${selectedRowIds}”的 ${length} 个作品？`,
            )
        )
            return

        // 发送请求
        forceOfflineService(ids).then(() => {
            message.success('已强制下线')

            // 修改表格数据
            changeStatus(ids, '3')
        })
    }

    // 恢复
    function undoForceOffline() {
        const ids = getSelectedIdsArr()
        const length = ids.length
        if (length === 0) return

        // 检查，只有 status===3 才能恢复
        const works = getWorksByIds(ids)
        const flag = works.every((item: any) => item.status === '3')
        if (!flag) {
            message.error('操作失败，必须选择【强制下线】状态的作品')
            return
        }

        // confirm
        if (!confirm(`是否恢复，id 为“${selectedRowIds}”的 ${length} 个作品？`))
            return

        // 发送请求
        undoForceOfflineService(ids).then(() => {
            message.success('已恢复')

            // 修改表格数据
            changeStatus(ids, '2')
        })
    }

    // 根据 ids 获取作品
    function getWorksByIds(ids: string[]) {
        return dataSource.filter((item: any) =>
            ids.includes(item.id.toString()),
        )
    }

    // 修改表格数据的的 status
    function changeStatus(ids: string[], status: string) {
        const newDataSource = dataSource.map((item: any) => {
            const curId = item.id.toString()
            if (!ids.includes(curId)) return item
            return {
                ...item,
                status,
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
                            onClick={forceOffline}
                            disabled={isSelectedEmpty()}
                        >
                            强制下线
                        </Button>{' '}
                        <Button
                            onClick={undoForceOffline}
                            disabled={isSelectedEmpty()}
                        >
                            恢复
                        </Button>
                    </Col>
                    <Col span={8} style={{ textAlign: 'right' }}>
                        <Search
                            value={searchInputValue}
                            placeholder="输入 id/标题/作者用户名"
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
                columns={formatColumns}
                pageData={{ pageIndex, total }}
                onRowSelected={onRowSelected}
                onPageIndexChange={onPageIndexChange}
            />
        </div>
    )
}
