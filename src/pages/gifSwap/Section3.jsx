import React from 'react';
import image1 from "../../assets/images/gifSwap-section3.png";
import stick from "../../assets/images/stick.png";
import arrow from "../../assets/images/arrowBtn.png";
import { useNavigate } from 'react-router-dom';
import styles from "../../assets/css/res.module.css"

const Section3 = () => {
    const navigate = useNavigate()

    const divStyles = {
        margin: "10px",
        padding: "10px 20px 10px 20px",
        width: "100%",
        display: "flex",
        flex: 1,
        alignItems: "center"
    };

    return (
        <>
        <div >

       
            <div
            className={styles.section2main}
            style={{
                background: "#1A1A1A"
            }}
            >

<div style={divStyles}>
                <div
                    className={styles.section2Content}
                    >
                        <div style={{
                            display: "flex",
                            gap: "0px", 
                            color: "white"
                        }}>
                            <h1>Swap Face From GIF</h1>
                            <img src={stick} height="70px" width="41px"/>
                        </div>
                        <p
                            style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                color: "white"
                            }}
                        >Have we mentioned that you need to use HIGH QUALITY images? This is the secret sauce to all face swap success stories. </p>
                        <div style={{
                            display: "flex",
                            alignItems: "center", 
                            gap: "10px", 
                            margin: "20px 0px", 
                        }}>
                            <button
                                style={{
                                    width: "182px",
                                    background: "#FFD600",
                                    padding: "15px 25px",
                                    border: "none",
                                    outline: "none",
                                    borderRadius: "12px",
                                    color: "white",
                                    fontSize: "17px",
                                    fontWeight: "700",
                                    cursor: "pointer"
                                }}

                                onClick={()=> navigate("/imageswap")}
                            >Try Image Swap</button>
                            <img src={arrow} height="17px" width="60px" className={styles.btnArrow} />
                        </div>
                    </div>
                </div>
                  <div style={divStyles}>
                <img src={image1} alt="Image" className={styles.section2image} />
                </div>

              
            </div>
            </div>
        </>
    );
};

export default Section3;

