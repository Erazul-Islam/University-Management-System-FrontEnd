import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps, theme } from 'antd';
import React from 'react';


const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
    {
        key: '1',
        label: 'Dashboard'
    },
    {
        key: '2',
        label: 'Profile',
        children: [
            {
                key: '3',
                label: 'Create student'
            },
            {
                key: '4',
                label: 'Create student'
            }
        ]
    }
]

const Mainlayout: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken()
    return (
        <div>
            <Layout style={{ height: '100vh' }}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div style={{ color: 'white',  height: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h1 >PH University</h1>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                                textAlign: 'center'
                            }}
                        >
                            The main contetent will be here.
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©{new Date().getFullYear()} Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </div>
    );
};

export default Mainlayout;