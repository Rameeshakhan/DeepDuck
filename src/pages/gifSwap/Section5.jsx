import React from 'react'
import imageSwap from "../../assets/images/videoSwap-pic.png"
import gifSwao from "../../assets/images/imageSwap-play.png"
import arrow from "../../assets/images/tryArrow.png"
import Footer from '../../components/Footer'
import styles from "../../assets/css/res.module.css"
import { useNavigate } from 'react-router-dom'


const Section4 = () => {

    const navigate=useNavigate()

    const divStyles = {
        margin: "30px",
        padding: "20px 40px",
        // width: "420px",
        // flex: 1,
        gap:"0px"
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
                // padding: "50px",
                paddingTop: "50px",
                textAlign: "center",
            }}>
                <h1 style={{
                    fontFamily: "Raleway",
                    fontSize: "25px",
                    fontWeight: "700",
                    lineHeight: "34px",
                    letterSpacing: "0em",
                }}>Other Exciting Deep Duck Features</h1>
                <div 
                className={styles.gifSection5main}
                >
                    <div style={divStyles}>
                        <img src={imageSwap} alt="" height="100" width="110" />
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
                            cursor: "pointer"
                        }}
                        onClick={()=> navigate("/imageswap")}
                        >{`>>TRY NOW`}</p>
                    </div>
                    <div style={divStyles}>
                        <img src={gifSwao} height="100" width="110" alt="" />
                        <h2 style={{padding:"0px", margin:"0px",fontFamily: "Raleway",}}>Swap Face on <span style={gradientText}>Video</span></h2>
                        <p style={{padding:"0px", margin:"0px",fontFamily: "Raleway",fontSize: "14px",}}>Have a favorite Video ? Apply a face and go to converting!</p>
                        <p style={{
                            fontFamily: "Raleway",
                            fontSize: "20px",
                            fontWeight: "700",
                            lineHeight: "30px",
                            letterSpacing: "0em",
                            textAlign: "center",
                            color: "#FFD600",
                            cursor: "pointer"
                        }}
                        onClick={()=> navigate("/videoswap")}
                        >{`>>TRY NOW`}</p>
                    </div>
                </div>
                <div
                    className={styles.gifTryNow}
                >
                    <h2>Try It <span style={gradientText}>NOW!!!</span></h2>
                    <div>
                        <img src={arrow} alt="Arrow" className={styles.gifArrow} />

                        <button style={{
                            background: "#FFD600",
                            color: "white",
                            padding: "10px 30px",
                            borderRadius: "15px",
                            border: "none",
                            outline: "none",
                            fontSize: "25px",
                            margin: "0px 10px",
                            cursor: "pointer"
                        }}
                        onClick={()=> navigate("/")}
                        >Swap It</button>
                    </div>
                </div>

           <Footer color="black"/>
            </div>
        </>
    )
}

export default Section4




