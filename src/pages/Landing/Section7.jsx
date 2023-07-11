import React from 'react'
import arrow from "../../assets/images/tryArrow.png"
import styles from "../../assets/css/res.module.css"
import {useNavigate } from 'react-router-dom';
const Section7 = () => {

  const navigate = useNavigate()
    const gradientText = {
        background: "linear-gradient(0deg, #0E33BE, #14C483, #FFD600, #FF5757)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        display: "inline-block",
        "font-size": "24px",
        "font-weight": "bold",
        "line-height": "1"
    };

  return (
    <div>
         <div
                className={styles.section7main}
                >
                    <h2>Try It <span style={gradientText}>NOW!!!</span></h2>
                    <div>
                    <img src={arrow} alt="Arrow" className={styles.section7image}height="40px" width="80px"/> 
                    <button 
                    className={styles.section7button}
                    onClick={()=> navigate('/')}
                    >Swap It</button>
                    </div>
                </div>
    </div>
  )
}

export default Section7