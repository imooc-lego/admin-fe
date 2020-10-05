import React, { useEffect, useState } from 'react'
import { getAdminInfo } from '@/service/admin'

export default () => {
    const [username, setUsername] = useState('')
    useEffect(() => {
        getAdminInfo().then(info => setUsername(info.username))
    })

    return <div style={{ paddingRight: '20px' }}>当前用户: {username}</div>
}
