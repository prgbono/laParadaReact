import React, { useState } from 'react';
import '../styles/App.css';
import { Layout, Menu } from 'antd';
import logo from '../assets/logo/logo.png';
import { DesktopOutlined, PieChartOutlined, FileOutlined, UserOutlined } from '@ant-design/icons';
import { ProductsList } from "./ProductsList";
//import { CategoriesList } from "./CategoriesList";
//import { SpecialtiesList } from "./SpecialtiesList";
import { Router, Link } from '@reach/router'
import Dashboard from '../pages/Dashboard';

const App = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const [siderCollapsed, setSiderCollapsed] = useState(false);
  // let DashboardPage = () => (
  //   <Dashboard />
  // )

  let InicioMenuButton = () => (
    <Dashboard />
  )


  // const ProductsMenuButton = () => {
  //   const params = useParams()
  //   console.log('params: ', params)
  //   return (
  //     <div>
  //       <h1>Productos</h1>
  //       {/* <h1>Productos {params.id}</h1> */}
  //     </div>
  //   )
  // }

  // const ProductsListMenuButton = () => {
  //   console.log('App.js - ProductsListMenuButton');
  //   return(
  //     <ProductsList />
  //   )
  // }
  
  // const CategoriesMenuButton = () => (
  //   <div>
  //     <h1>Categorías</h1>
  //     <nav>
  //       <Link to="/">Inicio</Link> |{" "}
  //       <Link to="products">Productos</Link> |{" "}
  //       <Link to="categories">Categorias</Link> |{" "}
  //       <Link to="specialties">Especialidades</Link> 
  //     </nav>
  //   </div>
  // )

  // const CategoriesListMenuButton = () => {
  //   return(
  //     <div>
  //       <p>Esto es la página CategoriesList</p>
  //       <CategoriesList />
  //     </div>
  //   )
  // }

  // const SpecialtiesMenuButton = () => (
  //   <div>
  //     <h1>Especialidades</h1>
  //   </div>
  // )

  // const SpecialtiesListMenuButton = () => {
  //   return(
  //     <div>
  //       <p>Esto es la página SpecialtiesList</p>
  //       <SpecialtiesList />
  //     </div>
  //   )
  // }

  return(
    <div className="App">
      <Router>
        <InicioMenuButton path="/" />
        {/* <ProductsMenuButton path="products/:productId" /> */}
        {/* <ProductsListMenuButton path="products" /> */}
        <ProductsList path="products" />
        {/* <CategoriesMenuButton path="categories/:categorieId" /> */}
        {/* <CategoriesListMenuButton path="categories" /> */}
        {/* <SpecialtiesMenuButton path="specialties/:specialtiesId" /> */}
        {/* <SpecialtiesListMenuButton path="specialties" /> */}
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
              Dashboard
              <Link to="/">
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="/products">
                Productos
              </Link>
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
              <Router>
                {/* <App path="/" /> */}
                <ProductsList path="products" />
                {/* <ProductsListMenuButton path="products" /> */}
                {/* <CategoriesListMenuButton path="categories" />
                <SpecialtiesListMenuButton path="specialties" /> */}
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