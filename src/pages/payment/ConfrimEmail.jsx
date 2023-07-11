import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import formStyles from "../../assets/css/login.module.css"
import { FaUser } from 'react-icons/fa';

const ConfirmEmail = ({ isOpen, onClose }) => {
    
    const modalStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            opacity: isOpen ? 1 : 0,
            backdropFilter: isOpen ? 'blur(10px)' : 'none',
            transition: 'backdrop-filter 0.3s ease',
            display: "flex",
            flexDirection: "column",
            justifyContent:"center",
        },
        content: {
            position: 'relative',
            border: '1px solid #888',
            width: '300px',
            padding: "20px",
            margin: "10% auto",
            background: 'rgba(255,255, 255, 0.3)',
            backdropFilter: " blur(10px)",
            zIndex: "1",
            borderRadius: "10px",
            color: "white",
            fontFamily: "Raleway",
            display: "flex",
            flexDirection: "column",
            justifyContent:"center",
        },
        close: {
            color: '#aaa',
            float: 'right',
            fontSize: '28px',
            fontWeight: 'bold',
            cursor: 'pointer',
            textAlign: "right",
        },
    };

    return ReactDOM.createPortal(
        <div style={modalStyles.overlay}>
            <div style={modalStyles.content}>
                <span style={modalStyles.close} onClick={onClose}>
                    &times;
                </span>
                <h2 style={{ textAlign: "center" }}>Enter Your Email</h2>
                <div className={formStyles.inputContainer}>
                    <FaUser className={formStyles.icon} />
                    <input type="text" className={formStyles.inputField} placeholder="Email" />
                </div>
                <button className={formStyles.button} onClick={onClose}>Confirm</button>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default ConfirmEmail;
