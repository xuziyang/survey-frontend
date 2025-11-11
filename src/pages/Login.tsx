import { type FC, useEffect } from 'react';
import { Button, Checkbox, Form, Input, Space, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './Login.module.scss'
import Password from 'antd/es/input/Password';
import { Link } from 'react-router-dom';

const { Title } = Typography;
const { useForm } = Form;


const Login: FC = () => {
    const [form] = useForm();

    // 组件加载时检查是否有记住的用户信息
    useEffect(() => {
        const rememberedUser = localStorage.getItem('rememberedUser');
        if (rememberedUser) {
            try {
                const { username, password } = JSON.parse(rememberedUser);
                // 解密密码
                const decryptedPassword = atob(password);
                // 填充表单
                form.setFieldsValue({
                    username,
                    password: decryptedPassword,
                    remember: true
                });
            } catch (error) {
                console.error('解析记住的用户信息失败:', error);
                localStorage.removeItem('rememberedUser');
            }
        }
    }, []);

    function onFinish(values: any) {
        console.log(values);
        // 如果勾选了记住我
        if (values.remember) {
            // 对密码进行简单加密（Base64）
            const encryptedPassword = btoa(values.password);
            // 存储到LocalStorage
            localStorage.setItem('rememberedUser', JSON.stringify({
                username: values.username,
                password: encryptedPassword
            }));
        } else {
            // 未勾选时，清除可能存在的记住信息
            localStorage.removeItem('rememberedUser');
        }
    }

    return (
        <div className={styles.container}>
            <div>
                <Space>
                    <Title level={2}><UserOutlined /></Title>
                    <Title level={2}>用户登录</Title>
                </Space>
            </div>
            <div>
                <Form form={form} labelCol={{ span: 6 }} wrapperCol={{ span: 20 }} onFinish={onFinish}>

                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名',
                            },
                            {
                                min: 2,
                                max: 16,
                                message: '用户名长度必须在2-16个字符之间',
                            },
                            {
                                pattern: /^[a-zA-Z0-9_]+$/,
                                message: '用户名只能包含字母、数字和下划线',
                            },
                        ]}
                    >
                        <Input placeholder="请输入用户名" />
                    </Form.Item>
                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码',
                            },
                            {
                                min: 6,
                                max: 20,
                                message: '密码长度必须在6-20个字符之间',
                            },
                            {
                                pattern: /^(?=.*[a-zA-Z])(?=.*[0-9]).*$/,
                                message: '密码必须包含字母和数字',
                            },
                        ]}
                    >
                        <Password placeholder="请输入密码" />
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 20 }}>
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 6, span: 20 }}>
                        <Space>
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                            <Link to="/register">去注册</Link>
                        </Space>
                    </Form.Item>

                </Form>

            </div>
        </div>
    )
}

export default Login