import { useState, type FC } from 'react';
import styles from './common.module.scss';
import { Typography, Table, Tag, Button, Space } from 'antd';
import ListSearch from '../../compoents/ListSearch';

const { Title } = Typography;

const Trash: FC = () => {
    const initialQuestions = [
        { _id: 1, title: "问卷1", published: true, starred: true, answerCount: 10, createdAt: "2023-01-01" },
        { _id: 2, title: "问卷2", published: false, starred: false, answerCount: 10, createdAt: "2023-01-01" },
        { _id: 3, title: "问卷3", published: true, starred: true, answerCount: 10, createdAt: "2023-01-01" },
        { _id: 4, title: "问卷4", published: false, starred: false, answerCount: 10, createdAt: "2023-01-01" },
    ]

    const [questions, setQuestions] = useState(initialQuestions);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    // 配置多选框


    // 定义表格列配置
    const columns = [
        { title: '标题', dataIndex: 'title', key: 'title' },
        { title: '是否发布', dataIndex: 'published', key: 'published', render: (published: boolean) => published ? <Tag color="green">是</Tag> : <Tag color="red">否</Tag> },
        { title: '是否星标', dataIndex: 'starred', key: 'starred', render: (starred: boolean) => starred ? <Tag color="gold">是</Tag> : <Tag color="gray">否</Tag> },
        { title: '答卷数量', dataIndex: 'answerCount', key: 'answerCount' },
        { title: '创建时间', dataIndex: 'createdAt', key: 'createdAt' },
        {
            title: '操作', key: 'action', render: () => (
                <div>
                    <a href="#">恢复</a>
                    <span style={{ margin: '0 8px' }}>|</span>
                    <a href="#">删除</a>
                </div>
            )
        },
    ];

    function del(){
    }

    const TableEle = (
        <>
            <div style={{ marginBottom: 16 }}>

                <Space>
                    <Button type='primary' disabled={selectedRowKeys.length === 0}>恢复</Button>
                    <Button danger disabled={selectedRowKeys.length === 0} onClick={del}>彻底删除</Button>
                </Space>
            </div>
            <Table columns={columns} dataSource={questions} rowKey="_id"
                rowSelection={{
                    type: 'checkbox', onChange: (newSelectedRowKeys) => {
                        setSelectedRowKeys(newSelectedRowKeys);
                    }
                }} />
        </>
    )

    return <>
        <div className={styles.header}>
            <div className={styles.left}>
                <Title level={3} >回收站</Title>
            </div>
            <div className={styles.right}>
                <ListSearch/>
            </div>
        </div>

        <div className={styles.content}>
            {TableEle}
        </div>

        <div className={styles.footer}>分页</div>
    </>
}

export default Trash