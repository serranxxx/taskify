import { Button, Radio } from 'antd'
import React from 'react'

export const AvatarCatalog = (props) => {

    return (
        <>
            {props.data.map((dato) => (
                <Button

                    onClick={() => props.finish(dato)}
                    className={`avatar-${dato} button-catalog`}
                    style={{
                        height: '20vh',
                        aspectRatio: '1/1',
                        cursor: 'pointer',
                        marginLeft: '4%',
                        marginTop: '4%',
                        transition: 'transform 0.45s ease-out',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        borderRadius: '0.5vw',
                        flexWrap: 'wrap',
                        border: '0px solid #000'
                    }}
                >

                </Button>

            ))

            }
        </>

    )
}
