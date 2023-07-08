import React from 'react';
import image1 from "../../assets/images/LandingSec2.png";
import stick from "../../assets/images/stick.png";
import arrow from "../../assets/images/arrowBtn.png";
import { useNavigate } from 'react-router-dom';


const Section2 = () => {
    const navigate = useNavigate()

    const divStyles = {
        margin: "10px",
        padding: "10px 20px 10px 20px",
        width: "100%",
        display: "flex"
    };

    return (
        <>
            <div style={{
                background: "White",
                padding: "06%",
                display: "flex" 
            }}>
                <div style={divStyles}>
                <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        color: "black",
                        fontFamily: "Raleway",
                    }}>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px", 
                        }}>
                            <h1
                                style={{
                                    margin: "0px",
                                    fontSize: "40px",
                                    fontWeight: "600"
                                }}
                            >Image Swap</h1>
                            <img src={stick} height="70px" width="41px" />
                        </div>
                        <p
                            style={{
                                fontSize: "12px",
                                fontWeight: "500"
                            }}
                        >With Deep Duck, swapping faces on any image is as simple as an upload and a click. Use our swap tool below to get started. </p>
                        <div style={{
                            display: "flex",
                            alignItems: "center", 
                            gap: "10px", 
                            margin: "40px 0px", 
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
                                    fontWeight: "700"
                                }}

                                onClick={()=> navigate("/imageswap")}
                            >Try Image Swap</button>
                            <img src={arrow} height="17px" width="60px" />
                        </div>
                    </div>
                </div>
                <div style={divStyles}>
                <img src={image1} alt="Image" />
                </div>
            </div>
        </>
    );
};

export default Section2;
