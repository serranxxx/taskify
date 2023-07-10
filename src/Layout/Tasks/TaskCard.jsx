import { Button } from 'antd'
import React, { useContext, useState } from 'react'
import { appContext_ } from '../../context_/appContext_'

export const TaskCard = (props) => {

    const [counter, setCounter] = useState(0)
    const { theme } = useContext(appContext_)

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

    const handleClick = (taskName, taskDescription, taskImage, taskBackground, taskStatus, taskKey) => {
        const background = colorSelector(taskBackground)
        props.OnCurrentTask(taskName, taskDescription, taskImage, background, taskStatus, taskKey)
    }

    return (

        <>
            {props.data.map((user) => (

                <div
                    key={user.key}
                    className='element'
                    onClick={() => handleClick(user.name, user.description, user.image, user.color, user.finished, user.key)}
                    style={{
                        height: '25vh', width: '22vh', backgroundColor: `${theme ? '#f7fcf5' : '#27282c'}`,
                        borderRadius: '1.5vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                        flexDirection: 'column', marginTop: '3vh', marginRight: '3vh', marginLeft: '1vh',
                        transition: 'all 0.35s ease-in-out', cursor: 'pointer'
                    }}>

                    <div
                        className={`image-${user.image ? user.image : (Math.floor(Math.random() * 12) + 1)}`}
                        style={{
                            height: '15vh', width: '20vh', backgroundColor: `${colorSelector(user.color)}`,
                            borderRadius: '1vh', marginTop: '1vh'
                        }} />

                    <p
                        className='card-title'
                        style={{
                            textAlign: 'left', width: '85%', fontFamily: 'Berlin Sans FB', color: `${theme ? '#1d3557' : `${colorSelector(user.color)}`}`,
                            fontWeight: 400,
                            // fontSize: '1.5em', 
                            marginTop: '0.5vh', wordWrap: 'break-word'
                        }}>{user.name}</p>

                    <p
                        className='card-description'
                        style={{
                            textAlign: 'left', width: '85%', color: `${theme ? '#a6b8c9' : '#f7fcf5'}`,
                            fontWeight: 'lighter',
                            // fontSize: '0.9em', 
                            marginTop: '-2vh', wordWrap: 'break-word'
                        }}>{user.description}</p>


                </div>
            ))}

        </>
    )
}
