import React, { useState } from 'react';
import '../styles/App.css';
import { Layout, Menu } from 'antd';
import logo from '../assets/logo/logo.png';
import { DesktopOutlined, PieChartOutlined, FileOutlined, UserOutlined } from '@ant-design/icons';
import styled from '@emotion/styled'
import { ProductsList } from "./ProductsList";
import { CategoriesList } from "./CategoriesList";
import { SpecialtiesList } from "./SpecialtiesList";
import { Router, Link } from '@reach/router'

const App = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const [siderCollapsed, setSiderCollapsed] = useState(false);

  return(
    <div className="App">
      <Router>
        <ProductsList path="products" />
        <CategoriesList path="categories" />
        <SpecialtiesList path="specialties" />
        {/* // TODO menu items left*/}
      </Router>

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
              <Link to="/">
                <LinkFontColor>Dashboard</LinkFontColor>
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="/products">
                <LinkFontColor>Productos</LinkFontColor>
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              <Link to="/pedidos">
                <LinkFontColor>Pedidos</LinkFontColor>
              </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              <Link to="/clientes">
                <LinkFontColor>Clientes</LinkFontColor>
              </Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<UserOutlined />}>
              <Link to="/mi-cuenta">
                <LinkFontColor>Mi cuenta</LinkFontColor>
              </Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<FileOutlined />}>
              <Link to="/especialidades">
                <LinkFontColor>Especialidades</LinkFontColor>
              </Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<FileOutlined />}>
              <Link to="/categories">
                <LinkFontColor>Categorías</LinkFontColor>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Router>
                <ProductsList path="products" />
                <CategoriesList path="categories" />
                <SpecialtiesList path="specialties" /> 
                {/* // TODO menu items left*/}
              </Router>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </div>
  )

}; 

export default App

const LinkFontColor = styled.a`
  color: white; 
  font-weight: lighter;
`