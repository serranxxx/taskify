import React, { useContext, useState } from 'react'
import { Button, Col, Drawer, Layout, Progress, Row } from 'antd';
import { SelectAvatar } from '../../helpers/images';
import { FiLogOut } from 'react-icons/fi';
import { BsMoonFill, BsSun } from 'react-icons/bs';
import { HeaderQuote } from '../../Layout';
import { useNavigate } from 'react-router-dom';
import { appContext_ } from '../../context_/appContext_';
import { MobileQuote } from './MobileQuote';


const { Header } = Layout;
export const HeaderMobile = (props) => {

    const { avatar, theme, setPosition, position } = props
    const [info, setInfo] = useState(false)
    const navigate = useNavigate()
    const { toggleTheme, taskFinished, taskTotal, subtasksFinished, subtasksTotal } = useContext(appContext_)

    const customTasks = (percent) => (

        <span
            className='charts-title'
            style={{ fontWeight: 500, color: `${theme ? '#457b9d' : '#f1faee80'}` }}>
            {`${percent}%`}
        </span>
    )

    return (
        <>
            <Header style={{
                position: 'fixed', zIndex: 1, width: '100%',
                background: `linear-gradient(to bottom, ${theme ? '#457B9D' : '#457B9D80'} , ${theme ? '#457B9D80' : '#333437'} )`,
                height: '15vh',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column',

            }}>

                <Row style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    flexDirection: 'row', width: '100%', height: '50%',
                }}>
                    <img
                        onClick={() => setInfo(true)}
                        src={SelectAvatar(avatar)} style={{
                            height: 50, borderRadius: '70%', transition: 'all 0.25s ease-in-out',
                            cursor: 'pointer'
                        }} />

                    <p style={{
                        fontSize: '3em', fontWeight: 700, color: `${theme ? '#E5EFE1' : '#457B9D'}`, margin: 0
                    }}>Taskify</p>

                    <div style={{ width: 50 }} />
                </Row>

                <Row style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    flexDirection: 'row', width: '80%', margin: 0, height: '30%',
                    position: 'relative'
                }}>
                    <p
                        onClick={() => setPosition(true)}
                        style={{
                            fontSize: '1em', fontWeight: 700, color: `${theme ? position ? '#E5EFE1' : '#E5EFE180' : position?  '#457B9D' : '#457B9D80'}`,
                            cursor: 'pointer', margin: 0
                        }}>Tasks</p>

                    <p
                        onClick={() => setPosition(false)}
                        style={{
                            fontSize: '1em', fontWeight: 700, color: `${theme ? position ? '#E5EFE180' : '#E5EFE1' : position?  '#457B9D80' : '#457B9D'}`,
                            cursor: 'pointer', margin: 0
                        }}>Projects</p>

                    <div style={{
                        width: '5vh', height: '8%', backgroundColor: `${theme ? '#E5EFE1' : '#457B9D'}`,
                        position: 'absolute', left: `${position ? '-1%' : '80%'}`,
                        bottom: '-10px', transition: 'all 0.55s ease-in-out',
                        borderRadius: '2vh'
                    }} />

                </Row>

            </Header>

            <Drawer
                // title={<p style={{ color: `${theme ? '#457b9d' : '#f1faee80'}`, fontWeight: 700, }}>Add task</p>}
                placement="top"
                onClose={() => setInfo(false)}
                // width='100%'
                height='100%'
                open={info}
                style={{
                    backgroundColor: `${theme ? '#E5EFE1' : '#333437'}`,
                }}>

                <Col style={{
                    height: '100%', flexDirection: 'column',
                    display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                    gap: '1.5vh',
                }}>

                    <Col style={{
                        display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center',
                        margin: '0 0 0 0'
                    }}>
                        <img
                            className='button-catalog'
                            src={SelectAvatar(avatar)} style={{
                                height: 110, borderRadius: '50%', transition: 'all 0.25s ease-in-out',
                                margin: '0 0 1vh 0'
                            }} />

                    </Col>


                    <hr style={{
                        width: '30%', border: `2px solid ${theme ? '#CAD6C5' : '#27282c'}`
                    }} />

                    <div
                        style={{
                            alignItems: 'center', height: 'auto', width: 220, display: 'flex', padding: '3% 0 1% 0',
                            justifyContent: 'center', flexDirection: 'column', backgroundColor: `${theme ? '#F1FAEE ' : '#27282c'}`,
                            borderRadius: '1vh'
                        }}>

                        <p
                            style={{
                                fontWeight: 500, textAlign: 'center',
                                color: `${theme ? '#457b9d' : '#f1faee80'}`, marginBottom: '0vh', marginTop: '0vh'
                            }}>Tasks completed</p>

                        <Progress
                            style={{ width: '80%', }}
                            percent={parseInt(taskFinished * 100 / (taskTotal))}
                            format={customTasks}
                            strokeColor={`${theme ? '#457b9d' : '#f1faee80'}`}
                            strokeWidth={6}
                            trailColor={`${theme ? '#cad6c5' : '#27282c'}`}
                        />

                    </div>

                    <div
                        style={{
                            alignItems: 'center', height: 'auto', width: 220, display: 'flex', padding: '3% 0 1% 0',
                            justifyContent: 'center', flexDirection: 'column', backgroundColor: `${theme ? '#F1FAEE ' : '#27282c'}`,
                            borderRadius: '1vh'
                        }}>

                        <p
                            style={{
                                fontWeight: 500, textAlign: 'center',
                                color: `${theme ? '#457b9d' : '#f1faee80'}`, marginBottom: '0vh', marginTop: '0vh'
                            }}>Projects completed</p>

                        <Progress
                            style={{ width: '80%', }}
                            percent={parseInt(subtasksFinished * 100 / (subtasksTotal))}
                            format={customTasks}
                            strokeColor={`${theme ? '#457b9d' : '#f1faee80'}`}
                            strokeWidth={6}
                            trailColor={`${theme ? '#cad6c5' : '#27282c'}`}
                        />

                    </div>


                    <MobileQuote />

                    <hr style={{
                        width: '30%', border: `2px solid ${theme ? '#CAD6C5' : '#27282c'}`
                    }} />

                    <Row style={{
                        display: 'flex', alignContent: 'center', justifyContent: 'space-between', flexDirection: 'row',
                        width: 220, marginTop: '1vh'
                    }}>
                        <Button
                            onClick={() => toggleTheme(!theme)}
                            className='button-catalog'
                            style={{ transition: 'all 0.25s ease-in-out' }}
                            type='ghost'
                            icon={theme ? <BsSun size={25} style={{ color: '#457b9d' }} /> : <BsMoonFill size={20} style={{ color: '#f1faee80' }} />}
                        />

                        <Button
                            onClick={() => navigate('/taskify/login', {
                                replace: true
                            })}
                            className='button-catalog'
                            style={{ transition: 'all 0.25s ease-in-out' }}
                            icon={<FiLogOut size={25} style={{ color: `${theme ? '#457b9d' : '#f1faee80'}` }} />} type='ghost' />

                    </Row>



                </Col>

            </Drawer>
        </>
    )
}
