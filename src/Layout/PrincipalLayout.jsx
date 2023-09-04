
import { useContext, useEffect, useState } from 'react'
import { appContext_ } from '../context_/appContext_'
import { Layout} from 'antd'
import { SiderApp } from '../components/web/SiderApp';
import { HeaderApp_ } from '../components/web/HeaderApp_';
import { ContentApp } from '../components/web/ContentApp';
import { HeaderMobile } from '../components/mobile/HeaderMobile';
import { ContentMobile } from '../components/mobile/ContentMobile';


export const PrincipalLayout = () => {

  const avatar = JSON.parse(localStorage.getItem('avatar'))
  const { theme } = useContext(appContext_)
  const [collapsed, setCollapsed] = useState(false);


  useEffect(() => {
    const changeBody = () => {
      document.body.style.backgroundColor = `${theme ? '#E5EFE1' : '#333437'}`;
    }
    changeBody()
  }, [theme])


  return (
    <>

      <Layout className='large'>
        <SiderApp collapsed={collapsed} setCollapsed={setCollapsed} theme={theme} avatar={avatar} />
        <Layout style={{ backgroundColor: `${theme ? '#E5EFE1' : '#333437'}` }}>
          <HeaderApp_ setCollapsed={setCollapsed} collapsed={collapsed} theme={theme} />
          <ContentApp theme={theme} avatar={avatar} />

        </Layout>
      </Layout>

      <Layout
        className='small'
        style={{  minHeight: '100vh', backgroundColor: `${theme ? '#E5EFE1' : '#333437'}` }}>
        <HeaderMobile setCollapsed={setCollapsed} collapsed={collapsed} theme={theme} avatar={avatar} />
        <ContentMobile theme={theme} avatar={avatar} />
      </Layout>

      
    </>
  )
}
