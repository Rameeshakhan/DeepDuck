import React from 'react';
import styles from "../assets/css/login.module.css";
import Navbar from '../components/Navbar';
import { FaUser } from 'react-icons/fa';
import { BiSolidLockOpenAlt } from 'react-icons/bi';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import deepDuck from "../assets/images/deepDuck.png"

const SignUp = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.loginContainer}>
            <Navbar
                    deepDuckImage={deepDuck}
                    optionColor= "#888888"
                />
                <form className={styles.formContainer}>
                    <h1 className={styles.heading}>Sign Up</h1>
                    <div className={styles.inputContainer}>
                        <FaUser className={styles.icon} />
                        <input type="text" className={styles.inputField} placeholder="Email" />
                    </div>
                    <div className={styles.inputContainer}>
                        <BiSolidLockOpenAlt className={styles.icon} />
                        <input type="text" className={styles.inputField} placeholder="Set 6 Digit Password" />
                    </div>
                     <input  type='checkbox' className={styles.checkbox}/><span
                     style={{
                        color: "white",
                        fontSize:"14px",
                        margin: "5px",
                     }}
                     >
                     I agree to Terms of service and Privacy policy
                     </span>
                    <button className={styles.button}>Sign up</button>
                    <p 
                    className={styles.text}
                    onClick={()=> navigate("/login")}
                    >Log In</p>
                </form>
            <Footer/>
            </div>
        </>
    );
}

export default SignUp;
