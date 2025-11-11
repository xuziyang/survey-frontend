import { type FC } from 'react';
import { Button, Form, Input, Space, Typography } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import styles from './Register.module.scss'
import Password from 'antd/es/input/Password';
import { Link } from 'react-router-dom';

const { Title } = Typography;


const Register: FC = () => {
    function onFinish(values: any) {
        console.log(values);
    }

    return (
        <div className={styles.container}>
            <div>
                <Space>
                    <Title level={2}><UserAddOutlined /></Title>
                    <Title level={2}>注册新用户</Title>
                </Space>
            </div>
            <div>
                <Form labelCol={{ span: 6 }} wrapperCol={{ span: 20 }} onFinish={onFinish}>

                    <Form.Item label="用户名" name="username" rules={[
                        { required: true, message: '请输入用户名' },
                        { min: 2, max: 16, message: '用户名长度必须在2-16个字符之间' },
                        { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名只能包含字母、数字和下划线' }
                    ]}>
                        <Input placeholder="请输入用户名" />
                    </Form.Item>
                    <Form.Item label="密码" name="password" rules={[
                        { required: true, message: '请输入密码' },
                        { min: 6, max: 20, message: '密码长度必须在6-20个字符之间' },
                        { pattern: /^(?=.*[a-zA-Z])(?=.*\d).+$/, message: '密码必须包含字母和数字' }
                    ]}>
                        <Password placeholder="请输入密码" />
                    </Form.Item>
                    <Form.Item label="确认密码" name="confirmPassword" rules={[
                        { required: true, message: '请确认密码' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('两次输入的密码不一致'));
                            }
                        })
                    ]}>
                        <Password placeholder="请确认密码" />
                    </Form.Item>
                    <Form.Item label="昵称" name="nickname" rules={[
                        { required: true, message: '请输入昵称' },
                        { min: 2, max: 16, message: '昵称长度必须在2-16个字符之间' }
                    ]}>
                        <Input placeholder="请输入昵称" />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 6, span: 20 }}>
                        <Space>
                            <Button type="primary" htmlType="submit">
                                注册
                            </Button>
                            <Link to="/login">已有账户,登录</Link>
                        </Space>
                    </Form.Item>

                </Form>

            </div>
        </div>
    )
}

export default Register