import { type FC } from "react"
import { Button, Divider, Modal, Popconfirm, Space, Tag } from 'antd';
import styles from "./QuestionCard.module.scss"
import { CopyOutlined, DeleteOutlined, EditOutlined, ExclamationCircleOutlined, LineChartOutlined, StarOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const {confirm} = Modal

type PropsType = {
    _id: number
    title: string
    starred: boolean
    published: boolean
    answerCount: number
    createdAt: string
}

const QuestionCard: FC<PropsType> = (props: PropsType) => {
    const { _id, title, starred, published, answerCount, createdAt } = props

    const nav = useNavigate();

    function duplicate() {
        alert('复制问卷')
    }

    function del(){
        confirm({
            title: '确定删除该问卷吗？',
            icon: <ExclamationCircleOutlined />,
            okText: '确定',
            okType: 'danger',
            onOk: () => {
                alert('删除问卷')
            },
            onCancel: () => {
                alert('取消删除')
            }
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.left}>
                    <Link to={published ? `/question/stat/${_id}` : `/question/edit/${_id}`}>
                        <Space>
                            {starred && <StarOutlined style={{ color: 'red' }} />}
                            {title}
                        </Space>
                    </Link>
                </div>
                <div className={styles.right}>
                    <Space>
                        {published ? <Tag color='processing'>已发布</Tag> : <Tag color="red">未发布</Tag>}

                        <span>答卷：{answerCount}</span>
                        <span>{createdAt}</span>
                    </Space>
                </div>
            </div>
            <Divider style={{ margin: '12px 0' }} />

            <div className={styles['button-container']}>
                <div className={styles.left}>
                    <Space>
                        <Button icon={<EditOutlined />} type="text" size="small" onClick={() => nav(`/question/edit/${_id}`)}>
                            编辑问卷
                        </Button>
                        <Button icon={<LineChartOutlined />} type="text" size="small" onClick={() => nav(`/manage/stat/${_id}`)}>
                            数据统计
                        </Button>
                    </Space>

                </div>
                <div className={styles.right}>
                    <Space>
                        <Button icon={<StarOutlined />} type="text" size="small" onClick={() => nav(`/manage/star/${_id}`)}>
                            {starred ? '取消标星' : '标星'}
                        </Button>
                        <Popconfirm title='确定复制该问卷吗？' okText='确定' cancelText='取消' onConfirm={duplicate}>
                            <Button icon={<CopyOutlined />} type="text" size="small">
                                复制
                            </Button>
                        </Popconfirm>
                        <Button icon={<DeleteOutlined />} type="text" size="small" onClick={del}>
                            删除
                        </Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard