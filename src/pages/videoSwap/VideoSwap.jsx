import React from 'react'
import Navbar from "../../components/Navbar"
import backgroudImage from "../../assets/images/videoSwap-section1.png"
import deepDuck from "../../assets/images/deepDuck.png"
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'

const VideoSwap = () => {
    return (
        <>
            <div style={{
                color: "white",
                background: "#1A1A1A",
            }}>

                <div style={{
                    backgroundImage: `url(${backgroudImage})`,
                    height: "100vh",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: "flex",
                    // justifyContent: "center",
                    flexDirection:"column"


                    // height: "100%" // Add this line
                }}>
                     <Navbar
                    deepDuckImage={deepDuck}
                    optionColor= "#888888"
                />
                    <div style={{
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "10%"
                    }}>
                        <h1 style={{
                            color: "white",
                            fontFamily: "Raleway",
                            fontSize: "40px",
                            fontWeight: "600",
                            lineHeight: "47px",
                            letterSpacing: "0em",

                        }}
                        >Video Face Swap</h1>
                        <p
                            style={{
                                fontFamily: "Raleway",
                                fontSize: "14px",
                                fontWeight: "600",
                                lineHeight: "19px",
                                letterSpacing: "0em",
                                textAlign: "center",
                                color: "white",
                            }}
                        >The new frontier in AI is here. Face swap for video is easy as 1-2-3!</p>
                        <button
                            style={{
                                padding: "10px 35px",
                                background: "#FFD600",
                                color: "white",
                                fontSize: "25px",
                                border: "none",
                                outline: "none",
                                borderRadius: "12px",
                                cursor:"pointer",
                            }}>Try Swap It</button>
                    </div>
                </div>
                <Section2/>
                <Section3/>
                <Section4/>
            </div>
        </>
    )
}

export default VideoSwap
