import React from 'react';
import image1 from "../../assets/images/videoSwap-got.png";
import stroke from "../../assets/images/stick.png";
import arrow from "../../assets/images/arrowBtn.png"
const Section2 = () => {
    const divStyle = {
        width: "100%",
        height: "59px",
        margin: "30px",
        padding: "10px"
    };

    return (
        <>
            <div>
                <div
                    style={{
                        display: "flex",
                        height: "350px",
                        margin: "10% 8%",
                        color: "white"
                    }}
                >
                    <div style={divStyle}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "7%",
                                fontFamily: "Raleway"
                            }}
                        >
                            <h2 style={{ marginRight: "10px" }}>Video face Swap</h2>
                            <img src={stroke} alt="stroke" />
                        </div>
                        <p>
                            Using high quality video, upload your base footage, and with our face
                            swap tool, upload a high quality image of the face you’d like to
                            swap. That’s it!
                        </p>
                        <button style={{
                            border: "none",
                            outline: "none",
                            borderRadius: "12px",
                            background: "#FFD600",
                            color: "white",
                            padding: "10px 30px",
                            fontSize: "17px",
                            marginRight: "10px "

                        }}>Try Image Swap</button>
                        <img src={arrow} alt="arrow" />
                    </div>
                    <div style={divStyle}>
                        <img src={image1} height="328px" width="520px" alt="videoSwap" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section2;
