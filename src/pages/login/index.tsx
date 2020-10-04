import React from 'react'
import styles from './style.less'
import { Form, Input, Button, Typography, message } from 'antd'

const { Title } = Typography
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
}
const tailLayout = {
    wrapperCol: { offset: 4, span: 20 },
}

export default () => {
    // 登录成功
    const onFinish = (values: object) => {
        const { username, password } = values
        console.log(username, password)
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
