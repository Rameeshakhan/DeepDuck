import React from 'react'
import image from "../../assets/images/gifSwap-section4.png"

const Section4 = () => {
    return (
        <>
            <div>
                <div style={{
                    background: "#1A1A1A",
                    fontFamily: "Raleway",
                    textAlign: "center",
                    padding: "30px",
                    color: "white"
                }}>
                    <h1 style={{

                        fontSize: "40px",
                        fontWeight: "600",
                        lineHeight: "47px",
                        letterSpacing: "0em",

                    }}>Deep Duck provides very accurate results.</h1>
                    <p style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        lineHeight: "19px",
                        letterSpacing: "0em",
                    }}
                    >Enjoy near perfect results using our one-of-a-kind face swap tool.</p>
                    <img style={{
                        margin: "30px"
                    }} src={image} />

                    <p style={{
                        fontFamily: "Raleway",
                        fontSize: "20px",
                        fontWeight: "700",
                        lineHeight: "30px",
                        letterSpacing: "0em",
                        textAlign: "center",
                        color: "#FFD600",
                    }}>{`>>TRY NOW`}</p>
                </div>
            </div>
        </>
    )
}

export default Section4
