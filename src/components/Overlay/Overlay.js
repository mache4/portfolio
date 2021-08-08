import './Overlay.scss';

const Overlay = (props) => {
    return (
        <div className="overlay" onClick={props.clicked} style={{
            opacity: props.show ? 0.85 : 0,
            zIndex: props.show ? 100 : -1
        }}></div>
    );
}

export default Overlay;