import { Button, Progress, Switch } from 'antd'
import React, { useContext, useEffect, useState } from 'react'

import { IoLanguageOutline } from "react-icons/io5";
import { BsFillBrightnessHighFill, BsFillMoonFill } from "react-icons/bs";
import { BsFillCaretRightFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { appContext_ } from '../../context_/appContext_';

export const HeaderApp = () => {


    const avatar = JSON.parse(localStorage.getItem('avatar'))
    const LocalTheme = JSON.parse(localStorage.getItem('theme'))
    const { toggleTheme, taskFinished, taskTotal, subtasksFinished, subtasksTotal } = useContext(appContext_)
    const navigate = useNavigate()

    const [language, setLanguage] = useState(true)
    const [theme, setTheme] = useState(LocalTheme)
    const [selectedItem, setSelectedItem] = useState(true)
    const [avatarDisappear, setAvatarDisappear] = useState(true)
    const [menuDisappear, setMenuDisappear] = useState(false)
    const [tasksDisappear, setTasksDisappear] = useState(false)
    const [projectsDisappear, setProjectsDisappear] = useState(false)
    const [toggle, setToggle] = useState(true)

    const [block, setBlock] = useState(false)

    const [showAvatar, setShowAvatar] = useState(true)

    const disappear = () => {
        setSelectedItem(!selectedItem)

        if (!selectedItem) {
            setAvatarDisappear(false)

            setTimeout(() => {
                setProjectsDisappear(true)
                setTasksDisappear(true)
                setMenuDisappear(true)
            }, 400)
        }

        if (selectedItem) {
            setTimeout(() => {
                setAvatarDisappear(true)
            }, 400)


            setProjectsDisappear(false)
            setTasksDisappear(false)
            setMenuDisappear(false)


        }
    }

    const ToggleFunction = () => {
        if (!block) {
            setToggle(!toggle)
            setTimeout(() => {
                setShowAvatar(!showAvatar)
            }, 500)
        }

    }

    const Logout = (event) => {
        event.stopPropagation();
        navigate('/taskify/login', {
            replace: true
        })
    }

    const customTasks = (percent) => (

        <span style={{ fontWeight: 500, color: '#f1faee' }}>
            {`${percent}%`}
        </span>
    )

    useEffect(() => {
        disappear()
    }, [])

    useEffect(() => {
        toggleTheme(theme)
        //
    }, [theme])

    const swicthTheme = () => {
        setTheme(!theme)
        // window.location.reload()
    }




    return (
        <div className="slider-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >

            {/* <Button onClick={nonHomeLocation()}>nonHome</Button> */}
            {/* backgroundColor: `${theme? '#e4efe1': '#333437'}` */}
            < div
                style={{
                    position: 'relative', alignItems: 'center', justifyContent: 'center', height: '18vh',
                    borderRadius: '2vh', backgroundColor: `${theme ? '#a8dadc' : 'transparent'}`,
                    transition: 'all 0.45s ease-in-out', border: `2px solid ${theme ? '#e4efe1' : '#333437'}`,
                    display: 'flex', flexDirection: 'row'
                }}
                className={`slider-item ${!selectedItem ? 'selected' : 'element'}`}

            >
                <div
                    style={{
                        width: '100%', height: '100%', display: `${avatarDisappear ? 'flex' : 'none'}`, alignItems: 'center',
                        justifyContent: 'center', marginTop: '-2vh', marginRight: '1vh'
                    }}>
                    <h2 
                    className='Taskify'
                    style={{
                        fontFamily: 'Berlin Sans FB', 
                        color: `${theme ? '#e4efe1' : '#8cb8ba'}`, 
                        position: 'absolute',
                        fontWeight: 500, display: `${avatarDisappear ? '' : 'none'}`,
                        letterSpacing: '-1.5vh'
                    }}>
                        Taskify</h2>

                </div>

            </div>

            <Button
                className={`${!selectedItem ? 'icon-left' : 'icon-right'} 'element'`}
                onClick={() => disappear()}
                type='ghost'
                style={{
                    height: '3vh', aspectRatio: '1/1', backgroundColor: 'transparent', marginLeft: `${selectedItem ? '-3vh' : '0.5vh'}`,
                    marginRight: `${!selectedItem ? '-4vh' : '2.5vh'}`, border: '0px solid #000',
                    transition: 'all 0.25s ease-in-out',
                }}
            >
                <BsFillCaretRightFill size={'5vh'} style={{ marginLeft: '-2.5vh', marginTop: '-2vh', color: '#a8dadc' }} />
            </Button>

            < div
                style={{
                    position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.45s ease-in-out',
                }
                }
                className={`slider-item ${selectedItem ? 'selected' : ''}`}
            >
                <div
                    // ${!showAvatar ? '' : `avatar-${avatar}`}
                    className={`${!toggle ? 'avatar-turn' : `menu-turn avatar-${avatar}`}`}
                    onClick={ToggleFunction}
                    style={{
                        height: '18vh', aspectRatio: '1/1', borderRadius: '3vh', backgroundColor: '#a8dadc', cursor: 'pointer', transition: 'all 0.35s ease-in-out',
                        display: `${menuDisappear ? 'flex' : 'none'}`, alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                    }}>

                    <div
                        style={{
                            width: '100%', height: '30%',
                            borderTopRightRadius: '10vh', borderTopLeftRadius: '10vh',
                            borderBottomRightRadius: '2vh', borderBottomLeftRadius: '2vh',
                            display: `${!toggle ? 'flex' : 'none'}`, alignItems: 'center', justifyContent: 'left', marginLeft: '5vh'
                        }}>

                        <IoLanguageOutline size={18} />
                        <Switch
                            onMouseEnter={() => setBlock(true)} onMouseLeave={() => setBlock(false)}
                            // checked={language}
                            checked={true}
                            onChange={() => setLanguage(!language)}
                            checkedChildren={<p style={{ color: '#000', lineHeight: '0em', marginTop: '15%' }}>English</p>} unCheckedChildren={<p style={{ color: '#000', lineHeight: '0.7em', }}>Español</p>}
                            size="small"
                            style={{ marginLeft: '2vh', width: '9vh', backgroundColor: `${theme ? '#e4efe1' : '#8cb8ba'}` }}
                        />

                    </div>

                    <div

                        style={{
                            width: '100%', height: '30%', marginTop: '-5%', marginBottom: '-5vh',
                            borderTopRightRadius: '1vh', borderTopLeftRadius: '1vh', borderBottomRightRadius: '1vh', borderBottomLeftRadius: '1vh',
                            display: `${!toggle ? 'flex' : 'none'}`, alignItems: 'center', justifyContent: 'left', marginLeft: '5vh'
                        }}>

                        <BsFillBrightnessHighFill size={18} />
                        <Switch
                            checked={theme}
                            onMouseEnter={() => setBlock(true)} onMouseLeave={() => setBlock(false)}
                            onChange={swicthTheme}
                            checkedChildren={<p style={{ color: '#000', lineHeight: '0em', marginTop: '15%' }}>Light</p>} unCheckedChildren={<p style={{ color: '#000', lineHeight: '0.7em', }}>Dark</p>}
                            size="small"
                            style={{ marginLeft: '2vh', width: '9vh', backgroundColor: `${theme ? '#e4efe1' : '#8cb8ba'}` }}
                        />


                    </div>

                    <div
                        style={{
                            width: '80%', height: '25%', display: `${!toggle ? 'flex' : 'none'}`, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: '5vh'
                        }}>


                        <Button
                            onClick={Logout}
                            style={{
                                width: '100%', height: '100%', cursor: 'pointer', backgroundColor: `${theme ? '#e4efe1' : '#8cb8ba'}`,
                                borderRadius: '2vh', border: '0px solid #000',
                                display: 'flex', justifyContent: 'center', alignItems: 'center',
                            }}>
                            <p style={{ fontFamily: 'Berlin Sans FB', fontSize: '1.3em', fontWeight: 500 }}>Logout</p>
                        </Button>

                    </div>

                </div>

                <div
                    className={'tasks-background element'}
                    style={{
                        height: '18vh', aspectRatio: '4/3', borderRadius: '3vh', backgroundColor: `${theme?'#f0c145':'#27282c'}`,
                        transition: 'all 0.25s ease-in-out', marginLeft: '3vh', marginRight: '3vh',
                        display: `${tasksDisappear ? 'flex' : 'none'}`, alignItems: 'center',
                        justifyContent: 'center', flexDirection: 'column', cursor: 'default'
                    }}>

                    <div style={{
                        display: `${projectsDisappear ? 'flex' : 'none'}`, alignItems: 'center', height: '8vh', width: '100%', borderBottomLeftRadius: '3vh', borderBottomRightRadius: '3vh',
                        justifyContent: 'center', flexDirection: 'column', backgroundColor: `#f0c145${theme?'50':'90'}`, marginTop: '10vh'
                    }}>

                        <p
                            style={{
                                fontFamily: 'Berlin Sans FB', fontWeight: 400, textAlign: 'center',
                                color: `${theme?'#f1faee':'#f1faee'}`, fontSize: '1.5em', marginBottom: '0vh', marginTop: '0vh'
                            }}>Tasks completed</p>

                        <Progress
                            style={{ width: '80%', }}
                            percent={parseInt(taskFinished * 100 / (taskTotal))}
                            format={customTasks}
                            strokeColor={`${theme?'#f1faee':'#f0c145'}`}
                            strokeWidth={6}
                            trailColor={`${theme?'#f4d07d':'#27282c'}`}
                        />

                    </div>

                </div>

                <div
                    className={'projects-background element'}
                    style={{
                        height: '18vh', aspectRatio: '4/3', borderRadius: '3vh', backgroundColor: `${theme?'#ed9cab':'#27282c'}`,
                        transition: 'all 0.25s ease-in-out',
                        display: `${projectsDisappear ? 'flex' : 'none'}`, alignItems: 'center',
                        justifyContent: 'center', flexDirection: 'column', cursor: 'default'
                    }}>

                    <div style={{
                        display: `${projectsDisappear ? 'flex' : 'none'}`, alignItems: 'center', height: '8vh', width: '100%', borderBottomLeftRadius: '3vh', borderBottomRightRadius: '3vh',
                        justifyContent: 'center', flexDirection: 'column', backgroundColor: `#ed9cab${theme?'50':'90'}`, marginTop: '10vh',
                    }}>

                        <p
                            style={{
                                fontFamily: 'Berlin Sans FB', fontWeight: 400, textAlign: 'center',
                                color: `${theme?'#f1faee':'#f1faee'}`, fontSize: '1.4em', marginBottom: '0vh', marginTop: '0vh'
                            }}>Projects completed</p>

                        <Progress
                            style={{ width: '80%', }}
                            percent={parseInt(subtasksFinished * 100 / (subtasksTotal))}
                            format={customTasks}
                            strokeColor={`${theme?'#f1faee':'#ed9cab'}`}
                            strokeWidth={6}
                            trailColor={`${theme?'#e8b1bc':'#27282c'}`}
                        />

                    </div>
                </div>
            </div>


        </div>

    )
}
