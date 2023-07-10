
import React, { useContext, useEffect, useState } from 'react'
import gif from '../../assets/Ellipsis-1s-243px.svg'
import { appContext_ } from '../../context_/appContext_'
import axios from 'axios';


export const HeaderQuote = () => {

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
        if (quote_.length > 150) {
            fetchQuote()
            setFinishResponse(false)

        }
        else setFinishResponse(true)

    }, [quote_])

    return (
        <div 
        className='div-quote'
        style={{
            height: '70%', width: '80%', cursor: 'default',
            display: 'flex', alignItems: 'center', justifyContent: 'center',

        }}>
            {
                finishResponse
                    ? <p
                        className='Quote'
                        style={{
                            fontFamily: 'Segoe UI', 
                            color: `${theme ? '#1d3557' : '#e3e3e3'}`,
                            fontWeight: 500,
                            // fontSize: '1.7em', 
                            textAlign: 'center'
                        }}>{`${quote_} — ${author_}`}</p>
                    : <img src={rainbow} style={{ height: '40vh', width: '50vh' }} />
            }


        </div>

    )
}
