import React from 'react'
import { history } from 'umi'
import { getAdminInfo } from '@/service/admin'
import UserInfo from '@/components/userInfo'

export async function render(oldRender: Function) {
    function redirectToLogin() {
        history.push('/login')
        oldRender()
    }

    try {
        const data = await getAdminInfo()
        if (data == null) redirectToLogin()
        oldRender()
    } catch (ex) {
        console.error(ex)
        redirectToLogin()
    }
}

export const layout = {
    // 右上角显示用户名
    rightRender: () => {
        return <UserInfo />
    },
}
