import { Button } from 'antd';
import React, { useState } from 'react';

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
                    // onMouseEnter={() => setDeleteButton(true)} onMouseLeave={() => setDeleteButton(false)}
                    style={{
                        aspectRatio: '1/1',
                        cursor: 'pointer',
                        marginLeft: '2%', marginTop:'2%',
                        transition: 'transform 0.45s ease-out',
                        border:'0px solid #000'
                    }}
                >
                    <Button
                        shape='square' className='delete-button' onClick={() => props.handleClick(user)}
                        onMouseEnter={handleState} onMouseLeave={handleState}
                        style={{
                            position: 'absolute', top: '10px',
                            right: '10px', width: '2px', aspectRatio: '1/1'
                        }} />
                </Button>
            ))}
        </>
    );
};