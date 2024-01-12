import React from 'react'
import { Button, Layout, } from 'antd';
import { TbTextPlus } from 'react-icons/tb';
import { IoMdAdd } from "react-icons/io";

const { Footer } = Layout;
export const FooterMobile = (props) => {

    const {setOnWrite, theme} = props



    return (
        <Footer style={{
            position: 'fixed', zIndex: 1, width: '100%', bottom: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            height: '12vh',
            // position:'relative', 
            // boxShadow: '-10px 0px 10px #00000030',
            backgroundColor: `transparent`
        }}>

            <Button
                onClick={() => setOnWrite(true)}
                icon={<IoMdAdd size={25} style={{ color: theme ? '#f7fcf5' : ' #aaa'}} />}
                style={{
                    height: '60px', width: '60px', opacity: '0.9', 
                    backgroundColor: theme ?  '#457B9D' : '#457B9D',
                    // position: 'absolute', bottom: '70px', right: '30px',
                    boxShadow: '0px 0px 10px #00000030',
                    borderRadius: '50%',
                    position:'absolute', right:'30px',
                    border:'0px solid #000',
                    display:'flex', alignItems:'center', justifyContent:'center'
                }} />


        </Footer>
    )
}
