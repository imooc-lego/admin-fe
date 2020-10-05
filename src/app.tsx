import React from 'react'
import { history } from 'umi'
import { getAdminInfo } from '@/service/admin'
import UserInfo from '@/components/userInfo'

export async function render(oldRender: Function) {
    try {
        await getAdminInfo()
        oldRender()
    } catch (ex) {
        history.push('/login')
        oldRender()
    }
}

export const layout = {
    // 右上角显示用户名
    rightRender: () => {
        return <UserInfo />
    },
}
