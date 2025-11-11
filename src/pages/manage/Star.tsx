import { useState, type FC } from 'react';
import QuestionCard from '../../compoents/QuestionCard';
import styles from './common.module.scss';
import { Typography } from 'antd';
import ListSearch from '../../compoents/ListSearch';

const { Title } = Typography;

const Star: FC = () => {
  const initialStarredQuestions = [
    { _id: 1, title: '问卷1', published: true, starred: true, answerCount: 10, createdAt: '2023-01-01' },
    { _id: 3, title: '问卷3', published: true, starred: true, answerCount: 10, createdAt: '2023-01-01' },
  ];

  const [starredQuestions, setStarredQuestions] = useState(initialStarredQuestions);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>
           <ListSearch/>
        </div>
      </div>

      <div className={styles.content}>
        {starredQuestions.map((question) => (
          <QuestionCard key={question._id} {...question} />
        ))}
      </div>

      <div className={styles.footer}>分页</div>
    </>
  );
};

export default Star;