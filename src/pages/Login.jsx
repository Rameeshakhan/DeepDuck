import React from 'react';
import styles from "../assets/css/login.module.css";
import Navbar from '../components/Navbar';
import { FaUser } from 'react-icons/fa';
import { BiSolidLockOpenAlt } from 'react-icons/bi';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Login = () => {
const navigate = useNavigate()

    return (
        <>
            <div className={styles.loginContainer}>
                <Navbar />
                <form className={styles.formContainer}>
                    <h1 className={styles.heading}>Log in</h1>
                    <div className={styles.inputContainer}>
                        <FaUser className={styles.icon} />
                        <input type="text" className={styles.inputField} placeholder="Email" />
                    </div>
                    <div className={styles.inputContainer}>
                        <BiSolidLockOpenAlt className={styles.icon} />
                        <input type="text" className={styles.inputField} placeholder="Password" />
                    </div>
                    <button className={styles.button}>LOGIN</button>
                    <p 
                    className={styles.text}
                    onClick={()=> navigate("/signup")}
                    >Sign Up <span style={{float: "right"}}>Forgot Password</span></p>
                </form>
            <Footer/>
            </div>
        </>
    );
}

export default Login;
