import React from 'react'
import { MdPadding } from 'react-icons/md'
import { colorSelector } from '../../helpers/images'
import { Button, Col, Row } from 'antd'
import { BsCheckLg } from 'react-icons/bs'
import { FaRegTrashAlt } from 'react-icons/fa'

export const TaskCardMobile = (props) => {

    const { data, theme, CompleteTask, deleteTask } = props
    return (
        <>
            {
                data.map((card) => (
                    <div style={{
                        width: '90%', height: '18vh',
                        borderRadius: '3vh', marginBottom: '2vh', backgroundColor: `${theme ? '#f7fcf5' : '#27282c'}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column',
                        padding: '5% 0 3% 0%'

                    }}>
                        <Col style={{
                            width: '90%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                            <p style={{
                                textAlign: 'left', width: '95%', color: `${colorSelector(card.color)}`,
                                fontWeight: 500, lineHeight: '0.9em',
                                fontSize: '1.2em',
                                marginTop: '1vh', wordWrap: 'break-word'
                            }}>{card.name}</p>
                            <p
                                style={{
                                    textAlign: 'left', width: '85%', color: `${theme ? '#a6b8c9' : '#f1faee80'}`,
                                    fontWeight: 'lighter',
                                    fontSize: '1em',
                                    marginTop: '-1vh', wordWrap: 'break-word'
                                }}
                            >{card.description}</p>
                        </Col>



                        <Row style={{
                            width: '90%', display: 'flex', alignItems: 'center',
                            justifyContent: 'flex-end'

                        }}>

                            <Button
                                icon={<BsCheckLg style={{ color: !theme ? '#27282C' : '#F1FAEE', }} />}
                                onClick={() => CompleteTask(card.key)}
                                style={{
                                    border: '0px solid #000', 
                                    backgroundColor: theme ? colorSelector(card.color) :`${colorSelector(card.color)}99`,
                                    borderRadius: '3vh', fontWeight: 600, color: `${theme ? '#f7fcf5' : '#27282c'}`,
                                    display: `${card.finished ? 'none' : 'flex'}`,
                                    marginRight:'5px',
                                    alignItems: 'center', justifyContent: 'center',
                                }}>Complete</Button>
                            <Button
                                icon={<FaRegTrashAlt size={13} style={{color: `${theme ? '#f7fcf5' : '#27282c'}`,}} />}
                                onClick={() => deleteTask(card.key)}
                                type='ghost' style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    borderRadius: '3vh', backgroundColor: theme ? colorSelector(card.color) :`${colorSelector(card.color)}99`,
                                    color: `${theme ? '#f7fcf5' : '#27282c'}`,border: '0px solid #000',
                                }}>
                                    {card.finished ? 'Delete' : ''}
                                </Button>




                        </Row>

                    </div>
                ))
            }
        </>
    )
}
