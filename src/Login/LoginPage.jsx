import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Drawer, Form, Input, Row, Radio, message } from 'antd';
import { ProfileButton } from './ProfileButton'
import { AvatarCatalog } from './AvatarCatalog';
import { appContext_ } from '../context_/appContext_';
import { useNavigate } from 'react-router-dom';


export const LoginPage = () => {


    const [open, setOpen] = useState(false);
    const [openSmall, setOpenSmall] = useState(false)
    const Avatars = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const { setAvatar, selectAvavatar, theme, } = useContext(appContext_)
    const [newAvatar, setNewAvatar] = useState([])
    const navigate = useNavigate()

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const handleFinish = (newAvatar_) => {
        if (newAvatar.length >= 4) message.warning("You cannot have more than 4 avatars")
        else {
            setNewAvatar([...newAvatar, newAvatar_])
            setAvatar([...newAvatar, newAvatar_])
            setOpen(false);
        }
    }

    const handleClick = (user) => {
        console.log(user);
        if (newAvatar.length === 1) message.warning("You cannot run out of avatars")
        else {
            const nuevoVector = newAvatar.filter((elemento) => elemento !== user);
            setNewAvatar(nuevoVector)
            setAvatar(nuevoVector)
        }
    };

    const handleLogin = (user) => {

        selectAvavatar(user)
        navigate('/taskify/layout', {
            replace: true
        })
    }

    useEffect(() => {
        const avatar = JSON.parse(localStorage.getItem('avatars'))
        console.log(avatar)
        if (avatar) {
            setNewAvatar(avatar)
            console.log('no hay')
        } else {

            const initAvatar = [(Math.floor(Math.random() * 9) + 1)]
            localStorage.setItem('avatars', JSON.stringify(initAvatar))
            setNewAvatar(initAvatar)
            console.log(initAvatar)

        }
        // 
    }, [])


    return (
        <div
            style={{
                height: '100vh', width: '100%v', backgroundColor: `${theme ? '#f1faee' : '#333437'}`,
                diaplay: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
            }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', height: '30%', }}>
                <p
                    style={{
                        fontSize: '3em', fontWeight: 'normal', lineHeight: '0em',
                        fontWeight: 'bolder',
                        // fontFamily: 'Segoe UI',
                        color: `${theme ? '#1d344799' : '#f1faee99'}`
                    }}>Who's here?</p>
            </div>

            <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'row', flexWrap: 'wrap'
            }}>
                {
                    newAvatar
                        ? <ProfileButton users={newAvatar} handleClick={handleClick} onLogin={handleLogin} />
                        : <></>
                }

            </div>

            <div style={{
                display: 'flex', alignItems: 'flex-start', justifyContent: 'center', height: '30%',
                fontWeight: 'normal', marginTop: '2%',
                // fontWeight:400
            }}>
                <p style={{
                    color: `${theme ? '#1d344780' : '#f1faee80'}`, wordWrap: 'break-word',
                }}
                >Do you want another avatar?
                    <a style={{
                        color: `${theme ? '#a8dadc' : '#f0c145'}`, cursor: 'pointer',
                        fontWeight: 600
                    }} onClick={showDrawer}
                    > Add avatar</a></p>
            </div>

            {/* <div style={{
                display: 'flex', alignItems: 'flex-start', justifyContent: 'center', height: '30%',
                fontWeight: 'normal', marginTop: '2%',
                // fontWeight:400
            }}>
                <p style={{
                    color: `${theme ? '#1d344780' : '#f1faee80'}`, wordWrap: 'break-word',
                }}
                >Do you want another avatar?
                    <a style={{
                        color: `${theme ? '#a8dadc' : '#f0c145'}`, cursor: 'pointer',
                        fontWeight: 600
                    }} onClick={() => setOpenSmall(true)}
                    > Add avatar</a></p>
            </div> */}

            <Drawer
                width={'65%'}
                className='large'
                style={{ backgroundColor: `${theme ? '#f1faee' : '#333437'}`, transition: 'transform 0.99s ease-out' }}
                placement="right" onClose={onClose} open={open}>
                <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                    width: '100%'
                }}>
                    <p className='Quote'
                        style={{
                            fontWeight: 400, color: `${theme ? '#1d344799' : '#f1faee99'}`,
                            margin: '0 0 3vh 0'
                        }}>
                        Select a new avatar</p>

                    <Row style={{
                        width: '100%', display: 'flex', alignItems: 'center',
                        flexDirection: 'row', justifyContent: 'center'
                    }}>
                        <AvatarCatalog data={Avatars} finish={handleFinish} />
                    </Row>



                </div>
            </Drawer >

            <Drawer
                width={'100%'}
                className='small'
                style={{ backgroundColor: `${theme ? '#f1faee' : '#333437'}`, transition: 'transform 0.99s ease-out' }}
                placement="right" onClose={() => setOpenSmall(false)} open={openSmall}>
                <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                    width: '100%'
                }}>
                    <p className='Quote'
                        style={{
                            fontWeight: 400, color: `${theme ? '#1d344799' : '#f1faee99'}`,
                            margin: '0 0 3vh 0'
                        }}>
                        Select a new avatar</p>

                    <Row style={{
                        width: '100%', display: 'flex', alignItems: 'center',
                        flexDirection: 'row', justifyContent: 'center'
                    }}>
                        <AvatarCatalog data={Avatars} finish={handleFinish} />
                    </Row>



                </div>
            </Drawer >
        </div >
    )
}
