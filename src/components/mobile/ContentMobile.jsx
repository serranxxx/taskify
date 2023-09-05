import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Drawer, FloatButton, Form, Input, Layout, Row } from 'antd';
import { TaskCardMobile } from './TaskCardMobile';
import { appContext_ } from '../../context_/appContext_';
import { TbTextPlus } from "react-icons/tb";
import { images_ } from '../../helpers/images';
import { TasksMobile } from './TasksMobile';

const { Content } = Layout;

export const ContentMobile = (props) => {


    const [addTask, setAddtask] = useState(false)
    const [addProject, setAddProject] = useState(false)


    const { onWrite, position, setOnWrite } = props


    useEffect(() => {

        if (onWrite) {
            if (position) {
                setAddtask(true)
                setAddProject(false)
            } else {
                setAddProject(true)
                setAddtask(false)
            }
        } else {
            setAddtask(false)
            setAddProject(false)
        }


    }, [onWrite])


    return (
        <>
            <Content
                className='scrollable-div-x'
                style={{
                    marginTop: '18vh', // Ajusta este valor para que el contenido no quede detrás del header
                    marginBottom: '2vh', // Ajusta este valor para que el contenido no quede detrás del footer
                    overflowY: 'scroll',
                    height: 'auto', // Ajusta estos valores según el header y footer
                    display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                    flexDirection: 'column',
                    position: 'relative',
                    // backgroundColor: `${bg}70`
                }}
            >

                {
                    position ? <TasksMobile setOnWrite={setOnWrite} onWrite={addTask} />
                        : <></>
                }

            </Content>


        </>
    )
}
