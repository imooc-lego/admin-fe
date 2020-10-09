import React from 'react'
import { history } from 'umi'
import styles from './style.less'
import { Form, Input, Button, Typography, message } from 'antd'
import { getAdminInfo, login } from '@/service/admin'
import { setAuthorizationToken } from '@/utils/ajax'

const { Title } = Typography

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
}
const tailLayout = {
    wrapperCol: { offset: 4, span: 20 },
}

interface LoginInfo {
    username: string
    password: string
}

export default () => {
    // 如果已登录，则跳转到首页
    getAdminInfo()
        .then(data => {
            if (data == null) return
            history.push('/')
        })
        .catch(ex => {
            console.error(ex)
        })

    // 执行登录
    const onFinish = async (values: LoginInfo) => {
        const { username, password } = values
        const data = await login(username, password)
        if (data == null) return
        const { token } = data
        if (token) {
            setAuthorizationToken(token) // 登录成功，保存 token
            history.push('/')
        } else {
            message.error('未找到 token')
        }
    }

    // 联系管理员
    function contactAdmin() {
        console.log(
            '请发送邮件至 642009075@qq.com ，邮件标题为：“【imooc-lego 后台管理系统】xxxx 问题”',
        )
        message.info('请查看 console.log')
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.formContainer}>
                <Title level={2} style={{ textAlign: 'center' }}>
                    Lego 后台管理
                </Title>
                <Form {...layout} name="login" onFinish={onFinish}>
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                        <Button type="link" onClick={contactAdmin}>
                            联系管理员
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
