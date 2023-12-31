import React from 'react'
import { MdPadding } from 'react-icons/md'
import { colorSelector } from '../../helpers/images'
import { Button, Row } from 'antd'

export const TaskCardMobile = (props) => {

    const { data, theme, CompleteTask, deleteTask} = props
    return (
        <>
            {
                data.map((card) => (
                    <div style={{
                        width: '90%', height: '20vh',
                        borderRadius: '2vh', marginBottom: '3vh', backgroundColor: `${theme ? '#f7fcf5' : '#27282c'}`,
                        display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column',
                        padding: '0 0 0 5%'

                    }}>

                        <p style={{
                            textAlign: 'left', width: '85%', color:`${colorSelector(card.color)}`,
                            fontWeight: 500, lineHeight: '0.9em',
                            fontSize: '1.5em', 
                            marginTop: '1vh', wordWrap: 'break-word'
                        }}>{card.name}</p>
                        <p
                            style={{
                                textAlign: 'left', width: '85%', color: `${theme ? '#a6b8c9' : '#f1faee80'}`,
                                fontWeight: 'lighter',
                                fontSize: '0.9em',
                                marginTop: '-1vh', wordWrap: 'break-word'
                            }}
                        >{card.description}</p>

                        <Row style={{
                            width:'90%', display:'flex', alignItems:'center', justifyContent:`${card.finished ? 'flex-end' : 'space-between'}`
                        }}>
                            <Button 
                            onClick={() => CompleteTask(card.key)}
                            style={{
                                border:'0px solid #000', backgroundColor:`${colorSelector(card.color)}`,
                                borderRadius:'1.5vh', fontWeight:600, color:`${theme ? '#f7fcf5' : '#27282c'}`,
                                display:`${card.finished ? 'none': ''}`
                            }}>Complete</Button>

                            <Button 
                            onClick={() => deleteTask(card.key)}
                            type='ghost' style={{
                                color:`${colorSelector(card.color)}`,
                                borderRadius:'1.5vh', fontWeight:600,
                            }}>Delete</Button>

                        </Row>

                    </div>
                ))
            }
        </>
    )
}
