/**
 * @description table columns 配置
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
        // render: (src: string) => src,
    },
    {
        title: '作者用户名',
        dataIndex: 'author',
        key: 'author',
    },
    {
        title: '查看网页',
        dataIndex: 'id',
        key: 'id',
        // render: (id: string) => id,
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
        // render: (id, record) => (
        //     <div>
        //         {record.isHot && <Tag color="red">HOT</Tag>}
        //         {record.isNew && <Tag color="green">NEW</Tag>}
        //     </div>
        // ),
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
