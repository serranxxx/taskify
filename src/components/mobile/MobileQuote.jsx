
import React, { useContext, useEffect, useState } from 'react'
import gif from '../../assets/Ellipsis-1s-243px.svg'
import { appContext_ } from '../../context_/appContext_'
import axios from 'axios';
import { Col, Row } from 'antd';
import { FiFeather } from 'react-icons/fi';


export const MobileQuote = () => {

    const rainbow = gif
    const { theme } = useContext(appContext_)
    const [quote_, setQuote] = useState('')
    const [author_, setAuthor] = useState('')
    const [finishResponse, setFinishResponse] = useState(false)

    const fetchQuote = async () => {
        try {
            axios.get('https://api.themotivate365.com/stoic-quote')
                .then(response => {

                    setQuote(response.data.quote)
                    setAuthor(response.data.author)

                })
                .catch(error => {
                    console.error('Error al obtener la frase motivacional:', error);
                });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchQuote()
    }, [])

    useEffect(() => {
        if (quote_.length > 120) {
            fetchQuote()
            setFinishResponse(false)

        }
        else setFinishResponse(true)

    }, [quote_])

    return (

        <div
            style={{
                alignItems: 'center', height: 'auto', width: 200, display: 'flex', padding: '5% 3% 2% 3%',
                justifyContent: 'center', flexDirection: 'column', backgroundColor: `${theme?'#F1FAEE ':'#27282c'}`,
                borderRadius: '1vh'
            }}>

            {
                finishResponse
                    ?
                    <Col style={{padding:'5%'}}>
                        <Row style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexDirection: 'row',  margin:0
                        }}>
                            <p style={{
                                marginRight: '1vh', fontWeight:600, color: `${theme ? '#457b9d' : '#f1faee80'}`
                            }}>{`${author_}`}</p>
                            <FiFeather size={15} style={{ color: `${theme ? '#457b9d' : '#f1faee80'}` }} />
                        </Row>
                        <p
                            style={{
                                // fontFamily: 'Segoe UI',
                                color: `${theme ? '#457b9d' : '#f1faee80'}`,
                                fontWeight: 400,
                                fontSize: '0.9em',
                                textAlign: 'center'
                            }}>{`${quote_}`}</p>
                    </Col>

                    : <img src={rainbow} style={{ height: 'auto', width: '50%' }} />
            }

        </div>




    )
}
