import React, { useState, useEffect } from 'react'
import { Button, Input, Row, Col, Tag, message, Modal, InputNumber } from 'antd'
import styles from '../pages.less'
import { ColumnsType } from 'antd/es/table'
import MyTable from '@/components/table'
import columns from './tableColumns'
import {
    getTemplateList,
    setPublic as setPublicService,
    setNew as setNewService,
    setHot as setHotService,
    setOrderIndex as setOrderIndexService,
} from '@/service/template'
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
                    if (status !== '2') return '' // 不是发布状态

                    const url = `${H5Host}/p/${id}-${uuid}?channel=0`
                    return (
                        <a href={url} target="_blank">
                            线上链接
                        </a>
                    )
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
        if (item.title === '标签') {
            return {
                ...item,
                render: (id, record: any) => (
                    <div>
                        {record.isHot && <Tag color="red">HOT</Tag>}
                        {record.isNew && <Tag color="green">NEW</Tag>}
                    </div>
                ),
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
    const [orderIndexModalVisible, setOrderIndexModalVisible] = useState(false)
    const [orderIndex, setOrderIndex] = useState(0)

    useEffect(() => {
        // 获取列表
        getTemplateList(keyword, pageIndex).then((data: any) => {
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

    // 设置为公开
    function setPublic() {
        if (isSelectedEmpty()) return
        if (!confirm('是否设置为公开？')) return

        const ids = getSelectedIdsArr()
        setPublicService(ids, true).then(() => {
            message.success('设置成功')
            changeDataSource(ids, 'isPublic', true)
        })
    }

    // 禁止公开
    function setPrivate() {
        if (isSelectedEmpty()) return
        if (!confirm('是否禁止公开？')) return

        const ids = getSelectedIdsArr()
        setPublicService(ids, false).then(() => {
            message.success('已禁止公开')
            changeDataSource(ids, 'isPublic', false)
        })
    }

    // 设置 Hot
    function setHot() {
        if (isSelectedEmpty()) return
        if (!confirm('是否设置 HOT 标签？')) return

        const ids = getSelectedIdsArr()
        setHotService(ids, true).then(() => {
            message.success('设置成功')
            changeDataSource(ids, 'isHot', true)
        })
    }

    // 取消 hot
    function setNoHot() {
        if (isSelectedEmpty()) return
        if (!confirm('是否取消 HOT 标签？')) return

        const ids = getSelectedIdsArr()
        setHotService(ids, false).then(() => {
            message.success('已取消 HOT 标签')
            changeDataSource(ids, 'isHot', false)
        })
    }

    // 设置 New
    function setNew() {
        if (isSelectedEmpty()) return
        if (!confirm('是否设置 NEW 标签？')) return

        const ids = getSelectedIdsArr()
        setNewService(ids, true).then(() => {
            message.success('设置成功')
            changeDataSource(ids, 'isNew', true)
        })
    }

    // 取消 New
    function setNoNew() {
        if (isSelectedEmpty()) return
        if (!confirm('是否取消 NEW 标签？')) return

        const ids = getSelectedIdsArr()
        setNewService(ids, false).then(() => {
            message.success('已取消 NEW 标签')
            changeDataSource(ids, 'isNew', false)
        })
    }

    // 修改排序参数
    function changeOrderIndex() {
        if (isSelectedEmpty()) return
        const ids = getSelectedIdsArr()
        setOrderIndexService(ids, orderIndex).then(() => {
            message.success('修改成功')
            changeDataSource(ids, 'orderIndex', orderIndex)
            setOrderIndexModalVisible(false)
        })
    }

    // 显示 orderIndex Modal
    function showOrderIndexModal() {
        if (isSelectedEmpty()) return
        setOrderIndexModalVisible(true)
        const ids = getSelectedIdsArr()

        // 只选中一个，则默认设置为当前的 orderIndex
        if (ids.length === 1) {
            const selectedTemplates = getTemplatesByIds(ids)
            const temp: any = selectedTemplates[0]
            setOrderIndex(temp.orderIndex)
            return
        }

        // 其他情况，设置为 0
        setOrderIndex(0)
    }

    // 修改表格数据
    function changeDataSource(ids: string[], key: string, value: any) {
        const changedData: any = {}
        changedData[key] = value

        const newDataSource = dataSource.map((item: any) => {
            const curId = item.id.toString()
            if (!ids.includes(curId)) return item
            return {
                ...item,
                ...changedData,
            }
        })
        setDataSource(newDataSource as never[])
    }

    // 根据 ids 获取作品
    function getTemplatesByIds(ids: string[]) {
        return dataSource.filter((item: any) =>
            ids.includes(item.id.toString()),
        )
    }

    return (
        <div>
            <div>
                <div className={styles.tableButtonContainer}>
                    <Modal
                        title="修改排序参数"
                        visible={orderIndexModalVisible}
                        onOk={changeOrderIndex}
                        onCancel={() => {
                            setOrderIndexModalVisible(false)
                        }}
                    >
                        <div>
                            orderIndex:{' '}
                            <InputNumber
                                min={0}
                                max={10}
                                value={orderIndex}
                                onChange={value => {
                                    setOrderIndex(value as number)
                                }}
                            />
                            （ 请输入 0-10 整数）
                        </div>
                    </Modal>
                    <Row>
                        <Col span={16}>
                            <Button
                                type="primary"
                                onClick={setPublic}
                                disabled={isSelectedEmpty()}
                            >
                                设为公开展示
                            </Button>
                            <Button
                                type="primary"
                                danger
                                onClick={setPrivate}
                                disabled={isSelectedEmpty()}
                            >
                                禁止公开展示
                            </Button>
                            <Button
                                onClick={setHot}
                                disabled={isSelectedEmpty()}
                            >
                                设为 HOT
                            </Button>
                            <Button
                                danger
                                onClick={setNoHot}
                                disabled={isSelectedEmpty()}
                            >
                                取消 HOT
                            </Button>
                            <Button
                                onClick={setNew}
                                disabled={isSelectedEmpty()}
                            >
                                设为 NEW
                            </Button>
                            <Button
                                danger
                                onClick={setNoNew}
                                disabled={isSelectedEmpty()}
                            >
                                取消 NEW
                            </Button>
                            <Button
                                type="primary"
                                onClick={showOrderIndexModal}
                                disabled={isSelectedEmpty()}
                            >
                                修改排序参数
                            </Button>
                        </Col>
                        <Col span={8} style={{ textAlign: 'right' }}>
                            <Search
                                value={searchInputValue}
                                placeholder="输入 id/标题/作者用户名"
                                onSearch={onSearch}
                                onChange={e =>
                                    setSearchInputValue(e.target.value)
                                }
                                enterButton
                                style={{ width: 400 }}
                            />
                        </Col>
                    </Row>
                </div>
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
