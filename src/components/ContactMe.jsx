import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';
import iconClose from '../pictures/contacts/icon-close.png'
import iconDone from '../pictures/contacts/icon-done.png'

import './ContactMe.css'


function ContactMe() {

    const [MessageValues, setMessageValues] = useState({
        Name: "",
        Mail: "",
        Message: "",
    })

    const [MessageStatus, setMessageStatus] = useState({
        Status: false,
        Value: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (MessageValues.Name === "") {
            console.log('ERROR_Name!')
            setMessageStatus({ Status: "ERROR", Value: `FILL ALL NECESSARY FIELDS [NAME]` });
            return;
        }
        if (MessageValues.Mail === "") {
            console.log('ERROR_Mail!')
            setMessageStatus({ Status: "ERROR", Value: `FILL ALL NECESSARY FIELDS [MAIL]` });
            return;
        }
        if (MessageValues.Message === "") {
            console.log('ERROR_Message!')
            setMessageStatus({ Status: "ERROR", Value: `FILL ALL NECESSARY FIELDS [MESSAGE]` });
            return;
        }
        else {
            emailjs.send('service_DII', 'template_DII', MessageValues, 'WEm8hqF96mpjyidCb')
                .then(response => {
                    MessageValues
                    console.log('MessageValues!', MessageValues);
                    console.log('SUCCESS!', response);
                    setMessageStatus({ Status: "SUCCESS", Value: "YOUR MESSAGE HAS BEEN SENT, I WILL REPLY TO YOU AS SOON AS POSSIBLE" });
                }, error => {
                    console.log('FAILED...', error);
                    setMessageStatus({ Status: "ERROR", Value: `MESSAGE SENDING ERROR:${error}` });
                });
        }
    }


    const handleName = () => {
        document.getElementById("Name").value = "Ivan Demidov"
       setMessageValues({Name: document.getElementById("Name").value, Mail: MessageValues.Mail, Message: MessageValues.Message});
    }

    const handleMail = () => {
        document.getElementById("Mail").value = "7idiidi@gmail.com"
        setMessageValues({Mail: document.getElementById("Mail").value, Name: MessageValues.Name, Message: MessageValues.Message});
    }

    const handleMassage = () => {
        document.getElementById("Message").value = "Hello DII"
        setMessageValues({Message: document.getElementById("Message").value, Mail: MessageValues.Mail, Name: MessageValues.Name});
    }

    const handleChange = (e) => {
        console.log(e)
        setMessageValues(MessageValues => ({ ...MessageValues, [e.target.id]: e.target.value }))
    }

    const handleClose = (e) => {
        setMessageStatus(false)
    }


    // useEffect(() => {
    //     console.log(MessageValues)
    // }, [MessageValues])


    const setActive = (el, active) => {
        const childList = el.parentNode.parentNode.querySelectorAll('*');
        if (active) {
            for (let childNode of childList) {
                childNode.classList.add('active');
            }
        }
        else {
            for (let childNode of childList) {
                childNode.classList.remove('active')
                el.value === '' ?
                    childNode.classList.remove('filled') :
                    childNode.classList.add('filled')
            }
        }
    }

    useEffect(() => {

        const inputs = document.querySelectorAll('.form-field__input')
        inputs.forEach(el => {
            el.onblur = () => {
                setActive(el, false)
            }
            el.onfocus = () => {
                setActive(el, true)
            }
        })

    }, []);




    return (
        <> <div className="CM-main">
            <div className='ContactMe'>
                <p id='ContactMe' className='skills-portfolio-p'>Contact Me</p>
                <div className="form-field">
                    <div className="form-field__control">
                        <motion.label className="form-field__label"

                        >Name</motion.label>
                        <input onChange={handleChange} onClick={handleName} id="Name" type="text" className="form-field__input" />
                    </div>
                </div>

                <div className="form-field">
                    <div className="form-field__control">
                        <motion.label className="form-field__label"

                        >Email</motion.label>
                        <input onChange={handleChange} onClick={handleMail} id="Mail" type="text" className="form-field__input" />
                    </div>
                </div>

                <div id="Message_area" className="form-field">
                    <div id="Message_area" className="form-field__control">
                        <motion.label className="form-field__label"
                        >Message</motion.label>
                        <textarea onChange={handleChange} onClick={handleMassage} id="Message" type="text" className="form-field__input" />
                    </div>
                </div>
                <motion.button className="CM-button"
                    onClick={handleSubmit}
                    whileTap={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                >Send Massage</motion.button>
            </div>
            {/* className={MessageStatus.Status = "SUCCESS" ? "MessageStatus.succes" : "MessageStatus.error"} */}
            {MessageStatus.Status &&
                <motion.div className={MessageStatus.Status === "SUCCESS" ? "MessageStatus-succes" : "MessageStatus-error"}
                    whileInView={{ y: 0, opacity: 1 }}
                    initial={{ y: 100, opacity: 0 }}
                >
                    <div className="MessageStatus-body">
                        <motion.img src={MessageStatus.Status === "SUCCESS" ? iconDone : iconClose} onClick={handleClose}
                            whileHover={{ left: "2px" }}
                            transition={{ ease: "linear", type: "spring", damping: 0.1, restSpeed: 10 }}
                        />
                        <div>{MessageStatus.Value}</div>
                    </div>
                </motion.div>}
        </div>
        </>
    )
}

export default ContactMe