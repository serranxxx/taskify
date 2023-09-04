import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Drawer, FloatButton, Form, Input, Layout, Row } from 'antd';
import { TaskCardMobile } from './TaskCardMobile';
import { appContext_ } from '../../context_/appContext_';
import { TbTextPlus } from "react-icons/tb";
import { images_ } from '../../helpers/images';

const { Content } = Layout;

export const ContentMobile = (props) => {

    const { setTasks, tasks, taskFinished, setFinishedTask, setTotalTask, theme } = useContext(appContext_)
    const [visible, setVisible] = useState(false)
    const [form] = Form.useForm()
    const { CreateNewTask } = props

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

                <TaskCardMobile data={tasks} theme={theme} />

                <Button 
                onClick={() => setVisible(true)}
                icon={<TbTextPlus size={25} style={{ color: '#f7fcf5' }} />}
                    style={{
                        height: '60px', width: '60px', opacity: '0.5', backgroundColor: '#457B9D',
                        position: 'absolute', bottom: '70px', right: '30px',
                        borderRadius: '50%'
                    }} />



            </Content>

            <Drawer
                title={<p style={{ color: `${theme ? '#457b9d' : '#f1faee80'}`, fontWeight: 700, }}>Add task</p>}
                placement="left"
                onClose={() => setVisible(false)}
                width='100%'
                // height='100%'
                open={visible}
                style={{
                    backgroundColor: `${theme ? '#E5EFE1' : '#333437'}`,
                }}>

                <div
                    style={{
                        width: '100%', height: '100%',
                        display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column',

                    }}>

                    <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', width: "80%",
                        flexDirection: 'column'
                    }}>
                        <div style={{
                            height: '40vh'
                        }}>
                            <img src={images_.img_1} style={{ height: '100%', marginTop: '5vh' }} />
                        </div>



                        <Form
                            // form={form1}
                            name="myForm_1"
                            form={form}
                            style={{
                                height: '100%', width: '100%',
                            }}
                            // onFinish={CreateNewTask}
                            >



                            <Form.Item
                                name="name"
                                style={{ marginTop: '10vh', width: '100%' }}
                                rules={[{
                                    required: true, message: 'Your task must have a name'
                                }]}
                            >
                                <Input placeholder="Task name"
                                    // className='project-inputs'
                                    style={{
                                        width: '100%',
                                        backgroundColor: `${theme ? '#f7fcf5' : '#27282c'}`, fontWeight: 500,
                                        fontWeight: '1em', color: `${theme ? '' : '#f1faee80'}`, border: `${theme ? '' : '0px solid #000'}`
                                    }} />

                            </Form.Item>

                            <Form.Item
                                name="description"
                                style={{ marginTop: '-2vh', marginBottom: '1vh', width: '100%' }}
                            >
                                <Input.TextArea
                                    placeholder="Description"
                                    // className='project-inputs'
                                    style={{
                                        width: '100%', resize: 'none', backgroundColor: `${theme ? '#f7fcf5' : '#27282c'}`,
                                        overflow: 'auto', overflowY: 'auto', overflowX: 'hidden', color: `${theme ? '' : '#f1faee80'}`,
                                        border: `${theme ? '' : '0px solid #000'}`
                                    }}
                                    autoSize={{ minRows: 5, maxRows: 10 }}  // Ajusta automáticamente la altura según el contenido
                                    wrap="soft"  // Permite el wrap automático del texto
                                />

                            </Form.Item>

                            <Form.Item
                                className='project-inputs'
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginTop: '3vh'
                                }}>
                                <Button htmlType="submit"
                                    style={{
                                        backgroundColor: `${theme ? '#457b9d' : '#f1faee80'}`, fontWeight: 500,
                                        border: '0px solid #a8dadb', color: `${theme ? '#E5EFE1' : '#333437'}`, width: '15vh',
                                        borderRadius: '3vh', marginLeft: '3vh'
                                    }}>Add</Button>
                            </Form.Item>



                        </Form>

                    </div>


                </div>
            </Drawer>
        </>
    )
}
