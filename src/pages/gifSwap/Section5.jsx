import React from 'react'
import imageSwap from "../../assets/images/videoSwap-pic.png"
import gifSwao from "../../assets/images/imageSwap-play.png"
import arrow from "../../assets/images/tryArrow.png"
import Footer from '../../components/Footer'

const Section5 = () => {

    const divStyles = {
        margin: "20px",
        padding: "20px 0px",
        width: "350px"
    }

    const gradientText = {
        background: "linear-gradient(0deg, #0E33BE, #14C483, #FFD600, #FF5757)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        display: "inline-block",
        "font-size": "24px",
        "font-weight": "bold",
        "line-height": "1"
    };

    return (
        <>
            <div style={{
                background: "white",
                color: "black",
                padding: "50px",
                textAlign: "center",
            }}>
                <h1 style={{
                    fontFamily: "Raleway",
                    fontSize: "25px",
                    fontWeight: "700",
                    lineHeight: "34px",
                    letterSpacing: "0em",
                }}>Other Exciting Deep Duck Features</h1>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <div style={divStyles}>
                        <img src={imageSwap} alt="" />
                        <h2 style={{padding:"0px", margin:"0px",fontFamily: "Raleway",}}>Swap Face on <span style={gradientText}>Image</span></h2>
                        <p style={{padding:"0px", margin:"0px",fontFamily: "Raleway",fontSize: "14px",}}>Using a high quality image, upload your base and hero image now.</p>
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
                    <div style={divStyles}>
                        <img src={gifSwao} height="125px" width="135px" alt="" />
                        <h2 style={{padding:"0px", margin:"0px",fontFamily: "Raleway",}}>Swap Face on <span style={gradientText}>Video</span></h2>
                        <p style={{padding:"0px", margin:"0px",fontFamily: "Raleway",fontSize: "14px",}}>Have a favorite GIF? Apply a face and go to town!</p>
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
                <div style={{
                    margin:"4% 8%",
                    padding: "3% 6%",
                    background:"#E9E9E9",
                    borderRadius: "800px",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    height: "157px"
                }}>
                    <h2>Try It <span style={gradientText}>NOW!!!</span></h2>
                    <div>
                    <img src={arrow} alt="Arrow"/> 
                    <button style={{
                        background: "#FFD600",
                        color: "white",
                        padding: "10px 30px",
                        borderRadius: "15px",
                        border: "none",
                        outline: "none",
                        fontSize: "25px",
                        margin: "0px 10px"
                    }}>Swap It</button>
                    </div>
                </div>
           <Footer color="black"/>
            </div>
        </>
    )
}

export default Section5
