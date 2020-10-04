import React from 'react'
import { history } from 'umi'
import { getUserInfoService } from './service/user'

export async function render(oldRender: Function) {
    try {
        const userInfo = await getUserInfoService()
        console.log('userInfo...', userInfo)
        oldRender()
    } catch (ex) {
        history.push('/login')
        oldRender()
    }
}

export const layout = {
    logout: () => {
        alert('logout')
    },
    rightRender: () => {
        return <p onClick={layout.logout}>右上角用户信息</p>
    },
}
