import React, { useContext } from 'react'
import { Button, Col, Layout, Progress, Row } from 'antd';
import { UserOutlined, EditFilled, DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import { BsSun, BsMoonFill } from "react-icons/bs";
import { IoMoonOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { FiFeather } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { SelectAvatar, avatars } from '../../helpers/images';
import { HeaderQuote } from '../../Layout';
import { appContext_ } from '../../context_/appContext_';
import Link from 'antd/es/typography/Link';
import { useNavigate } from 'react-router-dom';
const { Sider } = Layout;

export const SiderApp = (props) => {

    const { collapsed, setCollapsed, theme, avatar } = props
    const navigate = useNavigate()
    const { toggleTheme, taskFinished, taskTotal, subtasksFinished, subtasksTotal } = useContext(appContext_)

    const customFormatDark = (percent) => (
        <span style={{ fontWeight: 'bold', color: `${theme ? '#457b9d' : '#f1faee80'}` }}>
            {`${percent}%`}
        </span>
    )

    const customTasks = (percent) => (

        <span
            className='charts-title'
            style={{ fontWeight: 500, color: `${theme ? '#457b9d' : '#f1faee80'}` }}>
            {`${percent}%`}
        </span>
    )

    return (
        <Sider
            trigger={<div
                style={{
                    backgroundColor: `${theme ? '#CAD6C5' : '#27282c'}`
                }} >
                {collapsed
                    ? <DoubleRightOutlined style={{ color: `${theme ? '#E5EFE1' : '#f1faee80'}` }} />
                    : <DoubleLeftOutlined style={{ color: `${theme ? '#E5EFE1' : '#f1faee80'}` }} />}</div>}
            collapsed={collapsed}
            onCollapse={setCollapsed}
            collapsible
            collapsedWidth={100}
            width={200}
            style={{
                height: '100vh', width: '100%',
                backgroundColor: `${theme ? '#E5EFE1' : '#333437'}`, transition: 'all 0.25s ease-in-out',
                // boxShadow: '8px 0px 15px #00000010',
                borderRight: theme ?  '1px solid #CAD6C580' : '1px solid #27282C',
                display: 'flex', alignItems: 'center', justifyContent: 'center',

            }}
        >
            {
                collapsed ?
                    <Col style={{
                        height: '100%', width: '100%', flexDirection: 'column',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        gap: '5vh'
                    }}>

                        <img
                            className='button-catalog'
                            src={SelectAvatar(avatar)} style={{
                                width:'70%', borderRadius: '50%', transition: 'all 0.25s ease-in-out',
                            }} />

                        <hr style={{
                            width: '70%', border: `1px solid ${theme ? '#CAD6C580' : '#27282c99'}`
                        }} />

                        <Progress
                            className='button-catalog'
                            style={{ transition: 'all 0.25s ease-in-out' }}
                            type="circle" percent={parseInt(taskFinished * 100 / (taskTotal))} size={65}
                            format={customFormatDark}
                            strokeColor={`${theme ? '#457b9d' : '#f1faee80'}`}
                            strokeWidth={10}
                            trailColor={`${theme ? `#CAD6C5` : '#27282c'}`} />

                        <Progress
                            className='button-catalog'
                            style={{ transition: 'all 0.25s ease-in-out' }}
                            type="circle" percent={parseInt(subtasksFinished * 100 / (subtasksTotal))} size={65}
                            format={customFormatDark}
                            strokeColor={`${theme ? '#457b9d' : '#f1faee80'}`}
                            strokeWidth={10}
                            trailColor={`${theme ? `#CAD6C5` : '#27282c'}`} />

                        <Button
                            onClick={() => setCollapsed(false)}
                            className='button-catalog'
                            style={{
                                height: 60, borderRadius: '50%', backgroundColor: `${theme ? '#457b9d' : '#f1faee60'}`, 
                                width: 60,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                transition: 'all 0.25s ease-in-out', border: '0px solid #000'
                            }}>
                            <div style={{
                                height: 55, borderRadius: '50%', backgroundColor: `${theme ? '#e5efe1' : '#333437'}`, aspectRatio: '1/1',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <FiFeather size={25} style={{ color: `${theme ? '#457b9d' : '#f1faee60'}` }} />
                            </div>

                        </Button>

                        <hr style={{
                            width: '70%', border: `1px solid ${theme ? '#CAD6C580' : '#27282c99'}`
                        }} />

                        <Button
                            onClick={() => toggleTheme(!theme)}
                            className='button-catalog'
                            style={{ transition: 'all 0.25s ease-in-out' }}
                            icon={theme ? <BsSun size={35} style={{ color: '#457b9d' }} /> : <IoMoonOutline size={25} style={{ color: '#f1faee80' }} />}
                            type='ghost' />


                        <Button
                            onClick={() => navigate('/taskify/login', {
                                replace: true
                            })}
                            className='button-catalog'
                            style={{ transition: 'all 0.25s ease-in-out' }}
                            icon={<CiLogout size={30} style={{ color: `${theme ? '#457b9d' : '#f1faee80'}` }} />} type='ghost' />



                    </Col>

                    : <Col style={{
                        height: '100%', flexDirection: 'column',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        gap: '3vh', padding: '12% 0 12% 0'
                    }}>

                        <Col style={{
                            display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center',
                            margin: '0 0 0 0', width: '100%'
                        }}>
                            <div style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                width: '85%',
                                borderRadius: '3vh',
                                backgroundColor: theme ? '#CAD6C5' : '#27282C'
                            }}>
                                <img
                                    className='button-catalog'
                                    src={SelectAvatar(avatar)} style={{
                                        width: '95%', borderRadius: '2.5vh', transition: 'all 0.25s ease-in-out',
                                        margin: '0.5vh 0 0.5vh 0',
                                    }} />
                            </div>

                        </Col>


                        <hr style={{
                            width: '70%', border: `1px solid ${theme ? '#CAD6C580' : '#27282c99'}`,
                            borderRadius: '3vh'
                        }} />

                        <Col style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                            width: '100%'
                        }}>
                            <div
                                style={{
                                    alignItems: 'center', height: 'auto', width: 170, display: 'flex',
                                    padding: '10% 10% 2% 10%',
                                    justifyContent: 'center', flexDirection: 'column', backgroundColor: `${theme ? '#F1FAEE ' : '#27282c'}`,
                                    borderRadius: '1vh', marginBottom:'1vh'
                                }}>

                                <p
                                    style={{
                                        fontWeight: 500, textAlign: 'center',
                                        color: `${theme ? '#457b9d' : '#f1faee80'}`,
                                        marginBottom: '0vh', marginTop: '0vh'
                                    }}>Tasks completed</p>

                                <Progress
                                    style={{ width: '100%', }}
                                    percent={parseInt(taskFinished * 100 / (taskTotal))}
                                    format={customTasks}
                                    strokeColor={`${theme ? '#457b9d' : '#f1faee80'}`}
                                    strokeWidth={6}
                                    trailColor={`${theme ? '#cad6c5' : '#333437'}`}
                                />

                            </div>

                            <div
                                style={{
                                    alignItems: 'center', height: 'auto', width: 170, display: 'flex',
                                    padding: '10% 10% 2% 10%',
                                    justifyContent: 'center', flexDirection: 'column', backgroundColor: `${theme ? '#F1FAEE ' : '#27282c'}`,
                                    borderRadius: '1vh', marginBottom:'1vh'
                                }}>

                                <p
                                    style={{
                                        fontWeight: 500, textAlign: 'center',
                                        color: `${theme ? '#457b9d' : '#f1faee80'}`, marginBottom: '0vh', marginTop: '0vh'
                                    }}>Projects completed</p>

                                <Progress
                                    style={{ width: '100%', }}
                                    percent={parseInt(subtasksFinished * 100 / (subtasksTotal))}
                                    format={customTasks}
                                    strokeColor={`${theme ? '#457b9d' : '#f1faee80'}`}
                                    strokeWidth={6}
                                    trailColor={`${theme ? '#cad6c5' : '#333437'}`}
                                />

                            </div>
                            <HeaderQuote />
                        </Col>




                       

                        <hr style={{
                            width: '70%', border: `1px solid ${theme ? '#CAD6C580' : '#27282c99'}`,
                            borderRadius:'3vh'
                        }} />

                        <Row style={{
                            display: 'flex', alignContent: 'center', justifyContent: 'space-between', flexDirection: 'row',
                            width: '90%', 
                            // marginTop: '5vh'
                        }}>
                            <Button
                                onClick={() => toggleTheme(!theme)}
                                className='button-catalog'
                                style={{ transition: 'all 0.25s ease-in-out' }}
                                type='ghost'
                                icon={theme ? <BsSun size={20} style={{ color: '#457b9d' }} /> : <IoMoonOutline size={20} style={{ color: '#f1faee80' }} />}
                            />

                            <Button
                                onClick={() => navigate('/taskify/login', {
                                    replace: true
                                })}
                                className='button-catalog'
                                style={{ transition: 'all 0.25s ease-in-out' }}
                                icon={<CiLogout size={20} style={{ color: `${theme ? '#457b9d' : '#f1faee80'}` }} />} type='ghost' />

                        </Row>



                    </Col>


            }





        </Sider>
    )
}
