import { Col, Row, } from 'antd'
import { HeaderApp, HeaderQuote, Projects, Tasks } from './'
import { Footer } from 'antd/es/layout/layout'
import { useContext } from 'react'
import { appContext_ } from '../context_/appContext_'

export const PrincipalLayout = () => {

  // const theme = JSON.parse(localStorage.getItem('theme'))
  const { theme } = useContext(appContext_)

  return (
    <>

      <div
        style={{
          flexDirection: 'column', flexWrap: 'wrap', backgroundColor: `${theme? '#e4efe1': '#333437'}`,
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
              style={{
                height: '20vh', width: `85vh`,  backgroundColor: `${theme? '#e4efe1': '#333437'}`,
                marginTop: '1vh', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>

              <HeaderApp />

            </div>


            <div
              style={{
                height: '20vh', width: `85vh`, backgroundColor: `${theme? '#e4efe1': '#333437'}`, transition: 'all 0.30s ease-in-out',
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
              style={{
                height: '', width: '85vh', backgroundColor: `${theme? '#e4efe1': '#333437'}`,
                marginTop: '1vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                flexDirection: 'column', flexWrap: 'wrap', marginBottom: '1vh'
              }}>

              <Tasks />

            </div>

            <div
              style={{
                height: '', width: '85vh', backgroundColor: `${theme? '#e4efe1': '#333437'}`,
                marginTop: '1vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                flexDirection: 'column', flexWrap: 'wrap'
              }}>

              <Projects />
            </div>

          </Row>


        </Col>



      </div >
      <Footer style={{
        marginTop: '2vh', backgroundColor: `${theme? '#e4efe1': '#333437'}`
      }}></Footer>
    </>
  )
}
