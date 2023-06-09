import { motion } from "framer-motion"
import instagram from '../pictures/contacts/instagram.png'
import mail from '../pictures/contacts/mail.png'
import telegram from '../pictures/contacts/telegram.png'
import whatsApp from '../pictures/contacts/whatsApp.png'

import './Footer.css'

const FooterARR = [
    { id: 0, text: "", src: instagram },
    { id: 1, text: "", src: mail },
    { id: 2, text: "", src: telegram },
    { id: 3, text: "", src: whatsApp }];

function Footer() {


    return (
        <>
            <div className='Footer-main'>
                <div className='Footer-back'>

                    <motion.div 
                        whileHover={{ scaleX: 1.6, scaleY: 1.1, opacity: 1}}
                        transition={{ duration: 0.5 }}
                    >
                        <a className='Footer-link' href='#main'></a>
                        <svg xmlns="http://www.w3.org/2000/svg" opacity= "0.5" width="50" height="40" viewBox="0 0 15 15" fill="none">
                            <path d="M3.12498 5.3125V8.125L7.49999 5L11.875 8.125V5.3125L7.49999 2.1875L3.12498 5.3125Z" fill="white" />
                            <path d="M3.12498 9.6875V12.5L7.49999 9.375L11.875 12.5V9.6875L7.49999 6.5625L3.12498 9.6875Z" fill="white" />
                        </svg>
                    </motion.div>
                    <h5>GO TO BACK</h5>
                </div>

                <div className='Footer-card'>
                    {FooterARR.map((obj) => <div key={obj.id} className='Footer-img'>
                        <img key={obj.src} src={obj.src}></img>
                        {/* <p  key={obj.text}>{obj.text}</p> */}
                    </div>)}
                </div>
            </div>
        </>
    )
}

export default Footer
