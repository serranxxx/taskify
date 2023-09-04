import React, { useContext, useEffect } from 'react'
import { Col, FloatButton, Layout, Row } from 'antd';
import { TaskCardMobile } from './TaskCardMobile';
import { appContext_ } from '../../context_/appContext_';
import { TbTextPlus } from "react-icons/tb";

const { Content } = Layout;

export const ContentMobile = (props) => {

    const { setTasks, tasks, taskFinished, setFinishedTask, setTotalTask, theme } = useContext(appContext_)
    // const { theme } = props

    return (
        <Content 
        className='scrollable-div-x'
            style={{
                marginTop: '18vh', // Ajusta este valor para que el contenido no quede detrás del header
                marginBottom: '2vh', // Ajusta este valor para que el contenido no quede detrás del footer
                overflowY: 'scroll',
                height: 'auto', // Ajusta estos valores según el header y footer
                display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                flexDirection: 'column',
                // backgroundColor: `${bg}70`
            }}
        >
           
           <TaskCardMobile data={tasks} theme={theme} />
           <FloatButton 
           icon={<TbTextPlus size={25}/>}
           type='primary' style={{
            height:'60px', width:'60px', opacity:'0.5', color:'#457B9D !important'
           }} />


        </Content>
    )
}
