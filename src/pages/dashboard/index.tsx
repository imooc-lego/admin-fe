import React, { useEffect } from 'react'
import { Divider } from 'antd'
import UsersSubPage from './sub-pages/users'
import WorksSubPage from './sub-pages/works'
import H5SubPage from './sub-pages/h5'
import TemplatesSubPage from './sub-pages/templates'

export default () => {
    return (
        <div>
            <WorksSubPage />
            <Divider />
            <H5SubPage />
            <Divider />
            <TemplatesSubPage />
            <Divider />
            <UsersSubPage />
        </div>
    )
}
