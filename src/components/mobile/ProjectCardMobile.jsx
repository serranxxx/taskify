import { Button, Col, Progress } from 'antd'
import React, { useContext, useState } from 'react'
import { appContext_ } from '../../context_/appContext_'

export const ProjectCardMobile = (props) => {

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

        <span style={{ fontWeight: 500, color: `${theme ? '#a6b8c9' : '#f1faee80'}` }}>
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
                        width: '90%', backgroundColor: `${theme ? '#f7fcf5' : '#27282c'}`,
                        borderRadius: '3vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                        flexDirection: 'row', marginTop: '2vh',
                        transition: 'all 0.35s ease-in-out', cursor: 'pointer', height: '15vh'
                    }}>



                    <Col style={{
                        width: '100%', height: '90%', marginLeft: '0',
                        display: 'flex', alignItems: 'center', flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>

                        <Col style={{
                            width:'100%', display:'flex', alignItems:'center', justifyContent:'flex-start',
                            flexDirection:'column'
                        }}>
                            <p
                                // className='project-title'
                                style={{
                                    textAlign: 'left', width: '85%', color: colorSelector(user.color),
                                    fontWeight: 600,
                                    fontSize: '1.2em', wordWrap: 'break-word',
                                    lineHeight: '0.8em'
                                }}>{user.name}</p>

                            <p
                                // className='project-description'
                                style={{
                                    textAlign: 'left', width: '85%', color: `${theme ? '#a6b8c9' : '#f1faee80'}`,
                                    fontWeight: 'lighter',
                                    fontSize: '1em',
                                    marginTop: '-1vh', wordWrap: 'break-word'
                                }}>{user.description}</p>
                        </Col>


                        <Progress
                            style={{ width: '80%', }}
                            percent={parseInt(user.completed * 100 / (user.total))}
                            format={customTasks}
                            strokeColor={colorLightSelector(user.color)}
                            strokeWidth={6}
                            trailColor={`${colorLightSelector(user.color)}80`}
                        />
                    </Col>




                </div>
            ))}

        </>
    )
}
