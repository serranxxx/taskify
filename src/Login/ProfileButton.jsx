import { Button } from 'antd';
import React, { useState } from 'react';
import { MdOutlineCancel } from "react-icons/md";

export const ProfileButton = (props) => {

    const [eneableButton, setEneableButton] = useState(true)

    const handleState = () => {
        setEneableButton(!eneableButton)
        console.log(eneableButton)
    }

    return (
        <>
            
            {
            props.users.map((user) => (
                <Button
                    key={user}
                    disabled={!eneableButton}
                    className={`avatar-${user} button login-card`} onClick={() => props.onLogin(user)}
                    style={{
                        aspectRatio: '1/1',
                        cursor: 'pointer',
                        marginLeft: '2%', marginTop:'2%',
                        transition: 'transform 0.45s ease-out',
                        border:'0px solid #000', position:'relative',
                        borderRadius:'2vh', zIndex:0
                    }}
                >
                    {/* <Button
                        type='ghost'
                        icon={<MdOutlineCancel size={20} style={{color:'#00000030'}}/>}
                        // className='delete-button' 
                        onClick={() => props.handleClick(user)}
                        onMouseEnter={handleState} onMouseLeave={handleState}
                        style={{
                            position: 'absolute', top: '2px',
                            right: '25px', width: '2px', aspectRatio: '1/1',
                            zIndex:1
                        }} /> */}
                </Button>
            ))}
        </>
    );
};