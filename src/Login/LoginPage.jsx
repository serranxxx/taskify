import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Drawer, Form, Input, Row, Radio, message } from 'antd';
import { ProfileButton } from './ProfileButton'
import { AvatarCatalog } from './AvatarCatalog';
import { appContext_ } from '../context_/appContext_';
import { useNavigate } from 'react-router-dom';


export const LoginPage = () => {


    const [open, setOpen] = useState(false);
    const Avatars = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const { setAvatar, selectAvavatar, theme,  } = useContext(appContext_)
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
                <h1 style={{
                    fontSize: '350%', fontFamily: 'Berlin Sans FB', fontWeight: 'normal', lineHeight: '0em',
                    color: `${theme ? '#1d3447' : '#f1faee'}`
                }}>Who's here?</h1>
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
                fontFamily: 'Berlin Sans FB', fontWeight: 'normal', marginTop: '2%'
            }}>
                <p style={{ fontSize: '120%', color: `${theme ? '#1d3447' : '#f1faee'}`, wordWrap: 'break-word' }}
                >Do you want another avatar?
                    <a style={{ color: `${theme ? '#a8dadc' : '#f0c145'}`, cursor: 'pointer' }} onClick={showDrawer}
                    > Add avatar</a></p>
            </div>

            <Drawer
                width={'45%'}
                style={{ backgroundColor: `${theme ? '#f1faee' : '#333437'}`, transition: 'transform 0.99s ease-out' }}
                placement="right" onClose={onClose} open={open}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '35%', }}>
                        <h1 style={{ fontSize: '2.5em', fontFamily: 'Berlin Sans FB', fontWeight: 'normal', color: `${theme ? '#1d3447' : '#f1faee'}` }}>Select avatar</h1>
                    </div>

                    <Col style={{ width: '100%', }}>

                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '0%' }}>
                            <Col style={{ width: '92%', fontSize: '1.2em', color: `${theme ? '#1d3447' : '#f1faee'}`, fontFamily: 'Berlin Sans FB', fontWeight: 'normal', }}>

                                <div
                                    className={`${theme ? 'scrollable-div' : 'scrollable-div-dark'}`}
                                    style={{
                                        width: '95%', display: 'flex', alignItems: 'center',
                                        justifyContent: 'center', flexWrap: 'wrap'
                                    }}>

                                    <AvatarCatalog data={Avatars} finish={handleFinish} />

                                </div>

                            </Col>
                        </div>

                    </Col>

                </div>
            </Drawer >
        </div >
    )
}
