/**
 * @description table column 配置
 * @author 双越
 */

import { formatTime } from '@/utils/date'

export default [
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
        render: (src: string) => src,
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
            if (status === 3) return '强制下线'
        },
    },
    {
        title: '查看网页',
        dataIndex: 'id',
        key: 'id',
        render: (id: string) => id,
    },
    {
        title: '创建时间', // 需要 format ！！！
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (d: string) => {
            return formatTime(d)
        },
    },
    {
        title: '最后发布时间', // 需要 format ！！！
        dataIndex: 'latestPublishAt',
        key: 'latestPublishAt',
        render: (d: string) => {
            return formatTime(d)
        },
    },
]
