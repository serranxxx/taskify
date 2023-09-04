import React, { useState } from 'react'
import { Layout, Row } from 'antd';
import { SelectAvatar } from '../../helpers/images';


const { Header } = Layout;
export const HeaderMobile = (props) => {

    const { avatar , theme} = props
    const [Tasks, setTasks] = useState(true)

    return (
        <Header style={{
            position: 'fixed', zIndex: 1, width: '100%',
            background: `linear-gradient(to bottom, ${theme ? '#457B9D' : '#27282c'} , #457B9D80)`,
            height: '15vh',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection:'column',

        }}>

            <Row style={{
                display:'flex', alignItems:'center', justifyContent:'space-between',
                flexDirection:'row', width:'95%', height:'50%', 
            }}>
                <img
                    src={SelectAvatar(avatar)} style={{
                        height: 50, borderRadius: '70%', transition: 'all 0.25s ease-in-out'
                    }} />

                <p style={{
                    fontSize:'3em', fontWeight:700, color: `${theme? '#E5EFE1': '#457B9D'}`, margin:0
                }}>Taskify</p>

                <div style={{ width: 50 }} />
            </Row>

            <Row style={{
                display:'flex', alignItems:'center', justifyContent:'space-between',
                flexDirection:'row', width:'80%', margin:0,  height:'30%',
                position:'relative'
            }}>
                <p 
                onClick={() => setTasks(true)}
                style={{
                    fontSize:'1em', fontWeight:700, color: `${theme ? Tasks? '#E5EFE1' : '#E5EFE180' : '#27282c'}`,
                    cursor:'pointer', margin:0
                }}>Tasks</p>

                <p 
                onClick={() => setTasks(false)}
                style={{
                    fontSize:'1em', fontWeight:700, color: `${theme ? Tasks? '#E5EFE180' : '#E5EFE1': '#27282c'}`,
                    cursor:'pointer', margin:0
                }}>Projects</p>

                <div style={{
                    width:'5vh', height:'8%', backgroundColor: `${theme ? '#E5EFE1' : '#27282c'}`,
                    position:'absolute', left:`${Tasks? '-1%' : '80%'}`,
                    bottom:'-10px', transition: 'all 0.55s ease-in-out',
                    borderRadius:'2vh'
                }}/>

            </Row>







        </Header>
    )
}
