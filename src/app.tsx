import React from 'react'

export function render(oldRender: Function) {
    oldRender()
}

export const layout = {
    logout: () => {
        alert('logout')
    },
    rightRender: () => {
        return <p onClick={layout.logout}>右上角用户信息</p>
    },
}
