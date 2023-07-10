import React from 'react';
import image1 from "../../assets/images/video-swap.png";
import stroke from "../../assets/images/stick.png";
import arrow from "../../assets/images/arrowBtn.png";
import { useNavigate } from 'react-router-dom';
import styles from "../../assets/css/res.module.css"
const Section3 = () => {

    const navigate = useNavigate()

    const divStyle = {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    };

    return (
        <>
              <div>
                <div className={styles.section3main} >
                    <div style={divStyle}>
                    <img src={image1} className={styles.section3image}alt="videoSwap" />
                    </div>
                    <div style={divStyle}>
                    <div
                        className={styles.section3content}
                        >
                            <h2 >Video Face Swap</h2>
                            <img src={stroke} alt="stroke" />
                        </div>
                        <p>
                        Quite possibly the most fun of them all, swapping faces on a video is now the new AI craze! Find your favorite video and go to town.
                        </p>
                        <button style={{
                            border: "none",
                            outline: "none",
                            borderRadius: "12px",
                            background: "#FFD600",
                            color: "white",
                            padding: "10px 30px",
                            fontSize: "17px",
                            margin: "20px 20px 20px 0px"
                        }}
                        onClick={()=> navigate("/videoswap")}
                        >Try Video Swap</button>
                        <img src={arrow} alt="arrow" />

                    </div>

                   
                </div>
            </div>
        </>
    );
};

export default Section3;
