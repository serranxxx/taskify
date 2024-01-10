import { Button, Radio } from 'antd'
import React from 'react'

export const AvatarCatalog = (props) => {

    return (
        <>
            {props.data.map((dato) => (
                <>
                    <Button

                        onClick={() => props.finish(dato)}
                        className={`avatar-${dato} button-catalog login-card large`}
                        style={{
                            aspectRatio: '1/1',
                            cursor: 'pointer',
                            marginLeft: '2%',
                            marginTop: '2%',
                            transition: 'transform 0.45s ease-out',
                            border: '0px solid #000',
                            borderRadius: '2vh'
                        }}
                    >

                    </Button>

                    <Button

                        onClick={() => props.finish(dato)}
                        className={`avatar-${dato} button-catalog login-card small`}
                        style={{
                            aspectRatio: '1/1',
                            cursor: 'pointer',
                            marginLeft: '5%',
                            marginTop: '5%',
                            transition: 'transform 0.45s ease-out',
                            border: '0px solid #000',
                            borderRadius: '2vh'
                        }}
                    >

                    </Button>
                </>

            ))

            }
        </>

    )
}
