import React from 'react';
import image1 from "../../assets/images/videoSwap-got.png";
import stick from "../../assets/images/stick.png";
import arrow from "../../assets/images/arrowBtn.png";
import { useNavigate } from 'react-router-dom';
import styles from "../../assets/css/res.module.css"

const Section2 = () => {
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
            <div
        style={{
            background: "inherit",
            marginTop: "15px"
        }}

            className={styles.section2main}
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
                            <h1 > Video Face Swap</h1>
                            <img src={stick} height="70px" width="41px"/>
                        </div>
                        <p
                            style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                
            color: "white"
                            }}
                        >Using high quality video, upload your base footage, and with our face swap tool, upload a high quality image of the face you’d like to swap. That’s it!</p>
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

                                onClick={()=> navigate("/videoswap")}
                            >Try Video Swap</button>
                            <img src={arrow} height="17px" width="60px" className={styles.btnArrow} />
                        </div>
                    </div>
                </div>
                <div style={divStyles}>
                <img src={image1} alt="Image" className={styles.section2image} />
                </div>
            </div>
        </>
    );
};

export default Section2;
