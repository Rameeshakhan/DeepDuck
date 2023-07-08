import React from 'react';
import image1 from "../../assets/images/video-swap.png";
import stroke from "../../assets/images/stick.png";
import arrow from "../../assets/images/arrowBtn.png";
import { useNavigate } from 'react-router-dom';

const Section3 = () => {

    const navigate = useNavigate()

    const divStyle = {
        width: "100%",
        height: "59px",
        margin: "30px",
        padding: "10px",
    };

    return (
        <>
              <div>
                <div
                    style={{
                        display: "flex",
                        height: "350px",
                        margin: "20px 8% 10% 8%",
                        color: "white"
                    }}
                >
                     <div style={divStyle}>
                        <img src={image1} height="400px" width="450px" alt="videoSwap" />
                    </div>
                    <div style={divStyle}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "7%",
                                fontFamily: "Raleway"
                            }}
                        >
                            <h2 style={{ marginRight: "10px" }}>Video Face Swap</h2>
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
