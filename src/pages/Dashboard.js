import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import { DesktopOutlined, PieChartOutlined, FileOutlined, UserOutlined } from '@ant-design/icons';
import logo from '../assets/logo/logo.png'
import { Link } from '../components/Link'


const Dashboard = () => {
  console.log('Component pages/Dashboard')
  const { Header, Footer, Sider, Content } = Layout;
  const [siderCollapsed, setSiderCollapsed] = useState(false);

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider 
          collapsible 
          collapsed={siderCollapsed} 
          onCollapse = {siderCollapsed => { 
            setSiderCollapsed(siderCollapsed)
            console.log('Is side menu collapsed?: ', siderCollapsed)
          }} 
        >
          <div className="logo">
            <Link to="/"> 
              <img alt="La Parada SL" src={logo} />
            </Link>
          </div>
          <Menu 
            theme="dark" 
            defaultSelectedKeys={['1']} 
            mode="inline"
            style={{ textAlign: 'left' }}
            >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Productos
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              Pedidos
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              Clientes
            </Menu.Item>
            <Menu.Item key="5" icon={<UserOutlined />}>
              Mi cuenta
            </Menu.Item>
            <Menu.Item key="6" icon={<FileOutlined />}>
              Especialidades
            </Menu.Item>
            <Menu.Item key="7" icon={<FileOutlined />}>
              Categorías
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </>
  )
}
  
export default Dashboard
