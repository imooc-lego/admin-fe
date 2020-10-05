/**
 * @description 封装 table 组件
 * @author 双越
 */

import React from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { DEFAULT_PAGE_SIZE } from '@/config/constants'

interface PageDataTypes {
    pageIndex?: number
    pageSize?: number
    total: number
}

interface propsTypes {
    dataSource: never[]
    columns: ColumnsType<never>
    pageData: PageDataTypes
    onRowSelected?: (
        selectedRowKeys: React.ReactText[],
        selectedRows: never[],
    ) => void
    onPageIndexChange?: (page: number, pageSize?: number | undefined) => void
}

export default (props: propsTypes) => {
    const {
        dataSource,
        columns,
        pageData,
        onRowSelected,
        onPageIndexChange,
    } = props

    // 为 dataSource 增加 key 属性
    const dataSourceWithKey = dataSource.map((item: any) => {
        if (item.key != null) return item
        return {
            key: item.id || item._id,
            ...item,
        }
    }) as never[]

    const { pageIndex = 0, pageSize = DEFAULT_PAGE_SIZE, total = 0 } = pageData

    // 切换页
    function pageIndexChangeHandler(
        pageIndex: number,
        pageSize?: number | undefined,
    ): void {
        if (!onPageIndexChange) return
        onPageIndexChange(
            pageIndex - 1, // 从 0 开始计算
            pageSize,
        )
    }

    return (
        <Table
            rowSelection={{
                type: 'checkbox',
                onChange: onRowSelected,
            }}
            dataSource={dataSourceWithKey}
            columns={columns}
            pagination={{
                defaultCurrent: pageIndex + 1,
                pageSize,
                total,
                showSizeChanger: false,
                onChange: pageIndexChangeHandler,
            }}
        />
    )
}
