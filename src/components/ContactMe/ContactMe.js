import './ContactMe.scss';
import { useRef, useState } from 'react';
import Modal from '../Modal/Modal';
import emailjs from 'emailjs-com';

const ContactMe = (props) => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const [modal, setModal] = useState(false);
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setError(null);
        if (!nameRef.current.value || !emailRef.current.value || !messageRef.current.value)
            return setError('Enter data');

        if (!validateEmail(emailRef.current.value))
            return setError('Unvalid Email');

        emailjs.sendForm('service_v3pscrs', 'template_3vcdyk2', e.target, 'user_CbmryuvlGFIKy05fcYRNt')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        toggleModal();

        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
    };

    const toggleModal = () => {
        setModal(true);
        window.setTimeout(() => setModal(false), 750);
    };

    return (
        <div className="contact-me" id="contact-me">
            <h1>Contact me</h1>
            <h2 className="error" style={{ opacity: error ? 1 : 0 }}>{error}.</h2>
            <form id="form" onSubmit={submitHandler}>
                <div className="inputs">
                    <input type="text" id="name" name="name" ref={nameRef} placeholder="Your Name" />
                    <input type="email" id="email" name="email" ref={emailRef} placeholder="Your Email" />
                </div>
                <textarea id="message" name="message" ref={messageRef} placeholder="Your Message"></textarea>
                <button type="submit" className="send-btn btn">SEND</button>
            </form>
            <Modal show={modal} />
        </div>
    );
}

export default ContactMe;