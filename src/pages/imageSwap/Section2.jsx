import React from 'react'
import image1 from "../../assets/images/imageSwap.png"
import arrow from "../../assets/images/arrowBtn.png"
import stick from "../../assets/images/stick.png"
import { useNavigate } from 'react-router-dom'

const Section2 = () => {

    const navigate = useNavigate()

    const divStyles = {
        margin: "10px",
        padding: "20px 20px 10px 20px",
        width: "100%",
        display: "flex"
    };

  return (
    <>
     {/* <div style={{
                background: "#EFEFEF",
                padding: "10px 60px",
                display: "flex" ,
                height: "460px"
            }}>
                <div style={divStyles}>
                    <img src={image1} alt="Image" height="385px" width="435px"/>
                </div>
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
                        >Use a clear, high quality image for both your hero image and the face you want to apply. Once you have done so, you will see some smashing results! This image here is an example of when a person rushes the process. Be patient!</p>
                        <div style={{
                            display: "flex",
                            alignItems: "center", 
                            gap: "10px", 
                            // margin: "10px 0px", 
                        }}>
                            <button
                                style={{
                                    width: "200px",
                                    background: "#FFD600",
                                    padding: "15px 25px",
                                    border: "none",
                                    outline: "none",
                                    borderRadius: "12px",
                                    color: "white",
                                    fontSize: "16px",
                                    fontWeight: "700"
                                }}

                                onClick={ ()=> navigate("/uploadimage")}
                            >Try Image Swap</button>
                            <img src={arrow} height="17px" width="60px" />
                        </div>
                    </div>
                </div>
            </div> */}
            <Section2/>
    </>
  )

}

export default Section2
