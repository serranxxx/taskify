import React from 'react'
import { Button, Layout, } from 'antd';
import { TbTextPlus } from 'react-icons/tb';

const { Footer } = Layout;
export const FooterMobile = (props) => {



    return (
        <Footer style={{
            position: 'fixed', zIndex: 1, width: '100%', bottom: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
            height: '15vh', 
            // boxShadow: '-10px 0px 10px #00000030',
            backgroundColor: `transparent`
        }}>

            <Button
                // onClick={() => setVisible(true)}
                icon={<TbTextPlus size={25} style={{ color: '#f7fcf5' }} />}
                style={{
                    height: '60px', width: '60px', opacity: '0.5', backgroundColor: '#457B9D',
                    // position: 'absolute', bottom: '70px', right: '30px',
                    boxShadow: '0px 0px 10px #00000030',
                    borderRadius: '50%'
                }} />


        </Footer>
    )
}
