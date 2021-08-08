import './ContactMe.scss';
import { useRef, useState } from 'react';
import Modal from '../Modal/Modal';

const ContactMe = (props) => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const [modal, setModal] = useState(false);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setError(null);
        if (!emailRef.current.value)
            return setError('Enter Your Email');

        if (validateEmail(emailRef.current.value))
            setEmail(emailRef.current.value);
        else
            return setError('Unvalid Email');

        if (messageRef.current.value)
            setMessage(messageRef.current.value);
        else
            return setError('Enter Your Message');

        if (nameRef.current.value)
            setName(nameRef.current.value);
        else
            return setError('Enter Your Name');

        toggleModal();

        // OVDE SE SALJE PORUKA
    };

    const toggleModal = () => {
        setModal(true);
        window.setTimeout(() => setModal(false), 750);
    };

    return (
        <div className="contact-me" id="contact-me">
            <h2 style={{ color: 'red', opacity: error ? 1 : 0 }}>{error}.</h2>
            <h1>Contact me</h1>
            <form id="form" onSubmit={submitHandler}>
                <input type="text" id="name" ref={nameRef} placeholder="Your Name" />
                <input type="text" id="email" ref={emailRef} placeholder="Your Email" />
                <textarea id="message" ref={messageRef} placeholder="Your Message"></textarea>
                <button type="submit" className="send-btn btn" onClick={submitHandler}>SEND</button>
            </form>
            <Modal show={modal} />
        </div>
    );
}

export default ContactMe;