import { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from "antd";
import { Content, Footer, Header } from 'antd/es/layout/layout';
import styles from './MainLayout.module.scss'
import Logo from '../compoents/Logo';
import UserInfo from '../compoents/UserInfo';

const MainLayout: FC = () => {
    return (
        <Layout>
            <Header className={styles.header}>
                <div className={styles.left}><Logo/></div>
                <div className={styles.right}><UserInfo/></div>
            </Header>
            
            <Content className={styles.content}>
                <Outlet/>
            </Content>

            <Footer className={styles.footer}>
                极简问卷
            </Footer>
        </Layout>

    )
}

export default MainLayout