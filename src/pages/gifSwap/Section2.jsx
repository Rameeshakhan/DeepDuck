import React from 'react';
import image1 from "../../assets/images/gifSwap-section2.png";
import stick from "../../assets/images/stick.png";
import arrow from "../../assets/images/arrowBtn.png";

const Section2 = () => {

    const divStyles = {
        margin: "10px",
        padding: "20px 20px 10px 20px",
        width: "100%",
        display: "flex"
    };

    return (
        <>
            <div style={{
                background: "#1A1A1A",
                padding: "06%",
                display: "flex" // Display the child divs side by side
            }}>
                <div style={divStyles}>
                    <img src={image1} alt="Image" />
                </div>
                <div style={divStyles}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        // alignItems: "center",
                        color: "white",
                        fontFamily: "Raleway",
                    }}>
                        <div style={{
                            display: "flex",
                            alignItems: "center", // Align items vertically in the center
                            gap: "10px", // Add some gap between the heading and image
                        }}>
                            <h1
                                style={{
                                    margin: "0px",
                                    fontSize: "40px",
                                    fontWeight: "600"
                                }}
                            >Swap Face From GIF</h1>
                            <img src={stick} height="70px" width="41px" />
                        </div>
                        <p
                            style={{
                                fontSize: "12px",
                                fontWeight: "500"
                            }}
                        >By using a high quality image, upload your gif, swap the face and enjoy!</p>
                        <div style={{
                            display: "flex",
                            alignItems: "center", 
                            gap: "10px", 
                            margin: "40px 0px", 
                        }}>
                            <button
                                style={{
                                    width: "162px",
                                    background: "#FFD600",
                                    padding: "15px 25px",
                                    border: "none",
                                    outline: "none",
                                    borderRadius: "12px",
                                    color: "white",
                                    fontSize: "17px",
                                    fontWeight: "700"
                                }}
                            >Try Swap It</button>
                            <img src={arrow} height="17px" width="60px" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section2;
