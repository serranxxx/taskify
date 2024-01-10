import React, { useContext, useState } from 'react'
import { Button, Col, Drawer, Layout, Progress, Row } from 'antd';
import { SelectAvatar, texts } from '../../helpers/images';
import { FiLogOut } from 'react-icons/fi';
import { BsMoonFill, BsSun } from 'react-icons/bs';
import { HeaderQuote } from '../../Layout';
import { useNavigate } from 'react-router-dom';
import { appContext_ } from '../../context_/appContext_';
import { MobileQuote } from './MobileQuote';
import { CiLogout } from 'react-icons/ci';
import { IoMoonOutline } from 'react-icons/io5';


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
                backgroundColor: theme ? '#4E86A4' : '#27282C',
                borderBottom: theme ? '1px solid #4E86A4' : '1px solid #27282C',
                // background: `linear-gradient(to bottom, ${theme ? '#457B9D' : '#457B9D80'} , ${theme ? '#457B9D80' : '#333437'} )`,
                height: '12vh',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', 
                // position: 'relative'

            }}>
                <img
                    onClick={() => setInfo(true)}
                    src={SelectAvatar(avatar)} style={{
                        height: 40, borderRadius: '70%', transition: 'all 0.25s ease-in-out',
                        cursor: 'pointer', position: 'absolute', left: '20px', top: '20px'
                    }} />

                <img src={texts.textlight} style={{
                    height: '30%', marginTop: '10px',
                    marginBottom: '-10px', opacity: theme ? '' : '0.5'
                }} />


                <Row style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    flexDirection: 'row', width: '100%', margin: 0,
                    height: '40%',
                    position: 'relative'
                }}>
                    <p
                        onClick={() => setPosition(true)}
                        style={{
                            fontSize: '1em', fontWeight: 700, color: `${theme ? position ? '#E5EFE1' : '#E5EFE180' : position ? '#457B9D' : '#457B9D80'}`,
                            cursor: 'pointer', margin: 0
                        }}>Tasks</p>

                    <p
                        onClick={() => setPosition(false)}
                        style={{
                            fontSize: '1em', fontWeight: 700, color: `${theme ? position ? '#E5EFE180' : '#E5EFE1' : position ? '#457B9D80' : '#457B9D'}`,
                            cursor: 'pointer', margin: 0
                        }}>Projects</p>

                    <div style={{
                        width: '50%', height: '4px',
                        backgroundColor: `${theme ? '#E5EFE1' : '#457B9D'}`,
                        position: 'absolute',
                        right: position ? '' : '-40px',
                        left: position ? '-40px' : '',
                        bottom: '-10px',
                        transition: 'all 0.55s ease-in-out',
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
                    width: '100%', flexDirection: 'column',
                    display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                    gap: '1.5vh',
                }}>

                    <img
                        className='button-catalog'
                        src={SelectAvatar(avatar)} style={{
                            width:'50%', borderRadius: '3vh', transition: 'all 0.25s ease-in-out',
                            margin: '0 0 1vh 0'
                        }} />

                    <hr style={{
                        width: '30%', border: `1px solid ${theme ? '#CAD6C580' : '#27282c99'}`
                    }} />

                    <div
                        style={{
                            alignItems: 'center', height: 'auto', width: '90%', display: 'flex', padding: '3% 0 1% 0',
                            justifyContent: 'center', flexDirection: 'column', backgroundColor: `${theme ? '#F1FAEE ' : '#27282c'}`,
                            borderRadius: '3vh'
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
                            alignItems: 'center', height: 'auto', width: '90%', display: 'flex', padding: '3% 0 1% 0',
                            justifyContent: 'center', flexDirection: 'column', backgroundColor: `${theme ? '#F1FAEE ' : '#27282c'}`,
                            borderRadius: '3vh'
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
                        width: '30%', border: `1px solid ${theme ? '#CAD6C580' : '#27282c99'}`
                    }} />

                    <Row style={{
                        display: 'flex', alignContent: 'center', justifyContent: 'space-between', flexDirection: 'row',
                        width: '85%', marginTop: '1vh'
                    }}>
                        <Button
                            onClick={() => toggleTheme(!theme)}
                            className='button-catalog'
                            style={{ transition: 'all 0.25s ease-in-out' }}
                            type='ghost'
                            icon={theme ? <BsSun size={25} style={{ color: '#457b9d' }} /> : <IoMoonOutline size={20} style={{ color: '#f1faee80' }} />}
                        />

                        <Button
                            onClick={() => navigate('/taskify/login', {
                                replace: true
                            })}
                            className='button-catalog'
                            style={{ transition: 'all 0.25s ease-in-out' }}
                            icon={<CiLogout size={25} style={{ color: `${theme ? '#457b9d' : '#f1faee80'}` }} />} type='ghost' />

                    </Row>



                </Col>

            </Drawer>
        </>
    )
}
