import React from 'react'
import arrow from "../../assets/images/tryArrow.png"

const Section7 = () => {

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
    <div>
         <div style={{
                    margin:"50px 70px 60px 70px",
                    padding: "3% 6%",
                    background:"#1F1F1F",
                    borderRadius: "800px",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    height: "157px",
                    fontFamily:"Raleway"
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
    </div>
  )
}

export default Section7