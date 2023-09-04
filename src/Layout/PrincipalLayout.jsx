import { Col, Row, } from 'antd'
import { HeaderApp, HeaderQuote, Projects, Tasks } from './'
// import { Footer } from 'antd/es/layout/layout'
import { useContext, useEffect, useState } from 'react'
import { appContext_ } from '../context_/appContext_'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { SiderApp } from '../components/web/SiderApp';
import { HeaderApp_ } from '../components/web/HeaderApp_';
import { ContentApp } from '../components/web/ContentApp';
import { HeaderMobile } from '../components/mobile/HeaderMobile';
import { ContentMobile } from '../components/mobile/ContentMobile';
const { Header, Content, Footer, Sider } = Layout;

export const PrincipalLayout = () => {

  const avatar = JSON.parse(localStorage.getItem('avatar'))
  const { theme } = useContext(appContext_)
  const [collapsed, setCollapsed] = useState(false);


  return (
    <>

      <Layout className='large'>
        <SiderApp collapsed={collapsed} setCollapsed={setCollapsed} theme={theme} avatar={avatar} />
        <Layout style={{ backgroundColor: `${theme ? '#E5EFE1' : '#333437'}` }}>
          <HeaderApp_ setCollapsed={setCollapsed} collapsed={collapsed} theme={theme} />
          <ContentApp theme={theme} avatar={avatar} />

        </Layout>
      </Layout>

      <Layout className='small' style={{minHeight: '100vh', backgroundColor: `${theme ? '#E5EFE1' : '#333437'}` }}>
          <HeaderMobile setCollapsed={setCollapsed} collapsed={collapsed} theme={theme} avatar={avatar}  />
          <ContentMobile theme={theme} avatar={avatar} />

      </Layout>

      {/* <div

        style={{
          flexDirection: 'column', flexWrap: 'wrap', backgroundColor: `${theme ? '#e4efe1' : '#333437'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>

        <Col style={{
          flexWrap: 'wrap', display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column'
        }}>

          <Row style={{
            flexWrap: 'wrap', display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'center'
          }} >

            <div
              className='wrap-app_'
              style={{
                height: '20vh', backgroundColor: `${theme ? '#e4efe1' : '#333437'}`,
                marginTop: '1vh', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>

              <HeaderApp />

            </div>


            <div
              className='wrap-app_'
              style={{
                height: '20vh',  backgroundColor: `${theme ? '#e4efe1' : '#333437'}`, transition: 'all 0.30s ease-in-out',
                marginTop: '1vh', marginLeft: '1vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
              }}>

              <HeaderQuote />


            </div>
          </Row>

          <Row style={{
            flexWrap: 'wrap', display: 'flex', flexDirection: 'row',
            alignItems: 'flex-start', justifyContent: 'center'
          }} >
            <div
              className='wrap-app'
              style={{
                height: '',  backgroundColor: `${theme ? '#e4efe1' : '#333437'}`,
                marginTop: '1vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'row', flexWrap: 'wrap', marginBottom: '1vh'
              }}>

              <Tasks />

            </div>

            <div
              className='wrap-app'
              style={{
                height: '',  backgroundColor: `${theme ? '#e4efe1' : '#333437'}`,
                marginTop: '1vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                flexDirection: 'column', flexWrap: 'wrap'
              }}>

              <Projects />
            </div>

          </Row>


        </Col>



      </div >
      <Footer style={{
        marginTop: '2vh', backgroundColor: `${theme ? '#e4efe1' : '#333437'}`
      }}></Footer> */}
    </>
  )
}
