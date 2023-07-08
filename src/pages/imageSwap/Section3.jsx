import React from 'react'
import image from "../../assets/images/imageSwap-got.png"
import { useNavigate } from 'react-router-dom'

const Section3 = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <div style={{
                    background: "#ffffff",
                    fontFamily: "Raleway",
                    textAlign: "center",
                    padding: "20px 16%",
                    color: "black",
                    margin: "20px 20px 05px 20px"
                }}>
                    <h1 style={{

                        fontSize: "40px",
                        fontWeight: "600",
                        lineHeight: "47px",
                        letterSpacing: "0em",

                    }}>Master the Art of the Swap with Deep Duck!</h1>
                    <p style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        lineHeight: "19px",
                        letterSpacing: "0em",
                    }}
                    >Everyone is getting in on the AI craze. Test your abilities today with our one-of-a-kind swap tool, found only on Deep Duck. Nothing to be embarrassed about! Remember, all of your creations remain encrypted and for your eyes only.</p>
                    <img style={{
                        margin: "30px 0px 10px 0px"
                    }} src={image} />

                    <p style={{
                        fontFamily: "Raleway",
                        fontSize: "20px",
                        fontWeight: "700",
                        lineHeight: "30px",
                        letterSpacing: "0em",
                        textAlign: "center",
                        color: "#FFD600",
                    }}
                    onClick={()=> navigate("/imageupload")} 
                    >{`>>TRY NOW`}</p>
                </div>
            </div>
        </>
    )
}

export default Section3
