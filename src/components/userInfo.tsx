import React, { useEffect, useState } from 'react'
import { getUserInfoService } from '@/service/user'

export default () => {
    const [username, setUsername] = useState('')
    useEffect(() => {
        getUserInfoService().then(userInfo => setUsername(userInfo.username))
    })

    return <div style={{ paddingRight: '20px' }}>当前用户: {username}</div>
}
