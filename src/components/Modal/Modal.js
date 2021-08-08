import './Modal.scss';

const Modal = (props) => {
    return (
        <div className="modal" style={{
            transform: props.show ? 'translate(-50%, 0)' : 'translate(-50%, -200%)'
        }}><p>Message Sent!</p></div>
    );
}

export default Modal;