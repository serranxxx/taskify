import React from 'react'
import { Button, Layout, Row } from 'antd';
import { BiRefresh } from 'react-icons/bi';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  
  } from '@ant-design/icons';
import { texts } from '../../helpers/images';
const { Header } = Layout;

export const HeaderApp_ = (props) => {

    const { collapsed, setCollapsed, theme } = props

    return (
        <Header
            style={{
                padding: 0, 
                backgroundColor: `${theme ? '#457B9D' : '#27282c'}`, 
                position: 'relative', height: '12vh', 
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
        >
            <img src={texts.textlight} style={{
                height:'40%'
            }}/>
        </Header>
    )
}
