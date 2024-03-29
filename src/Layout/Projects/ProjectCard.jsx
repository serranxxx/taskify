import { Button, Col, Progress } from 'antd'
import React, { useContext, useState } from 'react'
import { appContext_ } from '../../context_/appContext_'

export const ProjectCard = (props) => {

    const { theme } = useContext(appContext_)
    const [counter, setCounter] = useState(0)


    const sumCounter = () => {
        setCounter(counter + counter + 1)
        return counter
    }

    const colorSelector = (index) => {
        switch (index) {
            case 1:
                return '#3e92c4'
            case 2:
                return '#8ed4fd'
            case 3:
                return '#f0c145'
            case 4:
                return '#55a6d9'
            case 5:
                return '#204b98'
            case 6:
                return '#ed9cab'
            case 7:
                return '#d5ecfa'
            case 8:
                return '#89e8e0'
            case 9:
                return '#956888'
            case 10:
                return '#6edfc7'
            default:
                return '#f0c145';
        }
    }

    const colorLightSelector = (index) => {
        switch (index) {
            case 1:
                return '#449ecc'
            case 2:
                return '#abe3ff'
            case 3:
                return '#f4d07d'
            case 4:
                return '#6fb9dd'
            case 5:
                return '#3361a3'
            case 6:
                return '#e8b1bc'
            case 7:
                return '#f0faff'
            case 8:
                return '#a9eae2'
            case 9:
                return '#9e8598'
            case 10:
                return '#91e5d1'
            default:
                return '#f4d07d';
        }

    }

    const customTasks = (percent) => (

        <span style={{ fontWeight: 500, color: `${theme ? '#f1faee' : '#f7fcf5'}` }}>
            {`${percent}%`}
        </span>
    )

    const handleClick = (projectName, projectDescription, projectImage, projectBackground, projectStatus, projectKey, total, completed) => {
        const background = colorSelector(projectBackground)
        const lightColor = colorLightSelector(projectBackground)
        props.OnCurrentProject(projectName, projectDescription, projectImage, background, projectStatus, projectKey, lightColor, total, completed)
    }

    return (

        <>
            {props.data.map((user) => (

                <div
                    key={user.key}
                    className='element login-card'
                    onClick={() => handleClick(user.name, user.description, user.image, user.color, user.finished, user.key, user.total, user.completed)}
                    style={{
                        width: '98%', backgroundColor: `${theme ? '#f7fcf5' : '#27282c'}`,
                        borderRadius: '3vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                        flexDirection: 'row', marginTop: '3vh', marginRight: '3vh', marginLeft: '1vh',
                        transition: 'all 0.35s ease-in-out', cursor: 'pointer', height:'17vh'
                    }}>

                    <div

                        style={{
                            height: '90%', width:'30%', backgroundColor: `${colorSelector(user.color)}`,
                            borderRadius: '2.5vh', marginLeft: '1vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexDirection: 'column',
                        }} >

                        <div className={`image-${user.image ? user.image : (Math.floor(Math.random() * 12) + 1)}`}
                            style={{
                                height: '85%', width: '100%',
                            }}>

                        </div>

                        <div style={{
                            display: 'flex', alignItems: 'center', height: '20%', width: '100%',
                            justifyContent: 'center', flexDirection: 'column',
                            padding:'3%'
                        }}>

                            <Progress
                                style={{ width: '90%', }}
                                percent={parseInt(user.completed * 100 / (user.total))}
                                format={customTasks}
                                strokeColor={`${theme ? '#f1faee' : '#f1faee80'}`}
                                strokeWidth={6}
                                trailColor={colorLightSelector(user.color)}
                            />

                        </div>


                    </div>

                    <Col style={{
                        width: '70%', 
                        height: '90%', 
                        // marginLeft: '1vh',
                        display: 'flex', alignItems: 'center', flexDirection: 'column',
                        justifyContent:'flex-start'
                    }}>
                        <p
                            // className='project-title'
                            style={{
                                textAlign: 'left', width: '95%',  color: `${theme ? '#1d3557' : '#f1faee80'}`,
                                fontWeight: 600,
                                fontSize: '1.4em',
                                marginTop: '1.5vh', wordWrap: 'break-word',
                                margin:0
                                // lineHeight: '0.8em'
                            }}>{user.name}</p>

                        <p
                            // className='project-description'
                            style={{
                                textAlign: 'left', width: '95%', color: `${theme ? '#a6b8c9' : '#f1faee80'}`,
                                fontWeight: 'lighter',
                                fontSize: '1em', 
                                marginTop: '1vh', wordWrap: 'break-word'
                            }}>{user.description}</p>
                    </Col>




                </div>
            ))}

        </>
    )
}
