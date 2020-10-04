import React from 'react'
import { history } from 'umi'
import { getUserInfoService } from '@/service/user'
import UserInfo from '@/components/userInfo'

export async function render(oldRender: Function) {
    try {
        await getUserInfoService()
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
