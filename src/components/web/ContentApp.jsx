import React from 'react'
import { Button, Layout, Row, Select } from 'antd';
import { Projects, Tasks } from '../../Layout';
const { Content } = Layout;
export const ContentApp = (props) => {

    const { colorBgContainer, theme, avatar } = props

    return (
        <Content
        className='scrollable-div-x'
            style={{
                margin: '24px 16px',
                padding: '1%',
                // minHeight: 280,
                backgroundColor: `${theme? '#E5EFE1' : '#333437'}`,
                overflowY: 'scroll',
                height: 'auto', // Ajusta estos valores según el header y footer
                display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                flexDirection: 'column',
            }}
        >
            <Row style={{
                flexWrap: 'wrap', display: 'flex', flexDirection: 'row',
                alignItems: 'flex-start', justifyContent: 'center',
                width:'100%'
            }} >
                <div
                    // className='wrap-app'
                    style={{
                        height: 'auto', width:'50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexDirection: 'row', flexWrap: 'wrap', marginBottom: '1vh'
                    }}>

                    <Tasks avatar={avatar} />

                </div>

                <div
                    // className='wrap-app'
                    style={{
                        height: 'auto', width:'50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                        flexDirection: 'column', flexWrap: 'wrap'
                    }}>

                    <Projects avatar={avatar}/>
                </div>

            </Row>



        </Content>
    )
}
