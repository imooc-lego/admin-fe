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
        title: '注册时间',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (d: string) => {
            return formatTime(d)
        },
    },
    {
        title: '最后登录时间',
        dataIndex: 'latestLoginAt',
        key: 'latestLoginAt',
        render: (d: string) => {
            return formatTime(d)
        },
    },
    {
        title: '冻结',
        dataIndex: 'isFrozen',
        key: 'isFrozen',
        render: (f: boolean) => (f ? '是' : '否'),
    },
]
